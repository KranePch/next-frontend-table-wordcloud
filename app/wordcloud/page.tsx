"use client";

import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { Project } from "./data/schema";

import ProjectCloud from "@/components/projectcloud";
import { Heading } from "@/components/heading";

import { TextQuoteIcon } from "lucide-react";
import { mockData } from "@/lib/utils";

async function getProjects(): Promise<Project[]> {
  try {
    const response = await axios.get("http://localhost:8000/get_all_data");
    return response.data; // Directly return the fetched data
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return mockData; // Return an empty array on error
  }
}

const WordCloudPage = () => {
  const [data, setData] = useState<Project[]>([]);
  //   const [searchTerm, setSearchTerm] = useState(""); // State to hold input value

  useEffect(() => {
    getProjects().then(setData).catch(console.error);
  }, []);

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <Heading
          title="Word Cloud Visualization"
          description="Text Frequency Shows Up"
          icon={TextQuoteIcon}
          iconColor="text-green-500"
          bgColor="text-green-500/10"
        />
      </div>
      <div className="container">
        <ProjectCloud data={data} />
      </div>
    </div>
  );
};

export default WordCloudPage;
