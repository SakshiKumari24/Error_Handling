class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, '*');
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Error: Password must be at least 8 characters long and contain at least one number and one uppercase letter.");
      }
    }
  }
  const user = new User("exampleUser", "oldPassword");
  console.log("Original Password:", user.password);
  
  user.password = "newPassword123";
  console.log("New Password:", user.password);
  
  user.password = "weak";
  