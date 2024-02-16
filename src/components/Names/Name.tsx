import { useEffect, useState } from 'react'
import './name.scss'

const Name = () => {
  const [names, seNames] = useState<any>({
    name: true,
    secondName: false,
    thirdName: false,
    fourthName: false,
    fifthName: false,
  })

  useEffect(() => {
    handleTimeout(2000, 'secondName', true)
    handleTimeout(4000, 'thirdName', true)
    handleTimeout(6000, 'fourthName', true)
    handleTimeout(8000, 'fifthName', true)
  }, [])

  const handleTimeout = (ms: number, propertyName: string, value: boolean) => {
    setTimeout(() => {
      seNames((prevNames: any) => ({
        ...prevNames,
        [propertyName]: value,
      }))
    }, ms)
  }

  return (
    <>
      {names.name && (
        <div className='content'>
          <h2 className='header1'>Bhumika</h2>
          <h2 className='header1'>Bhumika</h2>
          <h2 className='header1'>Bhumika</h2>
        </div>
      )}

      {names.secondName && (
        <div className='second-content'>
          <h2 className='header2'>(Puttu)</h2>
          <h2 className='header2'>(Puttu)</h2>
          <h2 className='header2'>(Puttu)</h2>
        </div>
      )}

      {names.thirdName && (
        <div className='third-content'>
          <h2 className='header2'>(Chinna)</h2>
          <h2 className='header2'>(Chinna)</h2>
          <h2 className='header2'>(Chinna)</h2>
        </div>
      )}

      {names.fourthName && (
        <div className='fourth-content'>
          <h2 className='header2'>(Muddu)</h2>
          <h2 className='header2'>(Muddu)</h2>
          <h2 className='header2'>(Muddu)</h2>
        </div>
      )}

      {names.fifthName && (
        <div className='fifth-content'>
          <h2 className='header2'>(Nayi)</h2>
          <h2 className='header2'>(Nayi)</h2>
          <h2 className='header2'>(Nayi)</h2>
        </div>
      )}
    </>
  )
}

export default Name
