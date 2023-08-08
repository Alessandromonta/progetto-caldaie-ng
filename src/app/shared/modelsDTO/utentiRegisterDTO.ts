export class UtentiRegister {
     public nomeUtente: string | null = null;
     public email: string | null = null;
     public password: string | null = null;
     public grado: number;
     public token: number;

     constructor
     (
          nomeutente:string | null = null,
          email: string | null = null,
          password: string | null = null
     ){
          this.nomeUtente = nomeutente;
          this.email = email;
          this.password = password;
          this.grado = 2;
          this.token = 0;
     }
}