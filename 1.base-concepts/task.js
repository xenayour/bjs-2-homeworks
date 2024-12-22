"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = Math.pow(b, 2) - (4 * (a * c));

	if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		if (Number.isInteger(root1) && Number.isInteger(root2)) {
			arr.push(root1, root2);
		} else {
			root1 = parseFloat(root1.toFixed(2));
			root2 = parseFloat(root2.toFixed(2));
			arr.push(root1, root2);
		}
		return arr;
	} else if (d === 0) {
		let root = -b / (2 * a);
		if (Number.isInteger(root)) {
			arr.push(root);
		} else {
			root = parseFloat(root.toFixed(2));
		}
		return arr;
	} else {
		return arr;
	}
}

/*solveEquation(6, 7, 1); // [-0.17, -1] (два корня)
solveEquation(9, -12, 4); // [0.67] (один корень)
solveEquation(1, 2, 3); // [] (нет корней)*/

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let creditRate = (percent / 100) / 12;
	let credit = amount - contribution;
	let monthlyPayment = credit * (creditRate + (creditRate / (((1 + creditRate) ** countMonths) - 1)));
	let totalMortgage = monthlyPayment * countMonths;
	totalMortgage = parseFloat(totalMortgage.toFixed(2));
	return totalMortgage;
}

/*calculateTotalMortgage(10, 0, 50000, 12);
calculateTotalMortgage(10, 1000, 50000, 12);
calculateTotalMortgage(10, 0, 20000, 24);
calculateTotalMortgage(10, 1000, 20000, 24);
calculateTotalMortgage(10, 20000, 20000, 24);
calculateTotalMortgage(10, 0, 10000, 36);
calculateTotalMortgage(15, 0, 10000, 36);*/