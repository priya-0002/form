import "./App.css";
// import First from "./First";

function App() {
  return (
    <div className="App">
      <div id="container">
        <div id="left">
          <img src="" alt="" />
        </div>

        <div id="right">
          <h1 id="login">The Rest is Up to you!</h1>
          <br />
          <input type="email" id="email" class="client-info" />
          <label for="email">Email</label>
          <input type="password" id="password" class="client-info" />
          <label for="password">Password</label>
          <br />
          <div className="submit-group">
            <a href="#" className="forgot" value="forgot">
              forgot password?
            </a>
            <input
              type="submit"
              id="submit-button"
              className="submit-button"
              value="Submit"
            />
          </div>

          <hr className="line" />

          <a href="#" className="signin" value="signin">
            Sign in
          </a>

          {/* <button class="social" id="facebook">
            connect with facebook
          </button> */}
          {/* <button class="social" id="google">
            connect with google
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default App;
