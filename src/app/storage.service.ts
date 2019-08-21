import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  LOCAL_STORAGE_KEY = '__COUNTER__';

  constructor(private httpClient: HttpClient) {}

  saveCounter(count: number) {
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(count));
  }
  getCounter(counter: number) {
    JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY));
  }
}
