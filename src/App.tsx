import { useState } from "react";
import { useUsers } from "./hooks/useUsers";
import UserTable from "./components/UserTable";
import UserModal from "./components/UserModal";
import UserDetails from "./components/UserDetails";
import { User } from "./types";
import styles from "./App.module.css";

function App() {
  const { users, loading, error, deleteUser } = useUsers();
  const [selected, setSelected] = useState<User | null>(null);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Users</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && (
        <UserTable
          users={users}
          onSelect={(u) => setSelected(u)}
          onDelete={deleteUser}
        />
      )}

      {selected && (
        <UserModal onClose={() => setSelected(null)}>
          <UserDetails user={selected} />
        </UserModal>
      )}
    </main>
  );
}

export default App; 