import { Component } from "react";
import { AchievementTableProps } from "../types/components/achivementTableProps";
import achievementsSortedById from "../values/achievements";


export default class AchievementTable extends Component<AchievementTableProps> { 

    renderSingleAchievement(index: number, showingSpoilers?: boolean) {
        const achievementData = achievementsSortedById[index]
        
        return (
            <tr key={index} className={`${achievementData.pool}-achievement`}>
                <td>{achievementData.id}</td>
                <td>{achievementData.name}</td>
                <td className={`spoiler-relevant ${showingSpoilers === true ? "show-spoilers" : ""}`}>{achievementData.desc}</td>
                <td>{achievementData.pool}</td>
            </tr>
        );
    }

    renderAchievements(gotten: boolean, showSpoilers: boolean) {
        let comparedValue;
        let showingSpoilers = undefined;
        let buffer = [];

        if (gotten) {
            comparedValue = "1";
            showingSpoilers = true;
        }
        else {
            comparedValue = "0";
            showingSpoilers = showSpoilers;
        }

        for (let i = 0; i < this.props.achievementsData.length; i++) {
            if (this.props.achievementsData[i] === comparedValue) {
                buffer.push(this.renderSingleAchievement(i, showingSpoilers));
            }
        }

        return buffer;
    }

    render() {
        return (
            <div className={`achievement-table ${this.props.className}`}>
                <table>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Pool</th>
                        </tr>
                    </thead>

                    <tbody>
                        {this.renderAchievements(this.props.gottenAchievements === undefined ? true : this.props.gottenAchievements,
                            this.props.showSpoilers === undefined ? false : this.props.showSpoilers)}
                    </tbody>
                </table>
            </div>
        );
    }
}