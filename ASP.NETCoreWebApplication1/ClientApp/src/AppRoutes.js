import { Home } from "./components/Home";
import {AboutMe} from "./components/AboutMe"
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {SignOut} from "./components/SignOut";

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
  },
  {
    path: 'Register',
    element: <Register />
  },
  {
    path: 'SignOut',
    element: <SignOut />
  }
];

export default AppRoutes;
