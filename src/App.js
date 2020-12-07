import React from "react";
import "./styles.css";

class App extends React.Component {
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
            <input id="name" placeholder="Full Name" name="FullName" required />
            <span>*</span>
          </p>
          <fieldset>
            <legend>
              Do you have a driver's license?
              <abbr title="This field is mandatory" aria-label="required">
                *
              </abbr>
            </legend>
            <input type="radio" required name="driver" id="r1" value="yes" />
            <label htmlFor="r1">Yes</label>
            <input type="radio" required name="driver" id="r2" value="no" />
            <label htmlFor="r2">No</label>
          </fieldset>

          <p>
            email-id:
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email addresss"
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
