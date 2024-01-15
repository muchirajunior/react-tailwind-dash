import React from "react";

export type Route={
    name : string;
    path: string;
    page : React.FC;
}