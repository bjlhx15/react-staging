const React = {a:1,b:2}

// 分别暴露
export class Component{

}

React.Component=Component

// 默认统一暴露
export default React;

// {Component}  不是结构赋值，是test暴露.js文件用了多种暴露方式
// import React,{Component} from "./test暴露.js"