import CardItem from '../components/CardItem'

function RequestPending () {
  return (
    <section className='w-11/12 h-full p-10 m-auto flex flex-col overflow-auto'>
      <h2 className='p-2 text-2xl font-semibold'>Revisión de solicitudes</h2>
      <hr />
      <section className='w-full flex flex-col gap-y-4 mt-10'>
        <CardItem
          title='Filtros para COMCAM'
          details='La petición se realiza debido a la necesidad de suministros de limpieza.'
          priority='10D'
          userInfo={{
            name: 'Luciano Gimenez',
            company: 'COMCAM',
            area: 'IT',
            date: '3/10/23 10:15hs'
          }}
        />

      </section>
    </section>
  )
}

export default RequestPending
