// Hero configuration on the homepage

const hero = {
  // If the entire hero section should be enabled or not
  enabled: true,

  // Hero title with HTML support
  title: {
    enabled: true, // If the title should be enabled or not
    text: `<span class="fancy">Abel</span><span class="extra-fancy extra-fancy-spaced"> & </span><span class="fancy">Alba</span>`,
  },

  // Hero subtitle with HTML support
  subtitle: {
    enabled: true, // If the subtitle should be enabled or not
    text: `<span class="fancy"> ¡Nos casamos!<br><br>Pazo de Santa Cruz, Bueu, Galicia
    <br>17 de Julio de 2027
    </span>`,
  },

  // Hero image
  image: {
    // If the image should be enabled or not
    enabled: true,
    // Image source
    src: import('~/assets/images/hero.png'),
    // Image alt text
    alt: 'Alba y Abel',
  },
};

export default hero;
