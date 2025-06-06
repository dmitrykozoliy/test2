import { useEffect, useState } from "react";
import { User } from "../types";

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        setLoading(true);
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data: User[] = await res.json();
        setUsers(data);
      } catch (e) {
        setError((e as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  const deleteUser = (id: number) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  };

  return { users, loading, error, deleteUser };
} 