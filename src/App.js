
import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import SearchBar from './components/SearchBar'
import List from './components/List'
import axios from 'axios'


function App() {

  const [data, setData] = useState(() => {
    getData(10).then(result => setData(result)) 
  })
  const [filteredData, setFilteredData] = useState(data)

  
  // fetch randomized data from API
  async function getData(n) {
    const response = await axios.get(`https://random-data-api.com/api/dessert/random_dessert?size=${n}`)
    const items =  response.data.map(item => {
      return item.variety
    })
    return items
  }


  // fetch 50 random items, get one item from a random index and add it to the state
  const handleAdd = async (e) => {
    e.preventDefault()
    try {
        const response = await getData(50)
        const newItem = response[Math.floor(Math.random() * response.length)]
        setFilteredData(previousData => {
          return [...previousData, newItem]
        })
    }
    catch(err) {
        console.log(`error: ${err}`)
    }
  }

  // filter shown results by search string
  const handleChange = (e) => {
      let query = e.target.value
      let filteredResults = data.filter(item => {
          return item.toLowerCase().includes(query)
      })
      setFilteredData(filteredResults)
      
  }


  useEffect(() => {
    !filteredData ? setFilteredData(data) : setFilteredData(filteredData)
  }, [data, filteredData])


  return (
   
    <div className="App">
     <SearchBar onAdd={handleAdd} onSearch={handleChange} data={data} />
     <List data={filteredData}  />  
    </div>
  );
}

export default App;
