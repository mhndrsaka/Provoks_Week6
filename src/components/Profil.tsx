import styles from "./Profil.module.css";

type ProfilProps = {
  nama: string;
  peran: string;
  hobi: string[];
};

export function Profil({ nama, peran, hobi }: ProfilProps) {
  return (
    <article className={styles.kartu}>
      <h2 className={styles.nama}>{nama}</h2>
      <p className={styles.peran}>{peran}</p>
      <ul>
        {hobi.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}

const aktif = true;


export function Tombol() {
  return (
    <button
      className={aktif ? "tombol aktif" : "tombol"}
      disabled={!aktif}
      style={{ padding: 12, borderRadius: 8 }}
    >
      {aktif ? "Aktif" : "Nonaktif"}
    </button>
  );
}

export function Ringkasan() {
  return (
    <>
      <h2>Ringkasan</h2>
      <p>Belajar React itu menyenangkan.</p>
    </>
  );
}

type Buku = { id: number; judul: string };

const daftarBuku: Buku[] = [
  { id: 1, judul: "Belajar React" },
  { id: 2, judul: "TypeScript Dasar" },
];

export function DaftarBuku() {
  return (
    <ul>
      {daftarBuku.map((buku) => (
        <li key={buku.id}>{buku.judul}</li>
      ))}
    </ul>
  );
}
