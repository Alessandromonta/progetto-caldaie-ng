export class MainResponse {
     isSuccess: boolean;
     errorMessage?: string;
     content?: any;
   
     constructor(isSuccess: boolean, errorMessage?: string, content?: any) {
       this.isSuccess = isSuccess;
       this.errorMessage = errorMessage;
       this.content = content;
     }
   }
   