import React from 'react'
import SpreadAndRest from './SpreadAndRest';
const items = ['Apple', 'Banana', 'Orange']

const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Jack' },
  { id: 4, name: 'Jill' },
  { id: 5, name: 'Joe' },
]

const data = [
  { type: 'text', content: 'Hello, world!' },
  { type: 'image', url: 'example.com/image.jpg' },
  { type: 'text', content: 'Welcome to my website!' },
];

const numbers = [1, 2, 3, 4, 5];

const options = ['Option 1', 'Option 2', 'Option 3'];

const grid = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'Bob' },
];


const App = () => {
  return <>

    <h2>Render a list</h2>

    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>

    <h2>Rendering components</h2>

    {users.map((user) => (
      <User key={user.id} user={user} />
    ))}

    <h2>Rendering Dynamic Content</h2>

    {data.map((item, index) => {
      if (item.type === 'text') {
        return <p key={index}>{item.content}</p>
      }
      if (item.type === 'image') {
        return <img key={index} src={item.url} alt="img" />
      }
    })}

    <h2>Rendering a list with conditional Styling</h2>
    <ul>
      {numbers.map((number) => {
        return <li
          key={number}
          clsasName={number % 2 === 0 ? 'even' : 'odd'}
        >
          {number}
        </li>

      })}
    </ul>

    <h2>Generating a Drop down list</h2>
    <select>
      {options.map((option) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>

    <h2>Rendering a grid of components</h2>
    <div className="grid">
      {grid.map((item) => (
        <UserGrid key={item.id} user={item} />
      ))}
    </div>

    <h2>Create a numbered List</h2>
    <ol>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ol>

    <SpreadAndRest />
  </>
}

const User = ({ user }) => {
  return <div>{user.name}</div>
}

const UserGrid = ({ user }) => {
  return <h4>{user.name}</h4>
}

export default App