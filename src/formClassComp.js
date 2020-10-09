import React, { Component } from 'react'

class FormClassComp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    peopleName: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    // fetch('https://swapi.dev/api/people/1')
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       peopleName: data.name
    //     })
    //   })
  }

  componentDidUpdate(prevState, prevProps) {
    if (prevState.peopleName !== this.state.peopleName) {
      // alert('berhasil mendapatkan nama starwars')
    }
  }

  componentWillUnmount() {

  }

  render() {
    const { name, email, password, peopleName } = this.state
    const { title } = this.props

    return (
      <form>
        <h1>{title}</h1>
        <h2>name: {peopleName}</h2>
        <input placeholder="type your name" type="text" name="name" value={name} onChange={this.handleChange} />
        <input placeholder="type your email" type="text" name="email" value={email} onChange={this.handleChange} />
        <input placeholder="type your password" type="password" name="password" value={password} onChange={this.handleChange} />
      </form>
    )
  }
}

export default FormClassComp