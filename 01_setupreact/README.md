# Setting up React Project

There's a couple of different ways to get setup with React to start using it. 

* ```create-react-app``` package can be used to create a full React project, where React will control the flow of the whole application with a **Webpack** setup.
* ```React CDN``` - to quickly get up and running with React and this is good if you only want to use React to create widgets or to control small sections of a webpage. It's good when you're starting to first learn React. https://reactjs.org/docs/cdn-links.html

For React CDN, grab these two ```<scripts>```:

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

Next, create a new file called ```index.html``` and add those two ```<scripts>``` under the ```<meta>``` tag after you've added the HTML boilerplate.

```
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- React CDN -->
  <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <title>Document</title>
</head>
<body>
  
</body>
</html>
```

The top ```<script>``` is the **Core React library**.

```
<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>
```

The second, bottom one, is the **React DOM library** and this is like a glue layer between React and the DOM. It's what let's us inject our components into the DOM.

```
<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
```

Now, inside the ```<body>```, create a ```<div>``` tag with an ```id``` of app. This will be the ```<div>``` that we'll ultimately controlling with a React Component.

## If you're using VSCode

Add these extension packages bc it'll be very useful when you're developing your React applications:

* **ES7 React/Redux/GraphQL/React-Native snippets** - this will give us shortcuts to some snippets of code, so we can easily create Components or imports, etc.
* **Sublime Babel** - this will give us decent syntax highlighting for when we write JSX for our Component template, so it's going to look like HTML.