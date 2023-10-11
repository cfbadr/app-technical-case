# app-technical-case
# Running the app
The repository contains a react-native app with expo for ease of setup.

Install expo with `npm install --global expo-cli`, and aftewards run `expo start` in the repository. The app can now be run.

# What's the meaning of the case?
You are able to try out building something with our tech setup, and we can afterwards have a constructive talk about how you approached a technical implementation/problem.

# What is the case?
We wanna showcase the countries we are working with in a nice overview in our app.
Add a new screen to the app after "authentication" that lists the countries. There should be a way to order the list in alphabetical order both from Z-A and A-Z, and a search input filtering for country names that match.
Currently we are just checking that it matches api version instead of logging in. Fix the redux action to get logged in.

The input field should always be visible, and keyboard popup should change the page as expected (moving content up with the popup/making screen scrollable)

The countries can be queried with a get request to `https://api.dreaminfluencers.com/countries`.
Consider using the redux store with actions to get and store the data.

After the list has been gathered we should have the possibility to view more information about each country. By clicking the country we should open information showing currency and population in a readable way. 
We can use `https://restcountries.com/#endpoints-code` to get the information.
Restcountries doesn't need to be spammed so make sure that we only call the information and don't rerequest data already gathered - for example using redux.