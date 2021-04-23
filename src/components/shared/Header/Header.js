import {AppBar, Container, Toolbar, Typography} from "@material-ui/core"
import {useContext} from "react";

import {ScreenSizeContext} from "../../../contexts/ScreenSizeContext";

export function Header(){
    const{isMobile} = useContext(ScreenSizeContext)

    return(
        <AppBar position="sticky">
            <Toolbar>
                <Container >
                    <Typography>
                        TSWC { !isMobile && `- A Star Wars Crew Project`}
                    </Typography>
                </Container>
            </Toolbar>
        </AppBar>
    )
}