import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/logo.svg";
import styles from "./Header.module.css";
import { subTitle } from "../fonts";

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <Image src={logo} alt="Jardin Calme" width={150} height={80} priority />
      </Link>
      <nav style={subTitle.style} className={styles.nav}>
        <Link href="/register"> Register </Link>
        <Link href="/login"> Login </Link>
      </nav>
    </header>
  );
}
