import { createStyles, makeStyles, Theme } from "@material-ui/core";

const SearchProductsStyle = makeStyles((theme: Theme) =>
    createStyles({
        form: {
            width: "50%",
            margin: "auto",
            [theme.breakpoints.down('xs')]: {
                width: "100%"
            }
        }
    }));

export default SearchProductsStyle;
