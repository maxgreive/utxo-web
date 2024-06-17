export const COLORS = ["#7AC6BA", "#283583"]

export const MENUS = [
  {
    label: "nav.home",
    link: "/"
  },
  {
    label: "nav.services",
    link: "/services",
    children: [
      {
        label: "nav.jobs-to-be-done",
        link: "/services/jobs-to-be-done-training",
        new: false
      },
      {
        label: "nav.customer-research-sprints",
        link: "/services/customer-research-sprints",
        new: false
      }
    ]
  },
  {
    label: "nav.blog",
    link: "/blog"
  },
  {
    label: "nav.contact",
    link: "/contact"
  }
]

export const SOCIALS = [
  {
    link: '',
    icon: 'fa-twitter'
  },
  {
    link: 'https://www.linkedin.com/company/utxosolutions/',
    icon: 'fa-linkedin'
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
