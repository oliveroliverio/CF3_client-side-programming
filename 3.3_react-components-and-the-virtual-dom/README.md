# 3.3 React Components and the Virtual DOM

Follow steps for manual react application creation (non-create-react-app command)
Add the following files:

`package.json` (root dir)
```
{
  "name": "react-basic-app",
  "version": "1.0.0",
  "description": "Basic React Application",
  "main": "src/index.js",
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@babel/core": "^7.22.0",
    "@babel/preset-env": "^7.22.0",
    "@babel/preset-react": "^7.22.0",
    "babel-loader": "^9.1.2",
    "webpack": "^5.85.0",
    "webpack-cli": "^5.1.1",
    "webpack-dev-server": "^4.15.0",
    "html-webpack-plugin": "^5.5.1"
  }
}
```

`webpack.config.js` (root dir)
```
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        port: 3000,
        hot: true,
    },
};
```

`.babelrc` (root dir)
```
{
	"presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

`index.html` In `public` folder in root dir
```
<!-- @format -->

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1.0"
		/>
		<title>React App</title>
	</head>
	<body>
		<div id="root"></div>
	</body>
</html>
```

`App.js` in `src` folder
```
import React from 'react';

function App() {
    return (
        <div>
            <h1>Welcome to React</h1>
        </div>
    );
}
export default App;
```

Entry point
`index.js`
```
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

```

After creating these files run `npm install` in the root dir.

Start dev server: `npm start`