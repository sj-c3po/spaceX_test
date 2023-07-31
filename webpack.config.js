const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: ["@babel/polyfill", "./src/index.tsx"],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js"
    },
    devServer: {
        port: 3000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        })
    ],
    module: {
        rules: [
            {
                test: /\.(css|less)$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                use: ["file-loader"]
            },
            {
                test: /\.m?[t|j]s$/,
                exclude: /node_modules/,
                use: 
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
                
            },
            {
                test: /\.m?[t|j]sx$/,
                exclude: /node_modules/,
                use: 
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-react", "@babel/preset-env"]
                    }
                }
            }
        ]
    }
}