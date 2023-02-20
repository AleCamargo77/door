import Door from "../../components/Door";
// import Gift from "../../components/Gift";
import DoorModel from "../../model/DoorModel";
import { useState } from "react";
import { createDoors, updateDoors } from "functions/doors";

export default function Home() {
  const [doors, setDoors] = useState(createDoors(3, 2));

  function renderDoors() {
    return doors.map((door) => {
      return (
        <Door
          key={door.num}
          value={door}
          onChange={(newPort) => setDoors(updateDoors(doors, newPort))}
        />
      );
    });
  }

  return <div style={{ display: "flex" }}>{renderDoors()}</div>;
}
