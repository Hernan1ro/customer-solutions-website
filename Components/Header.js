import { useState } from "react";
import styles from "../styles/layout/Layout.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

export const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header>
      <div className={styles.header}>
        <Link href="/">
          <a>
            <Image
              width={220}
              height={70}
              src={"/assets/icons/logo-eslogan.png"}
              alt="Costumer Solutions"
              priority
            />
          </a>
        </Link>
        <div onClick={handleClick}>
          {!open && (
            <Image
              width={40}
              height={40}
              src={"/assets/icons/menu.svg"}
              alt="menu-logo"
              layout="fixed"
            />
          )}
        </div>
        <nav className={open ? styles.nav : ""}>
          <ul>
            <li className={pathname === "/inicio" ? styles.nav_active : null}>
              <Link href="/inicio">
                <a>Soluciones</a>
              </Link>
            </li>
            <fli
              className={pathname === "/servicios" ? styles.nav_active : null}
            >
              <Link href="/servicios">
                <a>Servicios</a>
              </Link>
            </fli>
            <li className={pathname === "/contácto" ? styles.nav_active : null}>
              <Link href="/precios">
                <a>Contácto</a>
              </Link>
            </li>
            <li
              className={
                pathname === "/evaluaciondemadurez" ? styles.nav_active : null
              }
            >
              <Link href="/evaluaciondemadurez">
                <a>Evaluación de Madurez</a>
              </Link>
            </li>
            <div>
              <Image
                onClick={handleClick}
                width={40}
                height={40}
                src={"/assets/icons/close.svg"}
                alt="close-logo"
                layout="fixed"
              />
            </div>
          </ul>
        </nav>
      </div>
    </header>
  );
};
