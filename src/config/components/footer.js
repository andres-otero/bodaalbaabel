// Configuration for the footer component on all pages

// ----------- imports -----------
// import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const footerData = {
  // List of links to be displayed in the footer
  links: [
    {
      // The title of the section
      title: 'Detalles',
      // List of links to be displayed in the section
      links: [
        { text: 'Cuándo y dónde', href: '/schedule' },
        { text: 'Por si te sobre tiempo', href: '/things-to-do' },
        { text: 'Alojamiento', href: '/travel-and-stay' },
        { text: 'Dudas y sugerencias', href: '/faqs' },
      ],
    },
    {
      title: 'Invitación',
      links: [
        { text: 'Confirma tu asistencia', href: '/rsvp' },
      ],
    },
    {
      title: 'Enlaces',
      links: [{ text: 'Regalo', href: '/gifts' }],
    },
  ],

  // Secondary links to be displayed in the footer
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],

};

export default footerData;
