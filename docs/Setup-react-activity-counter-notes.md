# Setup Notes: React Activity Counter

An app built with React used to track activities by location and number of times completed.


This is a collection of code comments, notes, errors and code snippets from the project with final code in the app.  As one reads the code, refer to these notes for comments and additional information.
- To review code, see the app, react-activity-counter
- Adapted from this [tutorial](https://www.linkedin.com/learning/react-js-essential-training/what-is-react)


## OVERVIEW & CONCEPTS






-------------------------------------------------

## NEXT ACTION:



-------------------------------------------------

## START

- Start Webpack-dev-server: ```npm start```  
- Build bundle with webpack:  ```npm run build```

-------------------------------------------------

## NOTES
- React is a javascript library used to build interfaces


### 3. React Components
- Create components in three ways, createClass, ES6 class and stateless functional component


#### Planning the App
Ski Day Counter
Book App fields: book, date-read, completed, read-again, rating
Weather Counter: location, date, enjoy-outside, sunny, rain

#### Adding Components and Methods

- React is an organized collection of components that display data

##### Make a CreateClass Component
- CreateClass components are not as popular as ES6 classes and stateless components


- In src/SkiDayCount.js, Create file and a component using React.createClass
- SkiDayCount will take in an object and components will render something from it.

- Use JSX to create a div element with a className of ski-day-count
- Within this div element, create and next three div elements inside it to display total days, powder-days and backcountry days.  Add a span tag to hardcode days for now.

##### Render the Component
- In src/index.js render the SkiDayCount component. 
- Also import "SkiDayCount" from "./components/SkiDayCount"

###### Undefined Errors
- Add ```window.React = React``` to headoff react undefined errors.

##### Results
-Look at component in browser with React Dev tools


#### Adding Component Properties
- Add for properties to our component: total, powder, backcountry and goal 
- The data displayed in index.html is dynamic and pulled from this.props

###### In src/components/SkiDayCounter.js
- Use JSX and wrap expressions in curly braces, ie total={50}
- In JSX curly braces can put integers, boolean, functions etc.
- However, in JSX, strings are put in quotes, not wrapped in curly braces

- In SkiDayCount.js, remove hardcoded values and display from props ```<span>{this.props.total}</span>```


#### Adding Component Methods
- Create methods to calculate progress towards goal
- Encapsulate the methods in the component
- Add as many methods as needed within the component


- Create a method to show percentage of goal completed
- First create a method to convert a decimal to percent
- Then create a method for goal progress(total/goal), 
  - convert to percent with other method
- Add results variables to SkyDayCount.js in order to display


#### Creating Components with ES6 syntax
- ES6 released in 2015, describes how javascript should be implemented by browsers
- The feature, class syntax, is often used with react
- We create our own components by extending React's base class called React.Component

##### Refactor SkiDayCount component to ES6 in skyDayCoutner.js
- SkyDayCount extends the React.Component
- Before: ```export const SkiDayCount = React.createClass{```
- After: ```export class SkiDayCount extends React.Component({...```
- Also remove the main opening/closing parenthesis
- Also, methods no longer need to be separated by commas so remove them

- Instead of importing from react generally, eg ```import React from 'react'```
- Refactor to import a specific feature of React eg ```import { Component } from 'react'```
- And ```export class SkiDayCount extends React.Component {``` is refactored to ```export class SkiDayCount extends Component {```  b/c we imported the compenent specifically from react.
- This lets us skip constantly using "React."



#### Creating Stateless Functional Components





#### Adding React Icons



### 4. Props and State


### 5. Using React Router

### 6. Forms and Refs


### 7. The Component Lifecycle



-------------------------------------------------

## REVIEW





## APPLICATION
Elaborate and Apply to other Projects:






-------------------------------------------------

## REFERENCES
- [Linkedin Learning: React.js Essential Training](https://www.linkedin.com/learning/react-js-essential-training/what-is-react)
[Wiki: React Javascript Library](https://en.wikipedia.org/wiki/React_(JavaScript_library)#JSX)


#### Dependencies
- [Github: postcss-loader](https://github.com/postcss/postcss-loader)
- [postcss-loader](https://www.npmjs.com/package/postcss-loader)
- [Using autoprefixer-loader and postcss-loader](https://github.com/postcss/autoprefixer#webpack)
- [Autoprefixer-loader](https://www.npmjs.com/package/autoprefixer-loader)





