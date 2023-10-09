import { useState } from "react"
import { loginUser } from "../../utils/Fetchs"
import { EyeClose, EyeOpen } from "../../components/Icons"
import { validateLogin } from "../../utils/FormValidates"

const IndexLogin = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  })

  const [showPassword, setShowPassword] = useState(false)
  const [mesaggeError, setMesaggeError] = useState(true)
  const [errors, setErrors] = useState({});

  const handlerDataRegister = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    })
  }

  const submitRegister = (event) => {
    event.preventDefault()
    let value = Object.keys(validateLogin(loginData, setMesaggeError))
    let emailError = value.some(e => e === 'email')
    let passError = value.some(e => e === 'password')
    if (emailError || passError) {
      setErrors(validateLogin(loginData, setMesaggeError))
    } else loginUser(loginData)
  }

  return (
    <main className="w-screen min-h-screen flex flex-col justify-center items-center bg-[#222933]">
    <section className="w-11/12 max-w-6xl m-auto h-[600px] bg-componentBg flex flex-col justify-center items-center">      
          <div className="flex w-11/12 flex-col p-4">
            <h2 className="text-font font-titilliumWeb text-xl" >Solicitud de compra</h2>
            <p className="text-slate-300">Ingrese sus datos para ingresar</p>
          </div>
        <form onSubmit={submitRegister} className=" w-11/12 max-w-md m-auto bg-componentBg  justify-center items-center p-2 flex flex-col rounded-md">
          <div className="w-11/12 flex flex-col p-2 gap-1">
            <label htmlFor="email" className="text-font">Email</label>
            <input className="w-full py-2 p-3" type="text" name="email" placeholder="tuemail@gmai.com" />
          </div>

          <div className="w-11/12 relative flex flex-col mt-4 p-2 gap-1">
            <label htmlFor="email" className="text-font">Contraseña</label>
            <input className="w-full py-2 p-3" type={showPassword ? 'text' : 'password'} name="password" placeholder="**********" />
            <span 
              className="absolute right-6 bottom-4 lg:cursor-pointer"
              onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <EyeOpen color={"#929DAE"} /> : <EyeClose color={"#929DAE"} />}
            </span>
          </div>

          <button className="bg-buttonBg w-[70%] mt-4 mb-4 p-2 text-font rounded-md hover:bg-buttonBg/80">Iniciar sesión</button>
          {/* <div className="">
            <div className="text-left mb-5">
              <div>
                <label className="font-titilliumWeb text-font">Email</label>
              </div>
              <div className="h-7 md:w-96 bg-font md:px-1 rounded flex flex-col items-start">
                <input className="w-auto outline-0 pl-2 md:w-full" type="text" name="email" placeholder="xxxxxx@xxxx.com" onChange={(e) => handlerDataRegister(e)} />
                {mesaggeError && <span className="text-warning">{errors.email}</span>}
              </div>
            </div>

            <div className="text-left mb-5">
              <div>
                <label className="font-titilliumWeb text-font">Contraseña</label>
              </div>
              <div className="h-7 md:w-96 bg-font rounded flex flex-col items-start">
                <div className="h-7 md:w-96 px-1 bg-font rounded flex justify-between items-center">
                  <input className="w-auto outline-0 pl-1" type={showPassword ? 'text' : 'password'} name="password" placeholder="***********" onChange={(e) => handlerDataRegister(e)} />
                  <button onClick={() => { setShowPassword(!showPassword) }}>{showPassword ? <EyeOpen color={"#929DAE"} /> : <EyeClose color={"#929DAE"} />}</button>
                </div>
                <div>{mesaggeError && <span className="text-warning">{errors.password}</span>}</div>
              </div>
            </div>
          </div>

          <div className="text-right"><button className=" text-font">Recuperar contraseña</button></div>
          <br />

          <div>
            <button className="font-titilliumWeb bg-buttonBg w-40 text-font p-1 px-2" onClick={submitRegister} >Iniciar</button>
          </div> */}
        </form>
        </section>
  </main>
  )
}

export default IndexLogin