import { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/header.module.css";
import Image from "next/image";
import { HamburgerMenu } from "../Components/HamburgerMenu";
import { useRouter } from "next/router";

export const Header = ({ hide }) => {
  const [show, setShow] = useState(false);
  const [openLan, setOpenLang] = useState(false);
  const { locale, asPath, defaultLocale } = useRouter();

  const handleClick = () => {
    setShow(!show);
  };

  const localFlag = {
    "en-US": {
      url: "/assets/icons/en.jpg",
    },
    "es-ES": {
      url: "/assets/icons/es.jpg",
    },
  };

  const { url } = localFlag[locale];

  const handleOpenLan = () => {
    setOpenLang(!openLan);
  };

  return (
    <>
      <header className={styles.header}>
        <div>
          <Link href="/">
            <a>
              <img src="./assets/brandlogo/logo.webp" alt="" />
            </a>
          </Link>
          <div className={styles.nav_container}>
            {!hide ? (
              <>
                <nav>
                  <Link href="/#soluciones">
                    <a>Soluciones</a>
                  </Link>
                  <Link href="/servicios">
                    <a>Servicios</a>
                  </Link>
                  <Link href="/contacto">
                    <a>Contácto</a>
                  </Link>
                  <Link href="/evaluacion360">
                    <button>Evaluación de madurez</button>
                  </Link>
                </nav>
                <Image
                  className={styles.menu_icon}
                  onClick={handleClick}
                  src="/assets/icons/menu.svg"
                  width={40}
                  height={40}
                />
              </>
            ) : null}
            <div
              className={`${styles.language_dropdown} ${
                openLan ? styles.on_click : styles.on_close
              }`}
              onClick={handleOpenLan}
            >
              <img src={url} alt={locale} />
              <img
                className={styles.arrow}
                src="/assets/icons/arrow1_primary.svg"
                alt="Arrow"
              />
              <div
                className={`${styles.container_dropdown} ${
                  openLan ? styles.flex : styles.none
                }`}
              >
                {locale === "en-US" ? (
                  <Link
                    activeClassName={locale === "es-ES"}
                    href={asPath}
                    locale="es-ES"
                  >
                    <div className={styles.lan_link}>
                      <img src="/assets/icons/es.jpg" alt={locale} />
                      <p>Es</p>
                    </div>
                  </Link>
                ) : (
                  <Link
                    activeClassName={locale === "en-US"}
                    href={asPath}
                    locale="en-US"
                  >
                    <div className={styles.lan_link}>
                      <img src="/assets/icons/en.jpg" alt={locale} />
                      <p>En</p>
                    </div>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
      {show ? <HamburgerMenu handleClick={handleClick} /> : null}
    </>
  );
};
