export class ErroriCaldaie{
     public idErrore: number
     public idCaldaia: number
     public codiceErrore: string
     public descrizioneErrore: string
     public soluzioneErrore: string

     constructor(idErrore:number, idCaldaia:number, codiceErrore: string, 
          descrizioneErrore: string, soluzioneErrore: string)
     {
          this.idErrore = idErrore,
          this.idCaldaia = idCaldaia,
          this.codiceErrore = codiceErrore,
          this.descrizioneErrore = descrizioneErrore,
          this.soluzioneErrore = soluzioneErrore
     }
}