import styles from './styles.module.css'

function FooterNavigation(){
    return(
        <div className={styles.footerNavigation}>
            <h2>Навигация</h2>
            <ul>
                <li>О нас</li>
                <li>Наше видение</li>
                <li>Важность</li>
                <li>Пройти тест</li>
                <li>Поддержать</li>
            </ul>
        </div>
    )
}
export default FooterNavigation