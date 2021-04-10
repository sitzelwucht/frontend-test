
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SearchBar from './components/SearchBar'
import List from './components/List'
import axios from 'axios'


function App() {

  const [data, setData] = useState(() => {
    getData(5).then(result => setData(result)) 
  })
  const [filteredData, setFilteredData] = useState(data)
  

  // fetch a randomized set of items from external API
  async function getData(n) {
    const response = await axios.get(`https://random-data-api.com/api/food/random_food?size=${n}`)
    const items =  response.data.map(item => {
      return item.dish
    })
    return items
  }


  // fetch 200 random items, get one item from a random index and add it to the state
  const handleAdd = async (e) => {
    e.preventDefault()
    try {
        const response = await getData(100)
        const newItem = response[Math.floor(Math.random() * response.length)]

        setData(previousData => {
          return [newItem, ...previousData]
        })
    }
    catch(err) {
        console.log(`error: ${err}`)
    }
  }

  // filter shown results by search string
  const handleChange = (e) => {
      let query = e.target.value.toLowerCase()
      let filteredItems = data.filter(item => {
          return item.toLowerCase().includes(query)
      })

      setFilteredData(filteredItems)
  }

    
  return (
   
    <div className="App">
     <SearchBar onAdd={handleAdd} onSearch={handleChange} />
     <List filteredData={filteredData}  data={data} />  
    </div>
  );
}

export default App;
