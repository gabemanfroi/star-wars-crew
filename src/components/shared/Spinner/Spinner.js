import Grid from "@material-ui/core/Grid";
import React from "react";

export function Spinner() {

    return (
        <Grid container justify="center" alignItems="center">
            <Grid item style={{position: "absolute", top: "50%"}} className='loader'>loading</Grid>
        </Grid>
    )
}