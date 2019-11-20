import Homepage from '../views/Homepage/Homepage';
import Other from '../views/Other/Other';
import BloodFinder from '../views/BloodFinder/BloodFinder';
import HealthRecords from '../views/HealthRecords/HealthRecords';
import InsuranceList from '../Components/Insurances/InsuranceList.js'
import BookMedicine from '../views/BookMedicine/BookMedicine';
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
    },
    {
        path: "/health-insurances",
        component: InsuranceList,
    },
    {
        path:"/book-medicines",
        component: BookMedicine
    }
]

export default routes;