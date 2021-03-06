import React from 'react';
import './style.css';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      user: {
        name1: '',
        email: '',
        mobile: '',
        pass: '',
        gender: '',
        checked: ' ',
        check: '',
        size: '',
        clr: '',
      },
    };
  }

  changeName = (event) => {
    console.log(event.target.value);
    this.setState({ name1: event.target.value });
  };
  changeEmail = (event) => {
    this.setState({ email: event.target.value });
  };
  changeColor = (event) => {
    this.setState({ clr: event.target.value });
  };
  changeMobile = (event) => {
    this.setState({ mobile: event.target.value });
  };
  changePass = (event) => {
    this.setState({ pass: event.target.value });
  };
  ChangeGender = (event) => {
    this.setState({ gender: event.target.value });
  };
  ChangeSize = (event) => {
    this.setState({ size: event.target.value });
  };
  handleCheckClick = (event) => {
    this.setState({ checked: event.target.value });
  };
  ChangeCheck = (event) => {
    this.setState({
      // check: !this.state.checked,
      check: event.target.value,
    });
  };
  sumbitData = () => {
    alert(
      ` name is ${this.state.name1}
       mobile is ${this.state.email} 
       gender is ${this.state.gender}
       select is ${this.state.checked}
       check is ${this.state.clr}
       `
    );
  };

  render() {
    const { text } = this.state;
    return (
      <div>
        {this.state.name1}
        {this.state.email}
        {this.state.mobile}
        {this.state.pass}
        <form onSubmit={this.sumbitData}>
          <label>Enter your Name</label> <br />
          <input
            type="text"
            value={this.state.name1}
            onChange={this.changeName}
          />{' '}
          <br />
          <label>Enter your Email</label> <br />
          <input
            type="text"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <br />
          <label>Enter your Mobile</label> <br />
          <input
            type="text"
            value={this.state.mobile}
            onChange={this.changeMobile}
          />
          <br />
          <label>Enter your Shiping Address</label> <br />
          <input
            type="text"
            value={this.state.pass}
            onChange={this.changePass}
          />
          <br />
          <label>Select your gender</label> <br />
          <input
            type="radio"
            checked={this.state.gender === 'Male'}
            onChange={this.ChangeGender}
            value="Male"
          />{' '}
          Male
          <input
            type="radio"
            checked={this.state.gender === 'Female'}
            onChange={this.ChangeGender}
            value="Female"
          />{' '}
          Female <br />
          <label>Select your state</label> <br />
          <select
            defaultValue="select"
            checked={this.state.checked}
            onChange={this.handleCheckClick}
          >
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">
              Andaman and Nicobar Islands
            </option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">
              Dadar and Nagar Haveli
            </option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
          </select>{' '}
          <br />
          <label>Select Size</label>
          <br />
          <input
            type="radio"
            checked={this.state.size === 'L'}
            onChange={this.ChangeSize}
            value="L"
          />
          L
          <input
            type="radio"
            checked={this.state.size === 'XL'}
            onChange={this.ChangeSize}
            value="XL"
          />
          XL
          <input
            type="radio"
            checked={this.state.size === 'XXL'}
            onChange={this.ChangeSize}
            value="XXL"
          />
          XXL <br />
          <br />
          <label>Select your Color</label> <br />
          <br />
          <input
            type="color"
            value={this.state.clr}
            onChange={this.changeColor}
          />
          <br />
          <br />
          {/* <input type="checkbox" onChange={this.ChangeCheck} value="aaa" />
          aaa
          <br />
          <input type="checkbox" onChange={this.ChangeCheck} value="bbb" />
          bbb
          <br />
          <input type="checkbox" onChange={this.ChangeCheck} value="ccc" />
          ccc
          <br /> */}
          <input type="submit" value="submit" />
        </form>
      </div>
    );
  }
}
