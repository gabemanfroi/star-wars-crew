import {Grid, Paper, Typography} from "@material-ui/core";
import TabPanel from "../../shared/TabPanel/TabPanel";
import React, {useState} from "react";

export default function PanelInformacoesGerais({character}){
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <TabPanel value={value} index={0}>
            <Grid container spacing={1}>
                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="subtitle1">
                            Planeta Natal
                        </Typography>
                        <Typography variant="subtitle2">
                            {character.homeworld}
                        </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={6}>
                    <Paper>
                        <Typography variant="subtitle1">
                            Ano de Nascimento
                        </Typography>
                        <Typography variant="subtitle2">
                            {character.birth_year}
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </TabPanel>
    )
}