import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import {
  homeIcon,
  basketIcon,
  ordersIcon,
  productsIcon,
  commentsIcon,
} from "../data";
import { StyledLink, StyledSideBar } from "../styles/style";

const Sidebar = () => {
  return (
    <StyledSideBar>
      <Stack width={"100%"} gap={"26px"} alignItems={"flex-end"}>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "white" : "blue")}
        >
          <StyledLink>
            {homeIcon}
            <Typography>Главная</Typography>
          </StyledLink>
        </NavLink>
        <NavLink
          to={"/orders"}
          className={({ isActive }) => (isActive ? "white" : "blue")}
        >
          <StyledLink>
            {ordersIcon}
            <Typography>Заказы</Typography>
          </StyledLink>
        </NavLink>
        <NavLink
          to={"/produts"}
          className={({ isActive }) => (isActive ? "white" : "blue")}
        >
          <StyledLink>
            {productsIcon}
            <Typography>Товары</Typography>
          </StyledLink>
        </NavLink>
        <NavLink
          to={"/comments"}
          className={({ isActive }) => (isActive ? "white" : "blue")}
        >
          <StyledLink>
            {commentsIcon}
            <Typography>Отзывы</Typography>
          </StyledLink>
        </NavLink>
        <NavLink
          to={"/order"}
          className={({ isActive }) => (isActive ? "white" : "blue")}
        >
          <StyledLink>
            {basketIcon}
            <Typography>Оформить заказ</Typography>
          </StyledLink>
        </NavLink>
      </Stack>
    </StyledSideBar>
  );
};

export default Sidebar;
