import * as yup from "yup";

export const identityValidator = yup.object().shape({
  name: yup.string().required("Nome é um campo obrigatório."),
  password: yup
    .string()
    .required("Senha é um campo obrigatório.")
    .matches(/(?=.*\d)/, "Sua senha deve conter ao menos um dígito.")
    .matches(/(?=.*[a-z])/, "Sua senha deve conter ao menos uma letra minúscula.")
    .matches(/(?=.*[A-Z])/, "Sua senha deve conter ao menos uma letra maiúscula.")
    .matches(/(?=.*[.$*&@#!?])/, "Sua senha deve conter ao menos um caractere especial.")
    .matches(/(?=.*\d)/, "Sua senha deve conter ao menos um dígito.")
    .matches(/[0-9a-zA-Z$*&@#]{8,}/, "Sua senha deve ter no mínimo 8 caracteres."),
  confirmPassword: yup
    .string()
    .required("Confirme sua senha.")
    .oneOf([yup.ref("password")], "As senhas não coincidem."),
  email: yup.string().email("E-mail inválido.").required("E-mail é um campo obrigatório."),
  birthdate: yup
    .date()
    .typeError("Data inválida.")
    .max(new Date(), "Data inválida.")
    .required("Data de nascimento é um campo obrigatório.")
    .test("error", "A idade mínima é 18 anos.", (value) => {
      if (value) {
        const EIGHTEEN_YEARS_MS = 568025136000;

        const currentDate = new Date().getTime();
        const insertedDate = new Date(value).getTime();

        if (currentDate - insertedDate < EIGHTEEN_YEARS_MS) {
          return false;
        }
        return true;
      }
      return false;
    }),
});
