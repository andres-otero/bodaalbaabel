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
      href: `/travel-and-stay`,
    },
    {
      text: 'Cuándo y dónde',
      href: `/schedule`,
    },
    {
      text: 'Regalo',
      href: `/gifts`,
    },
    {
      text: 'Por si te sobra tiempo',
      href: `/things-to-do`,
    },
    {
      text: 'Dudas y sugerencias',
      href: `/faqs`,
    },
    {
      text: 'Confirma tu asistencia',
      href: `/rsvp`,
    },
  ],

  actions: [],
};

export default headerData;