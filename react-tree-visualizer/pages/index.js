import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";

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

function Body({ nodeCoordinates, setNodeCoordinates }) {
  return (
    <div
      style={{
        minHeight: "72.5vh",
        position: "relative",
        width: "100%",
      }}
      onClick={(e) => {
        if (nodeCoordinates && nodeCoordinates.length > 0) {
          let minDistance = Infinity;
          let minKey = 0;
          nodeCoordinates.map((coordinates, index) => {
            const distance = Math.sqrt(
              (coordinates.x - e.clientX) * (coordinates.x - e.clientX) +
                (coordinates.y - e.clientY) * (coordinates.y - e.clientY)
            );
            if (distance < minDistance) {
              minDistance = distance;
              minKey = index;
            }
          });
          const pX = nodeCoordinates[minKey].x;
          const pY = nodeCoordinates[minKey].y;
          const pDeg =
            Math.atan((pY - e.clientY) / (pX - e.clientX)) * (180 / Math.PI);
          setNodeCoordinates(
            nodeCoordinates.concat({
              x: e.clientX,
              y: e.clientY,
              p: { key: minKey, x: pX, y: pY },
              pDeg: pDeg,
              pDist: minDistance,
            })
          );
        } else {
          setNodeCoordinates([
            { x: e.clientX, y: e.clientY, p: null, pDeg: null, pDist: null },
          ]);
        }
      }}
    ></div>
  );
}

function Node({ nodeCoordinates, keyValue }) {
  if (nodeCoordinates.x) {
    return (
      <>
        <div
          style={{
            position: "absolute",
            left: nodeCoordinates.x - 18,
            top: nodeCoordinates.y - 18,
            height: 48,
            width: 48,
            borderRadius: "50%",
            backgroundColor: "blue",
            boxShadow: "0px 0px 5px grey",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={keyValue}
        >
          {keyValue}:{nodeCoordinates.p ? nodeCoordinates.p.key : null}
        </div>
        {nodeCoordinates.pDeg && (
          <Line
            rotation={nodeCoordinates.pDeg}
            distance={nodeCoordinates.pDist}
            coordinates={{ x: nodeCoordinates.p.x, y: nodeCoordinates.p.y }}
            x={nodeCoordinates.x}
            y={nodeCoordinates.y}
          />
        )}
      </>
    );
  }
  return <div />;
}

function Line({ rotation, distance, coordinates, x, y }) {
  console.log("received coords ", coordinates, { x, y });
  console.log("received rotation ", rotation);
  if (rotation < 0 && coordinates.x > x && coordinates.y < y) {
    rotation += 180;
  } else if (coordinates.x > x && coordinates.y > y) {
    rotation -= 180;
  }
  console.log("rendering rotation of ", rotation);
  return (
    <div
      style={{
        height: 3,
        width: distance,
        backgroundColor: "black",
        transform: `rotate(${rotation}deg)`,
        position: "absolute",
        top: coordinates.y,
        left: coordinates.x,
        transformOrigin: rotation < 180 ? "top left" : "top right",
      }}
    />
  );
}
