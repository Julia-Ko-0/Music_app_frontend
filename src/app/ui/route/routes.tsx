import { route } from "@typeroute/router";

import { HomeScreen } from "../screens/HomeScreen";
import { LibraryScreen } from "../screens/LibraryScreen";

const app = route("/");

export const homeRoute = app.index(HomeScreen);
export const libraryRoute = app.route("/library").component(LibraryScreen);

export const routes = {
  home: homeRoute,
  library: libraryRoute,
};

export type AppRoute = keyof typeof routes;
