import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  setItem(key: string, value: any): void {
    const jsonValue = JSON.stringify(value);
    sessionStorage.setItem(key, jsonValue);
  }

  getItem<T>(key: string): T | null {
    const jsonValue = sessionStorage.getItem(key);
    return jsonValue ? JSON.parse(jsonValue) as T : null;
  }


  removeItem(key: string): void {
    sessionStorage.removeItem(key);
  }

  clear(): void {
    sessionStorage.clear();
  }
}
