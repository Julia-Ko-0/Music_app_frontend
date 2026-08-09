import { route } from "@typeroute/router";

import { Home } from "../components/Home/Home";
import { Library } from "../components/Library/Library";

const app = route("/");

export const homeRoute = app.index(Home);
export const libraryRoute = app.route("/library").component(Library);

export const routes = {
  home: homeRoute,
  library: libraryRoute,
};
