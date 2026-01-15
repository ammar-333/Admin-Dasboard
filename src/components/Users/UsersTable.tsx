import React, { useEffect, useState } from "react";

import type { Users } from "./column";
import { columns } from "./column";
import { DataTable } from "./data-table";

// function getData(): Users[] {
//   // Fetch data from your API here.
//   let apiData: string[] = [];

//   const fetchUsers = async () => {
//     try {
//       const res = await fetch("https://localhost:7086/api/Users");
//       if (!res.ok) throw new Error("Failed to fetch");

//       const data = await res.json();
//       apiData = data;
//       console.log(data);
//     } catch (err: any) {
//       console.log(err);
//     }
//   };

//   fetchUsers();

//   return [
//     {
//       id: "728ed52f",
//       name: apiData[0],
//       status: "pending",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       name: apiData[1],
//       status: "processing",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       name: apiData[2],
//       status: "success",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       name: apiData[3],
//       status: "failed",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       name: apiData[4],
//       status: "failed",
//       email: "m@example.com",
//     },
//     {
//       id: "728ed52f",
//       name: apiData[5],
//       status: "failed",
//       email: "m@example.com",
//     },
//   ];
// }

export default function UsersTable() {
  // const [data, setData] = useState<Users[]>([]);
  const [data, setData] = useState<Users[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://localhost:7086/api/Users");
        if (!res.ok) throw new Error("Failed to fetch");

        const data = await res.json();
        setData(data);
      } catch (err: any) {
        console.log(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
