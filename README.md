# app-technical-case
# Running the app
The repository contains a react-native app with expo for ease of setup.

Install expo with `npm install --global expo-cli`, and aftewards run `expo start` in the repository. The app can now be run.

# Whats the meaning of the case?
You are able to try out building something with our tech setup, and we can afterwards have a constructive talk about how you approached a technical implementation/problem.

# What is the case?
We wanna showcase the countries we are working together with a nice overview in our app.
Add a new screen to the app after "authentication" that lists the countries. There should be a select to order the list in alphabetical order, and a search input filtering for country names that match.

The input field should always be visible, and keyboard popup should change the page as expected (moving content up with the popup/making screen scrollable)

The countries can be queried with a get request to `https://api.dreaminfluencers.com/countries`.
Consider using the redux store with actions to get and store the data.
