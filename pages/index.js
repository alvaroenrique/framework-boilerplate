import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Performance framework template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Performance framework template</h1>
    </div>
  );
}
