import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";

import BenefitsSection from "./BenefitsSection";
import ContactsSection from "./ContactsSection";
import FormSection from "./FormSection";

import styles from "./page.module.css";

export default function Home() {
    return (
        <>
            <main className={styles.main}>
                <div className={styles.overlay}></div>
                <Container className={styles.content}>
                    <h1>
                        Скупка Антиквариата <br /> В Санкт-Петербурге
                    </h1>
                    <Spacer top="2" />
                    <p>
                        Картельные сговоры не допускают ситуации, при которой
                        многие известные личности, вне зависимости от их уровня,
                        должны быть своевременно верифицированы.
                    </p>
                    <Spacer top="2" />
                    <button className={styles.button}>
                        <a href="#contacts">Позвонить</a>
                    </button>
                </Container>
            </main>

            <Container wrapper>
                <Spacer top="5" />
                <BenefitsSection />
                <Spacer top="5" />
                <div className={styles.feedback}>
                    <div className={styles.contacts}>
                        <ContactsSection />
                    </div>
                    <div className={styles.form}>
                        <FormSection />
                    </div>
                </div>
            </Container>
            <Spacer top="5" />
        </>
    );
}
