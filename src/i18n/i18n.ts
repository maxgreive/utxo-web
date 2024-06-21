export type Locale = "de" | "en" | "nl" | string;

interface Fallback {
	[key: string]: string
}
type PathNames = {
	[key: string]: {
		[locale in Locale]: string
	}
};

export const defaultLocale: string = "de"
export const locales = ["de", "en", "nl"]
export const fallback: Fallback = {
	nl: "en",
}
// Define the paths for collections
export const collectionDirectoryNames: PathNames = {
	blog: {
		en: 'blog',
		de: 'blog',
		nl: 'blog'
	},
	services: {
		en: 'services',
		de: 'Leistungen',
		nl: 'services'
	}
}
export const directoryNames: PathNames = {
	// Define the path for the tag pages (tags list, posts per tag).
	tags: {
		en: 'tag',
		de: 'thema',
		nl: 'onderwerp'
	},
	// Define the path for people's profile pages. Should arguably be the same as the locale's About page's slug.
	people: {
		en: 'about',
		de: 'ueber',
		nl: 'over'
	}
}
