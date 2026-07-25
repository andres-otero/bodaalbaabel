// Configuration for the header component on all pages

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const headerData = {
  // List of links to be displayed in the header
  links: [
    {
      text: 'Inicio',
      href: '`${import.meta.env.BASE_URL}/',
    },
    {
      text: 'Alojamiento',
      href: '`${import.meta.env.BASE_URL}/travel-and-stay',
    },
    {
      text: 'Cuándo y dónde',
      href: '`${import.meta.env.BASE_URL}/schedule',
    },
    {
      text: 'Regalo',
      href: '`${import.meta.env.BASE_URL}/gifts',
    },
    {
      text: 'Por si te sobra tiempo',
      href: '`${import.meta.env.BASE_URL}/things-to-do',
    },
    {
      text: 'Dudas y sugerencias',
      href: '`${import.meta.env.BASE_URL}/faqs',
    },
    {
      text: 'Confirma tu asistencia',
      href: '`${import.meta.env.BASE_URL}/rsvp',
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
