import { Link } from 'react-router-dom';
import styles from './BurgerMenu.module.css';
import { useEffect, useRef, useState } from 'react';

function BurgerMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(prev => !prev);
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target)
            ) {
                setIsMenuOpen(false);
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className={styles.burgerMenuWrapper} ref={menuRef}>
            <div className={styles.burger} onClick={toggleMenu}>
                ☰
            </div>

            {isMenuOpen && (
                <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownSection}>
                        <Link to="/" onClick={toggleDropdown} className={styles.link}>
                            О нас <span className={styles.icon}>▼</span>
                        </Link>
                        {isDropdownOpen && (
                            <div className={styles.submenu}>
                                <a href="#mission" className={styles.dropdownLink}>Миссия</a>
                                <a href="#vision" className={styles.dropdownLink}>Наше видение</a>
                                <a href="#reasons" className={styles.dropdownLink}>Почему это важно?</a>
                                <a href="#socNet" className={styles.dropdownLink}>Мы в социальных сетях</a>
                            </div>
                        )}
                    </div>
                    <Link to="/facts" className={styles.link}>Факты</Link>
                    <Link to="/quiz" className={styles.link}>Пройти тест</Link>
                    <Link to="/donation" className={styles.link}>Поддержать</Link>
                </div>
            )}
        </div>
    );
}

export default BurgerMenu;
