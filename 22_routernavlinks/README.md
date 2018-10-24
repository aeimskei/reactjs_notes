# Router Links and NavLinks

Our RouterApp example is now setup with **React Router** and we're able to get the right componets loaded on the page when the Navbar's tab is clicked on. But, it keeps going back into the server and loading it up. (You can see that the browser keeps reloading and you can also check in the DevTools in the Network tab)

We don't want that. We want React to intercept and load, so it doesn't have to go all the way back to the server to get the reference.

To solve this, all we have to do is in the Navbar component, remove the ```<a>``` anchor tags. Instead, use ```<Link>``` or ```<NavLink>``` from the **react-router-dom** package.

First, we need to import this at the top in the Navbar.js Component ```import { Link, NavLink } from 'react-router-dom'```

<kbd>![alt text](img/exactpath.png "screenshot")</kbd>