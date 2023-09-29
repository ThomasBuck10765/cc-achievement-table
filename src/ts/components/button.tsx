import { Component } from "react";
import { ButtonProps } from "../types/components/buttonProps";

export default class Button extends Component<ButtonProps> {

    type: "submit" | "button" | "reset";

    constructor(props: ButtonProps) {
        super(props);

        this.type = !!(this.props.buttonType) ? this.props.buttonType : "submit";
    }

    render() {
        return (
            <div className={`button-container ${this.props.className}`}>
                <button className="button" type={this.type} onClick={this.props.onClick}>
                    {this.props.buttonText}
                </button>
            </div>
        );
    }
}
