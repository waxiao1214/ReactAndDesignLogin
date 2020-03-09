import React from 'react';
import './signup.css';
import { Form, Input,Tooltip, Icon, Cascader, Select,  Row, Label, Col, Checkbox, Button, AutoComplete} from 'antd';
const InputGroup = Input.Group;

function handleChange(value) {
console.log(`selected ${value}`);
}
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;


class RegistrationForm extends React.Component {
state = {
    confirmDirty: false,
    autoCompleteResult: [],
};

handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
    if (!err) {
        
    }
    });
};

handleConfirmBlur = e => {
    const { value } = e.target;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
};

compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('password')) {
    callback('Two passwords that you enter is inconsistent!');
    } else {
    callback();
    }
};

validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
    form.validateFields(['confirm'], { force: true });
    }
    callback();
};

handleWebsiteChange = value => {
    let autoCompleteResult;
    if (!value) {
    autoCompleteResult = [];
    } else {
    autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
};

render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;
    const children = [];
    for (let i = 10; i < 36; i++) {
    //    children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
    }
    const formItemLayout = {
        labelCol: {
            xs: { span: 0 },
            sm: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 0 },
            sm: { span: 14 },
        },
    };

    const tailformItemLayout = {
        labelCol: {
            xs: { span: 0 },
            sm: { span: 10 },
        },
        wrapperCol: {
            xs: { span: 0 },
            sm: { span: 14 },
        },
    };
    const postalCode = {
        labelCol: {
            xs: { span: 0 },
            sm: { span: 18 },
        },
        wrapperCol: {
            xs: { span: 0 },
            sm: { span: 6 },
        },
    };
    const province = {
        labelCol: {
            xs: { span: 0 },
            sm: { span: 14 },
        },
        wrapperCol: {
            xs: { span: 0 },
            sm: { span: 10 },
        },
    };
    const prefixSelector = getFieldDecorator('prefix', {
    initialValue: '86',
    })(
    <Select style={{ width: 70 }}>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
    </Select>,
    );

    const websiteOptions = autoCompleteResult.map(website => (
    <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));

    return (
        <article class="center bg-white pa3 shadow-3 pa4-ns mv3 ba b--black-10">
        <h3>Create an Account</h3>
        <p className="account">Already hava an account <a href="/">Click Here</a></p>
        <Form  onSubmit={this.handleSubmit}>
        <Form.Item {...formItemLayout} label="E-mail">
            {getFieldDecorator('email', {
            rules: [
                { type: 'email', message: 'The input is not valid E-mail!', },
                { required: true,  message: 'Please input your E-mail!', },
            ],
            })(<Input />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Password" hasFeedback>
            {getFieldDecorator('password', {
            rules: [
                { required: true, message: 'Please input your password!', },
                { validator: this.validateToNextPassword, },
            ],
            })(<Input.Password />)}
        </Form.Item>
        <Form.Item {...formItemLayout} label="Retype Password" hasFeedback>
            {getFieldDecorator('confirm', {
            rules: [
                { required: true, message: 'Please confirm your password!', },
                { validator: this.compareToFirstPassword, },
            ],
            })(<Input.Password onBlur={this.handleConfirmBlur} />)}
        </Form.Item>
        <Form.Item {...tailformItemLayout} label="First Name" >
        {getFieldDecorator('first_name', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item>   
        <Form.Item {...tailformItemLayout} label="Last Name" >
        {getFieldDecorator('last_name', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item>
        <Form.Item {...tailformItemLayout} label="Company" >
        {getFieldDecorator('company', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item> 
        <Form.Item {...tailformItemLayout} label="Street" >
        {getFieldDecorator('street', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item>   
        <Form.Item {...tailformItemLayout} label="Street 2" >
        {getFieldDecorator('stree2', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item> 
        <Form.Item {...tailformItemLayout} label="City" >
        {getFieldDecorator('city', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item>
        <Form.Item {...province} label="State or Province" >
            {getFieldDecorator('state_province', {
                rules: [
                    { required: false, message: 'Input State or Province' },
                ],
                })(<Select size="small"/>)}
        </Form.Item>    
        <Form.Item {...postalCode} label="Postal Code" >
            {getFieldDecorator('postal_Code', {
                rules: [
                    { required: true, message: 'Input Postal Code'},
                ],
                })(<Input size="small"/>)}
        </Form.Item>
        <Form.Item {...tailformItemLayout} label="Country" >
        {getFieldDecorator('Country', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item>
        <Form.Item {...tailformItemLayout} label="Phone" >
        {getFieldDecorator('phone', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item>
        <Form.Item {...tailformItemLayout} label="Fax" >
        {getFieldDecorator('fax', {
                rules: [
                    { required: false },
                ],
                })(<Input size="small"/>)}
        </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>                
        </Form>
    </article>

    );
}
}

const Signup = Form.create({ name: 'register' })(RegistrationForm);

export default Signup