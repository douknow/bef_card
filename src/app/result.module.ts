import { Card } from './card/card.module';

export class Result {
  success: number;
  result: {
    card: Card
  };
  flag: string
}