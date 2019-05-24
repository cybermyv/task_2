(function () {
	"use strict";

	const el_btn = document.querySelector('#result_btn');

	el_btn.addEventListener('click', function () {
		horseMove();
	});

	function initialValidation(value) {
		var regex = new RegExp('^[A-H][1-8]');

		if (value.length !== 2) {
			alert('Начальное положение задается двумя символами \n латинской буквой от A до H и цифрой от 1 до 8');
			return;
		} else {
			if (!regex.test(value)) {
				alert('Начальное положение фигуры выходит за пределы доски!');
				return;
			}
		}
		return value;
	}

	function calculateMove(value) {
		const row = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
		let horseX = row.indexOf(value[0]);
		let horseY = parseInt(value[1]);
		let result = [];

		//-- лево - верх
		if (horseX - 2 >= 0 && horseY + 1 <= 8) {
			result.push(row[horseX - 2] + (horseY + 1));
		}

		//-- лево - низ
		if (horseX - 2 >= 0 && horseY - 1 > 0) {
			result.push(row[horseX - 2] + (horseY - 1));
		}

		//-- верх - лево
		if (horseX - 1 >= 0 && horseY + 2 <= 8) {
			result.push(row[horseX - 1] + (horseY + 2));
		}

		//-- верх - право
		if (horseX + 1 < 8 && horseY + 2 <= 8) {
			result.push(row[horseX + 1] + (horseY + 2));
		}

		//-- право - верх
		if (horseX + 2 < 8 && horseY + 1 <= 8) {
			result.push(row[horseX + 2] + (horseY + 1));
		}

		//-- право - низ
		if (horseX + 2 < 8 && horseY - 1 > 0) {
			result.push(row[horseX + 2] + (horseY - 1));
		}

		//-- низ - лево
		if (horseX - 1 > 0 && horseY - 2 > 0) {
			result.push(row[horseX - 1] + (horseY - 2));
		}

		//-- низ - право
		if (horseX + 1 < 8 && horseY - 2 > 0) {
			result.push(row[horseX + 1] + (horseY - 2));
		}

		alert(result);

		return;
	}

	function horseMove() {
		const initPosition = document.querySelector('#initial_position').value;
		let str = initPosition[0].toUpperCase() + initPosition.slice(1);

		if (initialValidation(str)) calculateMove(str);

		return;
	}
})();






