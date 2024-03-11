import { item } from './items';

export type recipe = {
  name: string;
  price: number;
  id: number;
  growingTime: number;
  experience: number;
  skillRequired: number;
  items: item[];
};
