import { useState } from "react";

import type { Users } from "./column";
import { columns } from "./column";
import { DataTable } from "./data-table";

export default function UsersTable() {
  const [data, setData] = useState<Users[]>([]);

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
