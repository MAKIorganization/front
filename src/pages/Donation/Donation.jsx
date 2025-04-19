import optimaImage from "../../assets/Optima_bank.jpg"
import mbankImage from "../../assets/mbank-line.jpg"
import styles from "./Donation.module.css"

function Donation(){
    return(
        <>
            <p className={styles.volunteerDonationPrompt}>
                <span>Важно!</span> Маки - некоммерческий проект. Мы не занимаемся продажей товаров, 
                зато сохраняем природу и заботимся о здоровье человечества. Если хочешь, 
                ты можешь поддержать нас финансово!
            </p>
            <h1 className={styles.title}>Способы поддержки</h1>
            <h4 className={styles.option}>Перевод на счета</h4>
            <div className={styles.bankRequisites}>
                <div className={styles.optimaBank}>
                    <img src={optimaImage} alt="" />
                    <h3>41698989898989898</h3>
                    <h3>Инициалы: ББУ</h3>
                </div>
                <div className={styles.mBank}>
                    <img src={mbankImage} alt="" />
                    <h3>41698989898989898</h3>
                    <h3>Инициалы: ИИР</h3>
                </div>
            </div>
        </>
    )
}

export default Donation