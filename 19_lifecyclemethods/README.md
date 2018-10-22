# React Lifecyle Methods

<kbd>![alt text](img/lifecyclemethods.png "screenshot")</kbd>

https://github.com/wojtekmaj/react-lifecycle-methods-diagram


It's going to go through a **Mounting** phase, an **Updating** phase and **Unmounting** phase.

## Mounting Phase

This is when a Component is first created and first mounts to the DOM.

**It'll go through a bunch of lifecyle methods**

* (1) **constructor** - is the first one, this is not necessary to call, but it offers another way to set the ```state``` of the component. Similar to how we set the ```state``` directly, we can do that inside the constructor as well.

* (2) **getDerivedStateFromProps** - this exists for one purpose only, and it enables component to update its internal ```state``` as the result of changes in our ```props```. So, it triggers on first render and then whenever we recieve updated ```props``` from a parent component is going to trigger it as well. So, we recieve those props and we recieve the current ```state``` of this component where the method is called and we can compare the ```props``` we receive to the current state if needed and then return a new ```state``` object if we want or null for no changes. It's not really often used.

* (3) **render** - this is where React takes our JSX code and prepares it to render to the DOM. It's the only one required lifecycle method in a component and it will generally return some form of JSX.

* (4) **componentDidMount** - this fires once the component first mounts. It's a good place to get any external data from a database. 

## Updating Phase

