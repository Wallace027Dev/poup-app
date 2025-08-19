import { nanoid } from 'nanoid';

export class Transaction {
  public readonly id = nanoid();
  public readonly date: Date;

  constructor(
    public readonly name: string,
    public readonly tipo: TransactionType,
    public readonly value: number,
    date: string,
    public readonly account: string
  ) {
    if (!date.includes('T') || !date.includes(' ')) {
      date += 'T00:00';
    }

    this.date = new Date(date);
  }
}

export enum TransactionType {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque',
}
