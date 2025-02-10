/* 

TypeScript official documentation: https://www.typescriptlang.org/ 

TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.

*****

Install TypeScript with NMP using the following command:

npm i typescript -g

Next, create an index.html page. Then, create a main.ts file manually. You can compile a main.js file from that main.ts file by running "tsc main.ts" in the terminal. Next, link to the main.js file in the HTML file. 

You can create a TS file with the file extension .ts, then run the following terminal command to compile it to a JS file:

- tsc main.ts (creates main.js).

However, this is inconvenient as you need to continuously update the main.js when writing more in main.ts. 

Instead, run "tsc main.ts -w" (for watch) to keep updating main.js while editing main.ts

********

Structure of a TS project: a build folder with all compiled code and a source (src) folder at the same level.

Create a "build" and "src" folder for each project. Store index.html inside "build" and "main.ts" inside src.

********

Next, create a tsconfig.json file with "tsc --init"

Open tsconfig.json and set Rootdir and Outdir variables for the two file dirs. 

"rootDir": "./src",
"outDir":  "./build/js"

********

Next, run "tsc -w" so it watches ALL files in dir.

When deleting .ts files, you also manually need to delete the compiled .js file.

To ignore TS files that are not in the src directory, add the following to the tsconfig.json file: 

},
  "include": [
    "src"
  ]


*********

readjust the script tag in the index.html as you're using a different file structure now: src="js/main.js"

also, reload live server to restart the page

inside main.ts file:

TS lets you explicitly define variable types (for example: let a: number = 12;)

**********

Open tsconfig.json and uncomment "noEmitOnError": true, to disable emitting files if any type checking errors are reported. 

run "tsc --noEmotOnError -w" in the terminal to only use this setting now and then, overwrite what is in tsconfig.json

*/

"use strict";
let username = 'Dave';
console.log(username);
let a = 12;
let b = 6;
let c = 2;
console.log(a / b);
