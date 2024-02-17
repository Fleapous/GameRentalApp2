import { Home } from "./components/Home";
import {AboutMe} from "./components/AboutMe"
import {Login} from "./components/Login";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: 'AboutMe',
    element: <AboutMe />
  },
  {
    path: 'Login',
    element: <Login />
  }
];

export default AppRoutes;
