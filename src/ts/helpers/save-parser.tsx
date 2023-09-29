const currentNumberOfAchievements = 643;
const fileEndIdentifierVer1 = '%3D%21END%21';
const fileEndIdentifierVer2 = '%21END%21';
// TODO: Work out what that %3D is for and why it only sometimes appears

// Removes the identifier noting the end of the file
function removeEndFromSave(saveFile: string) {
    if (saveFile.substring(saveFile.length - fileEndIdentifierVer1.length) === fileEndIdentifierVer1) {
        saveFile = saveFile.substring(0, saveFile.length - fileEndIdentifierVer1.length);
    }
    else if (saveFile.substring(saveFile.length - fileEndIdentifierVer2.length) === fileEndIdentifierVer2) {
        saveFile = saveFile.substring(0, saveFile.length - fileEndIdentifierVer2.length);
    }

    return saveFile;
}

function decodeBase64(saveFile: string) {
    return atob(saveFile);
}

export default function parseSaveFile(saveFile: string) {
    saveFile = removeEndFromSave(saveFile)

    let decodedSaveFileArray = decodeBase64(saveFile).split('|');

    let achievementsData = decodedSaveFileArray[decodedSaveFileArray.length - 3];

    // Number of achievements in v. 2.052 is 643, if we don't have this many entries, something has gone wrong
    if (achievementsData.length !== currentNumberOfAchievements) throw new Error("The number of achievements parsed in the save file given doesn't match expected number.");

    return achievementsData;
}
