"use client";
import Row from "@/components/std/Row";
import Container from "@/components/std/Container";
import styles from "./header.module.css";

import Link from "next/link";
import change_color from "./change_color";

export default function Header() {
    const { dark } = change_color();

    const text_style = dark ? styles.dark : styles.light;
    const header_style = dark ? styles.header_dark : styles.header_light;

    return (
        <Container className={styles.header}>
            <header className={styles.header_block + " " + header_style}>
                <Row>
                    <Link href="/">
                        <h3 className={styles.test + " " + text_style}>
                            Antiques
                        </h3>
                    </Link>
                    <a href="#contacts">
                        <h3 className={styles.test + " " + text_style}>
                            Контакты
                        </h3>
                    </a>
                </Row>
            </header>
        </Container>
    );
}
