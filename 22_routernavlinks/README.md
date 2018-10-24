# Router Links and NavLinks

Our RouterApp example is now setup with **React Router** and we're able to get the right componets loaded on the page when the Navbar's tab is clicked on. But, it keeps going back into the server and loading it up. (You can see that the browser keeps reloading and you can also check in the DevTools in the Network tab)

We don't want that. We want React to intercept and load, so it doesn't have to go all the way back to the server to get the reference.

To solve this, all we have to do is in the Navbar component, remove the ```<a>``` anchor tags. Instead, use ```<Link>``` or ```<NavLink>``` from the **react-router-dom** package.

First, we need to import this at the top in the Navbar.js Component ```import { Link, NavLink } from 'react-router-dom'``` and then change the ```<a>``` to ```<Link>``` tags and to it, we need to add the ```to=""``` property, it's kind of like the ```href=""``` attribute.

**Navbar.js**
```
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return(
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <a href="/" className="brand-logo hide-on-med-and-down">RouteApp</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
```

Eveything will still work like before.



<kbd>![alt text](img/exactpath.png "screenshot")</kbd>