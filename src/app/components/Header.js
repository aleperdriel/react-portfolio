import Section from ".//Section";
import Link from "next/link";
import styles from "./Header.module.css";

export default function Header({ children }) {
    
    return (
        <nav className="flex">
            <div className=""></div>
            <div className="ml-auto mt-4 w-2/3 md:w-1/3">
                <ul className="flex flex-col sm:flex-row justify-around uppercase gap-2">
                    <Link className={styles.nav_item} href="/"><li>Home</li></Link>
                    <a className={styles.nav_item} href="/#about"><li>About</li></a>
                    <a className={styles.nav_item} href="/#projects"><li>Projects</li></a>
                    <Link className={styles.nav_item} href="contact"><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    )
}