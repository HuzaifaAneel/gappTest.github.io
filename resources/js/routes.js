import UsersIndex from "./components/users/Index";
import UsersCreate from "./components/users/Create";
import UsersEdit from "./components/users/Edit";

import TeamsIndex from "./components/tems/Index";
import TeamsCreate from "./components/tems/Create";
import TeamsEdit from "./components/tems/Edit";

import DepartmentsIndex from "./components/departments/Index";
import DepartmentsCreate from "./components/departments/Create";
import DepartmentsEdit from "./components/departments/Edit";

export const routes = [
    {
        path: "/users",
        name: "UsersIndex",
        component: UsersIndex
    },
    {
        path: "/users/create",
        name: "UsersCreate",
        component: UsersCreate
    },
    {
        path: "/users/:id",
        name: "UsersEdit",
        component: UsersEdit
    },

    {
        path: "/teams",
        name: "TeamsIndex",
        component: TeamsIndex
    },
    {
        path: "/teams/create",
        name: "TeamsCreate",
        component: TeamsCreate
    },
    {
        path: "/teams/:id",
        name: "TeamsEdit",
        component: TeamsEdit
    },


    {
        path: "/departments",
        name: "DepartmentsIndex",
        component: DepartmentsIndex
    },
    {
        path: "/departments/create",
        name: "DepartmentsCreate",
        component: DepartmentsCreate
    },
    {
        path: "/departments/:id",
        name: "DepartmentsEdit",
        component: DepartmentsEdit
    },
];