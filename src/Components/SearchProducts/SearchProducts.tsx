import React, { useState } from 'react';
import { Box, Button, Card, CardContent, FormControl, FormGroup, Grid, Input, InputLabel, Typography } from '@material-ui/core';
import SearchProductsStyle from './SearchProductsStyle';
import { Link } from 'react-router-dom';

const SearchProduct = () => {
  const classes = SearchProductsStyle();

  const [totalGas, setTotalGas] = useState<number>(0);

  return (
    <Card className={classes.form}>
      <CardContent>
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h6.fontSize" m={2}>
            Insert the total gas consumption
            </Box>
        </Typography>
        <Grid
          container
          direction="column"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <FormControl >
              <InputLabel htmlFor="gasTotal">Total Gas Consumption</InputLabel>
              <Input id="gasTotal" type="number" inputProps={{ min: 1 }} onChange={(e) => setTotalGas(parseInt(e.target.value))} />
            </FormControl>
          </Grid>
          <Grid item>
            <Link to={`/products/${totalGas}`}>
              <Button variant="contained" color="primary" disabled={totalGas <= 0}>
                Search Products
              </Button>
            </Link>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default SearchProduct;