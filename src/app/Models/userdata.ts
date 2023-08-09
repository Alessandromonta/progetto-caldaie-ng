export class UserData {

    costructor() {}

    public email: string = null;
    public password: string = null;
    public confirmPassword: string = null;
    public username: string = null;
    public grado: number = 2;   //privilegio
    public token: number = 0;   //numero di token dell'utente

    

    // public get email(): string {return this.email};
    // public get passwd(): string {return this.passwd};
    // public get name(): string {return this.name};
    // public get surname(): string {return this.surname};

    // public set email(email: string) {this.email = email};
    // public set passwd(passwd: string) {this.passwd = passwd};
    // public set name(name: string) {this.name = name};
    // public set surname(surname: string) {this.surname = surname};
}