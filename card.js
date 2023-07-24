async function fetchUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  return data.results[0];
}

function displayUser(user) {
  document.getElementById("profile-picture").src = user.picture.large;
  document.getElementById("username").textContent = user.login.username;
  document.getElementById(
    "name"
  ).textContent = `${user.name.title} ${user.name.first} ${user.name.last}`;
  document.getElementById("email").textContent = user.email;
  document.getElementById("city").textContent = user.location.city;
  document.getElementById("country").textContent = user.location.country;
  document.getElementById("password").textContent = user.login.password;
}

fetchUser()
  .then(displayUser)
  .catch((error) => console.error("Error fetching user:", error));
