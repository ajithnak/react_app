import React from 'react'
import { Header } from './components/Header'
import { Title } from './components/Title'
import { ListItem } from './components/ListItem'
import { AddItem } from './components/AddItem'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    }
    this.insertItem = this.insertItem.bind(this)
    this.delItem = this.delItem.bind(this)
  }
  insertItem(item) {
    this.setState({list: [...this.state.list, item]})
  }
  delItem(e) {
    let currentState = this.state.list
    let updatedState = currentState.filter(i => {
      if (i !== e.target.id) {
        return true
      } else {
        return false
      }
    })
    this.setState({ list: updatedState })
  }
  render() {
    return (
      <>
        <Header />
        <Title/>
        <ListItem delItem={this.delItem} list={this.state.list} />
        <AddItem insertItem={this.insertItem} />
      </>
    )
  }
}

export default App;