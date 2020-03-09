import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { Redirect } from 'react-router-dom';
import React from 'react';
import './Login.css';
import * as actions from '../../store/actions/auth'
import logImg from '../img/logo.png';
import { connect } from 'react-redux';
class NormalLoginForm extends React.Component {
  
  state = {
      redirect : false
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        err.preventDefault();
        fetch('http://localhost:8000/token-auth/', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(values)
        })
          .then(res => res.json())
          .then(json => {
            console.log(values)
            localStorage.setItem('token', json.token);
            this.setState({
                redirect : true
            })
            this.setState({
              logged_in: true,
              displayed_form: '',
              username: json.user.username
            });
          });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const { redirect } = this.state;
    if ( redirect ) {
        return <Redirect to='/dashboard/home'/>
    }

    return (
      <div>
        <article class="center bg-white pa3 shadow-3 pa4-ns mv3 ba b--black-10">
        <img src ={ logImg }   alt = "Photo cann't load."/>
        <div className ="rowSpace"/>
        <div className ="rowSpace"/>
        <div className ="loginContainer">
          <div className = "loginForm">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input
                    prefix = {<Icon type="user" style={{ color : 'rgba(0,0,0,.25)' }} />}
                    placeholder = "Username"
                    />,
                )}
                </Form.Item>
                <div className ="rowSpace"/>
                <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                    />,
                )}
                </Form.Item>
                <Form.Item>
                <div className ="rowSpace"/>
                <div className ="rowSpace"/>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                </Button>
                
                </Form.Item>
            </Form> 
          </div>        
        </div> 
        <br/>
        <br/>
        <div className ="rowSpace"/>
        <a className="login-form-forgot" href="">
            Forgot password
        </a>
        <div className="rowSpace"></div>
        <a href="/signup">Create an account</a>
       
        </article>
      </div>
    );
  }
}

const Login = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default Login