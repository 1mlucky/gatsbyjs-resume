

import { tsvParse, csvParse } from "d3-dsv";
import { timeParse } from "d3-time-format";

// function print(arg){
// 	return console.log(arg)
// }

// function parseData(parse) {
// 	return function(data) {
// 		data.forEach(d => {

// 		print(d)
// 		d.date = parse(d.time);
// 		d.open = +d.open;
// 		d.high = +d.high;
// 		d.low = +d.low;
// 		d.close = +d.close;
// 		d.volume = +d.volumefrom

// 		});
// 		data.getTime = () => new Date()

// 		return data;
// 	};
// }

// function parseData(parse) {
// 	return function(d) {

// 		console.log(d.date)

// 		d.date = parse(d.date);
// 		console.log(d.date)
// 		d.open = +d.open;
// 		d.high = +d.high;
// 		d.low = +d.low;
// 		d.close = +d.close;
// 		d.volume = +d.volume;
// 		// d.getTime = () => d.date;

// 		return d;
// 	};
// }

const parseDate = timeParse("%Y-%m-%d");

// export function getData() {
// 	const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
// 		.then(response => { const _ = response.text(); console.log(_); return _; })
// 		// .then(data => {
// 		// 	const _ = tsvParse(data, parseData(parseDate))
// 		// 	const __ = []
// 		// 	_.map(d => {
// 		// 		const e  = {}
// 		// // e.date = (d.date);
// 		// console.log(typeof(d.date))
// 		// e.date = parseDate(d.date)
// 		// e.open = +d.open;
// 		// e.high = +d.high;
// 		// e.low = +d.low;
// 		// e.close = +d.close;
// 		// e.volume = +d.volume;
// 		// console.log(e)
// 		// // return e
// 		// __.push(e)
// 		// 	})
// 		// 	console.log(__)
// 		// 	return __
// 		// }
// 		// )
// 		.then(data => tsvParse(data, parseData(parseDate)))
// 	return promiseMSFT;
// }


// const p = parseData(parseDate)

function timeConverter(UNIX_timestamp) {
	var a = new Date(UNIX_timestamp * 1000);
	// var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
	var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	// var hour = a.getHours();
	// var min = a.getMinutes();
	// var sec = a.getSeconds();
	var time = year + '-' + month + '-' + date
	return time;
}

function fetchRetry(url, delay, tries, fetchOptions = {}) {

	function wait(delay){
		return new Promise((resolve) => setTimeout(resolve, delay));
	}

    function onError(err){
        let triesLeft = tries - 1;
        if(!triesLeft){
            throw err;
        }
        return wait(delay).then(() => fetchRetry(url, delay, triesLeft, fetchOptions));
    }
	return fetch(url, { mode: "cors" }).catch(onError);
}

export function getData() {
	const promiseMSFT = fetchRetry(
		"https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=2000",
		1000,
		1000
		)
		.then(response => {
			let _ = response.json()
			return _
		})
		.then(_ => {
			var _ = _["Data"]
			const __ = []
			_.map(d => {
				const e = {}
				let _date = timeConverter(d.time);
				e.date = parseDate(_date);
				e.open = +d.open;
				e.high = +d.high;
				e.low = +d.low;
				e.close = +d.close;
				e.volume = +d.volume;
				// console.log(e)
				// return e
				__.push(e)
			})
			return __
		})
	// .then(data => func(data))
	// return []
	return promiseMSFT;
}
