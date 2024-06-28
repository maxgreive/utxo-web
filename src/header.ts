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
			path: '/en/blog',
			label: 'Blog'
		},
		{
			path: '/en/services',
			label: 'Services'
		}]
	},
	de: {
		items: [{
			path: '/',
			label: 'Home'
		},
		{
			path: '/blog',
			label: 'Blog'
		},
		{
			path: '/leistungen',
			label: 'Leistungen'
		},]
	},
};
