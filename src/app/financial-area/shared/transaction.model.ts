import { nanoid } from "nanoid";

export class Transacao {
  public readonly id = nanoid();

  constructor(
    public readonly name: string,
    public readonly tipo: TipoTransacao,
    public readonly valor: number,
    public readonly data: Date,
    public readonly account: string
  ) {}
}

export enum TipoTransacao {
  DEPOSITO = 'Depósito',
  SAQUE = 'Saque'
}
