export class UtentiLogin {
     public nomeUtente: string | null = null;
     public email: string | null = null;
     public password: string | null = null;

     constructor
     (
          nomeutente:string | null = null,
          email: string | null = null,
          password: string | null = null
     ){
          this.nomeUtente = nomeutente;
          this.email = email;
          this.password = password;
     }
}