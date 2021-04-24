import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Página de prueba con React</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hola mundo</h1>
    </div>
  );
}
