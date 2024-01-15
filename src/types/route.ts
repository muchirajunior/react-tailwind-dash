import React from "react";

export type Route={
    name : String;
    path: String;
    page : React.FC;
}