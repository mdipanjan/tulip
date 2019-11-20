import Homepage from '../views/Homepage/Homepage';
import Other from '../views/Other/Other';
import BloodFinder from '../views/BloodFinder/BloodFinder';
import HealthRecords from '../views/HealthRecords/HealthRecords';
const routes = [
    {
        path: "/home",
        component: Homepage,
    },
    {
        path: "/other",
        component: Other,
    },
    {
        path: "/blood-finder",
        component: BloodFinder,
    },
    {
        path: "/health-records",
        component: HealthRecords,
    }
]

export default routes;