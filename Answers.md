# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React is an open-source JavaScript library for building user interfaces. It was built by Facebook and is one of the most popular libraries for building applications. It uses JSX, a syntax extension for JS, and ReactDOM, a virtual DOM, to allow us to colocate HTML and JS, and more efficiently update the real DOM. 

1. What does it mean to think in react?

Thinking in React is a specific thought process around using the library to build applications. That thought process goes as follows: Figure out the hierarchy of components, build a static version of each component in React, figure out the minimal representation of the state that is needed in the application and identify what component should hold that state, and add ways for data to flow back up from the bottom to the top of the hierarchy.

1. Describe state.

A state starts with a default value, and is managed within a component. It generally refers to the state of the data in a component.

1. Describe props.

Props refer to a components properties. They are passed down from parent components to children components. 

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects basically happen when our function returns output that is not explicitly stated in the input. They are sometimes important parts of our apps, like fetching data from an API, but we need to be able to trap and control side effects, which is why we use useEffect. You use the useState hook to sync effects to state/prop changes — it gives us a way to define a variable for state and set the value of that variable.