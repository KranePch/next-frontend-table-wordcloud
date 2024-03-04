"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import ReactWordCloud from "react-wordcloud";

import { mockWordFreq } from "@/lib/utils";

import { Button } from "./ui/button";

interface WordCloud {
  text: string;
  value: number;
}

async function getFrequencyData(payload: any): Promise<any[]> {
  try {
    const response = await axios.post("http://localhost:8000/countword", {
      datavalue: payload,
    });
    return response.data; // Directly return the fetched data
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return mockWordFreq; // Return an empty array on error
  }
}

const ProjectCloud = ({ data }: any) => {
  // Component States
  // State to track selected ministries
  const [selectedMinistries, setSelectedMinistries] = useState<string[]>([]);
  const [wordData, setWordData] = useState<any[]>(data);
  const [wordFreq, setWordFreq] = useState<WordCloud[]>([]);

  useEffect(() => {
    if (data && data.length > 0) {
      // Check if data is not empty
      setWordData(data);
      getFrequencyData(data).then(setWordFreq).catch(console.error);
    }
  }, [data]); // Depend on `data` to re-run the effect when `data` changes

  // Use a type assertion for the Set to specify it contains strings
  const ministries = [
    ...new Set(data.map((item: any) => item.ministry)),
  ] as string[];

  // Handle checkbox change
  const handleCheckboxChange = async (ministry: string) => {
    // Update the selected ministries state
    setSelectedMinistries((prev) =>
      prev.includes(ministry)
        ? prev.filter((m) => m !== ministry)
        : [...prev, ministry]
    );

    // Set up a temporary state to determine the next set of selected ministries
    const nextSelectedMinistries = selectedMinistries.includes(ministry)
      ? selectedMinistries.filter((m) => m !== ministry)
      : [...selectedMinistries, ministry];

    // Filter the data based on the next set of selected ministries
    const filteredData = wordData.filter((word: any) =>
      nextSelectedMinistries.includes(word.ministry)
    );

    if (filteredData.length === 0) {
      var frequencyData = await getFrequencyData(wordData);
    } else {
      // Recalculate the word frequency with the filtered data
      var frequencyData = await getFrequencyData(filteredData);
    }

    setWordFreq(frequencyData);
  };

  // Function to determine font size based on word frequency
  function getFontSize(
    value: number,
    minValue: number,
    maxValue: number
  ): number {
    // Define the range of font sizes
    const minFontSize = 16;
    const maxFontSize = 52;

    // Normalize the value between 0 and 1
    const normalizedValue = (value - minValue) / (maxValue - minValue);

    // Get font size proportional to the word's frequency
    return Math.round(
      minFontSize + normalizedValue * (maxFontSize - minFontSize)
    );
  }

  // Calculate min and max values for frequency
  const minValue = Math.min(...wordFreq.map((item) => item.value));
  const maxValue = Math.max(...wordFreq.map((item) => item.value));

  // Assign a font size to each word based on its frequency
  const wordsWithFontSizes = wordFreq.map((word) => ({
    ...word,
    size: getFontSize(word.value, minValue, maxValue),
  }));

  return (
    <div>
      <div className="flex flex-wrap m-2">
        {ministries.map((ministry) => (
          <div key={ministry} className="m-2">
            <Button
              variant={
                selectedMinistries.includes(ministry) ? "default" : "secondary"
              }
              size="sm" // Choose 'sm', 'default', 'lg', or 'icon'
              onClick={() => handleCheckboxChange(ministry)}
            >
              {ministry}
            </Button>
          </div>
        ))}
      </div>
      <hr />
      <div className="border-solid border-slate-400">
        {wordFreq.length > 0 && (
          <ReactWordCloud
            words={wordsWithFontSizes}
            size={[1024, 400]}
            options={{
              colors: ["#1f77b4", "#ff7f0e", "#2ca02c"],
              fontSizes: [12, 52],
              rotations: 0
              // rotationAngles: [0, 0],
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectCloud;
