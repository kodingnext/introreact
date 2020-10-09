import React from 'react'
// import styles from './button.module.css'

function ButtonFunctional({ text }) {
  const [name, setName] = React.useState('klik saya')
  const [btnName, setBtnName] = React.useState('')

  const handleChangeButtonName = (e) => {
    e.preventDefault()
    setName(btnName)
  }

  React.useEffect(() => {
    // 1. kalau dependensi di array kosong, efeknya sama seperti componentDidMount
    // 2. jika meletakkan dependensi pada array, efeknya akan sama seperti componentDidUpdate
    // fetch('https://swapi.dev/api/people/1')
    //   .then(res => res.json())
    //   .then(data => {
    //     setName(data.name)
    //   })

    // alert('name berubah')

  }, [])

  return (
    // <React.Fragment>
    <form onSubmit={handleChangeButtonName}>
      <h1>{text}</h1>
      <input placeholder="input button name" value={btnName} onChange={(e) => setBtnName(e.target.value)} />
      <button type="submit">{name}</button>
    </form>
    // </React.Fragment>
  )
}

export default ButtonFunctional