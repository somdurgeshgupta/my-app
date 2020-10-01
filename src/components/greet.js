import React from 'react'

// function Greet(){
//     return<h1>hello viswas</h1>
// }

const Greet = ({name, heroName, children}) => {
    console.log(name, heroName)
return (
    <div>
        <h1>
            hello {name} a.k.a {heroName}
        </h1>
        {children}
    </div>
    )}

export default Greet    