
import configs from '../configs/index.jsx';

// Components here
import Home from '../pages/Home';
import Search from '../pages/Search';
import PhimBo from '../pages/PhimBo';
import Video from '../pages/Video';
import Category from '../pages/Category';
import Anime from '../pages/Anime';
import Single from '../pages/Single';

// Routes here

const publicRoutes = [
  {
    path: configs.routes.trangchu,
    component: Home,
    exact: true,
  },
  {
    path: configs.routes.timkiem,
    component: Search,
    exact: true,
  },
  {
    path: configs.routes.phimbo,
    component: PhimBo,
    exact: true,
  },
  {
    path: configs.routes.video,
    component: Video,
    exact: true,
  },
  {
    path: configs.routes.category,
    component: Category,
    exact: true,
  },
  {
    path: configs.routes.anime,
    component: Anime,
    exact: true,
  },
  {
    path: configs.routes.single,
    component: Single,
    exact: true,
  },
];

const privateRoutes = [
  // add routes private here
]

export {publicRoutes, privateRoutes};