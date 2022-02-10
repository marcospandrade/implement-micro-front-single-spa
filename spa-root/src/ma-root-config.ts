import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@ma/react-single",
  app: () => System.import("@ma/react-single"),
  activeWhen: (location) => location.pathname === "/react-single",
});

registerApplication({
  name: "@ma/react-multiples",
  app: () => System.import("@ma/react-multiples"),
  activeWhen: ["/react-multiples"],
});

registerApplication({
  name: "@ma/react-route-todo",
  app: () => System.import("@ma/react-route-todo"),
  activeWhen: (location) => location.pathname === "/react-route-todo",
});

registerApplication({
  name: "@ma/react-lazy",
  app: () => System.import("@ma/react-lazy"),
  activeWhen: ["/react-lazy"],
});

registerApplication({
  name: "@ma/react-header",
  app: () => System.import("@ma/react-header"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
