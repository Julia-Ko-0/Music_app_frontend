import { middleware } from "@typeroute/router";
import { Home } from "../components/Home/Home";
const home = middleware().component(Home);
