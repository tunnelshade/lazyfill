// ==UserScript==
// @name         Simplest fill
// @namespace    https://tunnelshade.in/lazyfill/
// @version      0.1
// @description  try to take over the world!
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js#sha256=FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=
// @require      https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.9.0/underscore-min.js#sha256=tr4FvXVZp8nkW7TvW4OYA5KWOs7fc2m5B6LN+AOn1VI=
// @require https://cdn.rawgit.com/tunnelshade/lazyfill/c9c3b8e890b53abbacc1746d473ac43725a4fce5/lazyfill.api.js#sha256=LXjaBo2C5J2LagAgu9wB23rFhyMYvPmYmz9JwBS4/b0=
// @match        https://jira.internal.site/
// @grant        GM_registerMenuCommand
// ==/UserScript==


// This example walks you through a super simple flow where you want to fill only summary and description fields

// Instantiate LazyFill object which will be used to store templates and do certain actions
var lFill = new LazyFill();

// Specify template fields and parameters, and write a custom fill function for necessary fields
lFill.templates["Clickjacking"] = {
    "url": /jira\.internal\.site/g,
    "variables": {
        "endpoints": "<TBF>"
    },
    "fields": [
      {
        "selector": "#title",
        "content": "Missing X-Frame-Options or frame-ancestors on {{endpoints}}",
      },
      {
        "selector": "#description",
        "content": `
h4. Issue

Lack of X-Frame-Options header or CSP frame-ancestors headers on {{endpoints}} lead to clickjacking attacks. More help: https://www.owasp.org/index.php/Clickjacking

h4. Fix

Help: https://www.owasp.org/index.php/Clickjacking_Defense_Cheat_Sheet
`
      }
    ]
};

// Start the lazyfill handlers
lFill.start();
