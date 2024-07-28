import { useState, Fragment } from "react";
import SaveFileInput from "./ts/components/saveFileInput";
import Button from "./ts/components/button";
import AchievementTable from "./ts/components/achivementTable";

export default function App() {
	const [useDarkMode, setUseDarkMode] = useState(false);
	const [showSpoilers, setShowSpoilers] = useState(false);
	const [saveFile, setSaveFile] = useState('');
	const [saveFileIsValid, setSaveFileIsValid] = useState(false);
	const [achievementsData, setAchievementsData] = useState('');

	return (
		<div className={`cookie-clicker-achievement-table${useDarkMode === true ? " __dark-mode" : ""}`}>
			Test
			<Button 
				buttonText={`${useDarkMode ? "Light" : "Dark"} Mode`} 
				className="mode-switcher"
				onClick={() => setUseDarkMode(!useDarkMode)} 
			/>

			<Button
				buttonText={`${showSpoilers ? "Hide" : "Show"} Spoilers`}
				className="spoiler-switcher"
				onClick={() => setShowSpoilers(!showSpoilers)}
			/>

			<br /><br /><br />
			<p>This is a tool designed to let you input your save file to know the achievements that you have left remaining.</p>
			<p>You can export your save file by clicking the <b>Options</b> menu, and under <b>General</b>, clicking the <b>EXPORT SAVE</b> option.</p>
			<p>Please include the WHOLE file when entering your game's save.</p>

			<br />
			<SaveFileInput 
				achievementsData={achievementsData}
				saveFile={saveFile} 
				saveFileIsValid={saveFileIsValid} 
				setAchievementsData={setAchievementsData} 
				setSaveFile={setSaveFile} 
				setSaveFileIsValid={setSaveFileIsValid}
			/>

			{saveFileIsValid && achievementsData !== "" &&
				<Fragment>
					<h2>Achievements gotten ({achievementsData.split('1').length - 1} of {achievementsData.length}):</h2>
						<AchievementTable 
							achievementsData={achievementsData} 
							gottenAchievements={true}
							className=""
						/>
					
					<h2>Achievements remaining ({achievementsData.split('0').length - 1} of {achievementsData.length}):</h2>
						<AchievementTable
							achievementsData={achievementsData}
							gottenAchievements={false}
							className=""
							showSpoilers={showSpoilers}
						/>
					
				</Fragment>
			}

			<br />
			<p>If you experience any bugs with this tool, please feel free to reach out to me and report it on <a href="https://github.com/ThomasBuck10765/cc-achievement-table" target="_blank" rel="author external noopener noreferrer">GitHub</a>.</p>

		</div>
	);
}
