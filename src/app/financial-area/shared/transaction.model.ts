import { nanoid } from "nanoid";

export class Transacao {
  public readonly id = nanoid();

  constructor(
    public readonly name: string,
    public readonly tipo: TipoTransacao,
    public readonly value: number,
    public readonly date: Date,
    public readonly account: string
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
