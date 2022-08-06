import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Components/header.module.css";
import Image from "next/image";
import { HamburgerMenu } from "../Components/HamburgerMenu";

export const Header = () => {
  const [show, setShow] = useState(false);

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
            onClick={handleClick}
            src="/assets/icons/menu.svg"
            width={40}
            height={40}
          />
        </div>
      </header>
      {show ? <HamburgerMenu handleClick={handleClick} /> : null}
    </>
  );
};
