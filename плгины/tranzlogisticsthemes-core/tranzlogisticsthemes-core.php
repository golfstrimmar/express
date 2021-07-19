<?php
/*
Plugin Name: Tranzlogisticsthemes Core
Plugin URI: http://zozothemes.com
Description: Tranzlogisticsthemes Core Plugin for Zozothemes Themes
Version: 1.2.4
Author: Zozothemes
Author URI: http://zozothemes.com/
*/

$cur_theme = wp_get_theme();	
if ( $cur_theme->get( 'Name' ) != 'Tranzlogistics' && $cur_theme->get( 'Name' ) != 'Tranzlogistics Child' ){
	return;
}

define( 'TRANZLOGISTICS_CORE_THEME_URL', get_template_directory_uri() );

if( ! class_exists( 'TranzlogisticsthemesCore_Plugin' ) ) { 
	class TranzlogisticsthemesCore_Plugin {
		
		const VERSION = '1.0.0';
		
		/**
		 * Instance of this class.
		 *
		 * @since	1.0.0
		 *
		 * @var	  object
		 */
		protected static $instance = null;
		
		/**
		 * Initialize the plugin by setting localization and loading public scripts
		 * and styles.
		 *
		 * @since	 1.0.0
		 */
		private function __construct() {
		
			define( 'TRANZLOGISTICS_CORE_DIR', plugin_dir_path(__FILE__)); 
			define( 'TRANZLOGISTICS_CORE_URL', plugin_dir_url(__FILE__));
			
			define( 'TRANZLOGISTICS_CORE_ADMIN', plugin_dir_path(__FILE__) . 'admin' ); 
			define( 'TRANZLOGISTICS_CORE_ADMIN_ASSETS', plugin_dir_url( __FILE__ ) . 'admin/assets' );
			
			define( 'TRANZLOGISTICS_TINYMCE_URI', plugin_dir_url( __FILE__ ) . 'tinymce' );
			define( 'TRANZLOGISTICS_TINYMCE_DIR', plugin_dir_path( __FILE__ ) .'tinymce' );
			
			define( 'TRANZLOGISTICS_CORE_WIDGETS', plugin_dir_path( __FILE__ ) . 'widgets' ); 
			add_action('init', array(&$this, 'init'));
			add_action('admin_init', array(&$this, 'admin_init'));
			add_action('after_setup_theme', array(&$this, 'load_zozothemes_core_text_domain'));
			add_action('wp_enqueue_scripts', array(&$this, 'zozo_custom_scripts'), 30);
			add_action('wp_ajax_zozothemes_shortcodes_popup', array(&$this, 'zozo_popup'));
			
			$this->init_widgets();
			$this->init_aq_resizer();
		}
		/**
		 * Registers TinyMCE rich editor buttons
		 *
		 * @return	void
		 */
		function init() {
		
			if ( get_user_option('rich_editing') == 'true' )
			{
				add_filter( 'mce_external_plugins', array(&$this, 'add_rich_plugins') );
				add_filter( 'mce_buttons', array(&$this, 'register_rich_buttons') );
			}
			$this->init_shortcodes();
		}
		/**
		 * Find and include all shortcodes
		 *
		 * @return void
		 */
		function init_shortcodes() {
			require_once plugin_dir_path( __FILE__ ) . '/shortcodes.php';
		}
		
		/**
		 * Find and include all widget classes within widgets folder
		 *
		 * @return void
		 */
		function init_widgets() {
			
			add_filter('widget_text', 'do_shortcode');
			foreach( glob( plugin_dir_path( __FILE__ ) . '/widgets/*.php' ) as $filename ) {
				require_once $filename;
			}
		}
		
		/**
		 * Include Aq Resizer
		 *
		 * @return void
		 */
		function init_aq_resizer() {
			require_once plugin_dir_path( __FILE__ ) . '/aq_resizer.php';
		}
		
		/**
		 * Register the plugin text domain
		 *
		 * @return void
		 */		
		function load_zozothemes_core_text_domain() {
			load_plugin_textdomain( 'tranzlogistics', false, dirname( plugin_basename(__FILE__) ) . '/languages' );
		}
		
		/**
		 * Defins TinyMCE rich editor js plugin
		 *
		 * @return	void
		 */
		function add_rich_plugins( $plugin_array )
		{
			if( is_admin() ) {
				$plugin_array['zozo_button'] = TRANZLOGISTICS_TINYMCE_URI . '/plugin.js';
			}
			return $plugin_array;
		}
		/**
		 * Adds TinyMCE rich editor buttons
		 *
		 * @return	void
		 */
		function register_rich_buttons( $buttons )
		{
			array_push( $buttons, 'zozo_button' );
			return $buttons;
		}
		
		/**
		 * Return an instance of this class.
		 *
		 * @since	 1.0.0
		 *
		 * @return	object	A single instance of this class.
		 */
		public static function get_instance() {
			// If the single instance hasn't been set, set it now.
			if ( null == self::$instance ) {
				self::$instance = new self;
			}
			return self::$instance;
		}
		
		/**
		 * Enqueue Scripts and Styles
		 *
		 * @return	void
		 */
		function zozo_custom_scripts()
		{
			if( ! is_admin() ) {
				wp_enqueue_style( 'zozo-shortcodes', TRANZLOGISTICS_CORE_URL . 'shortcodes.css', array(), null );
			}
		}
		
		/**
		 * Enqueue Scripts and Styles for Admin
		 *
		 * @return	void
		 */
		function admin_init()
		{
			global $pagenow;
		
			if( is_admin() && ( $pagenow == 'themes.php' ) ) {
				wp_enqueue_style( 'zozo-font-awesome', TRANZLOGISTICS_TINYMCE_URI . '/css/font-awesome.css', false, '4.3.0', 'all' );
			}

		
			// css
			wp_enqueue_style( 'zozo-popup', TRANZLOGISTICS_TINYMCE_URI . '/css/popup.css', false, '1.0', 'all' );
			wp_enqueue_style( 'wp-color-picker' );
			// js
			wp_enqueue_script( 'jquery-ui-sortable' );
			wp_enqueue_script( 'zozo-jquery-livequery', TRANZLOGISTICS_TINYMCE_URI . '/js/jquery.livequery.js', false, '1.1.1', false );
			wp_enqueue_script( 'zozo-jquery-appendo', TRANZLOGISTICS_TINYMCE_URI . '/js/jquery.appendo.js', false, '1.0', false );
			wp_enqueue_script( 'zozo-base64', TRANZLOGISTICS_TINYMCE_URI . '/js/base64.js', false, '1.0', false );
			wp_enqueue_script( 'bootstrap-tooltip', TRANZLOGISTICS_TINYMCE_URI . '/js/bootstrap-tooltip.js', false, '2.2.2', false );	
			wp_enqueue_script( 'bootstrap-popover', TRANZLOGISTICS_TINYMCE_URI . '/js/bootstrap-popover.js', false, '2.2.2', false );
			wp_enqueue_script( 'wp-color-picker' );
			
			wp_enqueue_script( 'zozo-popup', TRANZLOGISTICS_TINYMCE_URI . '/js/popup.js', false, '1.0', false );
			wp_localize_script( 'zozo-popup', 'zozoShortcodes', array( 'plugin_folder' => plugins_url( '', __FILE__ ) ) );
		}
		/**
		 * Popup function which will show shortcode options in thickbox.
		 *
		 * @return void
		 */
		function zozo_popup() {
			require_once( TRANZLOGISTICS_TINYMCE_DIR . '/popup.php' );
			die();
		}
	}
}

/*Custom Code*/
if( ! function_exists('tranzlogistics_include_theme_options') ) {
	function tranzlogistics_include_theme_options() {
		// Theme Options Panel Admin
		
		$cur_theme = wp_get_theme();	
		if ( $cur_theme->get( 'Name' ) == 'Tranzlogistics' || $cur_theme->get( 'Name' ) == 'Tranzlogistics Child' ){
			include_once( TRANZLOGISTICS_CORE_ADMIN . '/theme-options.php' );
		}
	}
	add_action( 'init', 'tranzlogistics_include_theme_options', 0 );
}

// Load the instance of the plugin
add_action( 'plugins_loaded', array( 'TranzlogisticsthemesCore_Plugin', 'get_instance' ) );
register_activation_hook( __FILE__, 'zozo_custom_flush_rules');
function zozo_custom_flush_rules(){
	//defines the post type so the rules can be flushed.
	zozo_register_post_types();
	//and flush the rules.
	flush_rewrite_rules();
}
/* =======================================
 * Register custom post types
 * ======================================= */
function zozo_register_post_types() {
	
	global $zozo_options;
	
	$portfolio_slug = $portfolio_cat_slug = $portfolio_tag_slug = $services_slug = $services_cat_slug = 	$casestudies_slug = $casestudy_cat_slug = $event_slug = $event_categories_slug  = '';
	if( function_exists( 'tranzlogistics_get_theme_option' ) )
	{
		
		$services_slug = tranzlogistics_get_theme_option( 'services_slug' );
		$services_slug = isset( $services_slug ) && $services_slug != '' ? sanitize_title( $services_slug ) : 'services';
		$services_cat_slug = tranzlogistics_get_theme_option( 'service_categories_slug' );
		$services_cat_slug = isset( $services_cat_slug ) && $services_cat_slug != '' ? sanitize_title( $services_cat_slug ) : 'service-categories';
		$casestudies_slug = tranzlogistics_get_theme_option( 'casestudies_slug' );
		$casestudies_slug = isset( $casestudies_slug ) && $casestudies_slug != '' ? sanitize_title( $casestudies_slug ) : 'casestudies';
		$casestudy_cat_slug = tranzlogistics_get_theme_option( 'casestudy_categories_slug' );
		$casestudy_cat_slug = isset( $casestudy_cat_slug ) && $casestudy_cat_slug != '' ? sanitize_title( $casestudy_cat_slug ) : 'casestudy-categories';
		$event_slug = tranzlogistics_get_theme_option( 'event_slug' );
		$event_slug = isset( $event_slug ) && $event_slug != '' ? sanitize_title( $event_slug ) : 'event';
		$event_categories_slug = tranzlogistics_get_theme_option( 'event_categories_slug' );
		$event_categories_slug = isset( $event_categories_slug ) && $event_categories_slug != '' ? sanitize_title( $event_categories_slug ) : 'event-categories';
		$portfolio_slug = tranzlogistics_get_theme_option( 'portfolio_slug' );
		$portfolio_slug = isset( $portfolio_slug ) && $portfolio_slug != '' ? sanitize_title( $portfolio_slug ) : 'portfolio';
		$portfolio_cat_slug = tranzlogistics_get_theme_option( 'portfolio_categories_slug' );
		$portfolio_cat_slug = isset( $portfolio_cat_slug ) && $portfolio_cat_slug != '' ? sanitize_title( $portfolio_cat_slug ) : 'portfolio-categories';
		$portfolio_tag_slug = tranzlogistics_get_theme_option( 'portfolio_tags_slug' );
		$portfolio_tag_slug = isset( $portfolio_tag_slug ) && $portfolio_tag_slug != '' ? sanitize_title( $portfolio_tag_slug ) : 'portfolio-tags';
	}
	
	$portfolio_labels = array(
		'name' 					=> esc_html__( 'Portfolio', 'tranzlogistics' ),
		'singular_name' 		=> esc_html__( 'Portfolio', 'tranzlogistics' ),
		'add_new' 				=> esc_html__( 'Add New', 'tranzlogistics' ),
		'add_new_item' 			=> esc_html__( 'Add New Portfolio', 'tranzlogistics' ),
		'edit_item' 			=> esc_html__( 'Edit Portfolio', 'tranzlogistics' ),
		'new_item' 				=> esc_html__( 'New Portfolio', 'tranzlogistics' ),
		'all_items' 			=> esc_html__( 'Portfolio', 'tranzlogistics' ),
		'view_item' 			=> esc_html__( 'View Portfolio', 'tranzlogistics' ),
		'search_items' 			=> esc_html__( 'Search Portfolio', 'tranzlogistics' ),
		'not_found' 			=> esc_html__( 'No Portfolio found', 'tranzlogistics' ),
		'not_found_in_trash' 	=> esc_html__( 'No portfolio found in Trash', 'tranzlogistics' ), 
		'parent_item_colon' 	=> ''
	);
	
	$portfolio_args = array(
		'labels' 				=> $portfolio_labels,
		'public' 				=> true,
		'publicly_queryable' 	=> true,
		'show_ui' 				=> true,
		'show_in_menu'       	=> true,
		'query_var' 			=> true,
		'rewrite' 				=> array( 'with_front' => false, 'slug' => $portfolio_slug ),
		'capability_type' 		=> 'post',
		'hierarchical' 			=> false,
		'has_archive' 			=> false,
		'exclude_from_search' 	=> true,
		'supports' 				=> array( 'title', 'thumbnail', 'excerpt', 'editor' )
	);
	
	if( ! post_type_exists('zozo_portfolio') ) {
		register_post_type( 'zozo_portfolio', $portfolio_args );
	}
		
	$portfolio_category_labels = array(
		'name'              	=> esc_html__( 'Portfolio Categories', 'tranzlogistics' ),
		'singular_name'     	=> esc_html__( 'Category', 'tranzlogistics' ),
		'search_items'      	=> esc_html__( 'Search Categories', 'tranzlogistics' ),
		'all_items'         	=> esc_html__( 'All Categories', 'tranzlogistics' ),
		'parent_item'       	=> esc_html__( 'Parent Category', 'tranzlogistics' ),
		'parent_item_colon' 	=> esc_html__( 'Parent Category:', 'tranzlogistics' ),
		'edit_item'         	=> esc_html__( 'Edit Category', 'tranzlogistics' ),
		'update_item'       	=> esc_html__( 'Update Category', 'tranzlogistics' ),
		'add_new_item'      	=> esc_html__( 'Add New Category', 'tranzlogistics' ),
		'new_item_name'     	=> esc_html__( 'New Category Name', 'tranzlogistics' ),
		'menu_name'         	=> esc_html__( 'Categories', 'tranzlogistics' ),
	);

	$portfolio_category_args = array(
		'hierarchical'      	=> true,
		'labels'            	=> $portfolio_category_labels,
		'show_ui'           	=> true,
		'show_admin_column' 	=> true,
		'show_in_nav_menus' 	=> true,
		'query_var'         	=> true,
		'rewrite'           	=> array( 'with_front' => false, 'slug' => $portfolio_cat_slug ),
	);	
	
	if( ! taxonomy_exists( 'portfolio_categories' ) ) {
		register_taxonomy( 'portfolio_categories', 'zozo_portfolio', $portfolio_category_args );
	}	
	
	$portfolio_tags_labels = array(
		'name'              	=> esc_html__( 'Portfolio Tags', 'tranzlogistics' ),
		'singular_name'     	=> esc_html__( 'Tag', 'tranzlogistics' ),
		'search_items'      	=> esc_html__( 'Search Tags', 'tranzlogistics' ),
		'all_items'         	=> esc_html__( 'All Tags', 'tranzlogistics' ),
		'parent_item'       	=> esc_html__( 'Parent Tag', 'tranzlogistics' ),
		'parent_item_colon' 	=> esc_html__( 'Parent Tag:', 'tranzlogistics' ),
		'edit_item'         	=> esc_html__( 'Edit Tag', 'tranzlogistics' ),
		'update_item'       	=> esc_html__( 'Update Tag', 'tranzlogistics' ),
		'add_new_item'      	=> esc_html__( 'Add New Tag', 'tranzlogistics' ),
		'new_item_name'     	=> esc_html__( 'New Tag Name', 'tranzlogistics' ),
		'menu_name'         	=> esc_html__( 'Tags', 'tranzlogistics' ),
	);

	$portfolio_tags_args = array(
		'hierarchical'      	=> true,
		'labels'            	=> $portfolio_tags_labels,
		'show_ui'           	=> true,
		'show_admin_column' 	=> true,
		'show_in_nav_menus' 	=> true,
		'query_var'         	=> true,
		'rewrite'           	=> array( 'with_front' => false, 'slug' => $portfolio_tag_slug ),
	);
	
	if( ! taxonomy_exists( 'portfolio_tags' ) ) {
		register_taxonomy( 'portfolio_tags', 'zozo_portfolio', $portfolio_tags_args );
	}
	
	$services_labels = array(
		'name' 					=> esc_html__( 'Services', 'tranzlogistics' ),
		'singular_name' 		=> esc_html__( 'Services', 'tranzlogistics' ),
		'add_new' 				=> esc_html__( 'Add New', 'tranzlogistics' ),
		'add_new_item' 			=> esc_html__( 'Add New Service', 'tranzlogistics' ),
		'edit_item' 			=> esc_html__( 'Edit Service', 'tranzlogistics' ),
		'new_item' 				=> esc_html__( 'New Service', 'tranzlogistics' ),
		'all_items' 			=> esc_html__( 'Services', 'tranzlogistics' ),
		'view_item' 			=> esc_html__( 'View Service', 'tranzlogistics' ),
		'search_items' 			=> esc_html__( 'Search Service', 'tranzlogistics' ),
		'not_found' 			=> esc_html__( 'No Service found', 'tranzlogistics' ),
		'not_found_in_trash' 	=> esc_html__( 'No Service found in Trash', 'tranzlogistics' ), 
		'parent_item_colon' 	=> ''
	);

	$services_args = array(
		'labels' 				=> $services_labels,
		
		'menu_icon'             => 'dashicons-hammer',
		
		'public' 				=> true,
		'publicly_queryable' 	=> true,
		'show_ui' 				=> true,
		'show_in_menu'       	=> true,
		'query_var' 			=> true,
		'rewrite' 				=> array( 'with_front' => false, 'slug' => $services_slug ),
		'capability_type' 		=> 'post',
		'hierarchical' 			=> false,
		'has_archive' 			=> false,
		'exclude_from_search' 	=> true,
		'supports' 				=> array( 'title', 'thumbnail', 'excerpt', 'editor' )
	);
	
	if( ! post_type_exists('zozo_services') ) {
		register_post_type( 'zozo_services', $services_args );
	}
	
	$service_category_labels = array(
		'name'              	=> esc_html__( 'Service Categories', 'tranzlogistics' ),
		'singular_name'     	=> esc_html__( 'Category', 'tranzlogistics' ),
		'search_items'      	=> esc_html__( 'Search Categories', 'tranzlogistics' ),
		'all_items'         	=> esc_html__( 'All Categories', 'tranzlogistics' ),
		'parent_item'       	=> esc_html__( 'Parent Category', 'tranzlogistics' ),
		'parent_item_colon' 	=> esc_html__( 'Parent Category:', 'tranzlogistics' ),
		'edit_item'         	=> esc_html__( 'Edit Category', 'tranzlogistics' ),
		'update_item'       	=> esc_html__( 'Update Category', 'tranzlogistics' ),
		'add_new_item'      	=> esc_html__( 'Add New Category', 'tranzlogistics' ),
		'new_item_name'     	=> esc_html__( 'New Category Name', 'tranzlogistics' ),
		'menu_name'         	=> esc_html__( 'Categories', 'tranzlogistics' ),
	);
	
	$service_category_args = array(
		'hierarchical'      	=> true,
		'labels'            	=> $service_category_labels,
		'show_ui'           	=> true,
		'show_admin_column' 	=> true,
		'show_in_nav_menus' 	=> true,
		'query_var'         	=> true,
		'rewrite'           	=> array( 'with_front' => false, 'slug' => $services_cat_slug ),
	);	
	
	if( ! taxonomy_exists( 'service_categories' ) ) {
		register_taxonomy( 'service_categories', 'zozo_services', $service_category_args );
	}
	
	
	$casestudies_labels = array(
		'name' 					=> esc_html__( 'Casestudies', 'tranzlogistics' ),
		'singular_name' 		=> esc_html__( 'Casestudies', 'tranzlogistics' ),
		'add_new' 				=> esc_html__( 'Add New', 'tranzlogistics' ),
		'add_new_item' 			=> esc_html__( 'Add New Casestudy', 'tranzlogistics' ),
		'edit_item' 			=> esc_html__( 'Edit Casestudy', 'tranzlogistics' ),
		'new_item' 				=> esc_html__( 'New Casestudy', 'tranzlogistics' ),
		'all_items' 			=> esc_html__( 'Casestudies', 'tranzlogistics' ),
		'view_item' 			=> esc_html__( 'View Casestudy', 'tranzlogistics' ),
		'search_items' 			=> esc_html__( 'Search Casestudy', 'tranzlogistics' ),
		'not_found' 			=> esc_html__( 'No Casestudy found', 'tranzlogistics' ),
		'not_found_in_trash' 	=> esc_html__( 'No Casestudy found in Trash', 'tranzlogistics' ), 
		'parent_item_colon' 	=> ''
	);
	
	$casestudies_args = array(
		'labels' 				=> $casestudies_labels,
		
		'menu_icon'             => 'dashicons-clipboard',
		'public' 				=> true,
		'publicly_queryable' 	=> true,
		'show_ui' 				=> true,
		'show_in_menu'       	=> true,
		'query_var' 			=> true,
		'rewrite' 				=> array( 'with_front' => false, 'slug' => $casestudies_slug ),
		'capability_type' 		=> 'post',
		'hierarchical' 			=> false,
		'has_archive' 			=> false,
		'exclude_from_search' 	=> true,
		'supports' 				=> array( 'title', 'thumbnail', 'excerpt', 'editor' )
	);
	
	if( ! post_type_exists('zozo_casestudies') ) {
		register_post_type( 'zozo_casestudies', $casestudies_args );
	}
	
	$casestudy_category_labels = array(
		'name'              	=> esc_html__( 'Casestudy Categories', 'tranzlogistics' ),
		'singular_name'     	=> esc_html__( 'Category', 'tranzlogistics' ),
		'search_items'      	=> esc_html__( 'Search Categories', 'tranzlogistics' ),
		'all_items'         	=> esc_html__( 'All Categories', 'tranzlogistics' ),
		'parent_item'       	=> esc_html__( 'Parent Category', 'tranzlogistics' ),
		'parent_item_colon' 	=> esc_html__( 'Parent Category:', 'tranzlogistics' ),
		'edit_item'         	=> esc_html__( 'Edit Category', 'tranzlogistics' ),
		'update_item'       	=> esc_html__( 'Update Category', 'tranzlogistics' ),
		'add_new_item'      	=> esc_html__( 'Add New Category', 'tranzlogistics' ),
		'new_item_name'     	=> esc_html__( 'New Category Name', 'tranzlogistics' ),
		'menu_name'         	=> esc_html__( 'Categories', 'tranzlogistics' ),
	);
	
	$casestudy_category_args = array(
		'hierarchical'      	=> true,
		'labels'            	=> $casestudy_category_labels,
		'show_ui'           	=> true,
		'show_admin_column' 	=> true,
		'show_in_nav_menus' 	=> true,
		'query_var'         	=> true,
		'rewrite'           	=> array( 'with_front' => false, 'slug' => $casestudy_cat_slug ),
	);	
	
	if( ! taxonomy_exists( 'casestudy_categories' ) ) {
		register_taxonomy( 'casestudy_categories', 'zozo_casestudies', $casestudy_category_args );
	}
	
	
	$event_labels = array(
		'name' 					=> esc_html__( 'Event', 'tranzlogistics' ),
		'singular_name' 		=> esc_html__( 'Event', 'tranzlogistics' ),
		'add_new' 				=> esc_html__( 'Add New', 'tranzlogistics' ),
		'add_new_item' 			=> esc_html__( 'Add New Event', 'tranzlogistics' ),
		'edit_item' 			=> esc_html__( 'Edit Event', 'tranzlogistics' ),
		'new_item' 				=> esc_html__( 'New Event', 'tranzlogistics' ),
		'all_items' 			=> esc_html__( 'Event', 'tranzlogistics' ),
		'view_item' 			=> esc_html__( 'View Event', 'tranzlogistics' ),
		'search_items' 			=> esc_html__( 'Search Event', 'tranzlogistics' ),
		'not_found' 			=> esc_html__( 'No Event found', 'tranzlogistics' ),
		'not_found_in_trash' 	=> esc_html__( 'No Event found in Trash', 'tranzlogistics' ), 
		'parent_item_colon' 	=> ''
	);
	
	
	
	$event_args = array(
		'labels' 				=> $event_labels,
		'menu_icon'             => 'dashicons-index-card',
		'public' 				=> true,
		'publicly_queryable' 	=> true,
		'show_ui' 				=> true,
		'show_in_menu'       	=> true,
		'query_var' 			=> true,
		'rewrite' 				=> array( 'with_front' => false, 'slug' => $event_slug ),
		'capability_type' 		=> 'post',
		'hierarchical' 			=> false,
		'has_archive' 			=> false,
		'exclude_from_search' 	=> true,
		'supports' 				=> array( 'title', 'thumbnail', 'excerpt', 'editor' )
	);
	
	if( ! post_type_exists('zozo_event') ) {
		register_post_type( 'zozo_event', $event_args );
	}
		
	$event_category_labels = array(
		'name'              	=> esc_html__( 'Event Categories', 'tranzlogistics' ),
		'singular_name'     	=> esc_html__( 'Category', 'tranzlogistics' ),
		'search_items'      	=> esc_html__( 'Search Categories', 'tranzlogistics' ),
		'all_items'         	=> esc_html__( 'All Categories', 'tranzlogistics' ),
		'parent_item'       	=> esc_html__( 'Parent Category', 'tranzlogistics' ),
		'parent_item_colon' 	=> esc_html__( 'Parent Category:', 'tranzlogistics' ),
		'edit_item'         	=> esc_html__( 'Edit Category', 'tranzlogistics' ),
		'update_item'       	=> esc_html__( 'Update Category', 'tranzlogistics' ),
		'add_new_item'      	=> esc_html__( 'Add New Category', 'tranzlogistics' ),
		'new_item_name'     	=> esc_html__( 'New Category Name', 'tranzlogistics' ),
		'menu_name'         	=> esc_html__( 'Categories', 'tranzlogistics' ),
	);
	$event_category_args = array(
		'hierarchical'      	=> true,
		'labels'            	=> $event_category_labels,
		'show_ui'           	=> true,
		'show_admin_column' 	=> true,
		'show_in_nav_menus' 	=> true,
		'query_var'         	=> true,
		'rewrite'           	=> array( 'with_front' => false, 'slug' => $event_categories_slug ),
	);	
	
	if( ! taxonomy_exists( 'event_categories' ) ) {
		register_taxonomy( 'event_categories', 'zozo_event', $event_category_args );
	}
	
	$testimonial_labels = array(
		'name' 					=> esc_html__( 'Testimonials', 'tranzlogistics' ),
		'singular_name' 		=> esc_html__( 'Testimonials', 'tranzlogistics' ),
		'add_new' 				=> esc_html__( 'Add New', 'tranzlogistics' ),
		'add_new_item' 			=> esc_html__( 'Add New Testimonial', 'tranzlogistics' ),
		'edit_item' 			=> esc_html__( 'Edit Testimonial', 'tranzlogistics' ),
		'new_item' 				=> esc_html__( 'New Testimonial', 'tranzlogistics' ),
		'all_items' 			=> esc_html__( 'Testimonials', 'tranzlogistics' ),
		'view_item' 			=> esc_html__( 'View Testimonial', 'tranzlogistics' ),
		'search_items' 			=> esc_html__( 'Search Testimonials', 'tranzlogistics' ),
		'not_found' 			=> esc_html__( 'No Testimonials found', 'tranzlogistics' ),
		'not_found_in_trash' 	=> esc_html__( 'No testimonials found in Trash', 'tranzlogistics' ), 
		'parent_item_colon' 	=> ''
	);
	
	$testimonial_args = array(
		'labels' 				=> $testimonial_labels,
		
		'menu_icon'             => 'dashicons-testimonial',
		'public' 				=> true,
		'publicly_queryable' 	=> true,
		'show_ui' 				=> true,
		'show_in_menu'       	=> true,
		'query_var' 			=> true,
		'rewrite' 				=> array( 'with_front' => false, 'slug' => 'testimonial' ),
		'capability_type' 		=> 'post',
		'hierarchical' 			=> false,
		'has_archive' 			=> false,
		'exclude_from_search' 	=> true,
		'supports' 				=> array( 'title', 'thumbnail', 'editor' )
	);
	
	if( ! post_type_exists('zozo_testimonial') ) {
		register_post_type( 'zozo_testimonial', $testimonial_args );
	}
	
	$testimonial_category_labels = array(
		'name'              	=> esc_html__( 'Testimonial Categories', 'tranzlogistics' ),
		'singular_name'     	=> esc_html__( 'Category', 'tranzlogistics' ),
		'search_items'      	=> esc_html__( 'Search Categories', 'tranzlogistics' ),
		'all_items'         	=> esc_html__( 'All Categories', 'tranzlogistics' ),
		'parent_item'       	=> esc_html__( 'Parent Category', 'tranzlogistics' ),
		'parent_item_colon' 	=> esc_html__( 'Parent Category:', 'tranzlogistics' ),
		'edit_item'         	=> esc_html__( 'Edit Category', 'tranzlogistics' ),
		'update_item'       	=> esc_html__( 'Update Category', 'tranzlogistics' ),
		'add_new_item'      	=> esc_html__( 'Add New Category', 'tranzlogistics' ),
		'new_item_name'     	=> esc_html__( 'New Category Name', 'tranzlogistics' ),
		'menu_name'         	=> esc_html__( 'Categories', 'tranzlogistics' ),
	);
	$testimonial_category_args = array(
		'hierarchical'      	=> true,
		'labels'            	=> $testimonial_category_labels,
		'show_ui'           	=> true,
		'show_admin_column' 	=> true,
		'show_in_nav_menus' 	=> true,
		'query_var'         	=> true,
		'rewrite'           	=> array( 'with_front' => false, 'slug' => 'testimonial-categories' ),
	);
	
	if( ! taxonomy_exists( 'testimonial_categories' ) ) {
		register_taxonomy( 'testimonial_categories', 'zozo_testimonial', $testimonial_category_args );
	}
	
	$team_labels = array(
		'name' 					=> esc_html__( 'Team Member', 'tranzlogistics' ),
		'singular_name' 		=> esc_html__( 'Team Member', 'tranzlogistics' ),
		'add_new' 				=> esc_html__( 'Add New', 'tranzlogistics' ),
		'add_new_item' 			=> esc_html__( 'Add New Member', 'tranzlogistics' ),
		'edit_item' 			=> esc_html__( 'Edit Member', 'tranzlogistics' ),
		'new_item' 				=> esc_html__( 'New Member', 'tranzlogistics' ),
		'all_items' 			=> esc_html__( 'Team Members', 'tranzlogistics' ),
		'view_item' 			=> esc_html__( 'View Members', 'tranzlogistics' ),
		'search_items' 			=> esc_html__( 'Search Members', 'tranzlogistics' ),
		'not_found' 			=> esc_html__( 'No Members found', 'tranzlogistics' ),
		'not_found_in_trash' 	=> esc_html__( 'No Members found in Trash', 'tranzlogistics' ), 
		'parent_item_colon' 	=> ''
	);
	
	$team_args = array(
		'labels' 				=> $team_labels,
		
		'menu_icon'             => 'dashicons-groups',
		'public' 				=> true,
		'publicly_queryable' 	=> true,
		'show_ui' 				=> true,
		'show_in_menu'       	=> true,
		'query_var' 			=> true,
		'rewrite' 				=> array( 'with_front' => false, 'slug' => 'team' ),
		'capability_type' 		=> 'post',
		'hierarchical' 			=> false,
		'has_archive' 			=> false,
		'exclude_from_search' 	=> true,
		'supports' 				=> array( 'title', 'thumbnail', 'editor' )
	);
	
	if( ! post_type_exists('zozo_team_member') ) {
		register_post_type( 'zozo_team_member', $team_args );
	}
		
	$team_category_labels = array(
		'name'              	=> esc_html__( 'Categories', 'tranzlogistics' ),
		'singular_name'     	=> esc_html__( 'Category', 'tranzlogistics' ),
		'search_items'      	=> esc_html__( 'Search Categories', 'tranzlogistics' ),
		'all_items'         	=> esc_html__( 'All Categories', 'tranzlogistics' ),
		'parent_item'       	=> esc_html__( 'Parent Category', 'tranzlogistics' ),
		'parent_item_colon' 	=> esc_html__( 'Parent Category:', 'tranzlogistics' ),
		'edit_item'         	=> esc_html__( 'Edit Category', 'tranzlogistics' ),
		'update_item'       	=> esc_html__( 'Update Category', 'tranzlogistics' ),
		'add_new_item'      	=> esc_html__( 'Add New Category', 'tranzlogistics' ),
		'new_item_name'     	=> esc_html__( 'New Category Name', 'tranzlogistics' ),
		'menu_name'         	=> esc_html__( 'Categories', 'tranzlogistics' ),
	);
	$team_category_args = array(
		'hierarchical'      	=> true,
		'labels'            	=> $team_category_labels,
		'show_ui'           	=> true,
		'show_admin_column' 	=> true,
		'show_in_nav_menus' 	=> true,
		'query_var'         	=> true,
		'rewrite'           	=> array( 'with_front' => false, 'slug' => 'team-groups' ),
	);
	
	if( ! taxonomy_exists( 'team_categories' ) ) {
		register_taxonomy( 'team_categories', 'zozo_team_member', $team_category_args );
	}
	
}
add_action( 'init', 'zozo_register_post_types', 5 );
/**
 * Include Tweet Plugin
 */
if ( ! function_exists( 'tranzlogistics_include_tweet_php' ) ) {
	function tranzlogistics_include_tweet_php() {
		require_once TRANZLOGISTICS_CORE_DIR . '/plugins/tweet-php/TweetPHP.php';
	}
}
/* =================================================================
 * Add [year] shortcode to display current year
 * ================================================================= */
 
if ( ! function_exists( 'zozo_year_shortcode' ) ) { 
 
	function zozo_year_shortcode() {
		$year = date('Y');
		return $year;
	}
}
add_shortcode('year', 'zozo_year_shortcode');
/*===================================================================================
 * Add Author Links
 * =================================================================================*/
function tranzlogistics_add_to_author_profile( $contactmethods ) {
	
	$contactmethods['google_profile'] = 'Google Profile URL';
	$contactmethods['twitter_profile'] = 'Twitter Profile URL';
	$contactmethods['facebook_profile'] = 'Facebook Profile URL';
	$contactmethods['linkedin_profile'] = 'Linkedin Profile URL';
	
	return $contactmethods;
}
add_filter( 'user_contactmethods', 'tranzlogistics_add_to_author_profile', 10, 1);

/* =================================================================
 * Open Graph Meta Tags
 * ================================================================= */
$zozo_options = get_option( 'zozo_options' );
if( isset( $zozo_options['zozo_disable_opengraph'] ) && $zozo_options['zozo_disable_opengraph'] != 1 ) {

	function tranzlogistics_add_opengraph_doctype( $output ) {
		return $output . ' prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb#"';
	}
	add_filter( 'language_attributes', 'tranzlogistics_add_opengraph_doctype' );
	
	function tranzlogistics_insert_og_meta_tags() {
		global $post;

		if( ! is_singular() )
			return;
			
		$excerpt = '';	
	    $content = $post->post_content;
		
		$excerpt = strip_tags( trim( preg_replace( '|\[(.+?)\](.+?\[/\\1\])?|s', '', $content ) ) );
		if( function_exists( 'mb_strimwidth' ) ) {
			$excerpt = mb_strimwidth( $excerpt, 0, 100, '...' );
		}
		
		$zozo_options = get_option( 'zozo_options' );
		$logo = $zozo_options['zozo_logo'];
		
		echo sprintf( '<meta property="og:title" content="%s" />', strip_tags( str_replace( array( '"', "'" ), array( '&quot;', '&#39;' ), $post->post_title ) ) ) . "\n";
		echo '<meta property="og:type" content="article" />' . "\n";
		echo sprintf( '<meta property="og:url" content="%s" />', get_permalink() ) . "\n";
		echo sprintf( '<meta property="og:site_name" content="%s" />', get_bloginfo('name') ) . "\n";
		echo sprintf( '<meta property="og:description" content="%s" />', $excerpt ) . "\n";
		if( ! has_post_thumbnail( $post->ID ) ) {
			if( $logo['url'] ) {
				echo sprintf( '<meta property="og:image" content="%s" />', $logo['url'] ) . "\n";
			}
		} else if( has_post_thumbnail( $post->ID ) ) {
			$thumbnail_src = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'full' );
			if( ! empty ( $thumbnail_src ) ) {
				echo sprintf( '<meta property="og:image" content="%s" />', esc_attr( $thumbnail_src[0] ) ) . "\n";
			}
		}
	}
	
	add_action( 'wp_head', 'tranzlogistics_insert_og_meta_tags', 5 );
}

/* ==================================================================
 *	Visual Composer Custom CSS Fix for Woocommerce Shop Page
 * ================================================================== */
function tranzlogistics_vc_shortcode_customcss_for_shop() {
	if( is_shop() ) {
		$post_id = get_option('woocommerce_shop_page_id');
		
		if ( $post_id ) {
			$shortcodes_custom_css = get_post_meta( $post_id, '_wpb_shortcodes_custom_css', true );
			if ( ! empty( $shortcodes_custom_css ) ) {
				$shortcodes_custom_css = strip_tags( $shortcodes_custom_css );
				echo '<style type="text/css" data-type="shop-vc_shortcodes-custom-css">'. $shortcodes_custom_css .'</style>';
			}
		}
	}
}

if( class_exists('WooCommerce') ) {
	add_action( 'wp_head', 'tranzlogistics_vc_shortcode_customcss_for_shop', 1000 );
}

/* =========================================================
 * Register Additional Image field For Post Categories
 * ========================================================= */

if ( ! function_exists( 'tranzlogistics_category_taxonomy_add_meta_fields' ) ) {
	function tranzlogistics_category_taxonomy_add_meta_fields() {	?>	
		<div class="form-field">
			<label for="zozo_cat_thumbnail_image"><?php esc_html_e( 'Category Image', 'tranzlogistics' ); ?></label>
			<div class="zozo_cat_img_field">				
				<input type="text" class="media_field" id="zozo_cat_thumbnail_image" name="zozo_cat_thumbnail_image" value="" />
				<button type="button" class="zozo_img_upload_button btn"><?php esc_html_e( 'Upload/Add image', 'tranzlogistics' ); ?></button>
				<button type="button" class="zozo_img_remove_button btn"><?php esc_html_e( 'Remove image', 'tranzlogistics' ); ?></button>
			</div>					
			<p class="description"><?php esc_html_e( 'Select an image to list categories with images', 'tranzlogistics' ); ?></p>
			<?php wp_enqueue_media(); ?>
			<script type="text/javascript">

				// Only show remove button when needed
				if ( ! jQuery('#zozo_cat_thumbnail_image').val() ) {
					 jQuery('.zozo_img_remove_button').hide();
				}

				// Uploading files
				var file_frame;

				jQuery(document).on( 'click', '.zozo_img_upload_button', function( event ){

					event.preventDefault();

					// If the media frame already exists, reopen it.
					if ( file_frame ) {
						file_frame.open();
						return;
					}
					
					// Create the media frame.
					file_frame = wp.media.frames.file_frame = wp.media({
						title: '<?php esc_html_e( 'Select image', 'tranzlogistics' ); ?>',
						button: {
							text: '<?php esc_html_e( 'Upload image', 'tranzlogistics' ); ?>',
						},
						multiple: false
					});

					// When an image is selected, run a callback.
					file_frame.on( 'select', function() {
						attachment = file_frame.state().get('selection').first().toJSON();
						
						jQuery('#zozo_cat_thumbnail_image').val( attachment.url );
						jQuery('.zozo_img_remove_button').show();
					});
					
					// Finally, open the modal.
					if( file_frame ) {
						file_frame.open();
					}
					
				});

				jQuery(document).on( 'click', '.zozo_img_remove_button', function( event ){					
					jQuery(this).parent('.zozo_cat_img_field').find('#zozo_cat_thumbnail_image').attr('value', '');
					jQuery(this).parent('.zozo_cat_img_field').find('.zozo_img_remove_button').hide();
					return false;
				});
			</script>
		</div>		
	<?php
	}
}
add_action( 'category_add_form_fields', 'tranzlogistics_category_taxonomy_add_meta_fields', 10, 2 );

if ( ! function_exists( 'tranzlogistics_category_taxonomy_edit_meta_fields' ) ) {
	function tranzlogistics_category_taxonomy_edit_meta_fields($term) {
	 
		// put the term ID into a variable
		$term_id = $term->term_id;
	 
		// retrieve the existing value(s) for this meta field. This returns an array
		$term_meta = get_option( "taxonomy_$term_id" ); ?>
		<tr class="form-field">
			<th scope="row" valign="top"><label for="zozo_cat_thumbnail_image"><?php esc_html_e( 'Category Image', 'tranzlogistics' ); ?></label></th>
			<td>
				<div class="zozo_cat_img_field">				
					<input type="text" class="media_field" id="zozo_cat_thumbnail_image" name="zozo_cat_thumbnail_image" value="<?php echo esc_url($term_meta['zozo_thumbnail_image']); ?>" />
					<button type="button" class="zozo_img_upload_button btn"><?php esc_html_e( 'Upload/Add image', 'tranzlogistics' ); ?></button>
					<button type="button" class="zozo_img_remove_button btn"><?php esc_html_e( 'Remove image', 'tranzlogistics' ); ?></button>
				</div>					
				<p class="description"><?php esc_html_e( 'Select an image to list categories with images', 'tranzlogistics' ); ?></p>
				<?php wp_enqueue_media(); ?>
				<script type="text/javascript">

					// Only show remove button when needed
					if ( ! jQuery('#zozo_cat_thumbnail_image').val() ) {
						 jQuery('.zozo_img_remove_button').hide();
					}
	
					// Uploading files
					var file_frame;
	
					jQuery(document).on( 'click', '.zozo_img_upload_button', function( event ){
	
						event.preventDefault();
	
						// If the media frame already exists, reopen it.
						if ( file_frame ) {
							file_frame.open();
							return;
						}
						
						// Create the media frame.
						file_frame = wp.media.frames.file_frame = wp.media({
							title: '<?php esc_html_e( 'Select image', 'tranzlogistics' ); ?>',
							button: {
								text: '<?php esc_html_e( 'Upload image', 'tranzlogistics' ); ?>',
							},						
							multiple: false
						});
	
						// When an image is selected, run a callback.
						file_frame.on( 'select', function() {
							attachment = file_frame.state().get('selection').first().toJSON();
							
							jQuery('#zozo_cat_thumbnail_image').val( attachment.url );
							jQuery('.zozo_img_remove_button').show();
						});
						
						// Finally, open the modal.
						if( file_frame ) {
							file_frame.open();
						}
						
					});
	
					jQuery(document).on( 'click', '.zozo_img_remove_button', function( event ){					
						jQuery(this).parent('.zozo_cat_img_field').find('#zozo_cat_thumbnail_image').attr('value', '');
						jQuery(this).parent('.zozo_cat_img_field').find('.zozo_img_remove_button').hide();
						return false;
					});
				</script>
			</td>
		</tr>	
	<?php
	}
}
add_action( 'category_edit_form_fields', 'tranzlogistics_category_taxonomy_edit_meta_fields', 10, 2 );

if ( ! function_exists( 'tranzlogistics_save_category_taxonomy_custom_meta' ) ) {
	function tranzlogistics_save_category_taxonomy_custom_meta( $term_id ) {
	
		if( isset( $_POST['zozo_cat_thumbnail_image'] ) ) {
			$zozo_term_id = $term_id;
			$term_meta = '';
			$term_meta = get_option( "taxonomy_$zozo_term_id" );
			if( isset( $term_meta ) && $term_meta == '' ) {
				$term_meta = array();
			}
			$term_meta['zozo_thumbnail_image'] = $_POST['zozo_cat_thumbnail_image'];
			
			// Save the option array.
			update_option( "taxonomy_$zozo_term_id", $term_meta );
		}
		
	}
}
add_action( 'edited_category', 'tranzlogistics_save_category_taxonomy_custom_meta', 10, 2 );  
add_action( 'create_category', 'tranzlogistics_save_category_taxonomy_custom_meta', 10, 2 );


/**
 * Visual Composer Shortcodes
 */
$apl = get_option('active_plugins');
if ( in_array("js_composer/js_composer.php", $apl) ){

	add_shortcode( 'zozo_vc_blog', 'tranzlogistics_vc_blog_shortcode' );
	add_shortcode( 'zozo_vc_circle_counter', 'tranzlogistics_vc_circle_counter_shortcode' );
	add_shortcode( 'zozo_vc_clients_slider', 'tranzlogistics_vc_clients_slider_shortcode' );	
	add_shortcode( 'zozo_vc_contact_info', 'tranzlogistics_vc_contact_info_shortcode' );
	add_shortcode( 'zozo_vc_content_carousel', 'tranzlogistics_vc_content_carousel_shortcode' );
	add_shortcode( 'zozo_vc_counters', 'tranzlogistics_vc_counters_shortcode' );
	add_shortcode( 'zozo_vc_day_counter', 'tranzlogistics_vc_day_counter_shortcode' );
	add_shortcode( 'zozo_vc_edd_list', 'tranzlogistics_vc_edd_list_shortcode' );
	add_shortcode( 'zozo_vc_events_list', 'tranzlogistics_vc_events_list_shortcode' );
	add_shortcode( 'zozo_vc_feature_box', 'tranzlogistics_vc_feature_box_shortcode' );
	add_shortcode( 'zozo_vc_google_map', 'tranzlogistics_vc_google_map_shortcode' );
	add_shortcode( 'zozo_vc_icons', 'tranzlogistics_vc_icons_shortcode' );
	add_shortcode( 'zozo_vc_latest_posts', 'tranzlogistics_vc_latest_posts_shortcode' );
	add_shortcode( 'zozo_vc_list_item', 'tranzlogistics_vc_list_item_shortcode' );
	add_shortcode( 'zozo_vc_mailchimp_form', 'tranzlogistics_vc_mailchimp_form_shortcode' );
	add_shortcode( 'zozo_vc_modal', 'tranzlogistics_vc_modal_box_shortcode' );
	add_shortcode( 'zozo_vc_pricing_table', 'tranzlogistics_vc_pricing_table_shortcode' );
	add_shortcode( 'zozo_vc_search_form', 'tranzlogistics_vc_search_form_shortcode' );
	add_shortcode( 'zozo_vc_section_title', 'tranzlogistics_vc_section_title_shortcode' );
	add_shortcode( 'zozo_vc_service_box', 'tranzlogistics_vc_service_box_shortcode' );
	add_shortcode( 'zozo_vc_services_grid', 'tranzlogistics_vc_services_grid_shortcode' );
	add_shortcode( 'zozo_vc_portfolio_grid', 'tranzlogistics_vc_portfolio_grid_shortcode' );
	add_shortcode( 'zozo_vc_portfolio_slider', 'tranzlogistics_vc_portfolio_slider_shortcode' );
	add_shortcode( 'zozo_vc_woo_product_slider', 'tranzlogistics_vc_woo_product_slider_shortcode' );
	
	add_shortcode( 'zozo_vc_casestudies_grid', 'tranzlogistics_vc_casestudies_grid_shortcode' );
	
	add_shortcode( 'zozo_vc_event_grid', 'tranzlogistics_vc_event_grid_shortcode' );
	add_shortcode( 'zozo_vc_team_grid', 'tranzlogistics_vc_team_grid_shortcode' );
	add_shortcode( 'zozo_vc_team_list', 'tranzlogistics_vc_team_list_shortcode' );
	add_shortcode( 'zozo_vc_team_slider', 'tranzlogistics_vc_team_slider_shortcode' );
	add_shortcode( 'zozo_vc_testimonials_grid', 'tranzlogistics_vc_testimonials_grid_shortcode' );
	add_shortcode( 'zozo_vc_testimonials_slider', 'tranzlogistics_vc_testimonials_slider_shortcode' );
	add_shortcode( 'zozo_vc_twitter_slider', 'tranzlogistics_vc_twitter_slider_shortcode' );
	add_shortcode( 'zozo_vc_contact_form', 'tranzlogistics_vc_contact_form_shortcode' );
}

//Get server details
function tranzlogistics_get_server_details( $str ){
	return $_SERVER[$str];
}