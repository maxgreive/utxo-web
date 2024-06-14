import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: string) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`
  }
}

export function filterPostsByLang(lang: keyof typeof ui, posts: any) {
  return posts.filter(post => {
    const [postLang,] = post.slug.split('/');
    if (lang === postLang) return true;
    if (lang === defaultLang && postLang.length > 2) return true;
    return false;
  });
}
