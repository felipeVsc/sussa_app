import * as yup from 'yup';

export const domains = [
  '@ic.ufal.br',
  '@im.ufal.br',
  '@ip.ufal.br',
  '@iefe.ufal.br',
];

export const inputSchema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().min(8).required(),
});
