import React from 'react';
import { Grid, Box } from '@mui/material';

export default function GridLayout() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 2 }}
      justifyContent='space-between'
    >
      <Grid item xs={2}>
        <Box border='2px solid gray' height='100px' width='100px'>
          1
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box border='2px solid gray' height='100px' width='100px'>
          2
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box border='2px solid gray' height='100px' width='100px'>
          3
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box border='2px solid gray' height='100px' width='100px'>
          4
        </Box>
      </Grid>
      <Grid item xs={2}>
        <Box border='2px solid gray' height='100px' width='100px'>
          5
        </Box>
      </Grid>
    </Grid>
  );
}
