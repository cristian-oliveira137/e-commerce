import Grid from "@mui/material/Grid";
import React from "react";
import { Paper } from "@mui/material";

const Information: React.FC = () => {
  const info = {
    nome: "Alice",
    curso: "Sistemas da Informação",
    matricula: "12345",
  };

  return (
    <Paper>
      <Grid
        container
        padding={1}
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
export default Information;
