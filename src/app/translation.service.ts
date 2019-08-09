import { Injectable} from '@angular/core';

@Injectable()
export class TranslationSet {
  public language: string;
  public values: { [key: string]: string } = {};
}

export class TranslationService {
    public languages = ['bg', 'en'];
    public language;

    private dictionary: { [key: string]: TranslationSet} = {
        bg: {
            language: 'bg',
            values: {
                    tabAboutLabel: 'За нас',
                    tabGallery: 'Галерия',
                    tabMontessori: 'Монтесори',
                    tabBlog: 'Блог'
            }
        },
        en: {
            language: 'en',
            values: {
                tabAboutLabel: 'About us',
                tabGallery: 'Gallery',
                tabMontessori: 'Montessori',
                tabBlog: 'Blog'
            }
        }
    };
    constructor() {}

    translate(key: string): string {
        if (this.dictionary[this.language] != null) {
            return this.dictionary[this.language].values[key];
        }
    }

    public setDefaultLanguage(lang: string) {
        if (lang && this.languages.find(l => l === lang) !== undefined) {
            this.language = lang;
        } else {
            this.language = 'bg';
        }

    }
}
