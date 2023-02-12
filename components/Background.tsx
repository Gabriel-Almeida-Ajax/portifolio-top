import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Background() {
  return (
    <Image
      className={styles.imageW872}
      style={{
        position: "absolute",
        zIndex: -1,
        top: 0,
        right: 0,
        width: "60%",
        height: "80%",
      }}
      width={1130}
      height={827}
      priority
      alt="Rocket"
      src="/assets/Vector 1.png"
    />
  );
}
