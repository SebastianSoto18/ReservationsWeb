import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { Subscription } from 'rxjs';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../shared/services/session.storage.service';
import { MessageService } from 'primeng/api';
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { LoaderService } from '../../shared/services/loader.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, CardModule, InputTextModule, ButtonModule, MessagesModule, ToastModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [MessageService]
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  });
  private susbcriptions: Subscription[];

  constructor(
    private authService: AuthService,
    private router: Router,
    private sessionStorageService: SessionStorageService,
    private messageService: MessageService,
    private loaderService: LoaderService
  ) {
    this.susbcriptions = [];
  }

  authUser() {
    this.loaderService.showLoading();
    if(this.form.valid) {
      this.susbcriptions.push(
        this.authService.authUser(this.form.controls.email.value!, this.form.controls.password.value!).subscribe({
            next: (token) => {
              this.sessionStorageService.setItem('token', token);
              this.loaderService.hideLoading();
              this.router.navigate(['/home']);
            },
            error: (err) => {
              var errMessage = err.error.message;
              this.messageService.add({severity:'error', summary:'Error', detail:errMessage});
              this.loaderService.hideLoading();
            }
          }
        )
      );
    }
  }

  ngOnDestroy(): void {
    this.susbcriptions.forEach(sub => sub.unsubscribe());
  }
}
