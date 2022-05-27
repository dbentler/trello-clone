import React from "react";
import { Icon } from "@mui/material";

class TrelloActionButton extends React.Component {
    state = {
        formOpen: false
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    renderAddButton = () => {
        const { list } = this.props;

        const buttonText = list ? "Add another list" : "Add another card"
        const buttonTextOpacity = list ? 1 : 0.5;
        const buttonTextColor = list ? "white" : "inherit";
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit";

        return (
            <div 
                onClick={this.openForm}
                style={{
                ...styles.openForButtonGroup,
                opacity: buttonTextOpacity, 
                color: buttonTextColor, 
                backgroundColor: buttonTextBackground
                }}>
                <Icon>add</Icon>
                <p>{buttonText}</p>
            </div>
        );
    };

    renderForm = () => {
        return <p>Hello</p>
    };

    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton()
    }
}

const styles = {
    openForButtonGroup: {
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        borderRadius: 3,
        height: 36,
        width: 272,
        paddingLeft: 10
    }
}

export default TrelloActionButton;