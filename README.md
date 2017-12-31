## How to run.

1: Download folder

2: cd folder

3: npm install

4: npm start


# Drive sally front-end test project

In the assets folder you will find the Adobe XD file and the screenshots (if you don't habe Adobe XD) for your assignment.

Clone the repo, push your updates and send us the link to your repo.

Your assignment consists out of two tasks. The first one is design oriented while the second one is more development oriented.

## Part 1: Design / Critique

Inside the Adobe XD file you will find a window called Observation. If you don't have Adobe XD you can open `./assets/Observation.png`. This is a UI component called Driver Card. We would love to see your 'designing skills'. But actually you don't have to design anything. Please create a file named `critique.md` in the root folder of your repo and write whatever you think about the Driver Card. Tell us what you find good and what you would change. Give us an example on how your artistic side works.

## Part 2: Development Task

### Project structure

We've already prepared everything you need to kickstart your project. The main dependencies like `radium` and `material-ui` are already set up. you can start write your code inside the `AppContainer` component which is in the `./src/components/templates/AppContainer/` folder.

### What you need to know

#### Component Structure

We're using `atomic design pattern` for structuring our React components. You can find more about it [here](http://bradfrost.com/blog/post/atomic-web-design/). If you're not familiar with it and it would take you to much time to implement it you can structure your project however you like. Just keep it clean.

#### Styling

Because of the usage of the `material-ui` library the best way for styling those components is via inline styles. Therefore to keep the styling consistent we're using the `radium` library which provides us with a more flexible way of styling components via inline styles. You can find more about `radium` [here](http://formidable.com/open-source/radium/).

### Assignment

You will have to create a small CRUD application which will mainly consist of a table and a modal for editing the data. You can find the UI design in the assets folder (ops4-test-project.xd [Assignment window] or Assignment.png).

#### Data

In `./src/api/` folder you will find `rentals.api.js`, `drivers.api.js` and `vehicles.api.js` which mimic an API call. All these functions will return a `Promise` object so feel free to use either `async / await` or `Promises`.

#### Rentals Table

This table is only for data presentation.

What you need to take care of:
- In the header the total number of rows should be visible
- When a user types someting into the search field it should immediately trigger a search function. It should be searchable by the following fields: `vehicle brand`, `driver first_name`, `driver last_name` and `driver email`
- The table should be sorted by the rentals `start_date` attribute
- The statuses should be in their respective colors (reserved - dark red, returned - purple, ...)
- If a columns is empty (missing data) it should render `- (minus)` sign
- Clicking on a table row should open up the edit modal

#### Edit Modal

This modal should take care for editing or deleting the date.

What you need to take care of:
- The modal should be in the center of the browsers viewport
- Header color should match the state that the rental is in
- Headers title should be the brand of the vehicle
- Headers sub title should be the state of the rental
- The `start_date` and `end_date` are date attributes and you can implement them either with a date & time picker or a normal input field. Just make sure that the display value should be in `MM.DD.YY HH:mma` format and inside the object it should be in `YYYY-MM-DDTHH:mm:ssZ`.
- Status field shuld be a drop down with the following values: `reserved, active, returned and archived`.
- Every field except the `email` and the `end_date` is required and can not be empty. Also check if the user inserted a proper email. Let the user know that he made a mistake uppon `SAVE` click.
- The `DELETE` button should remove the rental from the rentals table

#### Additional information

You may use any thirdparty npm module. Use whatever makes your life easier :) UX is important so pay attention to it. Let us know if you have any questions.
# sally
