import React from 'react'
import ReactDOM from 'react-dom'
import App from './pages/App'

ReactDOM.render(<App />, document.getElementById('wrap'))

if (module.hot) {
    module.hot.accept(App, function() {
        console.log('更新啦');
        ReactDOM.render(<App />, id)
    })
}