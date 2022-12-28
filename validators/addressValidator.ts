import * as yup from "yup";

export const addressValidator = yup.object().shape({
  cep: yup
    .string()
    .matches(/^[0-9]{5}-[0-9]{3}$/, "Insira um CEP válido. Deve possuir traço.")
    .required("CEP é um campo obrigatório."),
  street: yup.string().required("Rua é um campo obrigatório."),
  district: yup.string().required("Bairro é um campo obrigatório."),
  city: yup.string().required("Cidade é um campo obrigatório."),
  landmark: yup.string(),
  number: yup.string().required("Número é um campo obrigatório."),
});
