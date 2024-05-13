const fromDollarToYen = (dolar) => {
    
    let yen
    yen =  dolar * 156.24;
    return yen;
}

const fromEuroToDollar = (euro) => {
    
    let dolar;
    dolar =  euro * 1.08;
    return dolar;
}

const fromYenToPound = (yen) => {
    
    let pound;
    pound =  yen * 0.0051;
    return pound;
}


module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};
