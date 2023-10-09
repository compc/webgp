const URL = "http://localhost:3001"

export const registerDataBase = async (data) => {
  try {
    const postUser = await fetch(`${URL}/auth/signup/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // authentication: 'bearer {token}'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    const response = await postUser.json();
    alert(response.message)
  } catch (error) {
    console.log(error)
  }
}

export const loginUser = async (data) => {
  try {
    const loginUser = await fetch(`${URL}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(data)
    })
    if (loginUser.status === 201) {
      const response = await loginUser.json();
      let tokenUser = JSON.stringify(response.data)
      localStorage.setItem('token', tokenUser);
      window.location.reload(true);
    }
    if (loginUser.status === 400) {
      const response = await loginUser.json();
      alert(response.message)
    }
  } catch (error) {
    console.log(error)
  }

}