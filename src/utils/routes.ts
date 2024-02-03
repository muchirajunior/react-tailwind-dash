import Login from "../pages/auth/login.tsx";
import Dashboard from "../pages/dashboard/dashboard.tsx";
import Sales from "../pages/sales/sales.tsx";
import { Route } from "../types/route.ts";
import * as Icons from 'react-icons/md';

export const authRoutes : Array<Route>=[
    {name :"Login", path:'/*',page: Login, icon:Icons.MdLabel}
]

export const routes : Array<Route>=[
    { name: "Dashboard" , path:"/", page : Dashboard, icon: Icons.MdDashboard },
    { name: "Sales" , path:"/sales", page : Sales , icon: Icons.MdShop },
    { name: "Products" , path:"/products", page : Dashboard, icon: Icons.MdShoppingBasket },
]