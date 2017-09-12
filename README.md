# command_line_practice

A front end app to test out some of the commandos ideas.

## Motivation - Why HTML, CSS, and JavaScript?
1. This mockup neatly bypasses all the murky details of getting 
input and output hooked up properly with an actual terminal.
2. A browser is a natural UI, with rich graphical and interactive elements.
Again, this skips the difficulties of trying to render info nicely
into a terminal interface. Browsers are cross-platform, ubiquitous and use
technologies that are standardised (HTML, CSS, JavaScript) whereas 
terminal programs vary enormously across OS platforms.
3. Using these lets us practise what we've been learning, rather than start 
discovering new stuff.

# Using eslint
Eslint has been configured (via the `.eslintrc.json` file) so the javascript
source can be quality checked via the following command:

```
eslint js spec
```