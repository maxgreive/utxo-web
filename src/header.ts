export type navigationItem = Readonly<{
	path: string,
	label: string,
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
	en: {
		items: [{
			path: '/en',
			label: 'Home',
		},
		{
			path: '/en/services',
			label: 'Services'
		},
		{
			path: '/en/blog',
			label: 'Blog'
		}]
	},
	de: {
		items: [{
			path: '/',
			label: 'Home'
		},
		{
			path: '/leistungen',
			label: 'Leistungen'
		},
		{
			path: '/progress-design-map',
			label: 'Tools'
		},
		{
			path: '/blog',
			label: 'Blog'
		}]
	},
};
