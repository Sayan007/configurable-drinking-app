import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Settings } from '../../settings/settings.dev';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrinkDetailsService {
  constructor(private httpClient: HttpClient) { }

  getDrinkDetails(path: string): Observable<any> {
    return this.httpClient.get(Settings.api + path)
  }
}
