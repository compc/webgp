import { Table, TableBody, TableCell, TableHead, TableHeaderCell, TableRow } from '@tremor/react'

function TableUserManage () {
  return (
    <Table className='w-full'>
      <TableHead className='bg-buttonPrimary'>
        <TableRow>
          <TableHeaderCell className='text-white'>Id</TableHeaderCell>
          <TableHeaderCell className='text-white'>Nombre completo</TableHeaderCell>
          <TableHeaderCell className='text-white'>Sector</TableHeaderCell>
          <TableHeaderCell className='text-white'>Rol</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody className='border border-slate-200'>
        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Luciano Gimenez</TableCell>
          <TableCell>It</TableCell>
          <TableCell>User</TableCell>
        </TableRow>

        <TableRow>
          <TableCell>1</TableCell>
          <TableCell>Luciano Gimenez</TableCell>
          <TableCell>It</TableCell>
          <TableCell>User</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}

export default TableUserManage
