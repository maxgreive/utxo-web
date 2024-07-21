import type { Locale } from "./i18n";

interface TypeUIStrings {
	[key: string]: {
		[locale in Locale]: string | undefined // If we'd enforce keys to be any of the already added language codes, it'd be impossible to add new locale strings before enabling that locale site-wide.
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
	},
	skipLink: {
		en: 'Skip to content',
		de: 'Zum Inhalt springen',
	},
	pageTranslationsAvailableIn: {
		en: 'This page is also available in',
		de: 'Diese Seite gibt es auch auf',
	},
	en: {
		en: 'English',
		de: 'englisch',
	},
	de: {
		en: 'German',
		de: 'deutsch',
	},
	tagHeadingSingular: {
		en: 'Tag',
		de: 'Tag',
	},
	tagHeadingPlural: {
		en: 'Tags',
		de: 'Tags',
	},
	postsPerTagPageDescription: {
		en: "Posts about",
		de: 'Posts zum Thema',
	},
	personProfilePageDescription: {
		en: "Profile of",
		de: 'Profil von',
	},
	pageNotFoundHeading: {
		en: 'Oops! Nothing was found!',
		de: 'Oops! Nothing was found!',
	},
	pageNotFoundBody: {
		en: 'It could be you or us, but there is no page here. It might have been moved or deleted.',
		de: 'It could be you or us, but there is no page here. It might have been moved or deleted.',
	},
	contactButton: {
		en: 'Contact us',
		de: 'Kontakt'
	},
	watchVideo: {
		en: 'Watch the<br>video',
		de: 'Video<br>ansehen'
	},
	email: {
		en: 'Email address',
		de: 'Email-Adresse'
	},
	phone: {
		en: 'Phone',
		de: 'Telefon'
	},
	address: {
		en: 'Office Address',
		de: 'Adresse'
	},
	message: {
		en: 'Your message',
		de: 'Ihre Nachricht'
	},
	name: {
		en: 'Name',
		de: 'Ihr Name'
	},
	send: {
		en: 'Send',
		de: 'Absenden'
	}
};
