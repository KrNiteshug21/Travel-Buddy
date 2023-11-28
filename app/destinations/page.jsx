"use server";
import { fetchDestination } from "@/lib/destinationData";
import styles from "./page.module.css";

export default async function page() {
  const destinations = await fetchDestination();

  return (
    <main className={styles.destinationPage}>
      <section>
        {destinations.map((dest) => {
          return <li key={dest._id}>{JSON.stringify(dest)}</li>;
        })}
      </section>
    </main>
  );
}
