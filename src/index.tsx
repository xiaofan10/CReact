import React from 'react'
import ReactDOM from 'react-dom'
import Button from './components/Button'

const test: string = 'hellowolds'
console.log(test)
const id = document.getElementById('wrap')
console.log(id)

ReactDOM.render(<Button />, id)