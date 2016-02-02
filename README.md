# Unfluff repackaged for Meteor.js

```
meteor add tomgrek:unfluff
```

Repackages Adam Geigey's awesome Node Unfluff web scraper for Meteor.

https://github.com/ageitgey/node-unfluff

## Examples

html is a string of html data acquired e.g. with Node's Request package.

```
Meteor.unfluff(html)
```

Returns an object containing the scraped web page's title, header image, keywords, main content etc.
