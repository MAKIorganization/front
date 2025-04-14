import styles from './styles.module.css'
function FooterContacts(){
    return(
        <div className={styles.footerContacts}>
            <h2>Контакты</h2>
            <span>Телефон: +996 XXX XXX XXX</span>
            <span>Email: info@maki.kg</span>
            <span>Адрес: г. Бишкек, ул. Примерная 123</span>
        </div>
    )
}
export default FooterContacts