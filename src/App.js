import React, {Component} from 'react';
import Cardlist from './components/cardlist/cardlist'
import SearchBox from './components/Searchbox/SearchBox'
import '../src/App.css'




class App extends Component {
  constructor(props){
    super(props)
    this.state = { monsters: [],
       searchField: ''

    }
}

componentDidMount() {
   fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters: users}) )

    
}



render(){
  const {searchField, monsters} = this.state
  const filteredMonsters = monsters.filter(monster =>{ return monster.name.toLowerCase().includes(searchField.toLowerCase())
  })
  return (
    <div className='App'> 
     <h1>Monster's Rolodex</h1>
    <SearchBox  handleChange={e => this.setState({searchField: e.target.value })}/>
    <Cardlist  monsters={filteredMonsters}/>
    
    
    
    </div>

  )
}


  
  } 
  


export default App
