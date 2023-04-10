import axios from 'axios';

function logout() {
  axios.post('/auth/logout')
    .then(response => {
      console.log(response.data.message);
      // Redirect the user to the desired page
      window.location.href = '/login';
    })
    .catch(error => console.error(error));
}

function LogoutButton() {
  return (
    <button onClick={logout}>Logout</button>
  );
}

