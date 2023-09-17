var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
var tips = [];
var totals = [];

function calcTip(bill) {
    for (var i = 0; i < bill.length; i++) {
        if (bill[i] >= 50 && bill[i] <= 300) {
            tips.push(bill[i] * 0.15);
            totals.push(bill[i] + bill[i] * 0.15);
        } else {
            tips.push(bill[i] * 0.2);
            totals.push(bill[i] + bill[i] * 0.2);
        }
    }
}
calcTip(bills);
console.log("Tiền tip: "+ tips);
console.log("Tổng tiền: "+ totals);