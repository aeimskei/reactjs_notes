# Intro to Redux

* Central data stare for all application data
* Any component in our application can access data from this central data store
* Makes state management easy

<kbd>![alt text](img/introredux.png "screenshot")</kbd>

This is a component structure of a simple application with a few different components.

Imagine we have a Latest Blog component that will show the latest blogs from some data that we get from an external source, but on the Homepage component, on the Sidebar component, we also want to show some latest blogs. In this case, we pretty much want to share the data in two locations, the Sidebar component and the Latest Blogs component needs it.

**Blog Component and Passing Data**

What we could do in the Blog component, we can reach out, grab some data from an external source, store it in the ```state``` of this Blog component, and then pass it down as ```props``` to the Latest Blog component.

**What About the Sidebar component?**

