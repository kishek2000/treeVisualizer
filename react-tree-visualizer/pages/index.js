import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Node } from "../components/Node";
import { Body } from "../components/Body";

export default function Home() {
  const [nodeCoordinates, setNodeCoordinates] = useState();
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
      <Body
        nodeCoordinates={nodeCoordinates}
        setNodeCoordinates={setNodeCoordinates}
      />
      {nodeCoordinates &&
        nodeCoordinates.map((node, keyValue) => (
          <Node nodeCoordinates={node} keyValue={keyValue} />
        ))}
    </div>
  );
}
