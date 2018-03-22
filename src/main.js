var ctx = document.getElementById("graph");
var reqURL = 'https://api.coindesk.com/v1/bpi/historical/close.json';

var bitcoinVals = [];
var dates = [];

$.getJSON(reqURL, function(data) {
	for (var key in data['bpi']) {
		var obj = {x: key, y: data['bpi'][key]};
		var date = key;

		bitcoinVals.push(obj);
		dates.push(key);
	}
});	

data = {
	labels: dates,
	datasets: [{
		label: 'Price of Bitcoin.',
		data: bitcoinVals
	}]
}

options = {}

var chart = new Chart(ctx, {
	type: 'line',
	data: data,
	options: options
});
