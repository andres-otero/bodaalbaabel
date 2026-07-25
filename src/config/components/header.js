// Configuration for the header component on all pages

const base = import.meta.env.BASE_URL;

const headerData = {
  links: [
    {
      text: 'Inicio',
      href: base,
    },
    {
      text: 'Alojamiento',
      href: `${base}/travel-and-stay`,
    },
    {
      text: 'Cuándo y dónde',
      href: `${base}/schedule`,
    },
    {
      text: 'Regalo',
      href: `${base}/gifts`,
    },
    {
      text: 'Por si te sobra tiempo',
      href: `${base}/things-to-do`,
    },
    {
      text: 'Dudas y sugerencias',
      href: `${base}/faqs`,
    },
    {
      text: 'Confirma tu asistencia',
      href: `${base}/rsvp`,
    },
  ],

  actions: [],
};

export default headerData;