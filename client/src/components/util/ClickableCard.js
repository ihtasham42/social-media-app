import { Card, CardActionArea, useTheme } from "@mui/material";
import React from "react";

const ClickableCard = (props) => {
  const theme = useTheme();

  return (
    <Card sx={{ padding: 0 }}>
      <CardActionArea sx={{ padding: theme.spacing(2) }}>
        {props.children}
      </CardActionArea>
    </Card>
  );
};

export default ClickableCard;
