import React from "react";
import { Card, CardContent, Typography, Box, Grid, Button } from "@material-ui/core";
import useFetch from "../../Services/Fech/useFetch";
import { useHistory, useParams } from "react-router-dom";
import { Product } from "../../Models/product";
import ProductDetailsStyle from "./ProductDetailsStyle";

interface ParamsPayload {
  productId: string
}

const baseUrl: string = 'http://localhost:3001/products/';

const ProductDetails = () => {

  const classes = ProductDetailsStyle();

  const { productId } = useParams<ParamsPayload>();

  const { data, loading } = useFetch(baseUrl + productId);

  const history = useHistory();

  return (
    <>
      {loading ? (
        <Typography component="div">
          <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h3.fontSize" m={10}>
            Getting Product...
        </Box>
        </Typography>
      ) : (
          <Card className={classes.product}>
            <CardContent>
              <Typography component="div">
                <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h5.fontSize" m={2}>
                  Product Details
                </Box>
              </Typography>
              {data.map((product: Product) => {
                return (
                  <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="center"
                  >
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h6.fontSize">
                        Supplier: {product.supplier}
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h6.fontSize">
                        Name: {product.name}
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h6.fontSize">
                        Contract: {product.contractlength} Months
                      </Box>
                    </Typography>
                    <Typography component="div">
                      <Box fontWeight="fontWeightBold" textAlign="center" fontSize="h6.fontSize">
                        Status: {product.status}
                      </Box>
                    </Typography>
                    <Box m={3}>
                      <Button variant="contained" color="primary" onClick={() => history.goBack()}>
                        Go Back
                      </Button>
                    </Box>
                  </Grid>
                )
              })}
            </CardContent>
          </Card>
        )
      }
    </>
  )
}

export default ProductDetails;