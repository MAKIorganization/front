import * as yup from 'yup';

export const schema = yup.object().shape({
    firstOption: yup.boolean().required("Please choose your answer")
}).required();