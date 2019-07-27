<?php
/**
* Plugin Name: Gutenberg Post block
* Description: Gutenberg Post block.
* Author: Rejuan Ahamed
* Version: 1.0.0
* License: MIT
*
* @package CGB
*/

# Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

# Block Initializer.
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';

