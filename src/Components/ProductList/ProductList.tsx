import React from "react";
import { Typography, Box, Table, TableBody, TableContainer, TableHead, TableRow, Button, Grid } from "@material-ui/core";
import { CustomTableCell } from "../../Themes/Table/customTableCellStyle";
import { CustomTableRow } from "../../Themes/Table/customTableRowStyle";
import { Product } from "../../Models/product";
import ProductListStyle from './ProductListStyle';
import useFetch from "../../Services/Fech/useFetch";
import { Link, useHistory, useParams } from "react-router-dom";

interface ParamsPayload {
  totalGas: string
}

const baseUrl: string = 'http://localhost:3001/products';

const ProductList = () => {
  const classes = ProductListStyle();

  const { data, loading } = useFetch(baseUrl);

  const { totalGas } = useParams<ParamsPayload>();

  const history = useHistory();

  const getAnualCost = ({ rate, dailystandingcharge, contractlength }: Product) => {
    return (((parseInt(totalGas) * rate) + (365 + dailystandingcharge)) / (contractlength / 12)).toFixed(2);
  }

  return (
    <>
      {loading ? (
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h3.fontSize" m={10}>
            Getting Products...
          </Box>
        </Typography>
      ) : (
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <TableContainer>
              <Typography component="div">
                <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h4.fontSize" m={1}>
                  Products
            </Box>
              </Typography>
              <Table className={classes.table} aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <CustomTableCell>Supplier</CustomTableCell>
                    <CustomTableCell>Anual Cost</CustomTableCell>
                    <CustomTableCell>Contract Length</CustomTableCell>
                    <CustomTableCell>Options</CustomTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.map((product: Product, indexProduct: number) => (
                    <CustomTableRow key={indexProduct}>
                      <CustomTableCell>{product.supplier}</CustomTableCell>
                      <CustomTableCell>${getAnualCost(product)}</CustomTableCell>
                      <CustomTableCell>{product.contractlength} Months</CustomTableCell>
                      <CustomTableCell>
                        <Link to={`/product/${product.id}/${totalGas}`}>
                          <Button variant="contained" color="primary">
                            Show More
                        </Button>
                        </Link>
                      </CustomTableCell>
                    </CustomTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={() => history.goBack()}>
              Go Back
            </Button>
          </Grid>
        )
      }
    </>
  );
}

export default ProductList;