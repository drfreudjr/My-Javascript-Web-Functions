export function RGBDecimalsFromHexString(hexcolorString) { 

    const colorArray= hexcolorString.split("")              // eg ['#','1','3','f','a','0','e']
    const redString = colorArray[1] + colorArray[2]         
    const greenString = colorArray[3] + colorArray[4]
    const blueString = colorArray[5] +colorArray[6]

    const redDecimalNumber = parseInt(redString, 16)        // 2nd parameter is base
    const greenDecimalNumber = parseInt(greenString, 16)
    const blueDecimalNumber = parseInt(blueString, 16)

    let rgbDecimalArray  = [redDecimalNumber, greenDecimalNumber, blueDecimalNumber]
    return rgbDecimalArray 
}