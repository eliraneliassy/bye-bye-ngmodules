import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private httpClient: HttpClient) { }

  saveCounter(counter: number) {
    return this.httpClient.post('SOME_FAKE_URL', { counter });
  }
}
