import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexLogin from './containers/formLogin'
import IndexRegister from './containers/formRegister'
import Dashboard from './pages/Dashboard'

function App() {

  const [tokenUser, setTokenUser] = useState("")

  useEffect(() => {
    if (!tokenUser) {
      setTokenUser(JSON.parse(localStorage.getItem('token')))
    }
  }, [tokenUser])

  return (
    <main className="w-screen min-h-screen flex flex-col justify-center items-center">
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<IndexLogin />}/>
              <Route path='/signup' element={<IndexRegister />}/>
              <Route path='/dashboard' element={<Dashboard />}/>
            </Routes>
        </BrowserRouter>
    </main>
  )
}

export default App
