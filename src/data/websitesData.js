import analytics from '../assets/analytics.svg';
import ecommerce from '../assets/ecommerce.svg';
import outreach from '../assets/outreach.svg';
import seo from '../assets/seo.svg';

export const websitesMainText = [
  `Having a website is a necessity in today’s business world. They give you one central, 
  public location to let people know who you are, what you do, and why you’re the best at it.`,
  `From simply having your hours posted to having a full fledged online store, making yourself 
  as accessible as possible to users online drives growth and enables you to reach new customers.`,
];

export const websitesBlocks = [
  {
    heading: 'Analytics',
    text: [
      `Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal 
      hidden patterns and trends in your business, empowering you to make smarter decisions 
      with measurable effects.`,
    ],
    image: analytics,
    alt: 'bar chart',
    position: 'left',
  },
  {
    heading: 'E-Commerce',
    text: [
      `It’s no secret that people like to shop online.`,
      `In 2017 over $2.3 trillion was spent in e-commerce, and it’s time for your slice of that pie.`,
    ],
    image: ecommerce,
    alt: 'globe',
    position: 'right',
  },
  {
    heading: 'Outreach',
    text: [
      `Draw people in with a dazzling website. Showing off your products online is a great 
      way to help customers decide what’s right for them before visiting in person.`,
    ],
    image: outreach,
    alt: 'megaphone',
    position: 'left',
  },
  {
    heading: 'Search Engine Optimization',
    text: [
      `How often have you ever been to the second page of Google results?`,
      `If you’re like us, probably never.`,
      `Customers don’t go there either, so we make sure your website is visible on page one.`,
    ],
    image: seo,
    alt: 'computer on price piedestal',
    position: 'right',
  },
];
