import Homepage from '../views/Homepage/Homepage';
import Other from '../views/Other/Other';

const routes = [
    {
        path: "/home",
        component: Homepage,
        //layout: "/admin"
    },
    {
        path: "/other",
        component: Other,
        //layout: "/admin"
    },
]

export default routes;