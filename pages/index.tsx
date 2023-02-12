import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { Background } from "@/components/Background";
import { Logo } from "@/components/Logo";
import { Descripton } from "@/components/Description";
import { Board, Card, Goal, Services } from "@/components/Card";
import { useCallback, useState } from "react";

export default function Home() {
  const [footerHover, setFooter] = useState(true);
  const handlerFooter = useCallback(
    (bool: boolean) => () => footerHover != bool && setFooter(bool),
    [footerHover]
  );

  return (
    <>
      <Head>
        <title>Gabriel Santos Lima</title>
        <meta name="description" content="Portifólio Gabriel Santos Lima" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <section style={{ minHeight: "80vh" }}>
          <Background />
          <Logo logoName="Gabriel Lima" />
          <Descripton />
        </section>
        <section style={{ minHeight: "100vh" }}>
          <h3
            style={{
              fontSize: "2em",
              margin: "1em 0",
              fontFamily: "Josefin Sans",
            }}
          >
            Objetivos Alcançados
          </h3>
          <div
            className={styles.columnOn872}
            style={{
              display: "flex",
              minHeight: "800px",
              justifyContent: "space-around",
            }}
          >
            <div
              className={styles.centerOn872}
              style={{
                width: "100%",
                minHeight: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Card>
                <Goal />
              </Card>
            </div>
            <div
              className={styles.rowOn1400}
              style={{
                width: "100%",
                minHeight: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Card>
                <Board />
              </Card>
              <Card>
                <Services />
              </Card>
            </div>
          </div>
        </section>
        <footer
          onMouseEnter={handlerFooter(true)}
          onMouseLeave={handlerFooter(false)}
          onClick={handlerFooter(!footerHover)}
          style={{
            position: "fixed",
            bottom: footerHover ? "0" : "-60px",
            right: "10px",
            transition: "all .5s",
            borderRadius: "14px 14px 0 0",
            background: "#333",
            width: footerHover ? "280px" : "100px",
            height: "80px",
            color: "white",
            display: "flex",
            justifyContent: 'flex-end',
            alignItems: "flex-start",
            padding: "0 25px 10px",
            fontFamily: "Josefin Sans",
            flexDirection: "column",
            
          }}
        >
          <span
            style={{
              top: "10px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "8px",
              position: "absolute",
              background: "white",
              width: "80px",
              height: "5px",
            }}
          />

          <p
            style={{
              opacity: footerHover ? 1 : 0,
              transition: footerHover ? "all .5s" : "none",
              transitionDelay: footerHover ? ".5s" : "0s",
            }}
          >
            © 2023 Gabriel Santos Lima
          </p>
          <a
            style={{
              opacity: footerHover ? 1 : 0,
              transition: footerHover ? "all .5s" : "none",
              transitionDelay: footerHover ? ".5s" : "0s",
              borderBottom: '2px solid white'
            }}
            href="https://wa.me/+5511937678919"
            target="_blank"
            rel="noreferrer"
          >
            Link para Whatsapp
          </a>
        </footer>
      </main>
    </>
  );
}
