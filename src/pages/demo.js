
// import { Embed } from 'theme-ui'
// import "react-grid-layout/css/styles.css"
// import "react-resizable/css/styles.css"
import React, { useEffect, useRef, memo } from 'react';
// import GridLayout from "react-grid-layout";
// import ThemeLayout from "../components/layout.theme-ui"
// import { ThemeUIProvider } from 'theme-ui'
// import theme from "./../components/theme"
// import { Carousel } from "react-scroll-slider";
import { render } from 'react-dom';
// import Chart2 from './../components/Chart2';
import Chart from './../components/Chart';
import { getData } from "./../components/utils"

// console.log("cyberpen: ho")

// class SomeGrid extends React.Component {
//   render() {
//     // layout is an array of objects, see the demo for more complete usage
//     const layout = [
//       { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
//       { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
//       { i: "c", x: 4, y: 0, w: 1, h: 2 }
//     ];
//     return (
//       <GridLayout
//         className="layout"
//         layout={layout}
//         cols={12}
//         rowHeight={30}
//         width={1200}
//       >
//         <div key="a">somea</div>
//         <div key="b">b</div>
//         <div key="c">c</div>
//       </GridLayout>
//     );
//   }
// }

// {/* <SomeGrid /> */ }

// class MyFirstGrid extends React.Component {
//   render() {
//     return (
//       <GridLayout className="layout" cols={3} rowHeight={100} width={1200}>
//         <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}>
//           a
//         </div>
//         <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
//           someb
//         </div>
//         <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2 }}>
//           <iframe src="https://mtest.malpasonline.co.uk/" />
//         </div>
//       </GridLayout>
//     );
//   }
// }


// import { TypeChooser } from "react-stockcharts/lib/helper";

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
		<Chart type="svg" data={this.state.data} />
		)
	}
}

const DemoPage = () => (
  <div>
   <ChartComponent />
   {/* <ThemeUIProvider theme={theme}> */}
    {/* <Carousel> */}
      {/* <ThemeLayout> */}
        {/* <Embed src="https://www.youtube.com/embed/GNCd_ERZvZM" /> */}
        {/* <ChartComponent /> */}
        {/* <ChartComponent /> */}
      {/* </ThemeLayout> */}
    {/* </Carousel> */}
    {/* <ChartComponent /> */}
  {/* </ThemeUIProvider> */}
  {/* </ChartComponent> */}
  </div>
)

export default DemoPage

console.log("cyberpen: hi")