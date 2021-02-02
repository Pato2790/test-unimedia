import { createStyles, makeStyles, Theme } from "@material-ui/core";

const ProductDetailsStyle = makeStyles((theme: Theme) =>
    createStyles({
        product: {
            width: "50%",
            margin: "auto",
            [theme.breakpoints.down('xs')]: {
                width: "100%"
            }
        }
    }));

export default ProductDetailsStyle;