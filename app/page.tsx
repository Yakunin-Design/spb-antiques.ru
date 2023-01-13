import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <Container>
                <h1>Скупка Антиквариата В Санкт-Петербурге</h1>
                <Spacer top="2" />
                <p>
                    Картельные сговоры не допускают ситуации, при которой многие
                    известные личности, вне зависимости от их уровня, должны
                    быть своевременно верифицированы.
                </p>
                <Spacer top="2" />
                <button className={styles.button}>
                    <a href="#contacts">Позвонить</a>
                </button>
            </Container>
        </main>
    );
}
