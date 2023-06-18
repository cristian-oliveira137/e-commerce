import Grid from "@mui/material/Grid";
import React from "react";
import { Paper } from "@mui/material";

const Header = () => {
  const info = {
    nome: "Alice Fabiula da Silva Sol Freire",
    curso: "Sistemas d Informação",
    matricula: "687396",
  };

  return (
    <Paper className="header-paper">
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
    </Paper>
  );
};
export default Header;
