import { User } from "../types";
import styles from "./UserTable.module.css";

interface Props {
  users: User[];
  onSelect: (user: User) => void;
  onDelete: (id: number) => void;
}

export default function UserTable({ users, onSelect, onDelete }: Props) {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.headerRow}>
        <span>Name / Email</span>
        <span>Address</span>
        <span>Phone</span>
        <span>Website</span>
        <span>Company</span>
        <span className={styles.actionHeader}>Action</span>
      </div>
      {users.map((user) => (
        <div key={user.id} className={styles.dataRow}>
          <div className={styles.cell} onClick={() => onSelect(user)}>
            <div className={styles.primary}>{user.name}</div>
            <div className={styles.secondary}>{user.email}</div>
          </div>
          <div className={styles.cell} onClick={() => onSelect(user)}>
            {`${user.address.city}, ${user.address.street}`}
          </div>
          <div className={styles.cell} onClick={() => onSelect(user)}>
            {user.phone}
          </div>
          <div className={styles.cell} onClick={() => onSelect(user)}>
            <a href={`https://${user.website}`} onClick={(e)=>e.stopPropagation()} target="_blank" rel="noopener noreferrer">
              {user.website}
            </a>
          </div>
          <div className={styles.cell} onClick={() => onSelect(user)}>
            {user.company.name}
          </div>
          <button
            className={styles.delete}
            onClick={(e) => {
              e.stopPropagation();
              onDelete(user.id);
            }}
            aria-label="Delete"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
} 