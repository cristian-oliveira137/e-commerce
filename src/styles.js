import { Button, Card, Paper } from "@mui/material";
import styled from "@emotion/styled";

export const CircularContainer = styled.div`
  height: 50vw;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
`;
export const CardProduct = styled(Card)`
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 16px;
  height: 175px;
`;
export const HeaderPaper = styled(Paper)`
  background-color: gray;
  color: #fff;
  padding: 16px;
  text-align: center;
  width: calc(100vw - 50px);
  border-radius: 0px;
`;

export const ProductNameButton = styled(Button)``;

export const ProductName = styled.span``;

export const ProductDetailsName = styled.span`  
font-size: 16px;
margin-bottom: 20px;
`;
export const ProductDetailsPrice = styled.span`
font-size: 20px;
font-weight: bold;
margin-bottom: 10px;`;
