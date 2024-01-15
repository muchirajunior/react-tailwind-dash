import Dashboard from "../pages/dashboard/dashboard.tsx";
import sales from "../pages/sales/sales.tsx";

export type Route={
    name : string;
    path: string;
    page : React.FC;
}

export const routes : Array<Route>=[
    { name: "Dashboard" , path:"/", page : Dashboard },
    { name: "Sales" , path:"/sales", page : sales },
    { name: "Products" , path:"/products", page : Dashboard },
]