import React, { useState } from 'react'
import './App.css';


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: "080-1111-1111" },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  
  const newObject = {
    id: persons.length + 1,
    name: newName,
    number: newNumber
  }

  const addList = (event) => {
    event.preventDefault()
    setPersons(persons.concat(newObject))
    setNewName('')
    setNewNumber('')
  }

  const NumbersList = () => {
    const list = persons.map((value, key) => {
        return <div key={key}> {`${persons[key].name} ${persons[key].number}`}</div>
      })
    return (
      <div>
        {list}
      </div>
    )
  }

  const handleNameChange = (event) => {
    persons.map((value, key) => {
      if (event.target.value === persons[key].name) {        
        alert(`${newName} is already added to phonebook`)
    }
    })  
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    persons.map((value, key) => {
      if (event.target.value === persons[key].number) {
        alert(`${newNumber} is already added to phonebook`)
      }
    })
    setNewNumber(event.target.value);
  }
 
  return (
    <div>
      <div>
        <h2>add a new</h2>
        <form onSubmit={addList}>
          <div>
            name:
            <input
              value={newName}
              onChange={handleNameChange}
            />
          </div>
          <div>
            number:
            <input
              value={newNumber}
              onChange={handleNumberChange}
            />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>

      <div>
        <h2>Numbers</h2>
        <NumbersList />
      </div>
    </div>
  )

}

export default App;
