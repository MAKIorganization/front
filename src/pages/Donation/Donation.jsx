import bakaiPhoto from "../../assets/bakai.png"
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
                <div className={styles.bank}>
                    <img src={bakaiPhoto} alt="" />
                    <h3>Реквизиты счета в KGS</h3>
                    <h3>Номер счета: 1240030000128110</h3>
                    <h3>БИК банка получателя: 124012</h3>
                    <h3>Банк получателя: ОАО "БАКАЙ БАНК"</h3>
                    <h3>Получатель: ООС "МАКИ"</h3>
                    <div>-------------------------------</div>
                    <h3>Реквизиты счета USD</h3>
                    <h3>Номер счета: 1240030000128110</h3>
                    <h3>Банк-корреспондент: Aktif Yatirim Bankasi A.S., Istanbul, <br/>Turkey, SWIFT: CAYTTRIS</h3>
                    <h3>Банк получателя: OJSC BAKAI BANK, Bishkek, Kyrgyz Republic <br/>SWIFT: BAKAKG22. Account number: TR280014300000000009443581</h3>
                    <h3>Получатель: PAOG "MAKI"</h3>
                    <div>-------------------------------</div>
                    <h3>Реквизиты счета в EUR</h3>
                    <h3>Номер счета: 1240030000128110</h3>
                    <h3>Банк-корреспондент: Landesbank Baden-Wuerttemberg, Stuttgart, <br/>Germany, SWIFT: SOLADEST (только для платежей из стран Европейского союза, Швейцарии и Великобритании)</h3>
                    <h3>Банк получателя: OJSC BAKAI BANK, Bishkek, Kyrgyz Republic, <br/>SWIFT: BAKAKG22. Account number of BAKAI BANK in Landesbank: 2809395</h3>
                    <h3>Получатель: PAOG "MAKI"</h3>
                </div>
            </div>
        </>
    )
}

export default Donation