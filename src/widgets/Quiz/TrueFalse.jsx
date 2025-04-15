import { Checkbox } from "@mui/material"
import styles from './styles.module.css'

function TrueFalse(props) {
    return(
        <div className={styles.question}>
            <li>{props.question}</li>
            <div className={styles.option}>
                <Checkbox />
                <p>{props.v1}</p>
            </div>
            <div className={styles.option}>
                <Checkbox />
                <p>{props.v2}</p>
            </div>
            <button className={styles.answerBtn}>Ответить</button>
        </div>
    )
}
export default TrueFalse