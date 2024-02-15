import { Home } from "./components/Home";
import {AboutMe} from "./components/AboutMe"

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: 'AboutMe',
    element: <AboutMe />
  }
];

export default AppRoutes;
