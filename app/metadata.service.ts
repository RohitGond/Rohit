import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators'
import { messages } from './uilities/messages';

@Injectable({
  providedIn: 'root'
})
export class MetadataService {

  constructor(private http:HttpClient) { }
  getLocal(templateId: string) {
    return this.http.get(templateId).pipe(catchError(this.handleError));
  }

  
  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error Occured: ${error.error.message}`;

    } else {
      // server-side error
      errorMessage = `Error Occured: ${error.message}`;

    }

    /// We are returning a generic error message
    return throwError(messages.genericErrorMessage);
  }
}
