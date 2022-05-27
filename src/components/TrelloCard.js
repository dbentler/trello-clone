import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";

const TrelloCard = ({ text }) => {
    return (
        <Card>
        <CardContent>
            <Typography gutterButton>
                {text}
            </Typography>
        </CardContent>
        </Card>
    );
}

export default TrelloCard;