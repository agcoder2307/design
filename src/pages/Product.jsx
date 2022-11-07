import {
  ArrowForwardIos,
  Circle,
  KeyboardArrowRight,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import React, { useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import {
  ImageBox,
  MainWrapper,
  OrderTitle,
  ProductWrapper,
  StyledTypoNav,
} from "../styles/style";
import { Box, Button, Typography } from "@mui/material";
import Discount from "../components/Discount";
import {
  exchangeIconBox,
  deviceIconBox,
  iphoneIconBox,
  giftIconBox,
  data,
  basketIcon,
} from "../data";

const circles = [
  { color: "#3D639D" },
  { color: "#BBC2D0" },
  { color: "#BBC2D0" },
  { color: "#BBC2D0" },
  { color: "#BBC2D0" },
];

const Product = () => {
  const { prId } = useParams();
  const fetchData = data.find((item) => item.id === prId);
  const [basketCount, setBasketCount] = useState(0);
  return (
    <MainWrapper>
      <Stack
        sx={{
          width: "100%",
          background: "#F3F5F8",
          padding: "20px 28px 30px 28px",
          borderRadius: "6px",
        }}
      >
        <Stack direction={"row"} gap="0.2rem" alignItems={"center"}>
          <Link className={"not_active"} to="/orders">
            <StyledTypoNav>Заявки</StyledTypoNav>
          </Link>
          <ArrowForwardIos
            sx={{ color: "#bbc2d0", fontWeight: "400", fontSize: "12px" }}
          />
          <Link to={"/order"} className="not_active">
            <StyledTypoNav> Оформить заказ</StyledTypoNav>
          </Link>
          <ArrowForwardIos
            sx={{ color: "#bbc2d0", fontWeight: "400", fontSize: "12px" }}
          />
          <NavLink className="active" to={`/order/${prId}`}>
            <StyledTypoNav>{fetchData.title}</StyledTypoNav>
          </NavLink>
        </Stack>
        <ProductWrapper>
          <OrderTitle sx={{ marginTop: "0" }}>{fetchData.title}</OrderTitle>
          <Stack
            direction={"row"}
            width="100%"
            marginTop="30px"
            gap="20px"
            position="relative"
          >
            <span
              className={`${
                basketCount < 1 ? "main_basket" : "main_basket_clicked"
              }`}
            >
              {basketIcon}
              <span
                className={`${basketCount < 1 ? "basket" : "basket_clicked"}`}
              >
                Перейти в корзину
                <span className="increment">{basketCount}</span>
              </span>
            </span>
            <Stack justifyContent={"center"} flex="1" position={"relative"}>
              <ImageBox
                sx={{
                  width: "100%",
                  height: "440px",
                  position: "relative",
                  borderRadius: "16px",
                }}
              >
                <img
                  src={fetchData.image}
                  alt="product"
                  style={{
                    width: "300px",
                    objectFit: "contain",
                    maxHeight: "300px",
                  }}
                />
                <Stack
                  justifyContent={"center"}
                  alignItems="center"
                  direction={"row"}
                  position="absolute"
                  gap="6px"
                  bottom={16}
                >
                  {circles.map((circle, i) => (
                    <Circle
                      key={i}
                      sx={{
                        fontSize: "10px",
                        color: `${circle.color}`,
                        cursor: "pointer",
                      }}
                    />
                  ))}
                </Stack>
              </ImageBox>
              <Stack position={"absolute"} gap="12px" top="20px" left="20px">
                {fetchData.exchange && exchangeIconBox}
                {fetchData.gift && giftIconBox}
                {fetchData.deviceDiscount && deviceIconBox}
                {fetchData.iphoneDiscount && iphoneIconBox}
              </Stack>
            </Stack>
            <Stack justifyContent={"flex-start"} flex="1">
              <Typography
                fontWeight={400}
                fontSize="18px"
                lineHeight={"20px"}
                color="#BBC2D0"
              >
                Цена телефона
              </Typography>
              <Typography
                mt="8px"
                mb="40px"
                fontWeight={600}
                fontSize="18px"
                lineHeight={"21px"}
                color="#262728"
              >
                6 000 000 сум
              </Typography>
              <div
                style={{ borderBottom: "1px solid #F7F7F7", width: "100%" }}
              />
              <Typography
                mt={"20px"}
                fontWeight={400}
                fontSize="18px"
                lineHeight={"20px"}
                color="#BBC2D0"
              >
                Общая цена (с наценкой)
              </Typography>
              <Stack
                direction={"row"}
                justifyContent="space-between"
                alignItems={"flex-end"}
              >
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  lineHeight={"21px"}
                  color="#262728"
                  mt="8px"
                >
                  {fetchData.price}
                </Typography>
                <Stack direction={"row"} gap="10px" alignItems={"flex-end"}>
                  <Typography
                    fontSize={"16px"}
                    fontWeight="600"
                    lineHeight={"15.5px"}
                    mt={"8px"}
                    bgcolor="#FF647C"
                    width={"fit-content"}
                    p="4px 6px"
                    color={"white"}
                    borderRadius="2px"
                  >
                    от {fetchData.discountPrice}
                  </Typography>
                  <Typography color="#BBC2D0">x24</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" alignItems="center" width="100%" mt="27px">
                <Button
                  variant="contained"
                  sx={{
                    flex: "1",
                    padding: "12px 39px",
                    background: "#00C48C",
                    boxShadow: "none",
                    outline: "none",
                    ":hover": {
                      background: "#00C48C",
                      boxShadow: "none",
                    },
                    borderRadius: "6px 0px 0px 6px",
                  }}
                >
                  3 мес
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    flex: "1",
                    padding: "11px 39px",
                    borderColor: "#00C48C",
                    color: "#00C48C",
                    outline: "none",
                    borderRadius: "0px 0px 0px 0px",
                    ":hover": {
                      borderColor: "#00C48C",
                    },
                  }}
                >
                  6 мес
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    flex: "1",
                    padding: "11px 39px",
                    borderColor: "#00C48C",
                    borderRadius: "0px 0px 0px 0px",
                    color: "#00C48C",
                    outline: "none",
                    ":hover": {
                      borderColor: "#00C48C",
                    },
                  }}
                >
                  12 мес
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    flex: "1",
                    padding: "11px 39px",
                    borderColor: "#00C48C",
                    borderRadius: "0px 6px 6px 0px",
                    color: "#00C48C",
                    outline: "none",
                    ":hover": {
                      borderColor: "#00C48C",
                    },
                  }}
                >
                  24 мес
                </Button>
              </Stack>
              <Stack
                direction={"row"}
                justifyContent="center"
                alignItems={"flex-end"}
                mt="10px"
                gap="10px"
              >
                <Typography
                  fontWeight={400}
                  fontSize="18px"
                  color="#262728"
                  lineHeight={"20.56px"}
                >
                  Наценка:
                </Typography>
                <Typography
                  fontWeight={600}
                  fontSize="18px"
                  color="#262728"
                  lineHeight={"20.56px"}
                >
                  5%
                </Typography>
              </Stack>
              <div
                style={{
                  borderBottom: "1px solid #F7F7F7",
                  width: "100%",
                  marginTop: "20px",
                }}
              />
              <Typography
                mt="20px"
                fontWeight="400"
                fontSize="18px"
                lineHeight="20px"
                color="#BBC2D0"
              >
                Общие характеристики
              </Typography>
              <Box sx={{ maxWidth: "300px", marginTop: "8px" }}>
                <Typography
                  color="#262728"
                  fontWeight={400}
                  fontSize="16px"
                  lineHeight={"18.56px"}
                >
                  Тип: моноблок (классический) Стандарт: 2G, 3G, 4G (LTE), 5G
                  Операционная система: iOS 14
                </Typography>
              </Box>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                mt="21px"
              >
                <Typography
                  color="#00C48C"
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="19px"
                  sx={{ cursor: "pointer" }}
                >
                  Показать все
                </Typography>
                <KeyboardArrowRight
                  sx={{ color: "#00C48C", cursor: "pointer" }}
                />
              </Stack>
            </Stack>
          </Stack>
          <Stack gap={"20px"}>
            <Typography
              color="#00C48C"
              fontWeight="400"
              fontSize="18px"
              m="30px 0"
            >
              Акции
            </Typography>
            <Discount
              icon={exchangeIconBox}
              title={"Обменяй свой старый айфон и получи скидку на новый"}
              price="- 400 000 сум"
            />
            <div style={{ borderBottom: "1px solid #F7F7F7", width: "100%" }} />
            <Discount
              icon={giftIconBox}
              title={"Наушники в подарок"}
              price="Apple EarPods"
              checked
            />
            <div style={{ borderBottom: "1px solid #F7F7F7", width: "100%" }} />
            <Discount
              icon={deviceIconBox}
              title={"Скидка 20% на смартфоны"}
              price="- 10 000 сум"
              checked
            />
            <div style={{ borderBottom: "1px solid #F7F7F7", width: "100%" }} />
            <Discount
              icon={iphoneIconBox}
              title={"Скидка на айфоны"}
              ime="IMEI 012345678901234"
              price="- 10 000 сум"
              checked
            />
          </Stack>

          <Button
            onClick={() => setBasketCount(basketCount + 1)}
            variant="contained"
            sx={{
              width: "100%",
              borderRadius: "26px",
              background: "#00C48C",
              boxShadow: "none",
              outline: "none",
              ":hover": {
                background: "#00C48C",
                boxShadow: "none",
              },
              padding: "16px 0",
              fontSize: "16px",
              marginTop: "22px",
            }}
          >
            Добавить в корзину
          </Button>
        </ProductWrapper>
      </Stack>
    </MainWrapper>
  );
};

export default Product;
