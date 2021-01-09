<?php
/**
 * Plugin Name: React - HMR
 * Description: Hot module replacement testing with React
 * Author: Tareq Hasan
 * Author URI: https://tareq.co
 * Version: 0.1
 * License: GPL2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */
defined('ABSPATH') || exit;

add_action('admin_menu', function () {
    $menu = add_menu_page(
        'React HMR',
        'React HMR',
        'manage_options',
        'react-hmr',
        'react_hmr_render',
    );

    add_action('admin_print_scripts-' . $menu, 'react_hmr_scripts');
});

function react_hmr_render()
{
    echo '<div id="hmr-app">Hello World</div>';
}

function react_hmr_scripts()
{
    $assets = require __DIR__ . '/dist/runtime.asset.php';

    $url = plugins_url('/dist', __FILE__);

    // for local development
    // when webpack "hot module replacement" is enabled, this
    // constant needs to be turned "true" on "wp-config.php"
    if (defined('WP_LOCAL_DEV') && WP_LOCAL_DEV) {
        $url = 'http://localhost:8080';
    }

    // register scripts
    wp_register_script('app-runtime', $url . '/runtime.js', $assets['dependencies'], $assets['version'], true);
    wp_register_script('app-vendors', $url . '/vendors.js', ['app-runtime'], $assets['version'], true);
    wp_register_script('app-script', $url . '/app.js', [ 'app-vendors' ], $assets['version'], true);

    // register styles
    wp_register_style('app-css', $url . '/app.css', [ 'wp-components' ], $assets['version']);

    // enqueue scripts and styles
    wp_enqueue_script('app-script');
    wp_enqueue_style('app-css');
}
