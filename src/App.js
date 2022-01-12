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
    this.setState({ gender: event.target.value });
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
       check is ${this.state.size}
       `
    );
  };
  render() {
    return (
      <div>
        {this.state.name1}
        {this.state.email}
        {this.state.mobile}
        {this.state.pass}
        <form onSubmit={this.sumbitData}>
          Name{' '}
          <input
            type="text"
            value={this.state.name1}
            onChange={this.changeName}
          />{' '}
          <br />
          Email{' '}
          <input
            type="text"
            value={this.state.email}
            onChange={this.changeEmail}
          />
          <br />
          Mobile{' '}
          <input
            type="text"
            value={this.state.mobile}
            onChange={this.changeMobile}
          />
          <br />
          Password{' '}
          <input
            type="text"
            value={this.state.pass}
            onChange={this.changePass}
          />
          <br />
          {/* <input
            type="radio"
            value={this.state.check}
            onChange={this.onRadio}
            name="gender"
          />
          Male
          <input
            type="radio"
            name="gender"
            value={this.state.check}
            onChange={this.onRadio}
          />
          Female <br /> */}
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
          <select
            defaultValue="select"
            checked={this.state.checked}
            onChange={this.handleCheckClick}
          >
            <option value="jack">select</option>
            <option value="jack">jack</option>
            <option value="master">master</option>
            <option value="blaster">blaster</option>
          </select>{' '}
          <br />
          <label>Select Size</label>
          <input
            type="radio"
            checked={this.state.size === 'L'}
            onChange={this.ChangeSize}
            value="L"
          />
          XL
          <input
            type="radio"
            checked={this.state.size === 'XL'}
            onChange={this.ChangeSize}
            value="XL"
          />
          XL <br />
          <input
            type="radio"
            checked={this.state.size === 'XXL'}
            onChange={this.ChangeSize}
            value="XXL"
          />
          XXL <br />
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
