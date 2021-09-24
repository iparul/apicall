import React, { Component } from 'react'
import PropTypes from 'prop-types'

 class App extends Component {
  constructor(){
    super();
    this.state={
      users:null
    }
  }
  componentDidMount(){
    fetch('https://reqres.in/api/users?page=2').then((resp)=>{
      resp.json().then((result)=>{
        console.log(result)
        this.setState({users:result.data})
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Employees Informations </h1>
        {
          this.state.users ?
          this.state.users.map((item,i)=>
          <div><p>{i}---{item.first_name} {item.last_name} ---- {item.email}</p></div>
          )
          :
          null
        }
      </div>
    )
  }
}
export default App;

