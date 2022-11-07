import { Box, Typography } from "@mui/material";
import { Stack, styled } from "@mui/system";

export const StyledSideBar = styled(Stack)({
  justifyContent: "space-between",
  background: "#3D639D",
  width: "300px",
  borderRadius: "0px 30px 0px 0px",
  paddingTop: "54px",
});

export const StyledLink = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  padding: "1rem 2.5rem",
  width: "270px",
  gap: "15px",
});

export const MainWrapper = styled("div")({
  height: "fit-content",
  width: "80%",
  marginLeft: "20px",
  padding: "20px",
});

export const StyledTypoNav = styled(Typography)({
  lineHeight: "14px",
  fontSize: "12px",
});

export const OrderTitle = styled(Typography)({
  fontSize: "22px",
  color: "#3D639D",
  fontWeight: "600",
  lineHeight: "27px",
  marginTop: "30px",
});

export const SearchBar = styled("input")({
  width: "100%",
  flex: "1",
  padding: "16px 20px 15px 20px",
  border: "none",
  borderRadius: "26px 0 0 26px",
  ":focus": {
    outline: "none",
  },
  "::placeholder": {
    color: "#bbc2d0",
  },
});

export const ItemWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  flexWrap: "wrap",
  width: "100%",
});

export const CardWrapper = styled(Stack)({
  position: "relative",
  padding: "12px",
  width: "244px",
  height: "280px",
  background: "white",
  borderRadius: "10px",
  cursor: "pointer",
});

export const ImageBox = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "220px",
  height: "168px",
  background: "#F7F7F7",
  alignSelf: "center",
  borderRadius: "6px",
});

export const IconsBox = styled("div")({
  borderRadius: "6px",
  padding: "6px 10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "36px",
  height: "28px",
});

export const ProductWrapper = styled("div")({
  display: "flex",
  flexDirection: "column",
  margin: "64px 28px 30px 28px",
  padding: "30px",
  background: "white",
  borderRadius: "16px",
});
