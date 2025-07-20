import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DrinkDetailsService } from './drink-details.service';
import { Settings } from '../../environments/settings.dev';
import { SettingsModel } from '../Settings.model';
@Component({
  selector: 'app-drink-details',
  standalone: false,
  templateUrl: './drink-details.html',
  styleUrl: './drink-details.scss'
})
export class DrinkDetails {
  public drinkId: string | null = null;
  private snackBar = inject(MatSnackBar);
  public drinkDetails: any = {};
  public config: SettingsModel = Settings;
  public language: string = '';
  constructor(private activatedRoute: ActivatedRoute, private drinkDetailsService: DrinkDetailsService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.drinkId = this.activatedRoute.snapshot.paramMap.get('id');
    if (!this.drinkId) {
      this.snackBar.open('Wrong drink', 'Close')
    } else {
      this.drinkDetailsService.getDrinkDetails('lookup.php?i=' + this.drinkId).subscribe({
        next: (data: any) => {
          this.drinkDetails = data.drinks[0];
          console.log(this.drinkDetails);
          this.cdr.markForCheck();
        },
        error: (err) => {
          this.snackBar.open(err.message, 'Close')
        }
      })
    }
  }
}
