# Getting Started with Gauge

This is an example markdown specification file.
Every heading in this file is a scenario.
Every bulleted point is a step.

To execute this specification, use
	npm test

This is a context step that runs before every scenario


## Main Page Test
* When I am on Main Page
* I should see Tesodev Logo on Main page
* I should see an InputField on Main page
* I should see an searchButton on Main page
* When I fill input field with a country name I should see search results on Main page
* When I fill input field wita country name I should see showmore option
* After clicking showmore option I should go to showmore page

## ShowMore Page Test
* When I am on Showmore Page
* I should see OrderBy button and Paginate
* When I am click Country ascending sort option ı should see Angola on first page

