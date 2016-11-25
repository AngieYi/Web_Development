# Assignment 1

**Due at 4:59pm on Wednesday 10/5/2016**

The goals of this assignment are to exercise your CSS skills and to give you practice at making a coded page match a set of provided mocks, which is a common task for a web developer.

Here, you are provided with an un-styled `index.html` file, an empty `style.css` file, and a set of mocks (actually screenshots) in the `mocks/` directory.  Your task is to fill out `style.css` so that your rendered `index.html` page matches the mocks as closely as possible.

A few important things to note about the design that may not be clear in the static mocks:

* The layout is responsive, in that columns are added and removed as the size of the browser window changes.  Note that the "todo" notes do not change their size.

* The location of the red button to add a note does not change relative to the viewport, even as the page is scrolled.

* There are several hover interactions on the page:

  * The area around links in the navbar is subtly highlighted when that link is hovered over.  The area around the link can be clicked to navigate in addition to the text itself.  You can see these effects for one of the nav links in the 3-column mock.

  * When hovering over a todo note, an X (to discard the note) appears in the upper-right corner.  This is illustrated in the 2-column mock.

  * Hovering directly over the X on a todo note displays the pointer cursor instead of the default arrow.  This is illustrated in the 1-column mock.

  * The button to add a note is subtly highlighted when hovered over.  There are two separate mocks illustrating the on and off states for this effect.

Again, your goal is to match the mocks as closely as possible.  I'll show some tools in class that will help you do this.

## Grading criteria

This assignment will be graded by inspecting the `index.html` page rendered using your `style.css` file and by comparing your CSS code in `style.css` to the master CSS code that was used to generate the mocks.  It is important to note that many style effects can be achieved in different ways using CSS, so we will mainly be checking your CSS to see the specific values (color, size, etc.) you used for various properties and to judge the quality of your CSS code.

Only changes to `style.css` will be considered when grading this assignment.  Any changes you make to `index.html` will be ignored.

The assignment is worth 100 points total:

* Color: 15 points
  * 15 points: colors for all elements match the mocks

* Text: 20 points
  * 5 points: font faces for all parts of the page (approximately) match the mocks
  * 5 points: text alignment and indentation matches the mocks
  * 10 points: all text sizes and weights match the mocks

* Layout: 25 points
  * 10 points: sizes of major components (header, nav, todo notes, footer, buttons, etc.) (approximately) match the mocks
  * 10 points: box sizes (margins, padding, borders) (approximately) matches the mocks
  * 5 points: relative locations of components (buttons, notes, nav links, etc.) (approximately) matches the mocks

* Details: 30 points
  * 10 points: todo notes grid is responsive (i.e. columns are added and removed as needed as the browser window is resized) without the notes themselves changing size
  * 5 points: hover effects for nav bar match the mocks and the description above
  * 5 points: hover effects for the todo notes match the mocks and the description above
  * 5 points: static appearance (excluding interaction) of the "add note" button matches the mocks
  * 5 points: hover effects for the "add note" button match the mocks and the description above

* Code style: 10 points
  * 5 points: white space and new lines are used appropriately for CSS readability
  * 5 points: CSS selectors maintain low complexity (i.e. they're only as specific as they need to be)

## Submission

We'll be using GitHub Classroom for this assignment. You will submit your assignment via GitHub. Just make sure your completed `style.css` file is committed and pushed by the assignment's deadline to the master branch of the GitHub repo that was created for you by GitHub Classroom.  Note that you do not need to publish your page anywhere.
