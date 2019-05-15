import { PATHS } from "./Paths";
import HomeContainer from "../containers/Home";
import AboutContainer from "../containers/About";

export const ROUTES = Object.freeze([
  {
    path: PATHS.HOME,
    component: HomeContainer
  },
  {
    path: PATHS.ABOUT,
    component: AboutContainer
  }
]);
