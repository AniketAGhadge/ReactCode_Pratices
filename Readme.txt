Steps followed to create react App

1 - Create index.html file
2 - Create App.js file
3 - Create index.css file
4 - Run npm init   --- It will create package.json file
5 - Run npm i -D parcel   --- It will install bundler and create package-lock.json file and node_module folder
6 - 


Steps followed to commit on git
1 - git init  -- install git in folder
2 - git branch -M <branchname>  --- create branch and move on that branch
3 - create .gitignore file and add node_module folder to ignore the folder from commite
4 - git add .  --- Add all files
5 - git commit -m 'add msg'  -- commit all the changes
6 - git remote add origin <link>  -- Run only once of project to add reprosetory to project
7 - git origin <branch name you created>


Export and Imports
Named Export and Default Export - 
e.g Named Export - at start export const Name = () => {}   ----- To import Named export it will be import {Name} from .....
---- For multiple component export from one file we use named export
e.g Default Export - at end export default Name            ----- To import default export it eill br import Name from .....
---- For single component export from one file we use default export


Reconciliation algo--
Reconcilation means whenerver our state change react re-render UI this process called as reconsiliation.
we are using react fiber from React16. 

Virtaul DOM - 
Virtual Dom is nothing but the React object 
e.g. what ever we get from React.createElement() we are getting as object

Actual DOM - 
Actual DOM means nothing but html representation
e.g. <div> <h1> </h1> </div>

In Reconcilation whenever state change react compare between the old Virtual DOM and new i.e. changed Virtual DOM and then it make changes in Actual DOM and It will render only the changed Component it doen't touch the unchanged components thats why react is fast

For making changes in state we use useState hook
For making any change on screen after load we need to re-render that page or we can say to make any dynamic change on page we need to re-render that page after making change. To re-render that page we use useState() hook.

useEffect - useEffect will take two arrguments first will be call back function and second will be dependent array. useEffect will be render only after all component render.

We have two approach for render 
1) Loads => API (wait for call) => Render
2) Loads => render => API => re-render    --- Mostly we use this in react

CORS - Cross Origin Resource Sharing
We get CORS error when user try to access the website which having different origin,
Before CORS policy we are not able to fetch the URL of subDomin type or other protocol not the different origin URL.
After CORS policy now we can fetch the URL of diierent origin.
First the brower will send a preflight request also know as optional request.
Where it will check weather it is compatable to connect with that URL or not
The 2nd origin will send back response to first orgin with some headet detils like Accept-Control-Allow-Origin or Accept-Control-Allow-Method
Accept-Control-Allow-Origin  -- It will ad the detils of restricted URL or not
Accept-Control-Allow-Method  -- It will ad the detils of restricted Method name like POST, GET
After that 1st origin will send the request
It is not happen to all the URL where it will send the Preflight data