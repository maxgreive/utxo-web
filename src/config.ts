export const COLORS = ["#7AC6BA", "#283583"]

type MenuItem = Readonly<{
  path: string,
  label: string
}>

export type navigationItem = Readonly<{
  title: string,
  items: Array<MenuItem>,
}>

export const footerMenu: Record<string, Record<string, navigationItem[]>> = {
	en: {
		items: [
      {
        title: "Menu",
        items: [
          {
            label: "Imprint",
            path: "/en/imprint",
          }
        ]
      },
      {
        title: "Quick Links",
        items: [
          {
            label: "Contact",
            path: "/en/contact",
          }
        ]
      }
    ]
	},
	de: {
		items: [
      {
        title: "Menü",
        items: [
          {
            label: "Impressum",
            path: "/impressum",
          }
        ]
      },
      {
        title: "Quick Links",
        items: [
          {
            label: "Kontakt",
            path: "/kontakt",
          }
        ]
      }
    ]
	},
};

export const SOCIALS = [
  {
    link: 'https://www.tiktok.com/@utxo.solutions',
    icon: 'fa-tiktok'
  },
  {
    link: 'https://www.linkedin.com/company/utxosolutions/',
    icon: 'fa-linkedin'
  },
  {
    link: 'https://www.youtube.com/@utxo.solutions',
    icon: 'fa-youtube'
  }
]

export const BRANDS = [
  {
    image: '/assets/img/logos/brand-steadybit.png',
    name: 'Steadybit'
  },
  {
    image: '/assets/img/logos/brand-eduapes.png',
    name: 'Eduapes'
  },
  {
    image: '/assets/img/logos/brand-emlak.png',
    name: 'Emlak'
  },
  {
    image: '/assets/img/logos/brand-tuev.png',
    name: 'TÜV Rheinland'
  },
  {
    image: '/assets/img/logos/brand-dittmar.png',
    name: 'Dittmar & Friends'
  },
  {
    image: '/assets/img/logos/brand-pwc.png',
    name: 'PWC'
  },
]
