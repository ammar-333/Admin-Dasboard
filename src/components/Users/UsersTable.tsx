// import { useEffect, useState } from "react";

import type { Users } from "./column";
import { columns } from "./column";
import { DataTable } from "./data-table";

const data: Users[] = [
  { id: "1", name: "John Doe", email: "john@example.com" },
  { id: "2", name: "Jane Smith", email: "jane@example.com" },
  { id: "3", name: "Bob Johnson", email: "bob@example.com" },
  { id: "4", name: "Alice Brown", email: "alice@example.com" },
  { id: "5", name: "ammar shaban", email: "ammar@example.com" },
  { id: "6", name: "maen haddad", email: "maen@example.com" },
  { id: "7", name: "ahmed Brown", email: "ahmed@example.com" },
  { id: "8", name: "khalid tamemy", email: "khalid@example.com" },
];

export default function UsersTable() {
  // const [data, setData] = useState<Users[]>([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();
  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await fetch("https://localhost:7086/api/Users");
  //       if (!res.ok) throw new Error("Failed to fetch");

  //       const data = await res.json();
  //       setData(data);
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     } catch (err: any) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchUsers();
  // }, []);
  // if (loading) return <div>Loading...</div>;
  // if (error) console.log(error);

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  );
}
