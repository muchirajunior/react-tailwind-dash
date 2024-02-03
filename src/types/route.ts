import React from "react";
import { IconType } from "react-icons";



export type Route={
    name : string;
    path: string;
    page : React.FC;
    icon: IconType ;
}