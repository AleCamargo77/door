import Door from "../../components/Door";
// import Gift from "../../components/Gift";
import DoorModel from "../../model/DoorModel";
import { useState } from "react";

export default function Home() {
  const [d1, setD1] = useState(new DoorModel(1, false, false));

  return (
    <div style={{ display: "flex" }}>
      <Door door={d1} />
    </div>
  );
}
