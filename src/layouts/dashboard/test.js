// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import StatCard from "examples/Cards/StatCards";
import SmoothLineChart from "examples/Charts/LineCharts/SmoothLineChart";
import AppointmentToday from "examples/Tables/AppointmentTable";
import UpcomingAppointments from "examples/Calenders/AppointmentsCalender";
import PatientReview from "examples/Tables/ReviewTable";


function Dashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={3}>
            <StatCard
              title="Total Patients"
              value="436"
              icon="group"
              bgColor="#26a69a"
              bgImage="https://cdn.pixabay.com/photo/2021/10/12/09/15/doctor-6702991_640.png"
              gradient="#4db6ac"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatCard
              title="Appointments"
              value="436"
              icon="calendar_month"
              bgColor="#26a69a"
              bgImage="https://media.istockphoto.com/id/1241712498/vector/businessman-planning-events-deadlines-and-agenda.jpg?s=612x612&w=0&k=20&c=_YYsu8T3tK8Uc0W3zUQTqvkkNf-4PU1JCjHYBbXZ1ok="
              gradient="#4db6ac"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <StatCard
              title="Total Operations"
              value="436"
              icon="vaccines"
              bgColor="#26a69a"
              bgImage="https://media.istockphoto.com/id/1251257207/vector/surgical-team-performing-operation-on-patient-in-hospital.jpg?s=612x612&w=0&k=20&c=7oT35x0I92WFgKafibNCeYWYgUjKtljhC-nwk2o66M0="
              gradient="#4db6ac"
            />
          </Grid>
        </Grid>
        <MDBox mt={4.5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4} width="100%">
              <MDBox mb={3}>
                <SmoothLineChart />
              </MDBox>
            </Grid>
          </Grid>
        </MDBox>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <AppointmentToday />
          </Grid>
        </Grid>
      </MDBox>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <UpcomingAppointments />
        </Grid>
      </Grid>
      <PatientReview/>
    </DashboardLayout>
  );
}

export default Dashboard;
