import NavBar from "../navbar/NavBar";
import image from "../../assets/f4d1af8353a67e3fc1fe7d0eed7e0dd1_1.png"
import styles from "./MainPage.module.css"
import image2 from "../../assets/23884a02dbf73023b16014258f108ada_1.png"

function MainPage() {
    return(
    <>
        <NavBar />
        <section className={styles.main_aboutSection}>
            <div className={styles.main_aboutSection_title}>
                <h1>О нас</h1>
                <p>Экохаб и коммьюнити хаб по сохранению биоразнообразия Кыргызстана — это объединение экологически сознательных людей, организаций и инициатив, работающих над сохранением уникальной природы страны. Мы стремимся создать платформу для обмена знаниями, опытом и ресурсами между различными заинтересованными сторонами, включая университеты, НКО, госорганы и бизнес. Наша цель — способствовать устойчивому развитию и сохранению биоразнообразия, обеспечивая эффективное общение для решения экологических проблем.</p>
            </div>
            <img className={styles.main_orgImg} src={image} alt="" />
        </section>
        <section className={styles.main_missionSection}>
            <div className={styles.main_missionSection_title}>
                <h2>
                Миссия
                </h2>
            </div>
            <div className={styles.main_missionSection_description}>
                <div className={styles.main_missionSection_description_image}>
                    <img src={image2} alt="" />
                </div>
                <div className={styles.main_missionSection_description_text}>
                    <p>Наша миссия — объединить усилия для сохранения биоразнообразия Кыргызстана через просвещение, внедрение инновационных экологических практик и сохранение естественных экосистем. Мы фокусируемся на поддержке и внедрении решений, которые помогут сохранить природное богатство страны для нас и для будущих поколений. Экохаб будет способствовать созданию и реализации проектов по защите редких видов, восстановлению экосистем и улучшению экологической осведомленности среди населения.</p>
                </div>
            </div>
        </section>
        <section className={styles.main_line}/>
        <section className={styles.main_vision}>
            <h2>
                Наше видение
            </h2>
            <p>
            Мы видим будущее, в котором Кыргызстан станет примером устойчивого использования природных ресурсов, где сохранение биоразнообразия будет неотъемлемой частью общественного и экономического развития. Экохаб будет центром знаний и решений, где каждый сможет внести свой вклад в охрану природы, получить доступ к актуальной информации и стать частью глобального движения за сохранение планеты.
            </p>
        </section>
    </>
    )
}

export default MainPage;