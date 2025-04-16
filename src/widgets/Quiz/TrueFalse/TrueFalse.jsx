import { Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material"
import styles from '../styles.module.css'
import { useForm } from 'react-hook-form'
import { useState } from "react";
import tickIcon from "../../../assets/iconamoon_check-bold.svg"
import crossIcon from "../../../assets/maki_cross.svg"
import { schema } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";

function TrueFalse(props) {
    const {
            register,
            handleSubmit,
            setValue,
        } = useForm({
            defaultValues: {
                selected: ""
            },
            mode: "onChange",
            resolver: yupResolver(schema),
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
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl className={styles.question}>
            <RadioGroup>
                <FormLabel className={styles.title} sx={{display: "flex"}}><li></li>{props.question}</FormLabel>
                <FormControlLabel className={styles.option} value="0" control={<Radio {...register("selected")}/>} label={props.v1} />
                <FormControlLabel className={styles.option} value="1" control={<Radio {...register("selected")}/>} label={props.v2} />
            </RadioGroup>
            <button className={styles.answerBtn} type="submit">Ответить</button>
            </FormControl>
            {answer !== null && (
                    <section className={styles.results}>
                        <div className={styles.writtenRes}>{answer ? 
                            <><img src={tickIcon}/> Правильно</> : 
                            <><img src={crossIcon}/> Неправильно</>}
                        </div>
                    </section>
                )
            }
        </form>
    )
}
export default TrueFalse