import { GeneralLayout } from "../layouts/GeneralLayout/GeneralLayout";
import { AdminHome } from "../pages/Admin/AdminHome";
import { SignIn } from "../pages/Admin/SignIn";
import { Listar } from "../pages/General/Listar/Listar";
//import RegistroForm from "../components/MenuComponents/RegistroForm/RegistroForm";

import { Contact } from "../pages/General/Contact";
import { Home } from "../pages/General/Home";
import { NotFound } from "../pages/General/NotFound/NotFound";

const AdminRoutes = [
  { path: "/admin", component: AdminHome, layout: GeneralLayout },
  { path: "/admin/sign-in", component: SignIn, layout: GeneralLayout },
];
const GeneralRoutes = [
//  { path: "/registro", component: RegistroForm, layout: GeneralLayout },
  { path: "/", component: Home, layout: GeneralLayout },
  { path: "/contact", component: Contact, layout: GeneralLayout },
  { path: "*", component: NotFound, layout: GeneralLayout },
  { path: "/listar", component: Listar, layout: GeneralLayout },
];
const AllRoutesProject = [...AdminRoutes, ...GeneralRoutes];

export default AllRoutesProject;
