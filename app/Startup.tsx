"use client";

import { useState } from "react";
import styles from "./input.module.css";
import Typewriter from "typewriter-effect";
export default function Home() {

  const [playerName, setPlayerName] = useState("");

  const handleSubmit = () => {
    if (playerName.trim() === "") {
      alert("Please enter your name.");
      return;
    }

    console.log("Name submitted.", playerName);
    setPlayerName("");
  }

  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center bg-gray-800 font-sans dark:bg-black">
      <div>
        <h1 className="text-3xl pd-4 font-bold text-white dark:text-zinc-50 min-w-[350px]">
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString('What is your name?')
              typewriter.start();
              

          }}
          options={{
            autoStart: true,
            cursor: "_",
            delay: 50,
          }}
        />
      </h1>
      <div className="flex flex-row">
        <div className="flex ">
          <input className={styles.input} type="text" placeholder="your name" value={playerName} onChange={(e)=> setPlayerName(e.target.value )}/>
        </div>
        <div className={styles.button} onClick={handleSubmit}>
          Submit
        </div>
      </div>
      
    </div>
    </div>
  );
}
