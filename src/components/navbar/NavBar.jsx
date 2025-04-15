import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function NavBar(){
    return(
        <div className={styles.container}>
            <div className={styles.container_title}>
                <h3><Link to="/">Общественное обьединение садоводов Маки</Link></h3>
            </div>
            <div className={styles.container_navigation}>
                <ul>
                    <Link>О нас</Link>
                    <Link>Наше видение</Link>
                    <Link>Важность</Link>
                    <Link to="/quiz">Пройти тест</Link>
                    <Link to="/donation">Поддержать</Link>
                </ul>
            </div>
        </div>
    )
} 

export default NavBar;