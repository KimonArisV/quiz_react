# Quiz React App:<br>
Quiz created on React using Create-React-App. 

# Step 0: check the yarn version:<br>
<code> yarn --version </code>


# Step 1: If none is find you need to install it:<br>
<code> npm install --global yarn </code>

# Step 2: Initialize a new project (This will generate a package.json file.):<br>
<code> yarn init </code>

# Step 3: Install Dependencies with Yarn:<br>

## Instead of using <code>npm install</code> to install dependencies, you can use Yarn's add command:<br>
<code> yarn add &lt;package-name&gt;</code>

## Replace <code>package-name</code> with the name of the package you want to install (e.g <code>yarn add react</code>). This will add the react package to your project and update the  <code>package.json</code>. 


# Step 4: Install Development Dependencies:<br>

## For development dependencies, you can use the <code>--dev</code> flag (e.g. <code>yarn add --dev webpack</code>):

<code>yarn add --dev &lt;package-name&gt;</code>

# Step 5: Use Yarn Commands:

## Instead of npm commands, you can now use Yarn commands:

- Instead of <code> npm install</code>, use <code> yarn install</code>.
- Instead of <code> npm start</code>, use <code> yarn start</code>.
- Instead of <code> npm run build</code>, use<code>  yarn run build</code>.
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

#### [Nice intro to yarn](https://flaviocopes.com/yarn/#initialize-a-new-project)






