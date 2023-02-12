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
          Olá! Como desenvolvedor pleno, possuo habilidades abrangentes para criar aplicativos web e móveis em várias plataformas e linguagens de programação. Especificamente, tenho experiência em React, React Native, Angular, Node.js, Java e Asp.Net.
        </p>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          No que diz respeito a Frontend, o Angular, React e o React Native são ferramentas poderosas que me permitem criar interfaces de usuário responsivas e intuitivas sendo ferramentas úteis para criar aplicativos escaláveis e dinâmicos.
        </p>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          Para o desenvolvimento do back-end, utilizo o Node.js para gerenciar servidores, criar APIs e controlar o acesso ao banco de dados. Falando em bancos de dados, trabalhei com Prisma, Pool, JDBC, JPA e Dapper, que são gerenciadores de banco de dados utilizados para simplificar o acesso e a manipulação de dados em aplicativos.
        </p>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          Com o Java e o Asp.Net, posso criar aplicativos corporativos robustos e escaláveis, bem como aplicativos web completos e sofisticados.
        </p>
        <p
          style={{
            margin: "1em 0",
          }}
        >
          Busco constantemente me atualizar com as novas tecnologias e tendências do mercado, a fim de fornecer as melhores soluções para meus clientes e parceiros. Dessa forma, sou capaz de colaborar com equipes de desenvolvimento e entregar projetos de alta qualidade em prazos adequados.
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
