import styles from "./Salam.module.css";

export function SalamPagi() {
  return (
    <section className={styles.kotak}>
      <h1 className={styles.judul}>Halo, Pagi!</h1>
      <p>Pagi bang.</p>
    </section>
  );
}