import * as yup from 'yup';

export const schema = yup.object().shape({
    selected: yup.boolean().required("Пожалуйста выберите ответ")
}).required();