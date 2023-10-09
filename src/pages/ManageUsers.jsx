import { SearchIcon } from '../components/Icons'
import TableUserManage from '../components/TableUserManage'
import { TextInput } from '@tremor/react'

function ManageUsers () {
  return (
    <section className='w-11/12 h-full p-10 m-auto flex flex-col'>
      <h2 className='p-2 text-2xl font-semibold'>Gestión de usuarios</h2>
      <hr />
      <div className='w-full flex p-2 mt-10 justify-between items-center'>
        <TextInput role='search' name='search-user' icon={SearchIcon} placeholder='Buscar usuario' className='w-2/6 px-2 bg-inputBg' />
        <button className='bg-buttonPrimary text-white font-semibold px-10 py-2 rounded-sm hover:bg-buttonPrimary/90'>Nuevo usuario</button>
      </div>
      <section className='w-full flex mt-10'>
        <TableUserManage />
      </section>
    </section>
  )
}

export default ManageUsers
