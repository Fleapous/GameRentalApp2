import { Home } from "./components/Home";
import {AboutMe} from "./components/AboutMe"
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {SignOut} from "./components/SignOut";
import {Admin} from "./components/Admin";

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
  },
  {
    path: 'Admin',
    element: <Admin/>
  }
];

export default AppRoutes;
