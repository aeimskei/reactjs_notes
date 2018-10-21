# Stateless Components

There are different types of Components we can have in a React Application, Container vs. UI Components

## Container Component

It's not concern of the UI or the look of the application. They normally contain ```state``` of the data and they serve as data sources, so they can have **lifecycle hooks** where they can go out and grab data, and store that in their ```state``` and nest other components within them. We use **Classes** to create Container Components aka **Class-based Components**.

* Contain ```state```
* Contain **lifecycle hooks**
* Not concerned with UI
* Use **Classes** to create

## UI Components

These don't contain ```state``` and they recieve all of their data from ```props``` and those data can come from **Container Components** bc they do have ```state```, go out and grab data, and store in their ```state``` and then they can pass that data down into the **UI Components** as ```props``` and that's how UI Components recieve data. They generally don't have ```state``` of their own. They're primarily concerned with the UI and how that data is presented on the screen. We don't use Classes to create these Components, rather, we use Functions to create them. They're also sometimes called **Stateless Components** or **Functional Components**.

* Don't contain ```state```
* Recieve data from ```props```
* Only concerned with UI
* Use **Functions** to create

## Container vs UI Components

<kbd>![alt text](img/containervsui.png "screenshot")</kbd>

**App.js** is the Root Component and it contains these three other components like Navbar.js, People.js and Contact.js. It may go out to a database via a ```lifecycle hook```, grab some data, store that on its ```state``` inside this component and then pass that data down as a ```prop``` to the UI/Functional Components like Navbar.js and People.js.

**Navabar.js** and **People.js** are create by Functions and not Classes and that's bc they don't need their own ```state```. They don't necessarily need ```data``` or ```state```. They're more concerned with UI. Like how do we output link on the page. If they do use data, they get them from the Container Component, which is passed down to them as ```props```.

**Contact.js** could be a Container Component. We can nest Containers inside Containers. Generally, a contact form would have its own local state to store the user's input into that form. So, we would build this with a Class, instead of a Function. It could also have other Components nested inside that as well.

In this example, we're gonna turn the previous example on the People.js component from a Class Component to a UI Component by using a Function to create instead of a Class.