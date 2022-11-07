import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardWrapper, ImageBox } from "../styles/style";
import {
  exchangeIconBox,
  deviceIconBox,
  iphoneIconBox,
  giftIconBox,
} from "../data";
const Card = ({
  image,
  title,
  price,
  discountPrice,
  exchange = false,
  gift = false,
  deviceDiscount = false,
  iphoneDiscount = false,
  id,
}) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/order/${id}`);
  };
  return (
    <CardWrapper onClick={handleNavigate}>
      <Stack position={"absolute"} gap="12px" top="20px" left="20px">
        {exchange && exchangeIconBox}
        {gift && giftIconBox}
        {deviceDiscount && deviceIconBox}
        {iphoneDiscount && iphoneIconBox}
      </Stack>
      <ImageBox>
        <img
          src={image}
          alt="product"
          style={{
            maxWidth: "140px",
            maxHeight: "170px",
            objectFit: "contain",
          }}
        />
      </ImageBox>
      <Typography
        fontSize={"18px"}
        fontWeight="400"
        lineHeight={"17.4px"}
        marginTop="10px"
      >
        {title?.length > 17 ? `${title.slice(0, 18)}...` : title}
      </Typography>

      <Typography
        fontSize={"18px"}
        fontWeight="600"
        lineHeight={"17.4px"}
        mt={"10px"}
      >
        {price} сум
      </Typography>
      <Stack direction={"row"} alignItems="flex-end" gap="8px">
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
          от {discountPrice} сум
        </Typography>
        <Typography color="#BBC2D0">x24</Typography>
      </Stack>
    </CardWrapper>
  );
};

export default Card;
