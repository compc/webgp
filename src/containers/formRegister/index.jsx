import { useState } from "react";
import { validateRegister } from "../../utils/FormValidates";
import { registerDataBase } from "../../utils/Fetchs";
import { DownArrows, EyeClose, EyeOpen } from "../../components/Icons";

const IndexRegister = () => {
  const [registerData, setRegisterData] = useState({
    fullName: "",
    email: "",
    dni: "",
    password: "",
    empresa: "",
    area: "",
    permisos: "",
  });
  const [selectEmpresa, setSelectEmpresa] = useState([]);
  const [toogleSelect, setToogleSelect] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [mesaggeError, setMesaggeError] = useState(true)
  const [errors, setErrors] = useState({});
  const [firstValidation, setfirstValidation] = useState(false)

  const handlerDataRegister = (e) => {
    setRegisterData({
      ...registerData,
      [e.target.name]: e.target.value,
    });

    if (firstValidation) {
      setErrors(validateRegister({
        ...registerData,
        [e.target.name]: e.target.value,
      }, setMesaggeError))
    }
  };

  const handlerCheckEmpresa = (e) => {
    if (e.target.checked) {
      setSelectEmpresa([...selectEmpresa, e.target.value]);
    } else {
      let check = selectEmpresa.filter((em) => em !== e.target.value);
      setSelectEmpresa(check);
    }
  };

  const submitRegister = () => {
    registerData.empresa = selectEmpresa.join(',');
    setfirstValidation(true)
    let value = Object.keys(validateRegister(registerData, setMesaggeError))
    let emailError = value.some(e => e === 'email')
    let passError = value.some(e => e === 'password')
    let nameError = value.some(e => e === 'name')
    let dniError = value.some(e => e === 'dni')
    let empresaError = value.some(e => e === 'empresa')
    let areaError = value.some(e => e === 'area')
    let permisoError = value.some(e => e === 'permiso')
    if (nameError || dniError || emailError || passError || empresaError || areaError || permisoError) {
      setErrors(validateRegister(registerData, setMesaggeError))
      setToogleSelect(null);
    } else {
      setRegisterData({
        fullName: "",
        email: "",
        dni: "",
        password: "",
        empresa: [],
        area: "",
        permisos: "",
      });
      setSelectEmpresa([])
      registerDataBase(registerData)
    }
  };

  return (
    <main className="w-screen min-h-screen flex flex-col justify-center items-center bg-[#222933]">
    <div className="container-sm md:container-md bg-background md:py-8 px-2 md:px-6 rounded-md">
      <div className="bg-componentBg py-5 px-2 md:px-10 flex-col rounded-md">
        <div className="text-font font-titilliumWeb mb-5 md:mb-1 text-left ">
          <h2 className="text-font font-titilliumWeb text-2xl">Alta de Usuarios</h2>
          <span className="text-font font-titilliumWeb text-xs md:text-sm">Formulario para alta de nuevos usuarios</span>
          <hr />
        </div>

        <div className="md:flex md:justify-between md:h-96">

          <div className="md:w-1/2 md:flex md:justify-center md:items-center md:mr-10 md:flex-col">
            <div className="text-left mb-5">
              <div>
                <label className="font-titilliumWeb text-font">
                  Nombre completo
                </label>
              </div>
              <div className="h-7 md:w-96 bg-font rounded md:px-1 flex flex-col items-start">
                <input
                  className="w-auto outline-0 pl-2 md:w-full"
                  type="text"
                  name="fullName"
                  value={registerData.fullName}
                  placeholder="Nombre y Apellido"
                  onChange={(e) => handlerDataRegister(e)}
                />
                {mesaggeError && <span className="text-warning">{errors.name}</span>}
              </div>
            </div>

            <div className="text-left mb-5">
              <div>
                <label className="font-titilliumWeb text-font ">D.N.I</label>
              </div>
              <div className="h-7 md:w-96 bg-font rounded md:px-1 flex flex-col items-start">
                <input
                  className="w-auto outline-0 pl-2 md:w-full"
                  type="text"
                  name="dni"
                  value={registerData.dni}
                  placeholder="xxxxxxxxxx"
                  onChange={(e) => handlerDataRegister(e)}
                />
                {mesaggeError && <span className="text-warning">{errors.dni}</span>}
              </div>
            </div>

            <div className="text-left mb-5">
              <div>
                <label className="font-titilliumWeb text-font">Email</label>
              </div>
              <div className="h-7 md:w-96 bg-font rounded md:px-1 flex flex-col items-start">
                <input
                  className="w-auto outline-0 pl-2 md:w-full"
                  type="email"
                  name="email"
                  value={registerData.email}
                  placeholder="xxxxxx@xxxx.com"
                  onChange={(e) => handlerDataRegister(e)}
                />
                {mesaggeError && <span className="text-warning">{errors.email}</span>}
              </div>
            </div>

            <div className="text-left mb-5">
              <div>
                <label className="font-titilliumWeb text-font">Contraseña</label>
              </div>
              <div className="h-7 md:w-96 bg-font rounded flex flex-col items-start">
                <div className="h-7 md:w-96 px-1 bg-font rounded flex flex-row justify-between items-center">
                  <input
                    className="w-auto outline-0 pl-1"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={registerData.password}
                    placeholder="***********"
                    onChange={(e) => handlerDataRegister(e)}
                  />
                  <button
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <EyeOpen color={"#929DAE"} /> : <EyeClose color={"#929DAE"} />}
                  </button>
                </div>
                <div>{mesaggeError && <span className="text-warning">{errors.password}</span>}</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:flex md:justify-center md:items-center md:ml-10 md:flex-col md:pt-3">
            <div className="text-left mb-5 flex-col md:h-20 static">
              <div>
                <label className="font-titilliumWeb text-font">Empresa</label>
              </div>

              <div className="h-7 flex flex-col md:w-96 bg-font w-full rounded">
                <button
                  className="h-7 flex justify-around bg-font w-full rounded pr-2"
                  onClick={() =>
                    setToogleSelect(toogleSelect === null ? "empresa" : null)
                  }
                >
                  <p className="font-titilliumWeb flex w-full ml-1 text-fontPlaceholder">
                    {selectEmpresa[0] || 'Seleccione una empresa'}
                  </p>
                  <div><DownArrows color={"#929DAE"} /></div>
                </button>
                {mesaggeError && toogleSelect !== "empresa" && <span className="text-warning">{errors.empresa}</span>}
              </div>

              {toogleSelect === "empresa" && (
                <div className="absolute">
                  <ul className="bg-font w-auto">
                    <li className="hover:bg-fontPlaceholder w-56 md:w-96 hover:text-font pl-2">
                      <input
                        type="checkbox"
                        name="empresa"
                        value="gpena"
                        checked={selectEmpresa.some(e => e === "gpena")}
                        id=""
                        onChange={(e) => handlerCheckEmpresa(e)}
                      />
                      <label htmlFor="">GPenna</label>
                    </li>
                    <li className="hover:bg-fontPlaceholder hover:text-font pl-2">
                      <input
                        type="checkbox"
                        name="empresa"
                        value="comcam"
                        checked={selectEmpresa.some(e => e === "comcam")}
                        id=""
                        onChange={(e) => handlerCheckEmpresa(e)}
                      />
                      <label htmlFor="">ComCam</label>
                    </li>
                    <li className="hover:bg-fontPlaceholder hover:text-font pl-2">
                      <input
                        type="checkbox"
                        name="empresa"
                        value="unitec"
                        checked={selectEmpresa.some(e => e === "unitec")}
                        id=""
                        onChange={(e) => handlerCheckEmpresa(e)}
                      />
                      <label htmlFor="">Unitec</label>
                    </li>
                    <li className="hover:bg-fontPlaceholder hover:text-font pl-2">
                      <input
                        type="checkbox"
                        name="empresa"
                        value="petrocom"
                        checked={selectEmpresa.some(e => e === "petrocom")}
                        id=""
                        onChange={(e) => handlerCheckEmpresa(e)}
                      />
                      <label htmlFor="">PetroCom</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="text-left mb-5 flex-col static md:h-20">
              <div>
                <label className="font-titilliumWeb text-font">Area</label>
              </div>
              <div className="h-7 flex flex-col md:w-96 bg-font w-full rounded">
                <button
                  className="h-7 bg-font flex justify-around rounded w-full pr-2"
                  onClick={() =>
                    setToogleSelect(toogleSelect === null ? "area" : null)
                  }
                >
                  <p className="font-titilliumWeb flex text-fontPlaceholder w-full ml-1">
                    {registerData.area || 'Seleccione area'}
                  </p>
                  <div><DownArrows color={"#929DAE"} /></div>
                </button>
                {mesaggeError && toogleSelect !== "area" && <span className="text-warning">{errors.area}</span>}
              </div>
              {toogleSelect === "area" && (
                <div className="absolute">
                  <ul className="bg-font w-auto">
                    <li className="hover:bg-fontPlaceholder w-56 md:w-96 hover:text-font pl-2">
                      <input
                        type="radio"
                        name="area"
                        value="area1"
                        id=""
                        onChange={(e) => { handlerDataRegister(e); setToogleSelect(null) }}
                      />
                      <label htmlFor="">Area1</label>
                    </li>
                    <li className="hover:bg-fontPlaceholder hover:text-font pl-2">
                      <input
                        type="radio"
                        name="area"
                        value="area2"
                        id=""
                        onChange={(e) => { handlerDataRegister(e); setToogleSelect(null) }}
                      />
                      <label htmlFor="">Area2</label>
                    </li>
                    <li className="hover:bg-fontPlaceholder hover:text-font pl-2">
                      <input
                        type="radio"
                        name="area"
                        value="area3"
                        id=""
                        onChange={(e) => { handlerDataRegister(e); setToogleSelect(null) }}
                      />
                      <label htmlFor="">Area3</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <div className="text-left mb-5 flex-col static md:h-20">
              <div>
                <label className="font-titilliumWeb text-font">Permisos</label>
              </div>
              <div className="h-7 flex flex-col md:w-96 bg-font w-full rounded">
                <button
                  className="h-7 w-full flex justify-around bg-font rounded pr-2"
                  onClick={() =>
                    setToogleSelect(toogleSelect === null ? "permisos" : null)
                  }
                >
                  <p className="font-titilliumWeb flex w-full ml-1 text-fontPlaceholder">
                    {registerData.permisos || 'Agregue Permisos'}
                  </p>
                  <div><DownArrows color={"#929DAE"} /></div>
                </button>
                {mesaggeError && toogleSelect !== "permisos" && <span className="text-warning">{errors.permisos}</span>}
              </div>
              {toogleSelect === "permisos" && (
                <div className="absolute">
                  <ul className="bg-font w-auto">
                    <li className="hover:bg-fontPlaceholder w-56 md:w-96 hover:text-font pl-2">
                      <input
                        type="radio"
                        name="permisos"
                        value="rol1"
                        id=""
                        onChange={(e) => { handlerDataRegister(e); setToogleSelect(null) }}
                      />
                      <label htmlFor="">Rol1</label>
                    </li>
                    <li className="hover:bg-fontPlaceholder hover:text-font pl-2">
                      <input
                        type="radio"
                        name="permisos"
                        value="rol2"
                        id=""
                        onChange={(e) => { handlerDataRegister(e); setToogleSelect(null) }}
                      />
                      <label htmlFor="">Rol2</label>
                    </li>
                    <li className="hover:bg-fontPlaceholder hover:text-font pl-2">
                      <input
                        type="radio"
                        name="permisos"
                        value="rol3"
                        id=""
                        onChange={(e) => { handlerDataRegister(e); setToogleSelect(null) }}
                      />
                      <label htmlFor="">Rol3</label>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

        </div>
        <div>
          <button
            className="font-titilliumWeb bg-buttonBg static w-40 text-font p-1 px-2"
            onClick={submitRegister}
          >
            Registrar
          </button>
        </div>
      </div>
    </div>
    </main>
  );
};

export default IndexRegister;
