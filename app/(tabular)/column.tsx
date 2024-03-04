"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Project } from "../(tabular)/data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { DataTableRowActions } from "./data-table-row-actions";

export const columns: ColumnDef<Project>[] = [
  {
    accessorKey: "ministry",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Ministry" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("ministry")}</div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "department",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Department" />
    ),
    cell: ({ row }) => (
      <div className="w-[100px]">{row.getValue("department")}</div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Price (Baht)" />
    ),
    cell: ({ row }) => {
      const numValue = parseFloat(row.getValue("price"));
      const formattedValue = new String(numValue.toLocaleString());

      return <div className="w-[140px]">{formattedValue}</div>;
    },
    enableSorting: true,
  },
  {
    accessorKey: "project",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Project" />
    ),
    cell: ({ row }) => {
      return <div className="w-[160px]">{row.getValue("project")}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "scope",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Scope" />
    ),
    cell: ({ row }) => {
      return <div className="w-[200px]">{row.getValue("scope")}</div>;
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <div className="w-[20px]">
        <DataTableRowActions row={row} />
      </div>
    ),
  },
];

export type { Project };
