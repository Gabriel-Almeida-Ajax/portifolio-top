import { PropsWithChildren } from "react";
import Image from "next/image";
import styles from "@/styles/Home.module.css";

export const Board = () => (
  <Image
    width={300}
    height={300}
    priority
    alt="Rocket"
    src="/assets/Saly-12.png"
  />
);
export const Goal = () => (
  <Image
    className={styles.image}
    width={300}
    height={400}
    priority
    alt="Rocket"
    src="/assets/Saly-15.png"
  />
);
export const Services = () => (
  <Image
    width={300}
    height={300}
    priority
    alt="Rocket"
    src="/assets/Saly-19.png"
  />
);

type Props = {
  title: string;
  description: string;
}

export function Card({ children, title, description }: PropsWithChildren<Props>) {
  return (
    <div
      className={styles.margin}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "1em",
        background: "var(--background-end-rgb)",
        borderRadius: "12px",
        width: "100%",
        minWidth: "243px",
        minHeight: "600px",
        position: "relative",
      }}
    >
      {children}
      <div
        style={{
          zIndex: '-1',
          position: "absolute",
          width: "100%",
          top: "20%",
          borderRadius: '12px',
          height: "80%",
          background: '#e6e6e6',
          boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h3>{title}</h3>
        {description}
      </div>
    </div>
  );
}
