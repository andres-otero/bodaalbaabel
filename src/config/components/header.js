// Configuration for the header component on all pages

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const headerData = {
  // List of links to be displayed in the header
  links: [
    {
      text: 'Inicio',
      href: '/',
    },
    {
      text: 'Alojamiento',
      href: '/travel-and-stay',
    },
    {
      text: 'Cuándo y dónde',
      href: '/schedule',
    },
    {
      text: 'Regalo',
      href: '/gifts',
    },
    {
      text: 'Por si te sobra tiempo',
      href: '/things-to-do',
    },
    {
      text: 'Dudas y sugerencias',
      href: '/faqs',
    },
    {
      text: 'Confirma tu asistencia',
      href: '/rsvp',
    },

    // // The blog link is a special case, it uses the getBlogPermalink function
    // {
    //   text: 'Blog',
    //   href: getBlogPermalink(),
    // },
  ],

  // List of buttons to be displayed in the header
  actions: [
    // {
    //   // text to display on the button
    //   text: 'Download',
    //   // link to go to when the button is clicked
    //   href: 'https://github.com/grantbirki/astrowind',
    //   // can be 'button', 'primary', or 'ghost'
    //   type: 'button',
    //   // HTML rel attribute
    //   rel: 'noopener',
    //   // HTML target attribute
    //   target: '_blank',
    // },
  ],
};

export default headerData;
