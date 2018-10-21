# Conditional Outputs in React

Sometimes we only want to show some things on the webpage to the User, based on certain conditions. For example, only show something to a User if they are logged in or only show a User a discount if a certain number of items has been added to the shopping cart on an e-commerce site. 

So from our previous People.js example, let's give it conditions like only output if the person's age meets a certain number you want.

There's a couple different ways to output conditional statements, 

* if statement
* ternerary operator

We'll play with both to show as examples.

Where we ```map()``` at ```people.map(person => {...}```, the original data of people, and we're returning a new list of ```const peopleList```, we want that new list ot contain only the people whose age is under 30.

## ```if``` statement
So with an **if statement**, above the ```return()```, start it there.

```
const People = ({people}) => {
  const peopleList = people.map(person => {
    if (person.age < 30) {
      return(
        <div className="person" key={person.id}>
          <div>Name: { person.name }</div>
          <div>Age: { person.age }</div>
          <div>Occupation: { person.occupation }</div>
        </div>
      )
    } else {
      return null
    }
  })

  return(
    <div className="people-list">
      { peopleList }
    </div>
  )
}
```

<kbd>![alt text](img/under30.png "screenshot")</kbd>

## Ternerary Operator

