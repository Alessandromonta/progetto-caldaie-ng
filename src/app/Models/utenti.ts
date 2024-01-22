export class Utenti {
  idUtente: number;
  username: string;
  email: string;
  grado: number;
  token: number;
  accortezzeFlag: boolean;
  risoluzioneGuastiFlag: boolean;
  lastLogin: Date | null;
  lastLogout: Date | null;
}
