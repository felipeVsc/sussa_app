import { Professional } from '../entities/Professional';

export const ValidProfessionalsMock: Professional[] = [
  {
    id: 'valid-id',
    photo: 'https://cdn.pixabay.com/photo/2015/01/08/18/30/entrepreneur-593371_1280.jpg',
    crp: '123',
    status: true,
    online: true,
    email: 'paul.atreides@sussa.com',
    role: 'Terapeuta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet porta efficitur. Aenean nec odio quam. Donec lobortis risus sit amet sem ultrices efficitur. Donec id ante libero.',
    firstName: 'Paul',
    lastName: 'Atreides',
    phone: '+558299999999',
  },
  {
    id: 'valid-id-2',
    photo: 'https://cdn.pixabay.com/photo/2016/08/11/00/46/business-lady-1584654_1280.jpg',
    crp: '123',
    status: true,
    online: false,
    email: 'jessica.atreides@sussa.com',
    role: 'Terapeuta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet porta efficitur. Aenean nec odio quam. Donec lobortis risus sit amet sem ultrices efficitur. Donec id ante libero.',
    firstName: 'Jessica',
    lastName: 'Atreides',
    phone: '+558299999999',
  },
  {
    id: 'valid-id-3',
    photo: 'https://cdn.pixabay.com/photo/2015/07/20/12/57/ambassador-852766_1280.jpg',
    crp: '123',
    status: true,
    online: false,
    email: 'leonard.mccoy@sussa.com',
    role: 'Terapeuta',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec imperdiet porta efficitur. Aenean nec odio quam. Donec lobortis risus sit amet sem ultrices efficitur. Donec id ante libero.',
    firstName: 'Leonard',
    lastName: 'McCoy',
    phone: '+558299999999',
  },
];
