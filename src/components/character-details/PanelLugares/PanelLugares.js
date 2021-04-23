import TabPanel from "../../shared/TabPanel/TabPanel";
import {Grid, Paper, Typography} from "@material-ui/core";
import React, {useState} from "react";

export default function PanelLugares({character, value}) {


    return (
        <TabPanel value={value} index={2}>
            <Grid container spacing={1}>
                {character.planetsNames.map(planet => (
                    <Grid item xs={12} md={6}>
                        <Paper>
                            <Typography>
                                {planet}
                            </Typography>
                        </Paper>
                    </Grid>
                ))}
            </Grid>
        </TabPanel>
    )
}