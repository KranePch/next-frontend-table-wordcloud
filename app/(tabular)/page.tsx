"use client";

import axios from "axios";

import { Project, columns } from "./column";
import { DataTable } from "./data-table";
import { mockData } from "@/lib/utils";

import { Heading } from "@/components/heading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { LayoutDashboard } from "lucide-react";

import { ResetIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

import { useEffect, useState } from "react";

async function getProjects(): Promise<Project[]> {
  try {
    const response = await axios.get("http://localhost:8000/get_all_data");
    return response.data; // Directly return the fetched data
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return mockData; // Return an empty array on error
  }
}

async function getSearchProject(query_text: string): Promise<Project[]> {
  try {
    const response = await axios.post("http://localhost:8000/semantic_search", {
      query: query_text,
    });
    return response.data; // Directly return the fetched data
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return []; // Return an empty array on error
  }
}

const TabularPage = () => {
  const [data, setData] = useState<Project[]>([]);
  const [searchTerm, setSearchTerm] = useState(""); // State to hold input value

  useEffect(() => {
    getProjects().then(setData).catch(console.error);
  }, []);

  const handleReset = () => {
    getProjects().then(setData).catch(console.error);
  };

  const handleSearch = (query_text: string) => {
    getSearchProject(query_text).then(setData).catch(console.error);
  };

  return (
    <div>
      <div className="flex flex-row justify-between items-center">
        <Heading
          title="Tabular Data"
          description="Search me!"
          icon={LayoutDashboard}
          iconColor="text-sky-500"
          bgColor="text-sky-500/10"
        />
        <div className="flex flex-row gap-4">
          <Input
            placeholder="Search Keyword..."
            className="h-8 w-[100px] lg:w-[200px]"
            value={searchTerm} // Controlled input
            onChange={(e) => setSearchTerm(e.target.value)} // Update state on change
          />
          <Button
            variant="outline"
            onClick={() => handleSearch(searchTerm)}
            className="h-8 px-2 lg:px-3"
          >
            Search
            <MagnifyingGlassIcon className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => handleReset()}
            className="h-8 px-2 lg:px-3 mr-8"
          >
            Reset
            <ResetIcon className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="container">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default TabularPage;
