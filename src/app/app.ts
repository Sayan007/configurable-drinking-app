import { Component, signal } from '@angular/core';
import { Settings } from '../environments/settings.dev';
import { SettingsModel } from './Settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('eliq-dinking-app-sayan');
  public config: SettingsModel = Settings;
}
