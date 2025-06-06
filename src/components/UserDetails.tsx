import { User } from "../types";
import styles from "./UserDetails.module.css";

interface Props {
  user: User;
}

export default function UserDetails({ user }: Props) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h2 className={styles.name}>{user.name}</h2>
        <a href={`mailto:${user.email}`} className={styles.email}>
          {user.email}
        </a>
      </header>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Address</h3>
        <p>{`${user.address.street}, ${user.address.suite}`}</p>
        <p>{`${user.address.city}, ${user.address.zipcode}`}</p>
        <p>
          <span role="img" aria-label="pin">
            📍
          </span>{" "}
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${user.address.geo.lat},${user.address.geo.lng}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View on map
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Contact</h3>
        <p>
          <strong>Phone:</strong> {user.phone}
        </p>
        <p>
          <strong>Website:</strong>{" "}
          <a href={`https://${user.website}`} target="_blank" rel="noreferrer">
            {user.website}
          </a>
        </p>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Company</h3>
        <p>
          <strong>Name:</strong> {user.company.name}
        </p>
        <p>
          <strong>Catchphrase:</strong> {user.company.catchPhrase}
        </p>
        <p>
          <strong>Business:</strong> {user.company.bs}
        </p>
      </section>
    </article>
  );
} 