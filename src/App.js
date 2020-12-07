import React from "react";
import "./styles.css";

class App extends React.Component {
  state = {
    name: "",
    license: "",
    email: "",
    age: "",
    isSubmitted: false
  };
  onInput = (event, id) => {
    console.log(id);
    const inputText = event.target.value;
    this.setState({ id: inputText });
    console.log(this.state);
  };
  render() {
    return (
      // const email = document.getElementById('email');
      // console.log(this.email.validity);
      //if(this.email.validity.valid) {
      //const disabled=true;
      //}
      <>
        <h1 style={{ textAlign: "center" }}>Sign up</h1>
        <form>
          <p>
            Name:
            <input
              id="name"
              placeholder="Full Name"
              name="FullName"
              required
              onChange={(id) => this.onInput(id)}
            />
            <span>*</span>
          </p>
          <fieldset>
            <legend>
              Do you have a driver's license?
              <abbr
                id="licence"
                title="This field is mandatory"
                aria-label="required"
              >
                *
              </abbr>
            </legend>
            <input
              type="radio"
              required
              id="driver"
              value="yes"
              onChange={(id) => this.onInput(id)}
            />
            <label htmlFor="r1">Yes</label>
            <input
              type="radio"
              required
              id="driver"
              value="no"
              onChange={(id) => this.onInput(id)}
            />
            <label htmlFor="r2">No</label>
          </fieldset>

          <p>
            email-id:
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email addresss"
              onChange={(id) => this.onInput(id)}
              required
              pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
            />
            *
          </p>

          <p>
            age:
            <input
              type="number"
              min="12"
              max="120"
              step="1"
              id="age"
              name="age"
              onChange={(id) => this.onInput(id)}
              placeholder="age"
              pattern="\d+"
            />
          </p>
          {/*<p>Comments:<textarea id="comments" name="msg" maxlength="140" rows="5" cols="15"/></p>*/}

          <button
            style={{ display: "flex", margin: "auto", alignSelf: "center" }}
            disabled={this.disabled}
          >
            Submit
          </button>
        </form>
      </>
    );
  }
}
export default App;
