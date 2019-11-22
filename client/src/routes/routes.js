import Homepage from '../views/Homepage/Homepage';
import Other from '../views/Other/Other';
import BloodFinder from '../views/BloodFinder/BloodFinder';
import HealthRecords from '../views/HealthRecords/HealthRecords';
import InsuranceList from '../Components/Insurances/InsuranceList.js'
import BookMedicine from '../views/BookMedicine/BookMedicine';
import BloodFinderDetails from '../views/BloodFinder/BloodFinderDetails';
import LabTests from '../views/LabTests/LabTests';
import DoctorsList from '../Components/DoctorsList/DoctorsList';
import DoctorCategories from '../Components/DoctorCategories/DoctorCategories';

const routes = [
    {
        path: "/home",
        component: Homepage,
    },
    {
        path: "/doctorslist",
        component: DoctorsList,
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
    },
    {
        path:"/blood-details",
        component: BloodFinderDetails 
    },
    {
        path:"/lab-tests",
        component: LabTests 
    },
    {
        path:"/doctors",
        component: DoctorCategories 
    },

]

export default routes;