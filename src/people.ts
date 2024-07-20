export type PersonData = {
	givenName: string
	surName?: string
	publishProfile?: boolean
	avatar?: string
	mail?: string
	twitter?: string
	description: {
		[key: string]: string
	}
};

export const peopleData: PersonData[] = [
	{
		givenName: 'Martin',
		surName: 'Betz',
		publishProfile: true,
		avatar: '/assets/img/people/martin-betz.jpg',
		mail: 'info@utxo.solutions',
		twitter: null,
		description: {
			en: 'Co-Founder UTXO Solutions',
			de: 'Co-Founder UTXO Solutions',
		}
	},
	{
		givenName: 'Peter',
		surName: 'Rochel',
		publishProfile: true,
		avatar: '/assets/img/people/peter-rochel.jpg',
		mail: 'info@utxo.solutions',
		twitter: null,
		description: {
			en: 'Co-Founder UTXO Solutions',
			de: 'Co-Founder UTXO Solutions',
		}
	}
]
