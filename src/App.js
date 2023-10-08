// 创建外壳组件
import React, { Component } from 'react'
import Hello from "./components/Hello/Hello";
import Welcome from './components/Welcome';

// 创建并暴露，与这不写 下面写一致
export default class App extends Component {
    render() {
        return (
            <div>
                <Hello />
                <Welcome />
            </div>
        )
    }
}

// export default App;