const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/index.js", // 入口
    output: { 
        path: path.resolve(__dirname, "dist"), // 出口路径 绝对路径
        filename: "main.js" // 出口文件名
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html', // 告诉webpack使用插件时, 以我们自己的html文件作为模板去生成dist/html文件
            filename: 'index.html' // 生成文件的名称
        }),
        new CleanWebpackPlugin(),
    ],
    devServer: {
        port: 3000, // 端口号
        open: true
    },
    module: { // loader 加载器 配置在这儿
        rules: [ // loader的规则
          {
            test: /\.css$/, // 匹配所有的css文件
            // loader 执行的顺序： use数组里从右向左运行
            // 先用 css-loader 让webpack能够识别 css 文件的内容并打包
            // 再用 style-loader 将样式, 把css插入到dom中
            use: [ "style-loader", "css-loader"]
          },
          { // 配置处理less
            test: /\.less$/, // 匹配以 less结尾的文件
            // css-loader 把css 文件转换成 webpack 可以识别的文件
            // style-loader 把css代码 插入到dom中
            // loader 执行 从右往左
            // less-loader 将less 文件转换成 webpack可以识别的代码
            // less 讲 less 语法 转换成 css
            use: ['style-loader', 'css-loader', 'less-loader']
          },
        ]
    }
}