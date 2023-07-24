function mathcFullName(text) {
    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;
    let validNames = [];
    let validName = null;
    while ((validName = pattern.exec(text)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}

mathcFullName('ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov,Ivan Ivanov')