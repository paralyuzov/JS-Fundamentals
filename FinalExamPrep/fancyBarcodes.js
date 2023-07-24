function fancyBarcodes(data) {
    let nBarcodes = Number(data.shift());

    let patern = /(@#{1,})(?<word>[A-Z][A-Za-z0-9]{4,}[A-Z])(@#{1,})/g;



    for (let i = 0; i < nBarcodes; i++) {
        let line = data[i];
        let match = patern.exec(line);
        let productGroup = "";
        if (!match) {
            console.log(`Invalid barcode`);
        }

        while (match !== null) {
            let item = match[2];
            for (let j = 0; j < item.length; j++) {
                let ch = Number(item[j]);
                if (!isNaN(ch)) {
                    productGroup += item[j];
                } 
            }
            if(productGroup.length === 0) {
                productGroup = "00";
            }
            console.log(`Product group: ${productGroup}`)
            match = patern.exec(line);
        }

    }

}
fancyBarcodes(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])