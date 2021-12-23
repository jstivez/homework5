// let currentHour = 11;
// let currDate = "December 22nd 2021, 10:14:15 am";
// let currentHourInt = parseInt(currentHour);
// let currMin = moment().format('ss');


let currentHour = moment().format("HH");
let currMin = moment().format('mm')
let currDate = moment().format('MMMM Do YYYY, h:mm:ss a')


let row = [null, null, null, null, null, null, null, null, null, "9Row", "10Row", "11Row", "12Row", "1Row", "2Row", "3Row", "4Row", "5Row", null, null, null, , null, null, ];
let timeInt = [0]
let rowDom = [];
for (let i = 0; i < 24; i++) {
    rowDom.push(document.getElementById(row[i]));
    timeInt.push(i);

}

let dateDom = document.getElementById('currentDay');

function saveBtn(rowNum) {
    let input = rowDom[rowNum].value;
    let toDo = rowNum;
    localStorage.setItem(toDo, input);
    console.log(input)
}

function formatTime() {
    // currDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    // currentHour = moment().format("HH");
    // currentHourInt = parseInt(currentHour);
    if (rowDom[currentHourInt] != null) {
        rowDom[currentHourInt].classList.add("present");
        rowDom[currentHourInt].value = localStorage.getItem(currentHourInt);
        for (let i = 0; i < 24; i++) {
            if (timeInt[i + 1] < currentHourInt) {
                if (row[i] != null) {
                    rowDom[i].value = localStorage.getItem(i);
                    rowDom[i].classList.add('past');

                }
            }
            if (timeInt[i + 1] > currentHourInt) {
                if (row[i] != null) {
                    rowDom[i].value = localStorage.getItem(i);
                    rowDom[i].classList.add('future');

                }
            }



        }
    } else {
        outOfOffice = rowDom.slice(9, 18);
        for (let i = 0; i < outOfOffice.length; i++) {
            outOfOffice[i].classList.add('future');

        }

    }
}

// formatTime();
let time = 0;

function updateTimes() {
    // currDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    // currentHour = moment().format("HH");
    // currentHourInt =12;
    // currMin = moment().format('ss');
    currDate = moment().format('MMMM Do YYYY, h:mm:ss a');
    currentHour = moment().format("HH");
    currentHourInt = parseInt(currentHour);
    currMin = moment().format('mm');
    dateDom.innerHTML = currDate;
    if (currMin >= 1) {
        for (let i = 0; i < 24; i++) {
            if (row[i] != null) {
                rowDom[i].classList.remove('past');
                rowDom[i].classList.remove('present');
                rowDom[i].classList.remove('future');


            }
            formatTime();
        };
    }
}
setInterval(updateTimes, 1000);

updateTimes();

function clearStorage() {
    if (currentHourInt == 18) {
        localStorage.clear();
    }
}
clearStorage();