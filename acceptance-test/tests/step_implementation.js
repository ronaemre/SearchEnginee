/* globals gauge*/
"use strict";
const path = require('path');
const {
    $,
    waitFor,
    openBrowser,
    write,
    closeBrowser,
    goto,
    press,
    screenshot,
    above,
    click,
    checkBox,
    listItem,
    toLeftOf,
    link,
    text,
    into,
    textBox,
    evaluate,
    clear
} = require('taiko');
const assert = require("assert");
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({
        headless: headless
    })
});

afterSuite(async () => {
    await closeBrowser();
});

// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};

step("When I am on Main Page", async function () {
    await goto("http://localhost:3000");
    await waitFor(3000);
});

step('I should see Tesodev Logo on Main page', async () => {
    assert.ok(await $('#logo').exists());
});

step('I should see an InputField on Main page', async () => {
    assert.ok(await $('#input').exists());
});

step('I should see an searchButton on Main page', async () => {
    assert.ok(await $('#searchButton').exists());
});

step('When I fill input field with a country name I should see search results on Main page', async () => {
    await click($('#input'))
    await write("United")
    /*   await click($('#todo-details')) */

});

step('When I fill input field wita country name I should see showmore option', async () => {
    await clear()
    await click($('#input'))
    await write("United")
    assert.ok(await $('#showMore').exists());
});

step('After clicking showmore option I should go to showmore page', async () => {
    await click($('#showMore'))
    assert.ok(await $('#orderBy').exists());
});


step("When I am on Showmore Page", async function () {
    await goto("http://localhost:3000/more");
});

step('I should see OrderBy button and Paginate', async () => {
    assert.ok(await $('#orderBy').exists());
    assert.ok(await $('#paginate').exists());
});

step('When I am click Country ascending sort option ı should see Angola on first page', async () => {
    await click($('#orderBy'))
    await click($('#sortByCountryAscending'))
    assert.ok(await text('Angola').exists());
});














