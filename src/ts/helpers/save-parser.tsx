const currentNumberOfAchievements = 643;
const fileEndIdentifier = '%3D%21END%21';

function decodeBase64(saveFile: string) {
    return atob(saveFile);
}

// Removes the identifier noting the end of the file
function removeEndFromSave(saveFile: string) {
    if (saveFile.substring(test.length - fileEndIdentifier.length) === fileEndIdentifier) {
        saveFile = saveFile.substring(0, test.length - fileEndIdentifier.length);
    }

    return saveFile;
}

export default function parseSaveFile(saveFile: string) {
    saveFile = removeEndFromSave(saveFile)

    let decodedSaveFileArray = decodeBase64(saveFile).split('|');

    let achievementsData = decodedSaveFileArray[decodedSaveFileArray.length - 3];

    // Number of achievements in v. 2.052 is 643, if we don't have this many entries, something has gone wrong
    try {
        if (achievementsData.length !== currentNumberOfAchievements) throw new Error("The number of achievements parsed in the save file given doesn't match expected number.");
    }
    // TODO: Move this try catch to surrounding the function call and display issue in front-end
    catch(error: any) {
        console.log(error.message);
    }

    return achievementsData;
}
