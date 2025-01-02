import { Component, effect, inject, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { LoaderService } from '../../../shared/services/loader.service';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.css'
})
export class LoaderComponent implements OnInit {
  isLoading: boolean = false;

  private injector: Injector = inject(Injector);

  constructor(private loaderService : LoaderService) { }

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      effect(() => {
        this.isLoading = this.loaderService.isLoading();
      });
    });
  }  

}
