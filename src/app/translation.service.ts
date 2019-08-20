import { Injectable } from '@angular/core';
import { LanguageStrings } from '../assets/i18n/translation';

@Injectable()
export class TranslationService {
    public languages = [
        { name: 'bg', displayText: 'БГ', selected: true },
        { name: 'en', displayText: 'EN', selected: false }];

    private currentLanguage = 'bg';
    private dictionary;
    constructor() {
        this.dictionary = LanguageStrings;
    }

    public setCurrentLanguage(lang: string) {
        if (lang !== null && (lang.toLowerCase() === 'en' || lang.toLowerCase() === 'bg')) {
            this.currentLanguage = lang.toLowerCase();
        }
    }

    translate(key: string): string {
        if (this.dictionary[this.currentLanguage] != null) {
            return this.dictionary[this.currentLanguage].values[key];
        }
    }
}
