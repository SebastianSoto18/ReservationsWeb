import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { UserService } from '../../../shared/services/user.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../../shared/services/session.storage.service';
import { LoaderService } from '../../../shared/services/loader.service';
import { UserData } from '../../../shared/models/responses/userData';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, MenubarModule, MenuModule, ButtonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent implements OnInit {
  menuItems: MenuItem[] = [];
  user: UserData | null = null;
  subscriptions: Subscription[] = [];

  constructor(private userService: UserService, private router: Router, private sessionService: SessionStorageService, private loaderService: LoaderService) {
    this.menuItems = [
      { label: 'Salir', icon: 'pi pi-sign-out', command: () => this.logOut() },
    ];
  }
  ngOnInit(): void {
    this.subscriptions.push(this.userService.getUserData().subscribe((data) => {
      this.user = data;
    }));
  }

  logOut() {
    this.loaderService.showLoading();
    this.sessionService.removeItem('token');
    this.loaderService.hideLoading();
    this.router.navigate(['/login']);
  }
}