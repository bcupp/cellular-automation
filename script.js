var oldArray = [];
var currentArray = [];


function cellAutomation(cellCount, genCount) {

    var check1 = isNaN(cellCount);
    var check2 = isNaN(genCount);


    if (check1 == true || check2 == true) {
        return console.log('Please run the function again and only input numbers');
    }
    var firstArray = [];
    var arrayString;
    var tempArray = [];

    for (var i = 0; i < cellCount; i++) {
        var randomNum = Math.floor(Math.random() * (1 - 0 + 1)) + 0;
        firstArray.push(randomNum);
    }

    oldArray = firstArray;

    for (var k = 0; k < genCount; k++) {
        if (k === 0) {
            tempArray = firstArray;
        } else {
            tempArray = currentArray;
        }
        currentArray = [];

        for (var j = 0; j < cellCount; j++) {
            var l = tempArray[j - 1];
            if (l === undefined) {
                l = 0;
            }
            var r = tempArray[j + 1];
            if (r === undefined) {
                r = 0;
            }
            var c = tempArray[j];
            if (c === undefined) {
                l = 0;
            }


            if (l === 1 && r === 0 && c === 0) {
                currentArray[j] = 1;
            } else if (l === 0 && r === 1 && c === 0) {
                currentArray[j] = 1;
            } else if (l === 0 && r === 0 && c === 1) {
                currentArray[j] = 1;
            } else {
                currentArray[j] = 0;
            }

        }
        console.log(currentArray.join(''));

    }
}

cellAutomation('sox', 5);
cellAutomation(30, 30);
