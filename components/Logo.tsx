import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Logo({ logoName }: { logoName: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        width: "100%",
        height: "150px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          fontFamily: "Josefin Sans",
          fontSize: "3em",
        }}
      >
        <p>{logoName}</p>
        <Image
          width={42}
          height={42}
          priority
          alt="Rocket"
          src="/assets/Group 2.svg"
        />
      </div>
      {/* <div
        className={styles.hiddenW872}
        style={{
          width: "50%",
          fontFamily: "Josefin Sans",
          fontSize: "3em",
          color: "white",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <a href="#home">Home</a>
        <a href="#contact">Contact</a>
      </div> */}
    </div>
  );
}
