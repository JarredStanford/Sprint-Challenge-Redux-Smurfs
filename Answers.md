1.  Name 3 JavaScript Array/Object Methods that do not produce side-effects? Which method do we use to create a new object while extending the properties of another object?

    Map, Filter and Reduce.

    We can use either Object.Assign() or the spread operator to create a new object and extend the properties of another object. The spread operator was introduced in ES6 and does the same thing as Object.assign in a cleaner and (arguably?) more attractive way.

1)  Describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    Actions: Actions our the only way for us to modify application state in redux. They are a set of data that includes a type (tells the reducer what to do) and a payload (tells the reducer what needs to be updated on the state.)

    Reducers: Take actions and the current state in as arguments. They allow us to update the state by returning a new object with the updated data provided by our actions. They are pure functions.

    Store: The store contains the application state for our project. Store takes in a reducer as an argument. We create a store variable in our app that uses a provider to share Application state with the rest of our app. It is a single source of truth because all of our app's state is kept in an object tree on a single store making it a one stop shop (no pun intended?) for our components to get the state they need.

1)  What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application state is available to our entire app. It allows us to share our state with all of our components without excessive prop drilling.

    Component state is used when a component has a situation where it requires a state specific to its needs. For example, a form can use component state to easily handle inputs and then send that component state to an action creator in one package.

1)  What is middleware?

    Middleware is used to intercept a process, do something with that process (i.e alter, prevent, add on) and then let that process continue.

    In redux, middleware intercepts data flowing from action creators to the reducer. We add any middleware we are using as an argument when we create our store.

1)  Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Thunk is a middleware that allows our action creators to work asynchronously. This changes our action creators by allowing us to return a function that can dispatch different actions at different times.

1)  Which `react-redux` method links up our `components` with our `redux store`?

    Connect allows us to link our components to the redux store. Connect takes mapStateToProps as an argument in order to tell it which parts of state the component needs access to.
