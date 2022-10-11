interface AllowedRouteNames {
  Home: string;
  Rent: string;
  Sale: string;
}

type routeNameKeys = keyof AllowedRouteNames;

export default interface RouteItem {
  path: string;
  name: routeNameKeys;
  component: () => Promise<typeof import("*.vue")>;
}
