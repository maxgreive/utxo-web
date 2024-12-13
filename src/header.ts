export type navigationItem = Readonly<{
	path: string,
	label: string,
	children?: Array<navigationItem>,
}>

export const headerMenu: Record<string, Record<string, navigationItem[]>> = {
	en: {
		items: [{
			path: '/en',
			label: 'Home',
		},
		{
			path: '/en/services',
			label: 'Services',
			children: [
				{
					path: '/en/services/customer-research-sprints',
					label: 'Customer Insight Sprints'
				},
				{
					path: '/en/services/mastering-jobs-to-be-done-online-workshop',
					label: 'Jobs to Be Done Online Workshop'
				},
			]
		},
		{
			path: '/en/blog',
			label: 'Blog'
		}]
	},
	de: {
		items: [
			{
				path: '/',
				label: 'Home'
			},
			{
				path: '/events',
				label: 'Events',
				children: [
					{
						path: '/bitcoin-business-innovation-meetup',
						label: 'Bitcoin Business Innovation Meetup'
					},
					{
						path: '/jobs-to-be-done-meetup',
						label: 'JTBD Meetup'
					}
				]
			},
			{
				path: '/leistungen',
				label: 'Leistungen',
				children: [
					{
						path: '/leistungen/bitcoin-business-assesment',
						label: 'Bitcoin Business Assesment'
					},
					{
						path: '/leistungen/customer-research-sprints',
						label: 'Customer Insight Sprints'
					},
					{
						path: '/leistungen/mastering-jobs-to-be-done-online-workshop',
						label: 'Jobs to Be Done Online Workshop'
					},
				]
			},
			{
				path: '/bitcoin',
				label: 'Bitcoin'
			},
			{
				path: '/tools',
				label: 'Tools'
			},
			{
				path: '/blog',
				label: 'Blog'
			}]
	},
};
