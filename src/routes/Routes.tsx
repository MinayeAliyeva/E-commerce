import { RouteObject, useRoutes } from "react-router-dom";
import HomeLayout from "../components/container/HomeLayout";
import Products from "../components/products";
import Basket from "../components/products/basket";

export type MyRouterObject = RouteObject;
const routes = [
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: "basket",
        element: <Basket />,
      },
    ],
  },
];

export const authMap = (routes: MyRouterObject[]) => {
  return routes.map((route) => {
    return route;
  });
};

export const useAuthMapRoutes = () => {
  return useRoutes(authMap(routes));
};
