import Row from "@/components/std/Row";
import Container from "@/components/std/Container";
import styles from "./header.module.css";

import Link from "next/link";

export default function Header() {
    return (
        <Container>
            <header className={styles.header}>
                <Row>
                    <Link href="/">
                        <h3 className={styles.test}>Antiques</h3>
                    </Link>
                    <Link href="#contacts">
                        <h3 className={styles.test}>Контакты</h3>
                    </Link>
                </Row>
            </header>
        </Container>
    );
}
