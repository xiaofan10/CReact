# CReact
react开发环境 
> 主要用于react开发环境搭建，目前还不会写手脚架，所以直接拷贝仓库项目，快速开发


react 热更新模块配置
```javascript
// .babelrc
{ 
  "plugins": ["react-hot-loader/babel"] 
}
```

```javascript
// 热更新模块 用hot包裹，此处无需关心react-hot-loader的加载顺序，webpack中已经固定他在首位加载
import React from 'react'
import { hot } from 'react-hot-loader/root';
import Button from '../../components/Button'

function App() {
    return (
        <div>
            m App asssssddsdssssdf. 
            <input></input>
            <Button></Button>       
        </div>
    )
}
export default hot(App)
```

```javascript
// webpack.config.js react-hot-loader/patch 要确保在react前加载
const config = {
    mode: 'development',
    entry: {
        hot: 'react-hot-loader/patch',  // 保证在react 与 react-dom加载前植入 为什么不清楚  
        index: './src/index.tsx',
    },
}
```

