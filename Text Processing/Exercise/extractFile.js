function extractFile(data) {
    let lastSlashIndex = data.lastIndexOf('\\');
    let lastPointIndex = data.lastIndexOf('.');

    let filename = data.substring(lastSlashIndex + 1, lastPointIndex);
    let extension = data.substring(lastPointIndex + 1);
    console.log(`File name: ${filename}`);
    console.log(`File extension: ${extension}`)

}
extractFile('C:\\Internal\\training-internal\\Template.pptx')