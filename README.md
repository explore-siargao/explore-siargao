# ExploreSiargao

### 1. Install `Node.js`

We recommend you to use NVM, but if you already have the Node version that we need, that is fine. To install NVM simply go to this link [NVM Releases](https://github.com/coreybutler/nvm-windows/releases) and go to the latest release Assets and download `nvm-setup.exe` file then run and install it.

After you install NVM, run these commands in PowerShell

```
nvm install 20.10.0
```

```
nvm use 20.10.0
```

### 2. Clone the project

Make sure you have [Git](https://git-scm.com/) installed in local machine then run this command in your PowerShell or any other Terminal

```
git clone https://github.com/explore-siargao/explore-siargao.git
```

### 3. Database Setup

Go to this [file](/docs/local_database_setup.md) to implement the setup

### 4. Setup TypeScript

Install `typescript` as a global dependency using this command

```
npm install -g typescript
```

### 5. Setup environment variables

Create `.env` file in the root of the project then ask the Admins for you to have the Environment Variables needed for the project.

### 6. Run setup command

Make sure that your current directory is `explore-siargao` folder, then run this command

```
npm run setup
```

This will install the dependencies and build the project

### 6. Run the project

You can now start your local development by running this command

```
npm run dev
```
