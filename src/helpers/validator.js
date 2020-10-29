import * as Yup from 'yup';

const validator = (schema) => (
  Yup.object().shape(schema)
);

export const email = () => (
  Yup.string().email('Informe um e-mail válido')
);

export const password = () => (
  Yup.string().trim()
    .matches(/\d/, 'A senha deve ter números')
    .matches(/\W/, 'A senha deve ter caracteres especiais')
    .min(8, 'A senha deve ter pelo menos 8 caracteres')
);

export { Yup };
export default validator;
