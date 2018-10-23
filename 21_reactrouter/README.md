# The React Router

So far, we've been using React to show only one page, but most websites have several pages (home, about, contact, etc).

How do we implement several pages in React?

Well, we already know that React is a single page app, where only one HTML file is sent down to the browser from the server.

So, what happens if we want to see different pages? 

<kbd>![alt text](img/reactrouter.png "screenshot")</kbd>

For example, in the beginning, is we want to make a request from the **/home** page, we make an initial request to the **server**. Then, we get a response which is the **index.html** page and that goes to the browser. 

Now with React, it's going to look at **/home** and think, you're looking at the **/home** page, so it's going to load a **Home.js** component. **App.js** is the Root Component, so it's sitting at the top and this will always be showing in the browser, but React is going to inject the **Home Component** inside **App.js** so we'll see that Home Component when we go to **/home**. This is all coming from React Router.

<kbd>![alt text](img/homecomp.png "screenshot")</kbd>

Say, we have a Navbar and the user clicks to go to an About page, well, we make that request, but it doesn't go all the was to the server.

<kbd>![alt text](img/aboutcomp.png "screenshot")</kbd>

Instead, the React Router intercepts, so it doesn't have to go all the way to the server. Rather, React is going to serve up the About.js component and inject it into App.js instead. This is what the React Router does.

The React Router stops the request from going all the way to server and coming back bc we only need that **index.html** everytime. There's no point of sending it over and over again, instead, it's just injecting the component it needs to show.

# React Router Example

