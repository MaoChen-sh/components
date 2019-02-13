import React, { PureComponent } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { keyframes } from 'styled-components';
import { ReactComponent as close } from "@media/nav_close.svg";
import { ReactComponent as open } from "@media/nav_open.svg";
import { ReactComponent as logout } from "@media/log_out.svg";
import { ReactComponent as password } from "@media/password.svg";

const Name = styled.div`
  width:32px;
  position:absolute;
  top:16px;
  right:32px;
  line-height:32px;
  text-align:center;
  color: #fff;
  vertical-align:middle;
  display:inline-block;
  border-radius:50%;
  background-color:rgb(0,120,114);
  &:hover{
    background-color:rgb(7,156,149);
  }
  cursor:pointer;
`;
const Area = styled.div`
  width: 700px;
  height: 64px;
  background: #06aea6;
  margin-top:10px;
  margin-left:10px;
  position:relative;
  text-align: center;
  color: #fff;
  line-height:64px;
  display:inline-block;
`;
const Logo = styled.img`
  position:absolute;
  height:50px;
  top:7px;
  left:100px;
`;
const Close = styled(close)`
  vertical-align: middle;
  width: 18px;
  height: 18px;
  position:absolute;
  top:23px;
  left:23px;
  path{
    fill:#fff;
  }
  cursor:pointer;
`;
const Open = styled(open)`
  vertical-align: middle;
  width: 18px;
  height: 18px;
  position:absolute;
  top:23px;
  left:23px;
  path{
    fill:#fff;
  }
  cursor:pointer;
`;
const animation1 = keyframes`
  from {
    transform: scale(0);
    opacity:0;
  }
  to {
    transform: scale(1);
    opacity:1;
  }
`;
const animation2 = keyframes`
  from {
    transform: scale(1);
    opacity:1;
  }
  to {
    transform: scale(0);
    opacity:0;
  }
`;
const User = styled.div`
  position:absolute;
  right:0px;
  margin-top:20px;
  width:200px;
  height:120px;
  animation: ${props => props.display == 'block'?animation1:animation2} .4s ease forwards;
  transform-origin: 98% -20px 0px;
  box-shadow: rgba(132, 132, 132, 0.5) 0px 1px 4px 0px;
  display:${props => props.display};
`;
const User1 = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:row;
  flex-wrap:wrap;
`;
const Namearea = styled.div`
  width:200px;
  height:72px;
  background-color:rgb(245,247,248);
  color:rgb(102,102,102);
  font-size:12px;
`;
const Name1 = styled.div`
  width:32px;
  height:32px;
  font-size:14px;
  text-align:center;
  margin-top:10px;
  color: #fff;
  vertical-align:middle;
  display:inline-block;
  border-radius:50%;
  background-color:rgb(7,156,149);
  cursor:pointer;
`;
const Password = styled.div`
  width:100px;
  height:48px;
  text-align:center;
  color:rgb(51,51,51);
  font-size:12px;
  line-height:48px;
  &:hover {
    color: #06aea6;
    svg {
      path {
        fill: #06aea6;
      }
    }
  }
`;
const Passwordsvg = styled(password)`
  width:14px;
  height:14px;
  margin-right:5px;
  vertical-align: middle;
  path{
    fill:#000;
  }
`;
const Layout = styled.div`
  width:100px;
  height:48px;
  text-align:center;
  color:rgb(51,51,51);
  font-size:12px;
  line-height:48px;
  &:hover {
    color: #06aea6;
    svg {
      path {
        fill: #06aea6;
      }
    }
  }
`;
const Layoutsvg = styled(logout)`
  width:14px;
  height:14px;
  margin-right:5px;
  vertical-align: middle;
  path{
    fill:#000;
  }
`;

class Header extends PureComponent {
  constructor () {
    super()
    this.state = { left: false ,display:'none'}
  }
  clickOn(){
    this.setState({
      left: !this.state.left
    })
  }
  handleMouseOver(){
    this.setState({
      display: 'block'
    })
  }
  handleMouseOut(){
    this.setState({
      display: 'inline-block'
    })
  }
  render() {
    return (
      <Area>
        {this.state.left? <Close onClick={this.clickOn.bind(this)} />:<Open onClick={this.clickOn.bind(this)} />}
        <Logo src={this.props.img}></Logo>
        {this.props.title}
        <Name onMouseOver={this.handleMouseOver.bind(this)}>{this.props.user.name.slice(-1)}
          <User display={this.state.display} onMouseLeave={this.handleMouseOut.bind(this)}>
            <User1>
              <Namearea>
                <Name1>{this.props.user.name.slice(-1)}</Name1>
                <div>{this.props.user.name}(工号10086)</div>
              </Namearea>
              <Password>
                <span>
                  <Passwordsvg></Passwordsvg>
                  修改密码
                </span>
              </Password>
              <Layout>
                <span>
                  <Layoutsvg></Layoutsvg>
                  退出登录
                </span>
              </Layout>
            </User1>
          </User>
        </Name>
      </Area>
    );
  }
}

export default Header;
