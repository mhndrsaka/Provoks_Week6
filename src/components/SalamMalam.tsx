import styles from "./Salam.module.css";

export function SalamMalam() {
  return (
    <section className={styles.kotak}>
      <h1 className={styles.judul}>Halo, Selamat Malam!</h1>
      <p>Malam bang.</p>
    </section>
  );
}