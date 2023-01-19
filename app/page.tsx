import Container from "@/components/std/Container";
import Spacer from "@/components/std/Spacer";

import BenefitsSection from "./BenefitsSection";
import ContactsSection from "./ContactsSection";
import FormSection from "./FormSection";
import PositionList from "./PositionListSection";

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
                        Оценим Ваш антиквариат по фото онлайн и выкупим в день
                        обращения. Ваше предложение обработает профессионал с
                        опытом работы более 30 лет. Вам необходимо только
                        заполнить форму, или позвонить.
                    </p>
                    <Spacer top="2" />
                    <a href="#contacts">
                        <button className={styles.button}>Позвонить</button>
                    </a>
                </Container>
            </main>

            <Container wrapper>
                <Spacer top="5" />
                <PositionList />

                <Spacer top="5" />
                <BenefitsSection />

                <Spacer top="5" />
                <div className={styles.feedback}>
                    <ContactsSection className={styles.contacts} />
                    <FormSection className={styles.form} />
                </div>
            </Container>
            <Spacer top="5" />
        </>
    );
}
