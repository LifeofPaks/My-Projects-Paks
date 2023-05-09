 const form = document.getElementById("form");
const login = document.getElementById("login");
const register = document.getElementById("reg");


register.addEventListener('click', ()=>{
    form.innerHTML = `
    <div class="buttons-box">
          <div class="reg-btn"></div>
          <button class="toggle-btn" id="login">Login</button>
          <button class="toggle-btn" id="reg">Register</button>
        </div>
    <div class="input-group">
    <div class="input-control">
      <label class="label">Email </label><br />
      <input
        class="input"
        id="email"
        type="email"
        placeholder=" Enter your email"
      />
      <div class="error"></div>
    </div>
    <div class="input-control">
      <label class="label">Username</label><br />
      <input
        class="input"
        id="username"
        type="text"
        placeholder=" Enter your Username"
      />
      <div class="error"></div>
    </div>
    <div class="input-control">
      <label class="label">Password</label><br />
      <input
        class="input"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <div class="error"></div>
    </div>
    <div class="input-control">
      <label class="label">Confirm Password</label><br />
      <input
        class="input"
        id="password2"
        type="password"
        placeholder="confirm your password"
      />
      <div class="error"></div>
    </div>
    <div class="small">
      <input type="checkbox" />
      <small>I agree to terms and condtions</small>
    </div>
    <button class="confirm" id="register">Register</button>
    <div class="small"><small>Or you can sign Up with</small></div>
    <div class="icons">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-google-plus"></i>
    </div>
    `
})
login.addEventListener('click', ()=>{
    form.innerHTML`
    <div class="buttons-box">
          <div class="btn"></div>
          <button class="toggle-btn" id="login">Login</button>
          <button class="toggle-btn" id="reg">Register</button>
        </div>
    <div class="input-group">
    <div class="input-control">
      <label class="label">Username</label><br />
      <input
        class="input"
        id="username"
        type="text"
        placeholder=" Enter your Username"
      />
      <div class="error"></div>
    </div>
    <div class="input-control">
      <label class="label">Password</label><br />
      <input
        class="input"
        id="password"
        type="password"
        placeholder="Enter your password"
      />
      <div class="error"></div>
    </div>
    <div class="small">
      <input type="checkbox" />
      <small>Remember password</small>
    </div>
    <button class="confirm" id="register">Login</button>
    <div class="small"><small>Or you can sign Up with</small></div>
    <div class="icons">
      <i class="fa-brands fa-facebook"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-google-plus"></i>
    </div>
  </div>
    `
})


