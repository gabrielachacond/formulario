import React from "react";

class LoginCard extends React.Component {
  state = {
    username: "Gabi",
    passwordConfirm: "Patilla",
    password: "Patilla",
    disabled: true
  };

  handleInputChange = e => {
    e.persist();
    this.setState({ [e.target.name]: e.target.value 
    },
    this.checkIfEmpty 
    );
  };

  checkValues = () =>{
    const {username, password} = this.state;
    if(username.length  > 3 && password.length > 3) {
     this.state({disabled: false})
    }
    else
    this.state({disabled: true})
  }

  render() {
    const { username, disabled, password, passwordConfirm } = this.state;
    return (
      <div>
        <div className="container centered">
          <div className="white ">
            <form className="custom-form">
              <input
                autoComplete="off"
                name="username"
                value={username}
                onChange={this.handleInputChange}
                placeholder="username"
              />
              <input
                autoComplete="off"
                name="password"
                value={password}
                placeholder="password"
                onChange={this.handleInputChange}
                type="password"
              />
              <input
                autoComplete="off"
                value={passwordConfirm}
                name="passwordConfirm"
                placeholder="confirma password"
                onChange={this.handleInputChange}
                type="password"
              />
              <button
                disabled={disabled}
                /**
                 * usando template literals, se puede aplicar una clase CSS
                 * si el estado disabled es true, y es para mostrar string
                 */
                className={`btn ${disabled ? "disabled" : "false"}`}
              >
                Registrate
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginCard;
