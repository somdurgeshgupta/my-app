import React from 'react'

const Hello = () => {

  return React.createElement(
   'div',
   {id: 'hello', className: 'dummyclass'},
   React.createElement('h1', null, 'Hello my name is khan')
  )
}
// export const Hello = () => <h1>this is what i call best</h1>

export default Hello;