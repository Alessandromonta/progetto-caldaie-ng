export class ErroriCaldaie{
     public IdErrrore: number
     public IdCaldaia: number
     public codiceErrore: string
     public descrizioneErrore: string
     public soluzioneErrore: string

     constructor(IdErrore:number, IdCaldaia:number, codiceErrore: string, 
          descrizioneErrore: string, soluzioneErrore: string)
     {
          this.IdErrrore = IdErrore,
          this.IdCaldaia = IdCaldaia,
          this.codiceErrore = codiceErrore,
          this.descrizioneErrore = descrizioneErrore,
          this.soluzioneErrore = soluzioneErrore
     }
}