
import './App.css';
import First from './First'

function App() {
  return (
    <div className="App">
     
     <div id="container">
  <div id="left">
    <img src="" alt="" />
  </div>
  
  <div id="right">
    <h1 id="login">LogIn</h1><br/>
    <input type="email" id="email" class="client-info"/>
    <label for="email">Email</label>
    <input type="password" id="password" class="client-info"/>
    <label for="password">Password</label>
    <input type="submit" id="submit" class="client-info" value="Submit"/>
    <button class="social" id="facebook">connect with facebook</button>
    <button class="social" id="google">connect with google</button>
  </div>
</div>

    </div>
  );
}

export default App;
