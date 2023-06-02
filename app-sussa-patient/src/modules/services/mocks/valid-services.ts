import { Service } from '../entities/Service';

export const ValidServicesMock: Service[] = [
  {
    id: 1,
    title: 'SPA',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem itaque voluptatem rem nulla qui et quaerat? Dolor quaerat ab perferendis accusamus expedita labore libero consequuntur id, dignissimos, nostrum sint.',
    cta: 'Submeter formulário',
    link: 'https://google.com.br',
    visible: true,
  },
  {
    id: 2,
    title: 'Proest',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium autem itaque voluptatem rem nulla qui et quaerat? Dolor quaerat ab perferendis accusamus expedita labore libero consequuntur id, dignissimos, nostrum sint.',
    cta: 'Enviar email',
    link: 'mailto:willy@ic.ufal.br',
    visible: true,
  },

];
