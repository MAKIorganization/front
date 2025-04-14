import styles from "./MyCard.module.css"
function MyCard(props){
    return(
        <div className={styles.main_reasons_list}>
                <div className={styles.main_reasons_list_card}>
                    <h3>{props.title}</h3>
                    <p>
                        {props.text}
                    </p>
                </div>
            </div>
    )
}
export default MyCard