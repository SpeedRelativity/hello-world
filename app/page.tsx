import styles from "./input.module.css";
export default function Home() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-white dark:text-zinc-50">
        Hello,
        <input
          className={styles.input}
          type="text"
          placeholder="your name"
        ></input>
        ?
      </h1>
    </div>
  );
}
