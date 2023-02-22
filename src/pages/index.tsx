import styles from "../styles/form.module.css";
import Card from "../../components/Card";
import Link from "next/link";

export default function Form() {
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h2>Monty Hall</h2>{" "}
        </Card>

        <Card></Card>
      </div>

      <div>
        <Card></Card>

        <Card bgcolor="#28a085">
          <Link href={`/game/4/2`} className={styles.link}>
            <h3>Iniciar</h3>
          </Link>
        </Card>
      </div>
    </div>
  );
}
