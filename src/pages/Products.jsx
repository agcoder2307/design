import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import ReactPaginate from "react-paginate";
import {
  ItemWrapper,
  MainWrapper,
  OrderTitle,
  SearchBar,
  StyledTypoNav,
} from "../styles/style";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import Card from "../components/Card";
import { data } from "../data";

const Products = () => {
  return (
    <MainWrapper>
      <Stack
        sx={{
          width: "100%",
          background: "#F3F5F8",
          padding: "20px 28px 30px 28px",
          borderRadius: " 6px",
        }}
      >
        <Stack direction={"row"} gap="0.2rem" alignItems={"center"}>
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "not_active")}
            to="/orders"
          >
            <StyledTypoNav>Заявки</StyledTypoNav>
          </NavLink>
          <ArrowForwardIos
            sx={{ color: "#bbc2d0", fontWeight: "400", fontSize: "12px" }}
          />
          <NavLink
            className={({ isActive }) => (isActive ? "active" : "not_active")}
            to="/order"
          >
            <StyledTypoNav> Оформить заказ</StyledTypoNav>
          </NavLink>
        </Stack>
        <OrderTitle>Оформить заказ</OrderTitle>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            marginTop: "20px",
          }}
        >
          <SearchBar placeholder="Поиск по названию товара" />
          <button className="search_btn">
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.73876 0C15.1088 0 19.4768 4.368 19.4768 9.738C19.4768 12.2715 18.5045 14.5823 16.9134 16.3165L20.0442 19.4407C20.3372 19.7337 20.3382 20.2077 20.0452 20.5007C19.8992 20.6487 19.7062 20.7217 19.5142 20.7217C19.3232 20.7217 19.1312 20.6487 18.9842 20.5027L15.8156 17.343C14.1488 18.6778 12.0354 19.477 9.73876 19.477C4.36876 19.477 -0.000244141 15.108 -0.000244141 9.738C-0.000244141 4.368 4.36876 0 9.73876 0ZM9.73876 1.5C5.19576 1.5 1.49976 5.195 1.49976 9.738C1.49976 14.281 5.19576 17.977 9.73876 17.977C14.2808 17.977 17.9768 14.281 17.9768 9.738C17.9768 5.195 14.2808 1.5 9.73876 1.5Z"
                fill="white"
              />
            </svg>
          </button>
        </Box>

        <Typography mt="30px" mb={"20px"} fontSize="16px" fontWeight="600">
          Все товары (121)
        </Typography>
        <ItemWrapper>
          {data.map((item, i) => (
            <Card
              id={item.id}
              price={item.price}
              exchange={item.exchange}
              iphoneDiscount={item.iphoneDiscount}
              deviceDiscount={item.deviceDiscount}
              discountPrice={item.discountPrice}
              gift={item.gift}
              title={item.title}
              image={item.image}
              key={i}
            />
          ))}
        </ItemWrapper>
        <ReactPaginate
          className="paginate"
          nextClassName="next_paginate"
          previousClassName="prev_paginate"
          activeClassName="active_paginate"
          pageClassName="page_paginate"
          breakLabel="..."
          nextLabel={<ArrowForwardIos />}
          pageRangeDisplayed={3}
          pageCount={10}
          previousLabel={<ArrowBackIos />}
          renderOnZeroPageCount={null}
        />
      </Stack>
    </MainWrapper>
  );
};

export default Products;
