import {Tab, Tabs} from "@material-ui/core";
import classes from "../CharacterDetailsCard.module.css";
import React, {useState} from "react";

export default function TabItems() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };


    return (
        <Tabs value={value} onChange={handleChange}
              indicatorColor="primary" textColor="primary" variant="fullWidth">
            <Tab className={classes.TabItem} label="Informações Gerais"/>
            <Tab className={classes.TabItem} label="Aparições em Filmes"/>
            <Tab className={classes.TabItem} label="Lugares Onde Esteve"/>
        </Tabs>
    )
}