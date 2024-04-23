// app-header.component.ts
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { AsyncPipe } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Observable, catchError, map, of, startWith, switchMap, tap } from 'rxjs';
import { UserPageService } from '../user-page/user-page.service';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
  imports: [
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    AsyncPipe,
    ReactiveFormsModule,
    MatAutocompleteModule,
  ],
  standalone: true,
})
export class AppHeaderComponent {
  userCtrl = new FormControl();
  users: Observable<any[]>; // Directly emit an array of user data

  constructor(private userPageService: UserPageService) {
    this.users = this.userCtrl.valueChanges.pipe(
      startWith(''),
      switchMap((value) => this._filterStates(value)),
    );
  }

  private _filterStates(value: string): Observable<any[]> {
    if (value && Number(value)) {
      return this.userPageService.getUserById(+value).pipe(
        map((userData) => [userData]),
        startWith([]),
        catchError(() => of([]))
      );
    } else {
      return of([]);
    }
  }
}
