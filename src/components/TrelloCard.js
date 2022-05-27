import React from "react";
import Card from "@mui/material/Card";
import { Typography } from "@mui/material";
import { CardContent } from "@mui/material";

const TrelloCard = ({ text }) => {
    return (
        <Card>
        <CardContent style={styles.cardContainer}>
            <Typography gutterButton>
                { text }
            </Typography>
        </CardContent>
        </Card>
    );
};

const styles = {
    cardContainer: {
        marginBottom: 0
    }
}

export default TrelloCard;