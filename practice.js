"use strict";
// Сравнение времени
const dayStart = "07:30";
const dayEnd = "17:45";

function scheduleMeeting(startTime, durationTime) {
    const endtimeNum = startTime.split(':');
    //console.log(endtimeNum);
    if (Number.parseInt(endtimeNum[1]) + durationTime >= 60) {
        endtimeNum[0] = Number.parseInt(endtimeNum[0]) + 1 + '';
        endtimeNum[1] = Number.parseInt(endtimeNum[1]) + durationTime - 60 + '';
        if (endtimeNum[0].length === 1) {
            endtimeNum[0] = '0' + endtimeNum[0];
        }
        if (endtimeNum[1].length === 1) {
            endtimeNum[1] = '0' + endtimeNum[1];
        }
        //console.log(endtimeNum);
    } else {
        endtimeNum[1] = Number.parseInt(endtimeNum[1]) + durationTime + '';
        //console.log(endtimeNum);
    }
    //console.log(endtimeNum.join(':'));
    return (dayStart <= startTime && endtimeNum.join(':') <= dayEnd);
}

//console.log(scheduleMeeting('07:38', 17));//true

//console.log(scheduleMeeting("7:00", 15));//false
//console.log(scheduleMeeting("07:15", 30)); //false
//console.log(scheduleMeeting("7:30", 30)); //true
//console.log(scheduleMeeting("11:30", 60)); //true
//console.log(scheduleMeeting("17:00", 45)); // true
//console.log(scheduleMeeting("17:30", 30)); //false
//console.log(scheduleMeeting("18:00", 15)); //false

function range(start,end) {
    const startNum = start
    if (end === undefined) {
        return function (endNum) {
            let result = [];
            for (let i = start; i <= endNum; i++) {
                result.push(i);
            }
            return result
        }
    }

    let result = [];
    for (let i = startNum; i <= end; i++) {
        result.push(i);
    }
    return result
}

//console.log(range(3, 3)); // [3]
//console.log(range(3, 8)); // [3,4,5,6,7,8]
//console.log(range(3, 0)); // []
//const start3 = range(3);
//const start4 = range(4);
//console.log(start3(3)); // [3]
//console.log(start3(8)); // [3,4,5,6,7,8]
//console.log(start3(0)); // []
//console.log(start4(6)); // [4,5,6]

// СЛОТЫ работа с прототипами

function randMax(max) {
    return Math.trunc(1E9 * Math.random()) % max;
}
const reel = {
    symbols: [
        "X", "Y", "Z", "W", "$", "*", "<", "@"
    ],
    spin() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        this.position = (
            this.position + 100 + randMax(100)
        ) % this.symbols.length;
    },
    display() {
        if (this.position == null) {
            this.position = randMax(
                this.symbols.length - 1
            );
        }
        return this.symbols[this.position];
    }
};

const reel1 = Object.create(reel);
const reel2 = Object.create(reel);
const reel3 = Object.create(reel);


const slotMachine = {
    reels: [
// потребуются 3 отдельных объекта reel
// подсказка: Object.create(..)
        reel1, reel2, reel3
    ],
    spin() {
        this.reels.forEach(function spinReel(reel){
            reel.spin();
        });
    },
    display() {
// TODO
        this.reels.forEach(function displayReel(reel){
            reel.display();
        });
    }
};
slotMachine.spin();
console.log(slotMachine.display());
// < | @ | *
// @ | X | <
// X | Y | @
slotMachine.spin();
console.log(slotMachine.display());
// Z | X | W
// W | Y | $
// $ | Z | *