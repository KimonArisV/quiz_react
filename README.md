# Quiz React App:<br>
Quiz created on React using Create-React-App. 

# Step 0: check the yarn version:<br>
<code> yarn --version </code>

# Step 1: If none is find you need to install it:<br>
<code> npm install --global yarn </code>

# Step 2: Use create-react-app to start quickly:<br>
<code> npx create-react-app &lt;my-app&gt; --use-yarn </code> or <code> yarn create-react-app  </code>

# Step 3: Go into the create directory: <br>
<code>cd &lt;my-app&gt; </code>

# Step 4: spin up the server:<br>
<code> yarn start </code>

----

# Option: If you wanted to manually initialize a new project (This will generate a package.json file.):<br>
<code> yarn init </code>

# Option: Install Dependencies with Yarn:<br>

## Instead of using <code>npm install</code> to install dependencies, you can use Yarn's add command:<br>
<code> yarn add &lt;package-name&gt;</code>

## Replace <code>package-name</code> with the name of the package you want to install (e.g <code>yarn add react</code>). This will add the react package to your project and update the  <code>package.json</code>. 


# Option: Install Development Dependencies:<br>

## For development dependencies, you can use the <code>--dev</code> flag (e.g. <code>yarn add --dev webpack</code>):

<code>yarn add --dev &lt;package-name&gt;</code>

# Option: Use Yarn Commands:

## Instead of npm commands, you can now use Yarn commands:

- Instead of <code> npm install</code>, use <code> yarn install</code>.
- Instead of <code> npm start</code>, use <code> yarn start</code>.
- Instead of <code> npm run build</code>, use<code>  yarn build</code>.
- Instead of <code> npm test</code>, use<code>  yarn test</code>.
- Instead of <code> npm start</code>, use<code>  yarn start</code>.

### Note: 
- yarn add : adds a package to use in your current package. 
- yarn init : initializes the development of a package. 
- yarn install : installs all the dependencies defined in a package.

# Additional Tips:

## Migrate Existing Project:

### If you have an existing project that uses <code>npm</code>, you can migrate it to <code>Yarn</code> by running:

<code>yarn import</code>

### This command will generate a <code>yarn.lock</code> file based on your existing <code>package-lock.json</code>

#### [Nice intro to yarn](https://flaviocopes.com/yarn/#initialize-a-new-project) <br>

---

##### npm equivalent for quick spin up of the server would be (the first command is not always needed):<br>

<code>nvm install --lts</code> <br> <br>
<code>npx create-react-app &lt;my-app&gt;</code> <br>
<code>cd &lt;my-app&gt;</code> <br>
<code>npm start</code> <br>



---
# Lessions I embrace throughout creating the app:<br>

- We use **useState()** for a variable instead of let when we want the component to re-render if the variable changes. otherwise we will change the variable but the component will not re-render. Think of cases where you want to use && to allow a compeont to render on the page or not. If let is used changes to the value fo the variable will not trigger re-render of the component in contract with **useState()**. <br>
- When you want to use ternary to display two different contents its best to make each of them a separate component and inserted it into that component. <br>
- When you want to pass a variable that will be changing and it will affect other parts of your design as it changes, you want to pass the property to the child component as an anonymous function. oherwise it will not re-render the related components when the value changes and it will not propagate it(caching). <br>
- When you pass a state variable from a parent component to a child component as a prop, the child component receives the initial value of the state variable. If the state variable in the parent component changes, it triggers a re-render of the parent component, and the updated value is then passed down to the child component as a new prop. <br>
- After a lot fo hours I realize why isAnswersVisible was not updatting in my child and grandchild components. Because I was not rerendering the child component when the isAnswersVisible became true it was not propagating down to update the props of that component. That component was already created and not needed to re-create it self for the re-rendering of the parent.  <br>


