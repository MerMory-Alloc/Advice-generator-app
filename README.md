# Frontend Mentor - Advice generator app solution

This is a solution to the [Advice generator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). 


### Links

- Live Site URL: [Advice generator](https://vocal-ganache-aed88e.netlify.app/)


## The challenge
In this challenge, I built a React application that fetches random advice from an API and allows users to change the displayed advice by clicking a button. 

The App component in this project found in the file `App.jsx` is a React functional component that represents the main component of the application. Here's a breakdown of what it does:

* It initializes the `quote` state variable using the `useState` hook. The initial value is an object with properties `id` and `quote` set to 0 and an empty string, respectively.
* It defines a function `makeRequest` that makes an API request to fetch a random quote. It generates a random number, constructs the API URL, and uses the `fetch` function to make a GET request.
* Once the response is received, it is converted to JSON and the extracted quote information is used to update the `quote` state using the `setQuote` function.
* **The reason that I did it like that is because the API's built-in function that generates a random quote did not work. After further investigation in the API, I found out that only the advices from 1 to 224 work.**
* It initializes the `viewportWidth` state variable using the `useState` hook. The initial value is set to the window's inner width.
* It sets up an effect using the `useEffect` hook that handles the resize event. The effect function updates the `viewportWidth` state when the window is resized. It also adds an event listener for the resize event and cleans up the event listener when the component unmounts.
* It sets up another effect using the `useEffect` hook that runs once when the component is mounted. It calls the `makeRequest` function to fetch an initial random quote.
* It defines a function `changeQuote` that calls the `makeRequest` function to fetch a new random quote.
* It returns JSX code that represents the component's UI. It renders a container `div` with two child `div`s. The first child `div` displays the quote information using the `quote` state. The second child `div` contains a button for changing the quote. The button triggers the `changeQuote` function when clicked.

Overall, the App component fetches a random quote from an API, displays it on the UI, and allows the user to change the quote by clicking a button.

In conclusion, the Advice Generator App challenge was an excellent opportunity for me to apply my frontend development skills and expand my knowledge of React. By building this application, I gained valuable insights into React's functional components, hooks, API integration, event handling, and UI rendering. I am excited to continue exploring and honing my skills as a frontend developer, leveraging the lessons learned from this challenge to tackle future projects.
