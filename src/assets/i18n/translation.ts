export class TranslationSet {
    public language: string;
    public values: { [key: string]: string } = {};
  }

export const LanguageStrings: { [key: string]: TranslationSet} = {
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