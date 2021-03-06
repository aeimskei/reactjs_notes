# Programmatic Redirects

We'll learn how to programmatically redirect user to another url. For example, if a User clicks on a button or if they land on a page and want to redirect them.

First, let's start at the Contact.js component. In the ```const Contact``` function, if we take in a ```prop``` as a parameter, we have automatically added to the ```props``` router information and that's bc this is one of the component that the router loads up. So, for any component that the router does load up in:

**Contact.js**
```
const Contact = (props) => {
  return(
    <div className="container">
      <h4 className="center">Contact</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error placeat dolorum eligendi quae magni, perspiciatis deserunt accusamus dolores at. Enim voluptas quia nulla magnam excepturi totam vitae molestiae deserunt iste?</p>
    </div>
  )
}
```

**App.js**
```
<BrowserRouter>
  <div className="App">
    <Navbar />
    <Route exact path='/' component={Home} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
</BrowserRouter>
```

these things ```component={Home}```, ```component={About}```, etc. the router will attach some extra info to the ```props``` object. 

We can see it when we log the ```props``` object in Contact.js to see the extra information about the Router on the props object.

<kbd>![alt text](img/propobj.png "screenshot")</kbd>

## Router Methods that Comes With It

**history method** - come with a bunch of different methods and properties.

<kbd>![alt text](img/historymethod.png "screenshot")</kbd>

**location method** - come with a bunch of different methods and properties. It'll also tell us where we're at, like in this example, we're on the Contact page. ```match``` is going to be used for **route parameters** later on.

<kbd>![alt text](img/locationmethod.png "screenshot")</kbd>

## Redirect User to a Different Page with ```setTimeout()```

In this example, we'll make the User land on the Contact page and then after 2 seconds, redirect them to another page.

To do that, we need to use the ```history``` and ```push``` from it from the object on the ```props object```. Create a ```setTimeout()``` and inside its function use ```props.history.push()``` bc remember we're referencing the ```props object```, its ```history``` object and then the history's ```push``` method.

In the ```push``` method, it says we can take the argument of ```path```, which in our example, let's have it as ```/about``` and it'll wait 2 seconds to do it in ```setTimeout()```.

Run it, and it works! So, this is a programmatic redirect. It's just ```props``` dot ```history``` dot ```push()``` method and where we want it to go to.

## Programmatic Redirect in Navbar Component

Let's try ```setTimeout()``` to get it to do the same thing as the previous example.

**Navbar.js**
```
const Navbar = (props) => {

  setTimeout(() => {
    console.log(props)
  })
...
```

<kbd>![alt text](img/emptyobj.png "screenshot")</kbd>

It logs an empty ```{}``` object. Well, it's bc we don't have the ```react-router-dom``` applied to this component. It has to be wrapped around ```<BrowserRouter>``` to get those properties like ```history``` and ```push```.

Our Navbar component is not in a Route, so it doesn't receive those ```props``` by default, but we can add them in by using a **higher-order component**.

* **Higher Order Component** - it wraps another another and gives or passes on extra powers.

In our example, we're going to apply those properties to ```props``` that's being passed in the function ```const Navbar```. To do this, we have to import the higher order component with ```withRouter``` from ```react-router-dom``` at the top. Then, you'll also export it on the bottom ```withRouter()``` as a function and we pass in ```Navbar``` component as its parameter into that function.

Now, you'll have all those properties that comes with Router.

That's it :)