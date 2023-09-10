import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  title = 'sampleApp1';
  headerTitle = 'This is a header';
  isHeaderVisible = true;

  firstName: string | undefined;
  lastName: string | undefined;

  birthday1: Date = new Date(1994, 3, 24);

  constructor(private formBuilder: FormBuilder, private router: Router) {}
  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
    this.formSubscription?.unsubscribe();
  }

  formGroup: FormGroup | undefined;

  observable$: Observable<number> = of(1, 2, 3, 4, 5, 6);
  subscription: Subscription | undefined;
  formSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.displayObservableNumbers();
    this.formGroup = this.formBuilder.group({
      firstName: [undefined, Validators.required],
      lastName: [undefined, Validators.required],
    });
    this.observeFormChanges();
  }

  private displayObservableNumbers(): void {
    this.subscription = this.observable$.subscribe((value) => {
      console.log('here we are....');
      console.log(value);
    });
  }

  private observeFormChanges(): void {
    this.formSubscription = this.formGroup?.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  onFormSubmit(): void {
    console.log(this.formGroup?.value);
  }

  goToProfileAndLogCabbage(): void {
    console.log('Cabbage');
    this.router.navigate(['/profile']);
  }
}
