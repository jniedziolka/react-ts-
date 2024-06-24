import { BaseEntity } from '@/types';

export type MediumType = {
  name: string;
} & BaseEntity;

export type Invoice = {
  number: string;
  medium_type_id: number;
  cost: number;
} & BaseEntity;
