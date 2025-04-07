// components/StatCard.js
import React from "react";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import Icon from "@mui/material/Icon";

const StatCard = ({ title, value, icon, bgColor, gradient, bgImage }) => {
  return (
    <Card
      sx={{
        width: 250,
        height: 140,
        borderRadius: 4,
        px: 2,
        py: 2,
        position: "relative",
        overflow: "hidden",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#fff",
        backgroundColor: "#26a69a", // fallback color
        boxShadow: 3,
      }}
    >
      {/* Top-right action icon */}
      <MDBox position="absolute" top={8} right={8}>
        <IconButton size="small" sx={{ color: "#fff" }}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </MDBox>

      {/* Content Row */}
      <MDBox display="flex" alignItems="center" gap={2}>
        <MDBox
          bgColor="rgba(255,255,255,0.2)"
          p={1.5}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Icon fontSize="medium" color="inherit">
            {icon}
          </Icon>
        </MDBox>
        <MDBox>
          <MDTypography
            variant="h6"
            fontWeight="medium"
            color="black"
            opacity={0.9}
          >
            {title}
          </MDTypography>
          <MDTypography variant="h5" fontWeight="bold" color="black">
            {value}
          </MDTypography>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default StatCard;
