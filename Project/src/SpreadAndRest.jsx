import React from 'react'

const user = { name: 'John', age: 25, email: 'john@example.com' };

const fruits = ['apple', 'banana'];
const additionalFruits = ['orange', 'kiwi'];

const SpreadAndRest = () => {
    const allFruits = [...fruits, ...additionalFruits]
    return <>
        <h2>Spread and Rest Operators Working</h2>

        <h3>Spread operator in Props</h3>
        <User {...user} />
        <h3>In Array Concatenation</h3>
        <ul>
            {allFruits.map((fruit,index)=>(
                <li key={index}>{fruit}</li>
            ))}
        </ul>
    </>
}

const User = ({ name, age, email }) => {
    return <div>
        <p>Name: {name}</p>
        <p>Age: {age}</p>
        <p>Email: {email}</p>
    </div>
}
export default SpreadAndRest