import { Space_Grotesk } from "next/font/google";
import Link from "next/link";
import styles from "./home.module.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={styles.main}>
      <h1 className={`${styles.title} ${spaceGrotesk.className}`}>To-Do App</h1>
      <p className={styles.subtitle}>Ship It With React and Next.js Demo</p>
      <Link className={styles["app-button"]} href="/todo">Enter App</Link>
    </main>
  )
}
