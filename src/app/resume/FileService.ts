// file.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  // Method to fetch file from server
  getFile(): Observable<Blob> {
    return this.http.get('URL_TO_YOUR_FILE', { responseType: 'blob' });
  }
}