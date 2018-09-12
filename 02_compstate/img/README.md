# Component State

The **state** of a Component describes the state of the Component, by that we mean (1) the state of the data or (2) the UI of a Component bc after all, our data within our applications will most of time be dynamic, constantly changing or updating over time.

* It's a JavaScript Object
* Describes the current state of the Component like data or UI state
* The state of Component can be updated over time, like the data we output can change overtime

<kbd>![alt text](img/babel.png "screenshot")</kbd>

**Example, Shopping Cart Component**

Imagine we have some kind of Shopping Cart Component on our website. The state of the Component is just a JavaScript Object, and it looks like this:

```
{
  items: [
    {name: 't-shirt', price: 15.00},
    {name: 'shorts', price: 25.00}
  ]
}
```
