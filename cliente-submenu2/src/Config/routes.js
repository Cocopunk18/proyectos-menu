import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { NotFound } from "../pages/General/NotFound/NotFound";
import { Listar } from "../pages/General/listar/Listar";


const GeneralRoutes = [
    { path: "/listar", component: Listar, layout: GeneralLayout },
    { path: "*", component: NotFound, layout: GeneralLayout },
];

const AllRoutesProject = [...GeneralRoutes];

export default AllRoutesProject;

