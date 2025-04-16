import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import styles from '../styles.module.css'
import { useForm } from 'react-hook-form'
import { useState } from "react";
import tickIcon from "../../../assets/iconamoon_check-bold.svg"
import crossIcon from "../../../assets/maki_cross.svg"

function MultipleAnswers(props) {
    const {
        register,
        handleSubmit,
        setValue,
    } = useForm({
        defaultValues: {
            selected: ""
        },
        mode: "onChange"
    });
    const [answer, setAnswer] = useState(null);    


    const onSubmit = (value) => {
        setValue("selected", value);
        if(value.selected == props.ans) {
            setAnswer(true)
        }else{
            setAnswer(false)
        }
    };

    // function checkAnswer() {
    //     alert("You selected: " + selected);
    // }
    return(

        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={styles.question}>
            <FormLabel className={styles.title} sx={{display: "flex"}}><li></li>{props.question}</FormLabel>
            <RadioGroup>
                <FormControlLabel className={styles.option} value="0" control={<Radio {...register("selected")}/>} label={props.v1} />
                <FormControlLabel className={styles.option} value="1" control={<Radio {...register("selected")}/>} label={props.v2} />
                <FormControlLabel className={styles.option} value="2" control={<Radio {...register("selected")}/>} label={props.v3} />
            </RadioGroup>
            <button className={styles.answerBtn} type="submit">Ответить</button>
            </FormControl>
            {
                answer !== null && (
                    <section className={styles.results}>
                        <div className={styles.writtenRes}>{answer ? 
                            <><img src={tickIcon}/> Правильно</> : 
                            <><img src={crossIcon}/> Неправильно"</>}
                        </div>
                    </section>
                )
            }
        </form>
    )
}
export default MultipleAnswers