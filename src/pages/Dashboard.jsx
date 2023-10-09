import { Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const handleNavigation = (path) => {
    navigate(path)
  }

  const isUrlActive = (path) => {
    return window.location.pathname.split('/')[2] === path
  }

  return (
    <main className='w-full h-screen flex'>
      <section className='w-[30%] max-w-md pt-10 p-4 flex flex-col justify-between items-center gap-y-4 border-r border-r-black/20'>
        <div>
          <button className='py-2 px-16 text-white font-semibold bg-buttonPrimary rounded-md'>Cargar datos</button>
          <ul className='w-full flex flex-col justify-center items-center mt-5 gap-4'>
            <div
              className={`cursor-pointer py-1 rounded-sm w-full  flex justify-center ${isUrlActive('requests') ? 'bg-slate-100 ' : ''}`}
              onClick={() => handleNavigation('requests')}
            >
              <li className={`${isUrlActive('requests') ? 'text-textPrimary font-semibold ' : ''} text-sm w-[60%] `}>Nuevas solicitudes</li>
            </div>
            <div className={`cursor-pointer py-1 rounded-sm  flex justify-center w-full ${isUrlActive('cotOpen') ? 'bg-slate-100 ' : ''}`}>
              <li className={`${isUrlActive('cotOpen') ? 'text-textPrimary font-semibold ' : ''} text-sm w-[60%]`}>Cotizaciones abiertas</li>
            </div>
            <div className={`cursor-pointer py-1 rounded-sm  flex justify-center w-full ${isUrlActive('report') ? 'bg-slate-100 ' : ''}`}>
              <li className={`${isUrlActive('report') ? 'text-textPrimary font-semibold ' : ''} text-sm w-[60%]`}>Reporte</li>
            </div>
            <div className={`cursor-pointer py-1 rounded-sm  flex justify-center w-full ${isUrlActive('request') ? 'bg-slate-100 ' : ''}`}>
              <li className='m-auto w-[60%] text-sm'>Cargar pedido</li>
            </div>
            <div
              className={`cursor-pointer py-1 rounded-sm  flex justify-center w-full ${isUrlActive('manage-user') ? 'bg-slate-100 ' : ''}`}
              onClick={() => handleNavigation('manage-user')}
            >
              <li className={`${isUrlActive('manage-user') ? 'text-textPrimary font-semibold ' : ''} text-sm w-[60%]`}>Gestionar usuarios</li>
            </div>
          </ul>
        </div>

        <div className='w-full flex justify-center mb-4'>
          <button className='text-warning font-semibold'>Cerrar sesión</button>
        </div>
      </section>
      <section className='flex flex-col w-full'>
        <Outlet />
      </section>
    </main>
  )
}

export default Dashboard
