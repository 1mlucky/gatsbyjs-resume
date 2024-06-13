import React from "react";
import _ from "lodash";
import RGL, { WidthProvider } from "react-grid-layout";
import { Responsive as ResponsiveGridLayout } from "react-grid-layout";
import GridLayout from "react-grid-layout";
import Layout from "../components/layout"

// https://github.com/react-grid-layout/react-grid-layout/tree/master

// class MyFirstGrid extends React.Component {
//     render() {
//         return (
//             <div>
//                 <Layout>
//                     <ResponsiveGridLayout
//                     style={
//                         {
//                             backgroundColor: 'white'
//                         }
//                     }
//                     className="layout"
//                     breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//                     cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
//                     // rowHeight={30}
//                     // width={1200}
//                     >
//                         <div key="a" data-grid={{ x: 0, y: 0, w: 1, h: 2, static: false }}>
//                             aadsfdasf
//                         </div>
//                         <div key="b" data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}>
//                             bsafdsaf
//                         </div>
//                         <div key="c" data-grid={{ x: 4, y: 0, w: 1, h: 2, minW: 10, maxw: 10 }}>
//                             cafdadsf
//                         </div>
//                     </ResponsiveGridLayout>
//                 </Layout>
//             </div>
//         );
//     }
// }

// export default MyFirstGrid


const ReactGridLayout = WidthProvider(RGL);

class NoDraggingLayout extends React.PureComponent {
    static defaultProps = {
        className: "layout",
        isDraggable: false,
        isResizable: false,
        items: 12,
        cols: 3 * 20,
        rowHeight: 2 * 10,
        width: 3*20,
        onLayoutChange: function () { }
    };

    constructor(props) {
        super(props);

        const layout = this.generateLayout();
        this.state = { layout };
    }

    generateDOM() {
        return _.map(_.range(this.props.items), function (i) {
            return (
                <div key={i} style = {
                    {
                        backgroundColor: "white"
                    }
                }>
                    <span className="text">{i}</span>
                </div>
            );
        });
    }

    generateLayout() {
        return _.map(_.range(0, 12), function(item, i) {
            var y = Math.ceil(Math.random() * 4) + 1;
            console.log(y)
            return {
              x: (_.random(0, 5) * 2) % 12,
              y: Math.floor(i / 6) * y,
              w: 18,
              h: 9,
              i: i.toString(),
            //   static: Math.random() < 0.05
            };
          });

        const p = this.props;
        return _.map(new Array(p.items), function (item, i) {
            var y = _.result(p, "y") || Math.ceil(Math.random() * 4) + 1;
            return {
                x: (i * 2) % 12,
                y: Math.floor(i / 6) * y,
                w: 2,
                h: y,
                i: i.toString()
            };
        });
    }

    onLayoutChange(layout) {
        this.props.onLayoutChange(layout);
    }

    render() {
        return (
            <Layout>
                <ReactGridLayout
                    layout={this.state.layout}
                    onLayoutChange={this.onLayoutChange}
                    {...this.props}
                >
                    {this.generateDOM()}
                </ReactGridLayout>
            </Layout >
        );
    }
}

export default NoDraggingLayout