import { useEffect, useRef, useState } from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom'

function NavBar(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsDropdownOpen(false);
          }
        };
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);
    return(
        <div className={styles.container}>
            <div className={styles.container_title}>
                <Link className={styles.link} to="/"><h3>Общественное обьединение садоводов Маки</h3></Link>
            </div>
            <div className={styles.container_navigation}>
                <ul>
                    <li className={styles.dropdown} ref={dropdownRef}>
                        <Link onClick={toggleDropdown} className={styles.link} to="/">
                            О нас <span className={styles.icon}>▼</span>
                        </Link>
                        {isDropdownOpen && (
                            <div className={styles.dropdownContent}>
                                <a href="#mission" className={styles.dropdownLink}>Миссия</a>
                                <a href="#vision" className={styles.dropdownLink}>Наше видение</a>
                                <a href="#reasons" className={styles.dropdownLink}>Почему это важно?</a>
                                <a href="#socNet" className={styles.dropdownLink}>Мы в социальных сетях</a>
                            </div>
                        )}
                    </li>
                    <Link to="/facts" className={styles.link}>Факты</Link>
                    <Link to="/quiz" className={styles.link}>Пройти тест</Link>
                    <Link to="/donation" className={styles.link}>Поддержать</Link>
                </ul>
            </div>
        </div>
    )
} 

export default NavBar;