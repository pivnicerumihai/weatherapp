import React from "react";
import { Button } from "@material-ui/core";

const Form = props => {

    return (
        <form onSubmit={props.click}>
            <input
                className="input"
                required
                placeholder="Enter location here" />
            <br />
            <Button
                style={{ marginTop: "10%" }}
                type="submit"
                variant="contained"
                color="primary">
                Get Location Weather
            </Button>
        </form>
    )
}

export default Form;