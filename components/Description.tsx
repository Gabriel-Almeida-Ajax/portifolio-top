import Image from "next/image";
import styles from "@/styles/Home.module.css";

export function Descripton() {
  return (
    <div style={{ position: "relative" }}>
      <div
        className={styles.w100on872}
        style={{
          width: "40%",
          textAlign: "left",
          fontFamily: "Josefin Sans",
        }}
      >
        <h3
          style={{
            fontSize: "2em",
            margin: "1em 0",
          }}
        >
          Desenvolvedor Pleno
        </h3>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          Olá! Sou um desenvolvedor pleno com habilidades na stack React, React
          Native, Angular, Node, Java e Asp.Net. Sou capaz de criar aplicativos
          web e móveis para várias plataformas e linguagens de programação.
        </p>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          No React e React Native, posso criar interfaces de usuário responsivas
          e intuitivas para aplicativos web e móveis. Com o Angular, posso criar
          aplicativos escaláveis e dinâmicos.
        </p>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          Para o desenvolvimento do back-end, utilizo o Node.js para gerenciar
          bancos de dados, servidores e APIs. Além disso, com o Java e Asp.Net,
          posso criar aplicativos corporativos robustos e escaláveis.
        </p>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          Estou sempre em busca de novos desafios e oportunidades de aprendizado
          para me manter atualizado e oferecer as melhores soluções aos meus
          clientes e parceiros.
        </p>
      </div>
      <div
        style={{
          width: "45%",
          height: "60vh",
          position: "absolute",
          right: "10%",
          top: 0,
        }}
      >
        <Image
          className={styles.hiddenW872}
          style={{
            width: "100%",
            height: "100%",
          }}
          width={542}
          height={581}
          priority
          alt="Rocket"
          src="/assets/Saly-1.png"
        />
      </div>
    </div>
  );
}
