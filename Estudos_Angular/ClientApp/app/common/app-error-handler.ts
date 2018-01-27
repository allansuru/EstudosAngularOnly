import { ErrorHandler } from '@angular/core';

export class AppErrorHandler implements ErrorHandler {
    handleError(error: any): void {
        // mudar esse cara para um toast notification
        alert('An unexpected error ocurred by Suru.');
        console.log("Erro: ", error);
    }
    
}