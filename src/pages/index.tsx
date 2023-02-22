import styles from "../styles/form.module.css";
import Card from "../../components/Card";
import Link from "next/link";

export default function Form() {
  return (
    <div className={styles.form}>
      <div>
        <Card bgcolor="#c0392c">
          <h1>Monty Hall</h1>{" "}
        </Card>

        <Card></Card>
      </div>

      <div>
        <Card></Card>

        <Card bgcolor="#28a085">
          <Link href={`/game/4/2`}>
            <h2
              style={{
                color: "#fff",
                padding: "80px",
                textDecoration: "none",
              }}
            ></h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
