import { useState } from "react";
import SaveFileInput from "./ts/components/saveFileInput";

export default function App() {
  const [saveFile, setSaveFile] = useState('');
  const [achievementsData, setAchievementsData] = useState('');

  return (
    <div className="achievement-table">
      Hello World

      <SaveFileInput achievementsData={achievementsData} saveFile={saveFile} setAchievementsData={setAchievementsData} setSaveFile={setSaveFile} />
    </div>
  );
}
