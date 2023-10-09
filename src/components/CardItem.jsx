import { Table, TableHead, TableRow, TableHeaderCell, TableCell, TableBody, Badge, Text } from '@tremor/react'

/**
 *
 * @param {string} title
 * @param {string} details
 * @param {Object} userInfo
 * @param {'Urg' | '10D' | '72hs' | '30D'} priority
 * @returns Component
 */

function CardItem ({
  title,
  details,
  userInfo,
  priority
}) {
  return (
    <div className='w-[80%] m-auto flex flex-col bg-slate-200 rounded-sm'>
      <header className='w-full p-3 font-bold flex justify-between'>
        <h4>{title}</h4>
        <Text>esta solicitud requiere que la aceptes o la rechaces</Text>
      </header>
      <div className='w-full flex items-center justify-between p-2'>
        <div className='w-[40%] h-full'>
          <p className='text-xl underline p-1'>Detalle</p>
          <div className='border border-slate-600 p-2'>
            <p>{details}</p>
          </div>
        </div>
        <div className='w-1/2 flex flex-col'>
          <p>Datos del solicitante</p>
          <hr className='bg-black h-[2px]' />
          <Table className='text-center mt-2'>
            <TableHead className='bg-buttonPrimary'>
              <TableRow>
                <TableHeaderCell className='text-white'>Empresa</TableHeaderCell>
                <TableHeaderCell className='text-white'>Area</TableHeaderCell>
                <TableHeaderCell className='text-white'>Usuario</TableHeaderCell>
                <TableHeaderCell className='text-white'>Fecha</TableHeaderCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>{userInfo.company}</TableCell>
                <TableCell>{userInfo.area}</TableCell>
                <TableCell>{userInfo.name}</TableCell>
                <TableCell>{userInfo.date}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <div className='w-full flex justify-between p-2'>
            <Badge>
              {priority}
            </Badge>
            <a href='' className='text-sm text-buttonBg'>Ir a ver solicitud completa</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardItem
