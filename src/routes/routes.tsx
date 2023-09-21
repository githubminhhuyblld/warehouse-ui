import {FC, Fragment} from 'react';
import config from "~/config";
import Home from "~/pages/Home/Home.tsx";
import Login from "~/pages/Login/Login.tsx";



type LayoutComponent = FC | typeof Fragment;

interface RouteConfig {
    path: string;
    component: FC;
    layout?: LayoutComponent | null;
}


const publicRoutes: RouteConfig[] = [
    {path: "/", component: Home},
    {path: config.routes.home, component: Home},
    {path: config.routes.login, component: Login, layout: null},
]


export {publicRoutes};
