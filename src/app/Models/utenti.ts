export class Utenti {
     constructor(
       idUtente: number,
       nomeUtente: string,
       email: string,
       password: string,
       grado: number,
       token: number,
       lastLogin: Date | null,
       lastLogout: Date | null
     ) {
       this.idUtente = idUtente;
       this.nomeUtente = nomeUtente;
       this.email = email;
       this.password = password;
       this.grado = grado;
       this.token = token;
       this.lastLogin = lastLogin;
       this.lastLogout = lastLogout;
     }
   
     idUtente: number = 0;
     nomeUtente: string = '';
     email: string = '';
     password: string = '';
     grado: number = 0;
     token: number = 0;
     lastLogin: Date | null = null;
     lastLogout: Date | null = null;
   }
   