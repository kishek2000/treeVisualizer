import { Line } from "./Line";

export function Node({ nodeCoordinates, keyValue }) {
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
