# Website Design System / Style Guide
By Jamie Barlow

## Purpose

- This simple web app began as a practice project with HTML/CSS, creating a simple CSS layout which clearly displays a set of compatible styles for use in web pages. The guide contains sections for colours, fonts, font sizes / weights and button elements.
- After building the initial page, I wanted to extend the usefulness of the guide by introducing some flexibility in terms of styling for different pages, as well as some interactive visual elements for previewing the styles. As a result, the project now includes functionality (built with JavaScript) allowing the user to trial different colour options, using their hex codes as preferred. They can also select a combination of colours / fonts / sizes from the default selection, in a dedicated 'Try them out!' preview box.
- This expanded scope was a great learning process for me while coming to terms with using JavaScript event handlers to manipulate DOM (particularly form) elements.

## Features

- Sections displaying colours, fonts, text styles, and button elements.
- Inputs for trialling different colours within the Colors section. The user can type a hex code (prepended by '#') and press enter, which will change the background colour of the associated color box. They can also click 'Reset' to return to default styles.
- The text for each colour box will also switch to light or dark depending on the hex value of the background colour previewed, so that it can be clearly read.
- A 'Try them out!' preview section with interactive selectors for changing background color, font, and font size.

## Technologies

- HTML
- CSS (Flexbox, Bootstrap for button elements)
- JavaScript

## Potential Additions

- A 'copy and paste code' feature for the styles selected, for direct use in web projects.
- THe ability to use any previewed colours in the 'Try them out!' section (i.e. not just defaults).
- More font options.
