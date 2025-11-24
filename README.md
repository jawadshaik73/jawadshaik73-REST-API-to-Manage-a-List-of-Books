Step 1. First, create a new directory and initialize the project:

"mkdir book-api"

"cd book-api"

"npm init -y"



Step 2. Install Dependencies

"npm install express"



Step 3: Create the Server (app.js)



Step 4: Update package.json

Add a start script to your package.json



Step 5: Run the Server

"npm start"





Project Structure

Your final project structure should look like:



book-api/

├── node\_modules/

├── app.js

├── package.json

└── package-lock.json





Step 1: Check your current package.json

First, let's see what's in your package.json file:



cmd:- "cat package.json"

&nbsp;            (or)

&nbsp;     "type package.json



Option 2: Use npm to set the start script

You can also add the script using 

npm command: "npm set-script start "node app.js"



Step 4: Alternative - Run directly without npm start

If you're still having issues, you can run the server directly:

cmd:- "node app.js"



Step 5: Verify everything is working

After making these changes, try:



bash

npm start



You should see:



text

Book API server running on http://localhost:3000

Available endpoints:

&nbsp; GET    /books

&nbsp; GET    /books/:id

&nbsp; POST   /books

&nbsp; PUT    /books/:id

&nbsp; DELETE /books/:id





Complete step-by-step fix:

Check current directory contents:



bash

dir

(or ls on Mac/Linux)



If package.json doesn't exist, create it:



bash

npm init -y

Install Express (you've already done this):



bash

npm install express

Add the start script:



bash

npm set-script start "node app.js"

Create app.js file (use the code I provided above)



Start the server:



bash

npm start

---------------------------------------------------------------------------



cmd:- **code index.js**



cmd:- **New-Item index.js**



cmd:- **ls**



Directory: C:\\Users\\jawad\\Downloads\\Elevate labs projects





Mode                 LastWriteTime         Length Name

----                 -------------         ------ ----

d-----        20-11-2025     10:40                book-api

d-----        20-11-2025     11:06                node\_modules

d-----        20-11-2025     09:47                task1

d-----        20-11-2025     10:11                task2

d-----        20-11-2025     10:32                task3

d-----        19-11-2025     09:58                task4





cmd:- pwd



Path

----

C:\\Users\\jawad\\Downloads\\Elevate labs projects



cmd:-  node index.js

