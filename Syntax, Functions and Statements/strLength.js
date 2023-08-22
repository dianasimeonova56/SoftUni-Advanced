function strLength(str1, str2, str3) {
    let sumLength = Number(str1.length) + Number(str2.length) + Number(str3.length);
    let averageLength = Math.floor(sumLength / 3);
    console.log(sumLength);
    console.log(averageLength);
} strLength('chocolate', 'ice cream', 'cake');