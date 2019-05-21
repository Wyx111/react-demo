import Business from './pages/Business/index';
import Traffic from './pages/Traffic/index';
import Datacenter from './pages/Datacenter/index';

const routerConfig = [
  {
    path: '/business',
    component: Business,
  },
  {
    path: '/traffic',
    component: Traffic,
  },
  {
    path: '/userstatic',
    component: Business,
  },
  {
    path: '/activities',
    component: Traffic,
  },
  {
    path: '/datacenter',
    component: Datacenter,
  },
];

export default routerConfig;
