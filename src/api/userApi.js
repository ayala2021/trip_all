
class userApi{

    signin = (email, password) => {
        fetch(`http://localhost:3001/users/${email}/${password}`)
        .then((res) => res.json())
        .then((data) =>{ console.log(data);
               return data;}
         )
        .catch((err) => {
          console.log("error", err);
        });
    }

    
    signup = (firstName, lastName, email, password) =>{
      const requestDetails = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ firstName: firstName, lastName: lastName, email: email, password: password })
    };
    fetch('https://reqres.in/api/posts', requestDetails)
        .then(response => response.json())
        .then(res => console.log(res));
    }

}
export default userApi