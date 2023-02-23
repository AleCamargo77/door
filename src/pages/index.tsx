import styles from "../styles/form.module.css";
import Card from "../../components/Card";
import Link from "next/link";
import NumberInput from "components/NumberInput";
import { useState } from "react";

export default function Form() {
  const [qtdDoors, setQtdDoors] = useState(3);
  const [withGift, setWithGift] = useState(2);

  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h2>Monty Hall</h2>{" "}
        </Card>

        <Card>
          <NumberInput
            text="Quantidade portas?"
            value={qtdDoors}
            onChange={(newDoorWithGift) => setQtdDoors(newDoorWithGift)}
          />
        </Card>
      </div>

      <div>
        <Card>
          <NumberInput
            text="Porta com Presente?"
            value={withGift}
            onChange={(newQtd) => setWithGift(newQtd)}
          />
        </Card>
        <Card bgcolor="#28a085">
          <Link href={`/game/${qtdDoors}/${withGift}`} className={styles.link}>
            <h3>Iniciar</h3>
          </Link>
        </Card>
      </div>
    </div>
  );
}
