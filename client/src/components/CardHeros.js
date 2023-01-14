import { Button, Card, CardMedia, CardContent, Typography } from "@mui/material"
import { createTheme } from "@mui/system";

function CardHeros() {

    const theme = createTheme({
        components:{
            MuiCard: {
                styleOverrides: {
                    root: {
                        display: "flex",
                        paddingLeft: "10px",
                        paddingRight: "10px"
                    }
                }
            }
        }
    });

    return(
        <Card theme={theme}>
            <CardMedia 
                image="images/card/svg.svg"
                />
            <CardContent>

                <Typography>
                Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
                    <Button></Button>
                </Typography>
            </CardContent>
        </Card>
    )
    
}

export default CardHeros ;