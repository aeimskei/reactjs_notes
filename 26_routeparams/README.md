# Route Parameters

* They're a part of a URL that can change
* We usually see them on URLs for individual records like the following:

Examples:

* User's Profile Page: myboard.com/users/**rider01**
* User's Profile Page: myboard.com/users/**maybear91**
* Cooking Recipe Page: chefsboard.com/recipes/**cookies**
* Cooking Recipe Page: chefsboard.com/recipes/**brownies**

As you can see the beginning portion stays the same, but the ends are different. Also, each page template is gonna be the same, but the data shown is different based on the URL, the ending, what it represents.

Those endings of a URL are the **Route Parameters**

## Our ```routeapp``` and Turn Posts into Separate Page

When we click on the post card on the Home page, then it's going to take us to a URL with ```/id``` of whatever that post is. And when we land on that page, it's going to show us the post details for that page. So, the post's ```id``` is going to be the Route Parameter.

## How do we Setup a Route for This?

We need to go into App.js bc that's where our Route is setup. Create another ```<Route />``` under the other Routes.

```
<Route path='...' component={...} />
```

For ```path=```, how do we define that we're expecting a Route Parameter? Something that's going to be a variable or will change? To define a Route Parameter, we use ```:``` a colon, then we give that Route Parameter a name. The name can be whatever you want, but at least make it logical. In this example, we'll call it ```path='/:post_id'```. If the ```path='/:post_id'``` matches the post id, then it'll show that content.

Also, create the component, ```component={Post}```. Remember to create a Post.js file as well.

## Create Post.js






<kbd>![alt text](img/screenshot.png "screenshot")</kbd>