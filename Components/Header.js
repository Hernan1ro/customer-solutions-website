import { useState } from "react";
import Link from "next/link";
import styles from "../styles/components/header.module.css";
import Image from "next/image";
import { HamburgerMenu } from "../Components/HamburgerMenu";
import { useRouter } from "next/router";

export const Header = ({ hide }) => {
  const [show, setShow] = useState(false);
  const { locale, asPath, defaultLocale } = useRouter();

  const handleClick = () => {
    setShow(!show);
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
            <div className={styles.language_dropdown}>
              <img src="/assets/icons/en.jpg" alt="en-ES" />
              <img src="/assets/icons/arrow1_primary.svg" alt="Arrow" />
              {/* <Link
                activeClassName={locale === "es-ES"}
                href={asPath}
                locale="es-ES"
              >
                es-ES
              </Link>
              <Link
                activeClassName={locale === "en-US"}
                href={asPath}
                locale="en-US"
              >
                en-US
              </Link> */}
            </div>
          </div>
        </div>
      </header>
      {show ? <HamburgerMenu handleClick={handleClick} /> : null}
    </>
  );
};
