export class Caldaie {
  id: number;
  nome?: string;
  descrizione?: string;
  immagine?: Uint8Array;
  dataCreazione?: Date;
  dataUltimaModifica?: Date;
  idMarca: number;

  sbloccata?: boolean;
}
