
const arr1 = [2200, 34000, 1200];
const arr2 = [120000, 34000, 7000];
const arr3 = [1100, 56000, 2700];

let total = [];
total.push(arr1, arr2, arr3);

let summaryOfTotal = 0;
for (let now of total) { 
    now = total[total.indexOf(now)];
    let summary = 0;
    for (let i of now) {
        summary += i;
    }
    total.splice(total.indexOf(now), 1, summary);
}

for (let underTotal of total) {
    summaryOfTotal += underTotal;
}
    total = summaryOfTotal;

console.log(total);