import * as yup from 'yup';

export const domains = [
  '@ic.ufal.br',
  '@im.ufal.br',
  '@ip.ufal.br',
  '@iefe.ufal.br',
];

export const inputSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  phone: yup.number().required(),
  crp: yup.string().required(),
  password: yup.string().min(8).required(),
  confirmPassword: yup.string().required(),
});
