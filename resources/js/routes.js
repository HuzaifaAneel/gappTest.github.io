import UsersIndex from "./components/users/Index";
import UsersCreate from "./components/users/Create";
import UsersEdit from "./components/users/Edit";

import TeamsIndex from "./components/tems/Index";
import TeamsCreate from "./components/tems/Create";
import TeamsEdit from "./components/tems/Edit";

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
];