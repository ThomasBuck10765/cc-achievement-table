import { Component } from "react";
import { SaveFileInputProps } from "../types/components/saveFileInputProps";

export default class SaveFileInput extends Component<SaveFileInputProps> {

    submitSaveFile() {
        console.log("TODO:");
    }

    render() {
        return (
            <div className="save-file">
                <div className="save-file__input-container">
                    <label>
                        <span>Enter your game's save:</span>
                        <input type="text" value={this.props.saveFile} onChange={e => {this.props.setSaveFile(e.target.value)}} className="save-file__input" />
                    </label>
                </div>

                <div className="save-file__submit-cont">
                    <button className="save-file__submit" type="submit" onClick={() => this.submitSaveFile()}>Submit</button>
                </div>
            </div>
        )
    }
}
