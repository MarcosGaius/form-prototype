import * as yup from "yup";

export const aboutValidator = yup.object().shape({
  about: yup.string().required("Campo obrigatório."),
});
