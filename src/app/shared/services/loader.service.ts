import { Injectable, signal, WritableSignal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  
  isLoading: WritableSignal<boolean>;

  constructor() {
    this.isLoading = signal(false);
  }

  showLoading(): void {
    this.isLoading.set(true);
  }

  hideLoading(): void {
    this.isLoading.set(false);
  }
}
