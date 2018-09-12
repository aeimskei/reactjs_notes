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