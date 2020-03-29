import React, { Component } from 'react';
import './Dashboard.css';
import  logoImg  from '../img/logo.png';
import { Link, Route, Switch } from 'react-router-dom';
import home from './partial/home';
import groupcustomer from './partial/groupcustomer';
import downloadAgent from './partial/downloadAgent';
import devices from './partial/devices';
import scheduling from './partial/scheduling';
import scripts from './partial/scripts';
import addservices from './partial/addservices';
import accountsetting from './partial/accountsetting';
import contactus from './partial/contactus';
import { Layout, Menu, Breadcrumb, Icon, Button, AutoComplete } from 'antd';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Dashboard extends Component {

    render() {
        return (
            <div  style = {{width : "100%", height : "100vh", backgroundColor : "white"}}>
                <Layout>
                {/* #009df8 */}
                    <Header style={{ background: '#009df8' }} className="header">
                    <div className="row">
                        <div className="col-sm-6"> 
                            <img src={ logoImg } style ={{with:'auto', height:'50%'}} alt='image'/>
                        </div>
                        <div className="col-sm-5"></div>
                        <div className="col-sm-1">
                        <Button onClick={ this.props.logOut }type="link" style = {{ color : '#ffffff' }} ghost> <a>Log Out</a> </Button>
                     </div>
                     </div>
                    </Header>
                    <Content>
                    {/* <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb> */}
                    <Layout style={{ padding: '24px 0', background: '#fff' }}>
                        <Sider width={200} style={{ background: '#fff' }}>
                        <Menu  mode="inline"  defaultSelectedKeys={['1']} defaultOpenKeys={['1']} style={{ height: '100%' }} >
                            <Menu.Item key="1">
                                <Icon type="desktop" /><span>Home</span><Link to="/dashboard/home" />
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Icon type="desktop" /><span>Group/Customer</span><Link to="/dashboard/groupcustomer" />
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Icon type="desktop" /><span>Download Agent</span><Link to="/dashboard/downloadAgent" />
                            </Menu.Item>
                            <Menu.Item key="4">
                                <Icon type="desktop" /><span>Devices</span><Link to="/dashboard/devices" />
                            </Menu.Item>
                            <Menu.Item key="5">
                                <Icon type="desktop" /><span>Scheduling</span><Link to="/dashboard/scheduling" />
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Icon type="desktop" /> <span>Scripts</span> <Link to="/dashboard/scripts" />
                            </Menu.Item>
                            <Menu.Item key="7">
                                <Icon type="desktop" /> <span>Add services</span> <Link to="/dashboard/addservices" />
                            </Menu.Item>
                            <Menu.Item key="8">
                                <Icon type="desktop" />  <span>Account settings</span>  <Link to="/dashboard/accountsetting" />
                            </Menu.Item>
                            <Menu.Item key="9">
                                <Icon type="desktop" /> <span>Contact us</span> <Link to="/dashboard/contactus" />
                            </Menu.Item>
                        </Menu>
                        </Sider>
                        <Content style={{ padding: '0 24px', minHeight: 280 }}>
                            <Switch>
                                <Route exact path="/dashboard/home" component = {home} />
                                <Route path="/dashboard/groupcustomer" component = {groupcustomer}/>
                                <Route path="/dashboard/downloadAgent" component = {downloadAgent}/>
                                <Route path="/dashboard/devices" component = {devices}/>
                                <Route path="/dashboard/scheduling" component = {scheduling}/>
                                <Route path="/dashboard/scripts" component = {scripts}/>
                                <Route path="/dashboard/addservices" component = {addservices}/>
                                <Route path="/dashboard/accountsetting" component = {accountsetting}/>
                                <Route path="/dashboard/contactus" component = {contactus}/>
                            </Switch>
                        </Content>
                    </Layout>
                    </Content>
                    <div className = "footer">
                        <Footer style = {{textAlign : "center"}}> Design ©2020 Created by WangXiaoJin </Footer>
                    </div>
                </Layout>
            </div>
        )
    }
}

export default Dashboard;
