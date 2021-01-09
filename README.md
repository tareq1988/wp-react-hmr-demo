# React HMR WordPress Plugin

A WordPress plugin built with React with [hot module replacement](https://webpack.js.org/concepts/hot-module-replacement/) support.

### Instructions

1. Clone the repository in your `/wp-content/plugins` folder.
1. Install the plugin from `/wp-admin/plugins/` page
1. cd into the repo in your terminal `cd wp-react-hmr-demo`
1. Install dependencies by running `yarn install`

To start developing with [HMR](https://webpack.js.org/concepts/hot-module-replacement/) support, open your `wp-config.php` and add this constant:

```php
define( 'WP_LOCAL_DEV', true );
```

Now run: `yarn start`

If you navigate to the plugin's menu and start changing your React code, you should see the code updates in realtime. Enjoy!

##### What is this `WP_LOCAL_DEV` constant?

When you start the webpack-dev-server with `yarn start` command, it opens a server in `http://localhost:8080` and listens to the changes. The `WP_LOCAL_DEV` constant helps to detect if we are in the development environment. If configured, the plugin CSS and JS files are served from `http://localhost:8080/` instead of your WordPress installation.

When not running `yarn start`, you should turn the constant to `false`.

### Commands

`yarn start`: Starts in development mode with HMR support

`yarn build`: Runs the build in production mode

`yarn build:dev`: Runs the build in development mode

