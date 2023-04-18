import React, { useState } from 'react'
import './App.css'
import Hello from './Hello/Hello'

function App() {
  const [count, setCount] = useState(0);
  const jsFramework = [
    {id:1, name: "Angular", developer: "Google's Team"},
    {id:2, name: "Vue.js", developer: "Evan You"},
    {id:3, name: "Ember.js", developer: "Ember Core Team"},
    {id:4, name: "Meteor", developer: "Meteor Software"},
    {id:5, name: "Mithril", developer: "Leo Horie"},
    {id:6, name: "Node.js", developer: "Ryan Dahl"},
    {id:7, name: "Polymer", developer: "Google"},
    {id:8, name: "Aurelia", developer: "Rob Eisenberg"},
    {id:9, name: "Backbone.js", developer: "Jeremy Ashkenas"},
  ]
  return (
    <div className="App">
      <h1>hello react with vite</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <br />
      <h2>Js Frameworks</h2>
      <div>
        {
          jsFramework.map(data => <Hello key={data.id} name={data.name} developer={data.developer}></Hello>)
        }
     </div>
    </div>
  )
}

export default App
