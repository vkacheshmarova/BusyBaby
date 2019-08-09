import { Injectable } from '@angular/core';
import { LanguageStrings } from '../assets/i18n/translation';

@Injectable()
export class TranslationService {
    public languages = [
        { name: 'bg', selected: true },
        { name: 'en', selected: false }];

    private dictionary;
    constructor() {
        this.dictionary = LanguageStrings;
    }

    translate(key: string): string {
        const currentLanguage = this.languages.filter(l => l.selected)[0].name;
        if (this.dictionary[currentLanguage] != null) {
            return this.dictionary[currentLanguage].values[key];
        }
    }
}
