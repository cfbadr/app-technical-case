# app-technical-case
# Running the app
The repository contains a react-native app with expo for ease of setup.

Install expo with `npm install --global expo-cli`, and aftewards run `expo start` in the repository. The app can now be run.

# What is the purpose of this case?
You will try building something with our tech stack, and we can afterwards have a constructive talk about how you approached a technical implementation/problem.

# What is the case?
We want to show the countries we are working with using an overview in our app.
Add a new screen to the app after "authentication" that lists the countries. There should be a select dropdown to order the list in alphabetical order, and a search input that filters by country name.
Currently the app checks that the API version matches instead of logging in. Fix the Redux action to get logged in.

The input field should always be visible on the app, and a keyboard popup should change the page as expected (by moving content up with the popup)

The countries can be queried with a get request to `https://api.dreaminfluencers.com/countries`.
Consider using the Redux store with actions to get and store the data.

After the list has been obtained it should be possible to view more information about each country. By clicking the country we should be able to view information showing currency and population in a readable way. 

We can use `https://restcountries.com/#endpoints-code` to extract the information.

Restcountries does not need to be spammed, so make sure that we only call the information once and don't rerequest data already gathered - for example using redux.
