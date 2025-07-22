import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { Settings } from '../../settings/settings.dev';
import { DrinkListService } from './drink-list.service';
import { DrinkListModel } from './drink-list.model';
import { SettingsModel } from '../Settings.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { DrinkDetails } from '../drink-details/drink-details';

@Component({
  selector: 'app-drink-list',
  standalone: false,
  templateUrl: './drink-list.html',
  styleUrl: './drink-list.scss',
})
export class DrinkList {
  public allDrinkingItems: DrinkListModel[] = [];
  public config: SettingsModel = Settings;
  private snackBar = inject(MatSnackBar);
  public searchTerm: string = '';
  readonly dialog = inject(MatDialog);

  constructor(private drinkListService: DrinkListService, private cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.drinkListService.getAllDrinks('filter.php?a=Alcoholic').subscribe({
      next: (data) => {
        this.allDrinkingItems = [...data['drinks']];
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.snackBar.open(err.message, 'Close')
      },
      complete: () => {
        console.log('Completed')
      }
    })
  }

  openPopup(drinkId: string) {
    const dialogRef = this.dialog.open(DrinkDetails, {
      data: { id: drinkId },
      maxHeight: '100%',
      maxWidth: '100%'
    });
  }
}
