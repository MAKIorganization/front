import styles from './Navbar.module.css'

function NavBar(){
    return(
        <div className={styles.container}>
            <div className={styles.container_title}>
                <h3>Общественное обьединение садоводов Маки</h3>
            </div>
            <div className={styles.container_navigation}>
                <ul>
                    <li>О нас</li>
                    <li>Наше видение</li>
                    <li>Важность</li>
                    <li>Пройти тест</li>
                    <li>Поддержать</li>
                </ul>
            </div>
        </div>
    )
} 

export default NavBar;