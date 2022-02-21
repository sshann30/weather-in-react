Front End Coding Challenge
For this exercise, use either React or Vue JS and the CSS configuration you prefer to build a
static site with the following requirements. Deliver this as a public github repo that can be cloned
and then run locally.
Must-Have
1. Using your framework of choice create a page with the following structure
a. The page should have 2 regions (25/75)
b. The main content section should contain the page title and body copy.
2. In the main content section, create a responsive grid of content from the following API:
a. https://www.weather.gov/documentation/services-web-api
b. https://api.weather.gov/radar/stations
c. Each block should contain the following information
i. Station Name
ii. Station Identifier
iii. GPS Coordinates
iv. Altitude
d. Results should be paginated, displaying 9 stations at a time.
e. GPS Coordinates link to Google Map of the location
3. Use the sidebar to add filtering by timezone
4. API Error Handling
Nice to have
1. The radar stations closest to the users’ location appear first in the grid
2. Add fuzzy keyword search to the sidebar
3. Cypress tests that check whether the page displays properly and pagination is working