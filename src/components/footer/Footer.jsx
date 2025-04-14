import FooterContacts from '../../widgets/Footer/FooterContacts';
import FooterIntro from '../../widgets/Footer/FooterIntro';
import FooterNavigation from '../../widgets/Footer/FooterNavigation';
import styles from './Footer.module.css'
function Footer(){
    return(
        <div className={styles.footer}>
            <FooterIntro/>
            <FooterNavigation/>
            <FooterContacts/>
        </div>
    )
}
export default Footer;