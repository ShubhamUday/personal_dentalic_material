// Material Dashboard 2 React layouts
import Dashboard from "layouts/dashboard";

// @mui icons
import Icon from "@mui/material/Icon";

const routes = [
  {
    type: "collapse",
    name: "Dashboard",
    key: "dashboard",
    icon: <Icon fontSize="small">dashboard</Icon>,
    route: "/dashboard",
    component: <Dashboard />,
  },
  {
    type: "collapse",
    name: "My Clinic",
    key: "myClinic",
    icon: <Icon fontSize="small">home</Icon>,
    route: "/myClinic",
  },
  {
    type: "collapse",
    name: "My Appointment",
    key: "myAppointment",
    icon: <Icon fontSize="small">calendar_month</Icon>,
    route: "/myAppointment",
  },
  {
    type: "collapse",
    name: "My Patients",
    key: "myPatients",
    icon: <Icon fontSize="small">group</Icon>,
    route: "/myPatients",
  },
  {
    type: "collapse",
    name: "Finance",
    key: "finance",
    icon: <Icon fontSize="small">account_balance_wallet</Icon>,
    route: "/finance",
  },
  {
    type: "collapse",
    name: "Manage Users",
    key: "manageUsers",
    icon: <Icon fontSize="small">groups</Icon>,
    route: "/manageUsers",
  },
  {
    type: "collapse",
    name: "Download Data",
    key: "downloadData",
    icon: <Icon fontSize="small">cloud_download</Icon>,
    route: "/downloadData",
  },
  {
    type: "collapse",
    name: "Settings",
    key: "settings",
    icon: <Icon fontSize="small">settings</Icon>,
    route: "/settings",
  },{
    type: "collapse",
    name: "Send Feedback",
    key: "sendFeedback",
    icon: <Icon fontSize="small">mail</Icon>,
    route: "/sendFeedback",
  },{
    type: "collapse",
    name: "Share to Friends",
    key: "shareToFriends",
    icon: <Icon fontSize="small">share</Icon>,
    route: "/shareToFriends",
  },
];

export default routes;
