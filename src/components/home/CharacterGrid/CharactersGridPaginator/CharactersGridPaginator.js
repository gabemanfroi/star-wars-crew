import Pagination from "@material-ui/lab/Pagination";
import Grid from "@material-ui/core/Grid";
import React, {useContext} from "react";

import {ScreenSizeContext} from "../../../../contexts/ScreenSizeContext";
import {CharactersContext} from "../../../../contexts/CharactersContext";

/**
 * Componente reponsável pela navegação de paginação do grid de personagens
 * @returns Componente Componente reponsável pela navegação de paginação do grid de personagens
 */
export function CharactersGridPaginator() {
    const {isMobile} = useContext(ScreenSizeContext);
    const {page, setPage, pageCount} = useContext(CharactersContext);

    const handlePageChange = (e, page) => {
        setPage(page);
    }

    return (
        <Grid container justify="center"
              style={{marginTop: !isMobile ? "1.5rem" : "0.7rem", marginBottom: isMobile && "0.7rem"}}>
            <Pagination color="secondary" size={isMobile ? "small" : "medium"}
                        count={pageCount}
                        page={page} onChange={handlePageChange}>
            </Pagination>
        </Grid>
    )
}