import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import styled,{ keyframes } from "styled-components";
import { ReactComponent as home } from "@media/home.svg";


const Div = styled.div`
  position:relative;
  top:20px;
  left:50px;
  width:230px;
  height:500px;
  box-shadow: rgba(202, 202, 202, 0.5) 0px 1px 4px 0px;
`;
const Home = styled.div`
  width:100%;
  height:50px;
  position:relative;
  cursor:pointer;
  color:#000;
  &:hover{
    background-color:rgba(6,174,166,0.3);
  }
`;
const Homesvg = styled(home)`
  width:19px;
  height:19px;
  position:relative;
  top:15px;
  left:30px;
  vertical-align:middle;
  path{
    fill:#000;
  }
`;
const Hometext = styled.div`
  line-height:50px;
  display: block;
  float:right;
  margin-right:120px;
  font-weight:bold;
`;
const Navlist = styled.div`
  position:relative;
  left:0px;
  font-size:14px;
  span{
    height:40px;
    display:inline-block;
    width:100%;
    line-height:40px;
    cursor:pointer;
    padding-left:30px;
  }
  span:hover{
    background-color:rgba(6,174,166,0.3);
  }
  span div{
    width:0px;
    height:0px;
    position:relative;
    float:right;
    top:17px;
    right:100px;
    border-width: 5px;
    border-color: #000 transparent transparent transparent;
    border-style: solid dashed dashed dashed;
    vertical-align:middle;
    transform-origin:50% 25% 0;
  }
`;


class Nav extends PureComponent {

  constructor () {
    super()
    this.state = {}
  }

  onMenuClicked = (e) => {
    let subMenu = document.getElementById(e.currentTarget.id).nextElementSibling;
    let cliMenu = document.getElementById(e.currentTarget.id).lastElementChild
    if(subMenu != null){
      let subMenuStyle = window.getComputedStyle(subMenu, null);
      if(subMenuStyle.display == "none"){
        subMenu.style.display = 'block',
        cliMenu.style.transform = 'rotate(0deg)'
      }else{
        subMenu.style.display = 'none',
        cliMenu.style.transform = 'rotate(-90deg)'
      }
    }
  }

  generateMenu(menuObj) {
    let vdom = [];
    if (menuObj instanceof Array) {
        let list = [];
        for (var item of menuObj) {
            list.push(this.generateMenu(item));
        }
        vdom.push(
            <div key="0">
                {list}
            </div>
        );
    } else {
      vdom.push(
          <div key={menuObj.id}>
              <span id={menuObj.id} text={menuObj.id} onClick={this.onMenuClicked}>{menuObj.content}{menuObj.subList?<div text={menuObj.id}></div>:null}</span>
              {menuObj.subList?this.generateMenu(menuObj.subList):null}
          </div>
      );
    }
    return vdom;
  }

  render() {
    const {navData} = this.props;
    const TEXT = {
      home:'首页',
    };
    return (
      <Div>
          <Home>
            <Homesvg/>
            <Hometext>{TEXT.home}</Hometext>
          </Home>
          <Navlist>
            {this.generateMenu(navData)}
          </Navlist>
      </Div>
    );
  }
}

Nav.propTypes = {
  navData: PropTypes.array,
};
export default Nav;
