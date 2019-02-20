import React, { Component } from "react";
import Components from "@src";
import { Dialog } from "@src";

const X = props => <div>{props.value}</div>;
const PROPS = {
  content: "xxxxxxxxx",
  columns: [
    {
      title: "name",
      render: (rowEle, rowIndex) => rowEle.name,
      key: 1
    },
    {
      title: "id",
      render: (rowEle, rowIndex) => rowEle.key,
      key: 2
    },
    {
      title: "des",
      render: (rowEle, rowIndex) => rowEle.des,
      key: 3
    }
  ],
  data: [
    {
      name: "xx1",
      key: 1,
      des: "xx_1"
    },
    {
      name: "xx2",
      key: 2,
      des: "xx_2"
    },
    {
      name: "xx3",
      key: 3,
      des: "xx_3"
    }
  ],
  sort: (a, b) => b.des.match(/\d/)[0] - a.des.match(/\d/)[0],
  defaultPageSize: 10,
  pageSizeList:[10, 20, 30],
  total: 300,
  
  //header组件props
  title: '内容',
  user: {name:'邵洪茂臣',number:'(工号001)'},
  img:'data:image/png;base64,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',

  //Nav组件props
  navData: [
    {
      content: "1级常规下拉",
      id: "home1",
      subList: [
        {
          content: "常规下拉子项",
          id: "home11",
        },
        {
          content: "2级常规下拉",
          id: "home12",
          subList: [
            { content: "111", id: "home121" },
            { content: "222", id: "home122" },
            { content: "333", id: "home123" }
          ]
        },
        {
          content: "2级弹出下拉",
          id: "home13",
          subList: [
            { content: "111", id: "home131" },
            { content: "222", id: "home132" },
            { content: "333", id: "home133" }
          ]
        }
      ]
    }
  ]

};

class Detail extends Component {
  state = { visible: false };
  componentDidMount() {
    window.onclick = () => {
      this.setState({ visible: true });
    };
    // this.setState({
    //   container: document.getElementsByTagName('article')[0]
    // })
  }
  close = () => {
    this.setState({ visible: false });
  };
  render() {
    const { match } = this.props;
    const name = match.params.name.replace(
      /^(.)(.*)$/,
      (match, $1, $2) => $1.toUpperCase() + $2
    );
    this.name = name;
    const ComponentItem = Components[name];

    if (ComponentItem) {
      return <ComponentItem {...PROPS} {...this.state} onClose={this.close} >
      
          <div style={{width: '20px', height:" 20px", background: '#000'}}></div>
      </ComponentItem>;
    }
    return <div>ComponentItem not found</div>;
  }
}

export default Detail;
