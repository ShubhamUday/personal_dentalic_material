// @mui material components
import Grid from "@mui/material/Grid";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

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
      <MDBox p={3}>
        {/* First Row: Stats and Buttons */}
        <Grid container spacing={3} alignItems="center">
          {/* Stats Cards */}
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

          {/* Buttons */}
          <Grid item xs={12} md={3}>
            <MDBox
              display="flex"
              justifyContent="flex-end"
              gap={2}
              flexWrap="wrap"
            >
              <MDButton color="success" variant="gradient" fullWidth>
                + Make an Appointment
              </MDButton>
              <MDButton color="info" variant="gradient" fullWidth>
                + Add Patient
              </MDButton>
            </MDBox>
          </Grid>
        </Grid>

        {/* Second Row: Chart & Side Panel */}
        <Grid container spacing={3} mt={2}>
          {/* Chart */}
          <Grid item xs={12} lg={8}>
            <SmoothLineChart />
          </Grid>

          {/* Right Side Panel */}
          <Grid item xs={12} lg={4}>
            <UpcomingAppointments />
          </Grid>
        </Grid>

        {/* Third Row: Table & Reviews */}
        <Grid container spacing={3} mt={2}>
          {/* Table */}
          <Grid item xs={12} lg={8}>
            <AppointmentToday />
          </Grid>

          {/* Reviews */}
          <Grid item xs={12} lg={4}>
            <PatientReview />
          </Grid>
        </Grid>
      </MDBox>
    </DashboardLayout>
  );
}

export default Dashboard;
