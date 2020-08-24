import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BT Visualizer</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Binary Tree Visualizer</h1>
        <p className={styles.description}>
          Simply click on screen to add a node!
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/kishek2000/treeVisualizer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Access the Repo
        </a>
      </footer>
    </div>
  );
}
