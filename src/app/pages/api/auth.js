  //here I'am setting up a regex code to validate email
  export function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
  
  export function validatePassword(password) {
    return password.length >= 6;
  }
  
  export function handleSignup(email, password) {

    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.some(user => user.email === email)) {
      throw new Error('User already exists');
    }
    
    // Add new user
    users.push({
      email,
      password: password,
    });
    console.log("list of users:", users);
    
    
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }
  
  export function handleLogin(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    console.log("List of users", users);
    
    const user = users.find(u => u.email === email && password === u.password);
    
    if (!user) {
      throw new Error('Invalid credentials');
    }
    
    // Set session
    localStorage.setItem('currentUser', email);
    return true;
  }