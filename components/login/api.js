const BASE_URL = "localhost:3000/api";
 async function  login(email,password) {
        let response = await fetch(`${BASE_URL}/users/login`,{password: password,
            email: email})
    }
