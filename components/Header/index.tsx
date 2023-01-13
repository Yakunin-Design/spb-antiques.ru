"use client";
import Row from "@/components/std/Row";
import Container from "@/components/std/Container";
import styles from "./header.module.css";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [dark, set_dark] = useState(false);

    window.addEventListener("scroll", function (e) {
        if (window.pageYOffset >= 800) {
            dark != true && set_dark(true);
        } else {
            dark != false && set_dark(false);
        }
    });
    const text_style = dark ? styles.dark : styles.light;
    console.log(text_style);

    return (
        <Container className={styles.header}>
            <header className={styles.header_block}>
                <Row>
                    <Link href="/">
                        <h3 className={styles.test + " " + text_style}>
                            Antiques
                        </h3>
                    </Link>
                    <Link href="#contacts">
                        <h3 className={styles.test + " " + text_style}>
                            Контакты
                        </h3>
                    </Link>
                </Row>
            </header>
        </Container>
    );
}
