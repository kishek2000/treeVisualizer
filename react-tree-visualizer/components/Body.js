export function Body({ nodeCoordinates, setNodeCoordinates }) {
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
