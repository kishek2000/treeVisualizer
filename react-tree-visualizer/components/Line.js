export function Line({ rotation, distance, coordinates, x, y }) {
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
