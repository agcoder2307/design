import { Checkbox, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Discount = ({ checked = false, title, price, icon, sx, ime }) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={sx}
    >
      <Stack direction="row" gap="16px">
        {icon}
        <Stack gap="10px">
          <Typography
            fontWeight="400"
            fontSize="18px"
            lineHeight="18px"
            color="#262728"
          >
            {title}
          </Typography>
          {ime && (
            <Typography
              fontWeight="400"
              fontSize="15px"
              lineHeight="17.4px"
              color="#262728"
            >
              {ime}
            </Typography>
          )}
          <Typography
            fontWeight="400"
            fontSize={ime ? "14px" : "18px"}
            lineHeight="18px"
            color="#BBC2D0"
          >
            {price}
          </Typography>
        </Stack>
      </Stack>
      <Checkbox
        defaultChecked={checked}
        color="success"
        size="large"
        sx={{
          color: "#BBC2D0",

          outline: "none",
          "&.Mui-checked": {
            color: "#00C48C",
          },
          "& .MuiSvgIcon-root": { fontSize: 28 },
        }}
      />
    </Stack>
  );
};

export default Discount;
