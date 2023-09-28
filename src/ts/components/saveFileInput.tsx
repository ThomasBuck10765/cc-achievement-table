import { Component } from "react";
import { SaveFileInputProps } from "../types/components/saveFileInputProps";
import Button from "./button";
import parseSaveFile from "../helpers/save-parser";

export default class SaveFileInput extends Component<SaveFileInputProps> {

    submitSaveFile() {
        if (this.props.saveFile.length === 0) {
            alert("Please enter a value");
            return;
        }

        try {
            this.props.setAchievementsData(parseSaveFile(this.props.saveFile));
            this.props.setSaveFileIsValid(true);
        }
        catch(error: any) {
            this.props.setSaveFileIsValid(false);
            // TODO: Display error message to user so we can be specific
            console.log(error.message);
        }
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

                <Button
                    buttonText="Submit save"
                    className="submit-save"
                    onClick={() => this.submitSaveFile()}
                />

                {this.props.achievementsData.length !== 0 && 
                    <Button
                        buttonText="Reset save"
                        className="reset-save"
                        onClick={() => {
                            this.props.setSaveFile("");
                            this.props.setAchievementsData("");
                        }}
                    />
                }
                
                {!this.props.saveFileIsValid && 
                    <div>
                        Your save file is invalid.
                    </div>
                }

            </div>
        );
    }
}
