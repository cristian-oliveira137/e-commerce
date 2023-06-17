import Grid from "@mui/material/Grid";
import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/system";

const Header = () => {
  const info = {
    nome: "Alice",
    curso: "Sistemas da Informação",
    matricula: "12345",
  };

  const HeaderPaper = styled(Paper)`
    background-color: gray;
    color: #fff;
    padding: 16px;
    text-align: center;
  `;

  return (
    <HeaderPaper>
      <Grid
        container
        alignItems="flex-start"
        direction="column"
        justifyContent="flex-start"
      >
        <Grid item>
          <span>Nome: {info.nome}</span>
        </Grid>
        <Grid item>
          <span>Curso: {info.curso}</span>
        </Grid>
        <Grid item>
          <span>Matricula: {info.matricula}</span>
        </Grid>
      </Grid>
    </HeaderPaper>
  );
};
export default Header;
