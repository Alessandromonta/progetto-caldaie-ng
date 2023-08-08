export class Utenti {
     public idUtente: number;
     public nomeUtente: string | null = null;
     public email: string | null = null;
     public password: string | null = null;
     public grado: number;
     public token: number;
     public lastLogin?: Date | null = null;
     public lastLogout?: Date | null = null;

     constructorSimple(
      nomeUtente: string | null = null,
      email: string | null = null,
      password: string | null = null,
    ) {
      this.email = email;
      this.nomeUtente = nomeUtente;
      this.password = password;
      this.grado = 2;
      this.token = 0;
      this.lastLogin = null;
      this.lastLogout = null;
      this.idUtente = 0;
    }
   
     constructor(
       idUtente: number,
       nomeUtente: string | null = null,
       email: string | null = null,
       password: string | null = null,
       grado: number,
       token: number,
       lastLogin?: Date | null,
       lastLogout?: Date | null
     ) {
       this.idUtente = idUtente;
       this.grado = grado;
       this.token = token;
       this.nomeUtente = nomeUtente;
       this.email = email;
       this.password = password;
       this.lastLogin = lastLogin;
       this.lastLogout = lastLogout;
     }
   }
   