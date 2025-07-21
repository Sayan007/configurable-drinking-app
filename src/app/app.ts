import { Component, signal } from '@angular/core';
import { Settings } from '../environments/settings.dev';
import { SettingsModel } from './Settings.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: false,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('eliq-dinking-app-sayan');
  public config: SettingsModel = Settings;
  constructor(private titleService: Title) {
    this.titleService.setTitle(this.config.siteSettings.title);
  }
}
