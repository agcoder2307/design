import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { AccountCircle, Notifications } from "@mui/icons-material";
import React from "react";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      justifyContent={"space-between"}
      height="6vh"
      alignItems="center"
      bgcolor={"white"}
    >
      <Typography variant="h5" component="p" marginLeft={"3%"}>
        Logo
      </Typography>

      <Stack
        direction={"row"}
        alignItems="center"
        sx={{ width: "20%", height: "100%" }}
      >
        <Box sx={{ position: "relative" }}>
          <Notifications
            sx={{ marginRight: "1.5rem", color: "#BBC2D0", cursor: "pointer" }}
          />
          <span className="notification">1</span>
        </Box>
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            paddingY: "1rem",
            flex: "1",
            background: "#3D639D",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
            color: "white",
            borderRadius: "0px 0px 0px 30px",
          }}
        >
          <Typography>Личный кабинет</Typography>
          <AccountCircle />
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Navbar;
