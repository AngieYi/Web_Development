# Assignment 3

**Due at 4:59pm on Monday, 11/7/2016**

**Code Blog entry due at 4:59pm on Wednesday, 11/9/2016**

The goal of this assignment is to start to use Node.js and some of its built-in modules to build a very simple web server that serves static content.

You are provided with several files in `public/` implementing the ToDoIt site we've been working on throughout the course.  If you opened the `index.html` file in your browser, you'd see the site you're familiar with by now, with all of its styling and interactions.  In addition to your familiar files, you're also provided with a file `404.html`, whose purpose we'll get to in a bit.

The file `server.js` provides the start of a simple Node-based web server.  Your job is to complete `server.js` so it satisfies the following requirements:

  * The server can only use Node's built-in modules (e.g. `http`, `fs`, `path`, etc.), no third-party modules.

  * The server should listen on the port specified by the environment variable `PORT`.  If that `PORT` is not present in the environment, the server should listen on port 3000 by default.

  * When someone visits a path on your server that corresponds to the name of one of the files in `public/`, your server should respond with the contents of that file.  For example, if your server is running on port 3000 and, from the same machine, you visit [http://localhost:3000/index.html](http://localhost:3000/index.html), your server should serve the contents `public/index.html`.  In general, visiting the path `/filename.ext` on your server should result in your server responding with the contents of `public/filename.ext`.  The HTTP status code of your response in such a case should be 200.

  * If someone visits the root path of your website (i.e. `/`), your server should respond with the contents of `public/index.html`.  For example, if your server is running on port 3000 and, from the same machine, you visit [http://localhost:3000](http://localhost:3000), your server should serve the contents of `public/index.html`.  The HTTP status code of your response in this case should be 200.

  * If someone visits a path on your site that does not correspond to the name of any of the files in `public/`, your server should respond with the contents of `public/404.html`.  For example, if your server is running on port 3000 and, from the same machine, you visit [http://localhost:3000/thispagedoesnotexist](http://localhost:3000/thispagedoesnotexist), your server should serve the contents of `public/404.html`.  The HTTP status code of your response in such a case should be 404, which indicates that the requested path was not found.

  * Your server should read any given file in `public/` from disk only once.  In other words, the contents of each file should be cached in the server's memory after the first read, and the server should use this cache when responding with a file's contents.

## Grading criteria

Only changes to `server.js` will be considered when grading this assignment.  Changes to other files will be ignored, and we will not run `npm install` to install third-party modules.

The assignment is worth 100 points total:

  * 10 points: server listens on the port specified by the environment variable `PORT` or 3000 by default.

  * 40 points: server serves files from `public/` with status 200 when corresponding URL path is visited.

  * 15 points: server serves `public/index.html` with status 200 when the root URL path (`/`) is visited.

  * 15 points: server serves `public/404.html` with status 404 when a URL path not corresponding to any file in `public/` is visited.

  * 20 points: server reads files in `public/` exactly once and caches them.

## Code Blog

Add an entry to your Code Blog reflecting on your experience with this assignment.  Here are some questions you could answer (though these aren't the only ones):

  * What was challenging about the assignment, and what specific kinds of problems did you have.  How did you solve those problems?

  * What did you learn from the assignment?  Were there any special insights you had?  What did you find that you already knew?

  * What kinds of resources were helpful for completing the assignment?  Specific websites?  Lectures?  The class Piazza forum?  The TAs?  How did you use each of these resources?

  * What are one or two things you had to Google to complete the assignment?

Publish your new entry to the same place where you published your Assignment 2 Code Blog entry.

This Code Blog entry is due at 4:59pm on Wednesday 11/9/2016.

## Submission

As always, we'll be using GitHub Classroom for this assignment. You will submit your assignment via GitHub.  Just make sure your completed `server.js` file is committed and pushed by the assignment's deadline to the master branch of the GitHub repo that was created for you by GitHub Classroom.
