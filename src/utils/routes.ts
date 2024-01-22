import Login from "../pages/auth/login.tsx";
import Dashboard from "../pages/dashboard/dashboard.tsx";
import Sales from "../pages/sales/sales.tsx";
import { Route } from "../types/route.ts";

export const authRoutes : Array<Route>=[
    {name :"Login", path:'/*',page: Login}
]

export const routes : Array<Route>=[
    { name: "Dashboard" , path:"/", page : Dashboard },
    { name: "Sales" , path:"/sales", page : Sales },
    { name: "Products" , path:"/products", page : Dashboard },
]