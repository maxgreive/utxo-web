import type { Locale } from "./i18n";

interface TypeUIStrings {
	[key: string]: {
		[locale in Locale] : string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
	}
}

export const uiStrings: TypeUIStrings = {
	readMore: {
		en: 'Read more',
		de: 'Weiterlesen'
	},
	siteDescription: {
		en: 'All the basics for a brand-new blog.',
		de: 'Die Basics für eine niegelnagelneues Blog',
		nl: 'De start voor een gloednieuw blog',
	},
	skipLink: {
		en: 'Skip to content',
		de: 'Zum Inhalt springen',
		nl: 'Naar inhoud springen',
	},
	pageTranslationsAvailableIn: {
		en: 'This page is also available in',
		de: 'Diese Seite gibt es auch auf',
		nl: 'Deze tekst is ook beschikbaar in het'
	},
	en: {
		en: 'English',
		de: 'englisch',
		nl: 'Engels',
	},
	de: {
		en: 'German',
		de: 'deutsch',
		nl: 'Duits',
	},
	nl: {
		en: 'Dutch',
		de: 'niederländisch',
		nl: 'Nederlands'
	},
	tagHeadingSingular: {
		en: 'Tag',
		de: 'Tag',
		nl: 'Onderwerp'
	},
	tagHeadingPlural: {
		en: 'Tags',
		de: 'Tags',
		nl: 'Onderwerpen'
	},
	postsPerTagPageDescription: {
		en: "Posts about",
		de: 'Posts zum Thema',
		nl: 'Posts met onderwerp'
	},
	personProfilePageDescription: {
		en: "Profile of",
		de: 'Profil von',
		nl: 'Profiel van'
	},
	pageNotFoundHeading: {
		en: 'Oops! Nothing was found!',
		de: 'Oops! Nothing was found!',
		nl: 'Oops! Nothing was found!'
	},
	pageNotFoundBody: {
		en: 'It could be you or us, but there is no page here. It might have been moved or deleted.',
		de: 'It could be you or us, but there is no page here. It might have been moved or deleted.',
		nl: 'It could be you or us, but there is no page here. It might have been moved or deleted.',
	},
	contactButton: {
		en: 'Contact us',
		de: 'Kontakt'
	}
};
