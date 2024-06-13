// TradingViewWidget.jsx
import React, { useEffect, useRef, memo } from 'react';
// import { Chart } from 'react-stockcharts';
import Chart from '../components/Chart';
import { getData } from '../components/utils';
import { Text } from 'theme-ui';
import { Link } from 'theme-ui'

// https://www.tradingview.com/script/dtMhahYx-Multi-Asset-Correlation-Overlay/
// https://tradingview-widgets.jorrinkievit.xyz/docs/components/StockMarket
// https://www.tradingview.com/charting-library-docs/latest/tutorials/implement_datafeed_tutorial/Datafeed-Implementation
// [o] https://min-api.cryptocompare.com/
// https://www.tradingview.com/charting-library-docs/latest/tutorials/implement_datafeed_tutorial/Datafeed-Implementation#result 
// https://codepen.io/truong160196/pen/gNBeBN
// [~] https://www.tradingview.com/charting-library-docs/latest/tutorials/implement_datafeed_tutorial/Widget-Setup

// function TradingViewWidget() {
//   const container = useRef();

//   useEffect(
//     () => {
//       const script = document.createElement("script");
//       script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//       script.type = "text/javascript";
//       script.async = true;
//       script.innerHTML = `
//         {
//           "autosize": true,
//           "symbol": "ETH",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "light",
//           "style": "1",
//           "locale": "en",
//           "enable_publishing": false,
//           "allow_symbol_change": true,
//           "support_host": "https://www.tradingview.com"
//         }`;
//       container.current.appendChild(script);
//     },
//     []
//   );

//   return (
//     <div className="tradingview-widget-container" ref={container} style={{ height: "100%", width: "100%" }}>
//       <div className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></div>
//       <div className="tradingview-widget-copyright"><a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank"><span className="blue-text">Track all markets on TradingView</span></a></div>
//     </div>
//   );
// }

class ChartComponent extends React.Component {
	componentDidMount() {
		getData().then(data => {
			console.log(data)
			this.setState({ data })
		})
	}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<div>
				<Text
					sx={{
						fontFamily: 'system-ui,-apple-system,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans","Liberation Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
						fontSize: 25,
						fontWeight: 'bold',
						display: 'block',
						'text-align': 'center'
					}}>
					<p />
					<Link href="https://gitea.com/1m1ucky/Django-DDD-Lite-Course" >
						Quant Stock + Cryptocurrency Trading Bot
					</Link>
				</Text>
				<p />
				<Chart type="svg" data={this.state.data} />
			</div>
		)
	}
}

const trade = () => {
	return (
		<ChartComponent />
	)
}

// export default memo(TradingViewWidget);
// export default (TradingViewWidget);
export default trade;