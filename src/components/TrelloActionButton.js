import React from "react";
import { Icon, TextareaAutosize } from "@mui/material";
import { Card } from "@mui/material";

class TrelloActionButton extends React.Component {
    state = {
        formOpen: false
    };

    openForm = () => {
        this.setState({
            formOpen: true
        });
    };

    closeForm = (e) => {
        this.setState({
            formOpen: false
        });
    };

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
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
        const {list} = this.props;

        const placeholder = list ? "Enter List Title..." : "Enter a title for this card";

        const buttonTitle = list ? "Add List" : "Add Card";

        return <div>
            <Card style={{
                minHeight: 80,
                minWidth: 272,
                padding: "6px 8px 2px"
            }}
            >
                <TextareaAutosize 
                placeholder={placeholder} 
                autoFocus 
                onBlur={this.closeForm}
                value={this.state.text}
                onChange={this.handleInputChange}
                style={{
                   resize: "none",
                   width: "100%",
                   overflow: "visible",
                   outline: "none",
                   border: "none" 
                }}
                />
            </Card>
        </div>
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