1. What problem does the context API help solve?

With Context API you don't have to pass props down from component to component anymore. You are able to store data on a context object and then retrieve data in whatever component you need.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Action:These are packets of information that hold an action type and data that we associate with that action.

Reducer:This is a function in Redux.

Store: Everything that changes within your app will be represented by one JS Object. This holds your state for the application.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application State is Immutable. When we need to change our application state we never write over it, we clone the object and then create a new copy.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

This is a middleware that provides the ability to handle asynchronous operations inside of Action Creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

At first I really like context because it seems fairly simple. But I am beginning to like Redux better than I did the first time around. Now that I understand Redux more and now that I've practiced with it more, it makes more sense to me.
