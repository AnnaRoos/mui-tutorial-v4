import ContactPage from '../pages/ContactPage';
import HomePage from '../pages/HomePage';

import customSoftwareIcon from '../assets/customSoftwareIcon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import websiteIcon from '../assets/websiteIcon.svg';

export const pages = [
  {
    title: 'Home',
    page: HomePage,
    path: '/',
    tabItem: true,
    drawerItem: true,
    activeIndex: 0,
    footerBox: 1,
  },
  {
    title: 'Services',
    path: '/services',
    tabItem: true,
    menuItem: true,
    attachMenu: true,
    drawerItem: true,
    activeIndex: 1,
    selectedIndex: 0,
    footerBox: 2,
  },
  {
    title: 'The Revolution',
    path: '/revolution',
    tabItem: true,
    drawerItem: true,
    activeIndex: 2,
    footerBox: 3,
  },
  {
    title: 'About Us',
    path: '/about',
    tabItem: true,
    drawerItem: true,
    activeIndex: 3,
    footerBox: 4,
  },
  {
    title: 'Contact Us',
    page: ContactPage,
    path: '/contact',
    tabItem: true,
    drawerItem: true,
    activeIndex: 4,
    footerBox: 5,
  },
  {
    title: 'Custom Software',
    path: '/customsoftware',
    menuItem: true,
    activeIndex: 1,
    selectedIndex: 1,
    footerBox: 2,
    servicesBlock: {
      subtitle1: 'Save Energy. Save Time. Save Money.',
      subtitle2: 'Complete digital solutions, from investigation to ',
      span: 'celebration.',
      icon: customSoftwareIcon,
      alt: 'Customsoftare icon',
    },
  },
  {
    title: 'iOS/Android Apps',
    path: '/mobileapps',
    menuItem: true,
    activeIndex: 1,
    selectedIndex: 2,
    footerBox: 2,
    servicesBlock: {
      subtitle1: 'Extend Functionality. Extend Access. Increase Engagement.',
      subtitle2:
        'Integrate your web experience or create a standalone app with either mobile platform.',
      icon: mobileIcon,
      alt: 'Mobile app icon',
    },
  },
  {
    title: 'Websites',
    path: '/websites',
    menuItem: true,
    activeIndex: 1,
    selectedIndex: 3,
    footerBox: 2,
    servicesBlock: {
      subtitle1: 'Reach More. Discover More. Sell more.',
      subtitle2: 'Optimized for Search Engines, built for speed.',
      icon: websiteIcon,
      alt: 'website development icon',
    },
  },
  {
    title: 'Free Estimate',
    path: '/estimate',
    activeIndex: 5,
    drawerItem: true,
  },
  { title: 'Vision', path: '/vision', activeIndex: 2, footerBox: 3 },
  { title: 'Technology', path: '/technology', activeIndex: 2, footerBox: 3 },
  { title: 'Process', path: '/process', activeIndex: 2, footerBox: 3 },
  {
    title: 'Mission Statement',
    path: '/mission',
    activeIndex: 3,
    footerBox: 4,
  },
  { title: 'History', path: '/history', activeIndex: 3, footerBox: 4 },
  { title: 'Team', path: '/team', activeIndex: 3, footerBox: 4 },
];
