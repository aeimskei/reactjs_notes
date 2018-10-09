# Single Page Apps and File Structure

Typically, a lot of React Apps are **single page apps** as well. However, that doesn't mean that our user on our site only ever see's one page with the same content - it means that there will only be one HTML page that is served to the browser from the server, and then we dynamically update the content on that page, dependent on the user's interaction with the website and what URL that they visit.

* React apps are typically single page apps
* They're only on one HTML page served to the browser and updated dynamically based on the user's interaction with the website or app
* React then controls what the user sees on the page

## Multipage Website or App

In a multipage website, a user will typically go to an address like the example.com/index, and that is going to send a request to the server. Then, the server is going to look at this request and look at the URL and send back an HTML page dependent on that URL, in this case, the ```index.html``` page.

When the user clicks on a link to go to another page, or inputs a specific page on the URL bar to find another page, what's going to happen is that we're going to make another request to the server, the server is going to look at it and it's going to send back a different HTML page that matches that address that was requested. So, this is a typical mutlipage application, this is not how React works.

<kbd>![alt text](img/multipageapp.png "screenshot")</kbd>

