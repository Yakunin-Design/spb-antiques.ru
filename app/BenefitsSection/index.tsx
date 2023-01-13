import styles from "./benefits.module.css";
import Spacer from "@/components/std/Spacer";

export default function BenefitsSection() {
    return (
        <>
            <h2>Почему выбирают нас?</h2>
            <section className={styles.grid}>
                <div className={styles.benefit}>
                    <b>Конфиденциальность</b>
                    <Spacer top="1" />
                    <p>
                        Мы гарантируем приватность личных данных. Информация о
                        прежних владельцах не разглашается.
                    </p>
                </div>

                <div className={styles.benefit}>
                    <b>Выезд эксперта на дом</b>
                    <Spacer top="1" />
                    <p>
                        Вам не придется никуда ехать и заботиться о
                        транспортировке, квалифицированный специалист сам
                        приедет на место оценки.
                    </p>
                </div>

                <div className={styles.benefit}>
                    <b>Мгновенная оплата</b>
                    <Spacer top="1" />
                    <p>
                        Процедура выкупа не займет у Вас много времени. Расчет
                        наличными происходит сразу после оценки.
                    </p>
                </div>

                <div className={styles.benefit}>
                    <b>Компетентность оценщиков</b>
                    <Spacer top="1" />
                    <p>
                        За 24 года работы нами накоплен бесценный опыт по оценке
                        и экспертизе художественных изделий.
                    </p>
                </div>
            </section>
        </>
    );
}
