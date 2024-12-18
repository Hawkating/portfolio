import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  // Unterstützte Sprachen
  private supportedLanguages: string[] = ['en', 'de'];

  // Aktuelle Sprache als Observable
  private currentLanguage = new BehaviorSubject<string>('en');
  language$ = this.currentLanguage.asObservable();

  // Sprache setzen
  setLanguage(lang: string) {
    if (this.isSupported(lang)) {
      this.currentLanguage.next(lang);
    } else {
      console.warn(`Unsupported language: ${lang}`);
    }
  }

  // Aktuelle Sprache abrufen
  getLanguage(): string {
    return this.currentLanguage.value;
  }

  // Prüfen, ob die Sprache unterstützt wird
  private isSupported(lang: string): boolean {
    return this.supportedLanguages.includes(lang);
  }
}
