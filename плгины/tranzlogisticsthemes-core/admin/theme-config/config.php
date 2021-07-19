<?php
    /**
     * Theme Options Configuration File
     * For full documentation, please visit: http://docs.reduxframework.com/
     */
    if ( ! class_exists( 'Redux' ) ) {
        return;
    }
    // This is your option name where all the Redux data is stored.
    $opt_name = "zozo_options";
    /**
     * ---> SET ARGUMENTS
     * All the possible arguments for Redux.
     * For full documentation on arguments, please refer to: https://github.com/ReduxFramework/ReduxFramework/wiki/Arguments
     * */
    $theme = wp_get_theme(); // For use with some settings. Not necessary.
    $args = array(
        // TYPICAL -> Change these values as you need/desire
        'opt_name'             => $opt_name,
        // This is where your data is stored in the database and also becomes your global variable name.
        'display_name'         => $theme->get('Name') . ' ' . esc_html__('Options', 'tranzlogistics'),
        // Name that appears at the top of your panel
        'display_version'      => $theme->get( 'Version' ),
        // Version that appears at the top of your panel
        'menu_type'            => 'menu',
        //Specify if the admin menu should appear or not. Options: menu or submenu (Under appearance only)
        'allow_sub_menu'       => true,
        // Show the sections below the admin menu item or not
        'menu_title'           => esc_html__( 'Theme Options', 'tranzlogistics' ),
        'page_title'           => esc_html__( 'Theme Options', 'tranzlogistics' ),
        // You will need to generate a Google API key to use this feature.
        // Please visit: https://developers.google.com/fonts/docs/developer_api#Auth
        'google_api_key'       => 'AIzaSyAsd03TE8ZfcIrp1Lsr-GDGOk6284M4itY',
        // Set it you want google fonts to update weekly. A google_api_key value is required.
        'google_update_weekly' => true,
        // Must be defined to add google fonts to the typography module
        'async_typography'     => false,
        // Use a asynchronous font on the front end or font string
        'disable_google_fonts_link' => false,                    // Disable this in case you want to create your own google fonts loader
        'admin_bar'            => true,
        // Show the panel pages on the admin bar
        'admin_bar_icon'       => 'dashicons-admin-generic',
        // Choose an icon for the admin bar menu
        'admin_bar_priority'   => 50,
        // Choose an priority for the admin bar menu
        'global_variable'      => '',
        // Set a different name for your global variable other than the opt_name
        'dev_mode'             => false,
		//'forced_dev_mode_off'  => true,
        // Show the time the page took to load, etc
        'update_notice'        => false,
        // If dev_mode is enabled, will notify developer of updated versions available in the GitHub Repo
        'customizer'           => true,
        // Enable basic customizer support
        //'open_expanded'     => true,                    // Allow you to start the panel in an expanded way initially.
        //'disable_save_warn' => true,                    // Disable the save warning when a user changes a field
        // OPTIONAL -> Give you extra features
        'page_priority'        => 62,
        // Order where the menu appears in the admin area. If there is any conflict, something will not show. Warning.
        'page_parent'          => 'themes.php',
        // For a full list of options, visit: http://codex.wordpress.org/Function_Reference/add_submenu_page#Parameters
        'page_permissions'     => 'manage_options',
        // Permissions needed to access the options panel.
        'menu_icon'            => '',
        // Specify a custom URL to an icon
        'last_tab'             => '',
        // Force your panel to always open to a specific tab (by id)
        'page_icon'            => 'icon-themes',
        // Icon displayed in the admin panel next to your menu_title
        'page_slug'            => 'zozo_options',
        // Page slug used to denote the panel
        'save_defaults'        => true,
        // On load save the defaults to DB before user clicks save or not
        'default_show'         => false,
        // If true, shows the default value next to each field that is not the default value.
        'default_mark'         => '',
        // What to print by the field's title if the value shown is default. Suggested: *
        'show_import_export'   => true,
        // Shows the Import/Export panel when not used as a field.
        // CAREFUL -> These options are for advanced use only
        'transient_time'       => 60 * MINUTE_IN_SECONDS,
        'output'               => true,
        // Global shut-off for dynamic CSS output by the framework. Will also disable google fonts output
        'output_tag'           => true,
        // Allows dynamic CSS to be generated for customizer and google fonts, but stops the dynamic CSS from going to the head
        'footer_credit' 		=> '',                   // Disable the footer credit of Redux. Please leave if you can help it.
        // FUTURE -> Not in use yet, but reserved or partially implemented. Use at your own risk.
        'database'             => '',
        // possible: options, theme_mods, theme_mods_expanded, transient. Not fully functional, warning!
        'use_cdn'              => true,
        // If you prefer not to use the CDN for Select2, Ace Editor, and others, you may download the Redux Vendor Support plugin yourself and run locally or embed it in your code.
        //'compiler'             => true,
        // HINTS
        'hints'                => array(
            'icon'          => 'el el-question-sign',
            'icon_position' => 'right',
            'icon_color'    => 'lightgray',
            'icon_size'     => 'normal',
            'tip_style'     => array(
                'color'   => 'light',
                'shadow'  => true,
                'rounded' => false,
                'style'   => '',
            ),
            'tip_position'  => array(
                'my' => 'top left',
                'at' => 'bottom right',
            ),
            'tip_effect'    => array(
                'show' => array(
                    'effect'   => 'slide',
                    'duration' => '500',
                    'event'    => 'mouseover',
                ),
                'hide' => array(
                    'effect'   => 'slide',
                    'duration' => '500',
                    'event'    => 'click mouseleave',
                ),
            ),
        )
    );
    // ADMIN BAR LINKS -> Setup custom links in the admin bar menu as external items.
    $args['admin_bar_links'][] = array(
        'href'  => 'http://docs.zozothemes.com/tranzlogistics/',
        'title' => esc_html__( 'Documentation', 'tranzlogistics' ),
    );
    $args['admin_bar_links'][] = array(
        'href'  => 'https://zozothemes.ticksy.com/',
        'title' => esc_html__( 'Support', 'tranzlogistics' ),
    );
    // Panel Intro text -> before the form
    if ( ! isset( $args['global_variable'] ) || $args['global_variable'] !== false ) {
        if ( ! empty( $args['global_variable'] ) ) {
            $v = $args['global_variable'];
        } else {
            $v = str_replace( '-', '_', $args['opt_name'] );
        }
        $args['intro_text'] = sprintf( '<p>%1$s <strong>$%2$s</strong></p>', esc_html__( 'Did you know that Tranzlogistics Theme sets a global variable for you? To access any of your saved options from within your code you can use your global variable:', 'tranzlogistics' ), $v );
    } else {
        $args['intro_text'] = sprintf( '<p>%1$s</p>', esc_html__( 'This text is displayed above the options panel. It isn\'t required, but more info is always better! The intro_text field accepts all HTML.', 'tranzlogistics' ) );
    }
    // Add content after the form.
    $args['footer_text'] = '';
    Redux::setArgs( $opt_name, $args );
    /*
     * ---> END ARGUMENTS
     */
    /*
     * ---> START HELP TABS
     */
    $tabs = array(
        array(
            'id'      => 'redux-help-tab-1',
            'title'   => esc_html__( 'Theme Information 1', 'tranzlogistics' ),
            'content' => sprintf( '<p>%1$s</p>', esc_html__( 'This is the tab content, HTML is allowed.', 'tranzlogistics' ) )
        ),
        array(
            'id'      => 'redux-help-tab-2',
            'title'   => esc_html__( 'Theme Information 2', 'tranzlogistics' ),
            'content' => sprintf( '<p>%1$s</p>', esc_html__( 'This is the tab content, HTML is allowed.', 'tranzlogistics' ) )
        )
    );
    //Redux::setHelpTab( $opt_name, $tabs );
    // Set the help sidebar
    $content = sprintf( '<p>%1$s</p>', esc_html__( 'This is the sidebar content, HTML is allowed.', 'tranzlogistics' ) );
    //Redux::setHelpSidebar( $opt_name, $content );
    /*
     * <--- END HELP TABS
     */
    /*
     *
     * ---> START SECTIONS
     *
     */
    /*
        As of Redux 3.5+, there is an extensive API. This API can be used in a mix/match mode allowing for
     */
    // -> START General Settings
    Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'General', 'tranzlogistics' ),
        'id'     => 'general',
        'desc'   => '',
        'icon'   => 'el el-icon-dashboard',
        'fields' => array(
			array(
				'id'		=> 'zozo_disable_page_loader',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Page Loader', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_page_loader_img',
				'type' 		=> 'media',
				'url'		=> false,
				'readonly' 	=> false,
				'title' 	=> esc_html__('Custom Page Loader Image', 'tranzlogistics'),
				'desc'     	=> esc_html__( "Upload the custom page loader image.", "tranzlogistics" ),
				'required'  => array('zozo_disable_page_loader', 'equals', false),
			),
			array(
				'id'		=> 'zozo_enable_responsive',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Responsive Design', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_enable_rtl_mode',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable RTL Mode', 'tranzlogistics'),						
				'subtitle'  => esc_html__( "Enable this mode for right-to-left language mode.", "tranzlogistics" ),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			
			array(
				'id'		=> 'zozo_disable_opengraph',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Open Graph Meta Tags', 'tranzlogistics'),						
				'subtitle'  => esc_html__( "Disable open graph meta tags which is mainly used when sharing pages on social networking sites like Facebook.", "tranzlogistics" ),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
        )
    ) );
    // Logo
    Redux::setSection( $opt_name, array(
        'title' 	 => esc_html__('Logo', 'tranzlogistics'),
        'id'         => 'general-logo',
        'subsection' => true,
        'fields'     => array(
            array(
				'id'		=> 'zozo_logo',
				'type' 		=> 'media',
				'url'		=> false,
				'readonly' 	=> false,
				'title' 	=> esc_html__('Logo', 'tranzlogistics'),
				'desc'     	=> esc_html__( "Upload your website logo.", "tranzlogistics" ),
				'default' 	=> array(
					'url' 		=> TRANZLOGISTICS_THEME_URL . '',
					'width' 	=> '93',
					'height' 	=> '26'
				)
			),
			array(
				'id'		=> 'zozo_retina_logo',
				'type' 		=> 'media',
				'url'		=> false,
				'readonly' 	=> false,
				'title' 	=> esc_html__('Retina Logo', 'tranzlogistics'),
				'desc'     	=> esc_html__( "Upload the retina version of your logo.", "tranzlogistics" ),
			),
			array(
				'id'		=> 'zozo_logo_maxheight',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Logo Max Height', 'tranzlogistics'),
				'subtitle'  => esc_html__('This must be numeric (no px).', 'tranzlogistics'),
				'desc' 		=> esc_html__('You can set a max height for the logo here, and this will resize it on the front end if your logo image is bigger.', 'tranzlogistics'),
				'validate'  => 'numeric',
				'default'   => '100',
			),
			array(
				'id'       			=> 'zozo_logo_padding',
				'type'     			=> 'spacing',
				'mode'     			=> 'padding',
				'right'         	=> false,
				'left'          	=> false,
				'units'         	=> array( 'px' ),
				'units_extended'	=> 'false',
				'title'    			=> esc_html__( 'Logo Padding', 'tranzlogistics' ),
				'subtitle' 			=> esc_html__( 'Choose the spacing for logo.', 'tranzlogistics' ),
			),
			array(
				'id'			=> 'zozo_sticky_logo',
				'type' 			=> 'media',
				'url'			=> false,
				'readonly' 		=> false,
				'title' 		=> esc_html__('Sticky Header Logo', 'tranzlogistics'),
				'desc'     		=> esc_html__( "Upload your sticky header logo.", "tranzlogistics" ),
				'default' 		=> array(
					'url' 		=> TRANZLOGISTICS_THEME_URL . '',
					'width' 	=> '93',
					'height' 	=> '26'
				)
			),
			array(
				'id'       			=> 'zozo_sticky_logo_padding',
				'type'     			=> 'spacing',
				'mode'     			=> 'padding',
				'right'         	=> false,
				'left'          	=> false,
				'units'         	=> array( 'px' ),
				'units_extended'	=> 'false',
				'title'    			=> esc_html__( 'Sticky Logo Padding', 'tranzlogistics' ),
				'subtitle' 			=> esc_html__( 'Choose the spacing for sticky logo.', 'tranzlogistics' ),
			),
        )
    ) );
	
	// Icons
	if ( ! function_exists( 'wp_site_icon' ) ) {
			
	} else {
		Redux::setSection( $opt_name, array(
			'title' 	 => esc_html__('Icons', 'tranzlogistics'),
			'id'         => 'general-icons',
			'subsection' => true,
			'fields'     => array(
				array(
					'id'		=> 'icons_info',
					'type' 		=> 'info',
					'title' 	=> esc_html__('Please use "Site Icon" feature for adding favicon and other apple icons in "Appearance > Customize > Site Identity > Site Icon"', 'tranzlogistics'),
					'notice' 	=> false
				),
			)
		) );
	}
	
	// Mailchimp
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('API Keys & Message Text', 'tranzlogistics'),
		'id'         => 'general-apikeys',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_google_map_api',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Google Map API Key', 'tranzlogistics'),
				'desc' 		=> wp_kses( __( 'Enter your Google Map API key to use google map with your site. Please follow this <a href="https://developers.google.com/maps/documentation/javascript/get-api-key#get-an-api-key" target="_blank">link</a> to get API key.', 'tranzlogistics' ), tranzlogistics_expanded_allowed_tags() ),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_mailchimp_api',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Mailchimp API Key', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter your Mailchimp API key to get subscribers for your lists.', 'tranzlogistics'),
				'default' 	=> ""
			),			
			array(
				'id'		=> 'zozo_mailchimp_success_message_api',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Mailchimp Success Message', 'tranzlogistics'),
				'desc' 		=> esc_html__('Mailchimp Success Message Text.', 'tranzlogistics'),
				'default' 	=> esc_html__( 'Success. You receive confirmation email to subscribe into our mailing lists.', 'tranzlogistics' )			
			),			
			array(
				'id'		=> 'zozo_mailchimp_subscription_error_message_api',	
				'type'     	=> 'text',		
				'title' 	=> esc_html__('Mailchimp Subscription Error Message', 'tranzlogistics'),		
				'desc' 		=> esc_html__('Mailchimp Subscription Error Message Text.', 'tranzlogistics'),	
				'default' 	=> esc_html__( 'Sorry. You already subscribed into our mailing lists.', 'tranzlogistics' )			
			),	
			array(		
				'id'		=> 'zozo_mailchimp_error_message_api',		
				'type'     	=> 'text',		
				'title' 	=> esc_html__('Mailchimp Error Message', 'tranzlogistics'),					
				'desc' 		=> esc_html__('Mailchimp Error Message Text.', 'tranzlogistics'),			
				'default' 	=> "Error. Please try again."			
			),
		)
	) );
	
	// Custom CSS
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Custom CSS', 'tranzlogistics'),
		'id'         => 'general-customcss',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_custom_css',
				'type' 		=> 'ace_editor',
				'title' 	=> esc_html__('Custom CSS Code', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Paste your CSS code here.', 'tranzlogistics'),
				'mode' 		=> 'css',
				'theme' 	=> 'monokai',
				'default' 	=> ""
			),
		)
	) );
	
	// Maintenance Settings
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Maintenance', 'tranzlogistics' ),
        'id'     => 'maintenance',
        'desc'   => '',
        'icon'   => 'el el-icon-eye-close',
		'fields' => array(
			array(
				'id'		=> 'zozo_enable_maintenance',
				'type' 		=> 'button_set',
				'title' 	=> esc_html__('Enable Maintenance Mode', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Enable the themes maintenance mode.', 'tranzlogistics'),
				'options'  	=> array(
					'0' 	=> esc_html__('Off', 'tranzlogistics'),
					'1' 	=> esc_html__('On ( Standard )', 'tranzlogistics'),
					'2' 	=> esc_html__('On ( Custom Page )', 'tranzlogistics'),
				),
				'default'  => '0'
			),
			array(
				'id'		=> 'zozo_maintenance_mode_page',
				'type' 		=> 'select',
				'data' 		=> 'pages',
				'title' 	=> esc_html__('Custom Maintenance Mode Page', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Select the page that is your maintenance page, if you would like to show a custom page instead of the standard page from theme. You should use the Maintenance Page template for this page.', 'tranzlogistics'),
				'required'  => array('zozo_enable_maintenance', '=', '2'),
				'default' 	=> '',
				'args' 		=> array()
			),
			array(
				'id'		=> 'zozo_enable_coming_soon',
				'type' 		=> 'button_set',
				'title' 	=> esc_html__('Enable Coming Soon Mode', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Enable the themes coming soon mode.', 'tranzlogistics'),
				'options'  	=> array(
					'0' 	=> esc_html__('Off', 'tranzlogistics'),
					'1' 	=> esc_html__('On ( Standard )', 'tranzlogistics'),
					'2' 	=> esc_html__('On ( Custom Page )', 'tranzlogistics'),
				),
				'default'  => '0'
			),
			array(
				'id'		=> 'zozo_coming_soon_page',
				'type' 		=> 'select',
				'data' 		=> 'pages',
				'title' 	=> esc_html__('Custom Coming Soon Page', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Select the page that is your coming soon page, if you would like to show a custom page instead of the standard page from theme. You should use the Maintenance Page template for this page.', 'tranzlogistics'),
				'required'  => array('zozo_enable_coming_soon', '=', '2'),
				'default' 	=> '',
				'args' 		=> array()
			),
		)
	) );
	
	// Layout Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Layout', 'tranzlogistics' ),
        'id'     => 'layout',
        'desc'   => '',
        'icon'   => 'el el-icon-view-mode',
		'fields' => array(
			array(
				'id'		=> 'zozo_theme_layout',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Theme Layout', 'tranzlogistics'),
				'options' 	=> array(
					'fullwidth' => array('alt' => esc_html__('Full Width', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/full-width.jpg'),
					'boxed' 	=> array('alt' => esc_html__('Boxed', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/boxed.jpg'),
					'wide' 		=> array('alt' => esc_html__('Wide', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/wide.jpg'),
				),
				'default' 	=> 'fullwidth'
			),
			array(
				'id'		=> 'zozo_layout',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Page Layout', 'tranzlogistics'),
				'options' 	=> array(
					'one-col' 			=> array('alt' => esc_html__('Full width', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/one-col.png'),
					'two-col-right' 	=> array('alt' => esc_html__('Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-right.png'),
					'two-col-left' 		=> array('alt' => esc_html__('Left Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-left.png'),
					'three-col-middle' 	=> array('alt' => esc_html__('Left and Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-middle.png'),
					'three-col-right' 	=> array('alt' => esc_html__('Two Right Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-right.png'),
					'three-col-left' 	=> array('alt' => esc_html__('Two Left Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-left.png'),
				),
				'default' 	=> 'one-col'
			),
			array(
				'id'            => 'zozo_fullwidth_site_width',
				'type'          => 'slider',
				'title'         => esc_html__( 'Container Max Width', 'tranzlogistics' ),
				'subtitle'      => esc_html__( 'Please choose container maximum width for fullwidth layout', 'tranzlogistics' ),
				'default'       => 1200,
				'min'           => 1100,
				'step'          => 5,
				'max'           => 1600,
				'required' 		=> array('zozo_theme_layout', 'equals', 'fullwidth'),
				'display_value' => 'text'
			),
			array(
				'id'            => 'zozo_boxed_site_width',
				'type'          => 'slider',
				'title'         => esc_html__( 'Container Max Width', 'tranzlogistics' ),
				'subtitle'      => esc_html__( 'Please choose container maximum width for boxed layout', 'tranzlogistics' ),
				'default'       => 1200,
				'min'           => 1100,
				'step'          => 5,
				'max'           => 1600,
				'required' 		=> array('zozo_theme_layout', 'equals', 'boxed'),
				'display_value' => 'text'
			),
		)
	) );
	
	// Header Settings
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Header', 'tranzlogistics' ),
        'id'     => 'header',
        'desc'   => '',
        'icon'   => 'el el-icon-website',
		'fields' => array(
			array(
				'id'		=> 'zozo_header_layout',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Header Layout', 'tranzlogistics'),
				'options'  	=> array(
					'fullwidth'	=> esc_html__( 'Full Width', 'tranzlogistics' ),
					'wide'		=> esc_html__( 'Wide', 'tranzlogistics' ),
					'boxed'		=> esc_html__( 'Boxed', 'tranzlogistics' ),
				),
				'default' 	=> 'fullwidth'
			),
			array(
				'id'		=> 'zozo_enable_header_top_bar',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Header Top Bar', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sticky_header',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Sticky Header', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'       => 'enable_sticky_header_hide',
				'type'     => 'button_set',
				'title'    => esc_html__( 'Sticky header show/hide', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Enable the sticky header to hide once scrolled 800px down the page, and show on scroll up.', 'tranzlogistics' ),
				'desc'     => '',
				'options'  => array( '1' => esc_html__( 'On', 'tranzlogistics' ), '0' => esc_html__( 'Off', 'tranzlogistics' ) ),
				'required' => array('zozo_sticky_header', 'equals', true),
				'default'  => '0'
			),
		)
	) );
	
	// Header Type
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Header Type', 'tranzlogistics'),
		'id'         => 'header-headertype',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_header_skin',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Header Skin', 'tranzlogistics'),
				'options'  	=> array(
					'light'		=> esc_html__( 'Light', 'tranzlogistics' ),
					'dark'		=> esc_html__( 'Dark', 'tranzlogistics' ),
				),
				'default' 	=> 'dark'
			),
			array(
				'id'		=> 'zozo_header_transparency',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Header Transparency', 'tranzlogistics'),
				'options'  	=> array(
					'no-transparent'	=> esc_html__( 'No Transparency', 'tranzlogistics' ),
					'transparent'		=> esc_html__( 'Transparent', 'tranzlogistics' ),
					'semi-transparent'	=> esc_html__( 'Semi Transparent', 'tranzlogistics' ),
				),
				'default' 	=> 'no-transparent'
			),
			array(
				'id'		=> 'zozo_header_menu_skin',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Header Menu Skin', 'tranzlogistics'),
				'options'  	=> array(
					'default'			=> esc_html__( 'Default', 'tranzlogistics' ),
					'light'				=> esc_html__( 'Light', 'tranzlogistics' ),
					'dark'				=> esc_html__( 'Dark', 'tranzlogistics' ),
					'semi-transparent'	=> esc_html__( 'Semi Transparent', 'tranzlogistics' ),
				),
				'default' 	=> 'default'
			),
			array(
				'id'		=> 'zozo_header_search_type',
				'type' 		=> 'button_set',
				'title' 	=> esc_html__('Header Search Type', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Choose search style mode in header.', 'tranzlogistics'),
				'options'  	=> array(
					'0' 	=> esc_html__('Standard', 'tranzlogistics'),
					'1' 	=> esc_html__('Toggle', 'tranzlogistics'),
					'2' 	=> esc_html__('Fullscreen', 'tranzlogistics'),
				),
				'default'  => '1'
			),
			array(
				'id'		=> 'zozo_search_placeholder',
				'type'     	=> 'text',
				'title' 	=> __('Search Placeholder', 'tranzlogistics'),
				'desc' 		=> __('Enter placeholder text for search box', 'tranzlogistics'),
				'default' 	=> __('Search..', 'tranzlogistics')
			),
			array(
				'id'		=> 'zozo_header_type',
				'type' 		=> 'image_select',
				'full_width'=> true,
				'title' 	=> esc_html__('Header Type', 'tranzlogistics'),
				'options' 	=> array(
					'header-1' 			=> array('alt' => esc_html__('Default Header', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/headers/header-01.jpg'),					
					'header-3' 			=> array('alt' => esc_html__('Header Center Logo', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/headers/header-03.jpg'),					
					'header-7' 			=> array('alt' => esc_html__('Header Centered Logo', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/headers/header-05.jpg'),					
					'header-11' 		=> array('alt' => esc_html__('Header Style 2', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/headers/header-07.jpg'),
				),
				'default' 	=> 'header-11'
			),
			// Header 1
			array(
				'id'       => 'zozo_header_1_elements_config',
				'type'     => 'sorter',
				'title'    => esc_html__( 'Header Elements Config', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose the elements for the header area for Header 1. You can drag the items between enabled/disabled and also order them as you like.', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-1' )),
				'options'  => array(
					'enabled'  => array(
						'primary-menu'		=> esc_html__( 'Primary Menu', 'tranzlogistics' ),
						'cart-icon'         => esc_html__( 'Cart', 'tranzlogistics' ),
						'search-icon'		=> esc_html__( 'Search', 'tranzlogistics' ),												
					),
					'disabled' => array(
						'social-icons'		=> esc_html__( 'Social Icons', 'tranzlogistics' ),						
						'contact-info'		=> esc_html__( 'Contact Info', 'tranzlogistics' ),
						'text-shortcode'	=> esc_html__( 'Text/Shortcode', 'tranzlogistics' ),
						'address-info'		=> esc_html__( 'Address / Store Hours', 'tranzlogistics' ),
						
					),
				),
			),
			array(
				'id'		=> 'zozo_header_1_elements_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Header Text', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'You can use any shortcodes to set text on Header when you have the config above set to Text/Shortcode', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-1' )),
				'default' 	=> esc_html__('Header Text', 'tranzlogistics'),				
			),
			
			// Header 3
			array(
				'id'       => 'zozo_header_3_elements_config',
				'type'     => 'sorter',
				'title'    => esc_html__( 'Header Elements Config', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose the elements for the header area for Header 3. You can drag the items between enabled/disabled and also order them as you like.', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-3' )),
				'options'  => array(
					'enabled'  => array(
						'primary-menu'		=> esc_html__( 'Primary Menu', 'tranzlogistics' ),
						'search-icon'		=> esc_html__( 'Search', 'tranzlogistics' ),						
					),
					'disabled' => array(
						'cart-icon'         => esc_html__( 'Cart', 'tranzlogistics' ),
						'social-icons'		=> esc_html__( 'Social Icons', 'tranzlogistics' ),
						'contact-info'		=> esc_html__( 'Contact Info', 'tranzlogistics' ),
						'address-info'		=> esc_html__( 'Address / Store Hours', 'tranzlogistics' ),
						'text-shortcode'	=> esc_html__( 'Text/Shortcode', 'tranzlogistics' ),
					),
				),
			),
			array(
				'id'		=> 'zozo_header_3_elements_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Header Text', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'You can use any shortcodes to set text on Header when you have the config above set to Text/Shortcode', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-3' )),
				'default' 	=> esc_html__('Header Text', 'tranzlogistics'),
			),			
			
			
			// Header 11
			array(
				'id'       => 'zozo_header_11_logo_bar_config',
				'type'     => 'sorter',
				'title'    => 'Header Logo Bar Right Config',
				'subtitle' => esc_html__( 'Choose the elements for the header logo bar right area for Header 11. You can drag the items between enabled/disabled and also order them as you like.', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-11' )),
				'options'  => array(
					'enabled'  => array(
						'address-info'		=> esc_html__( 'Address / Store Hours', 'tranzlogistics' ),
					),
					'disabled' => array(						
						'cart-icon'         => esc_html__( 'Cart', 'tranzlogistics' ),
						'primary-menu'		=> esc_html__( 'Primary Menu', 'tranzlogistics' ),
						'social-icons'		=> esc_html__( 'Social Icons', 'tranzlogistics' ),
						'contact-info'		=> esc_html__( 'Contact Info', 'tranzlogistics' ),						
						'search-icon'		=> esc_html__( 'Search', 'tranzlogistics' ),
						'text-shortcode'	=> esc_html__( 'Text/Shortcode', 'tranzlogistics' ),
					),
				),
			),
			array(
				'id'		=> 'zozo_header_11_logo_bar_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Header Logo Bar Text', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'You can use any shortcodes to set text on Logo Bar Header when you have the config above set to Text/Shortcode', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-11' )),
				'default' 	=> esc_html__('Header Logo Bar Text', 'tranzlogistics'),
			),
			array(
				'id'       => 'zozo_header_11_left_config',
				'type'     => 'sorter',
				'title'    => 'Header Left Config',
				'subtitle' => esc_html__( 'Choose the elements for the header left area for Header 11. You can drag the items between enabled/disabled and also order them as you like.', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-11' )),
				'options'  => array(
					'enabled'  => array(
						'primary-menu'		=> esc_html__( 'Primary Menu', 'tranzlogistics' ),
					),
					'disabled' => array(
						'cart-icon'			=> esc_html__( 'Cart', 'tranzlogistics' ),
						'search-icon'		=> esc_html__( 'Search', 'tranzlogistics' ),						
						'social-icons'		=> esc_html__( 'Social Icons', 'tranzlogistics' ),
						'contact-info'		=> esc_html__( 'Contact Info', 'tranzlogistics' ),
						'address-info'		=> esc_html__( 'Address / Store Hours', 'tranzlogistics' ),
						'text-shortcode'	=> esc_html__( 'Text/Shortcode', 'tranzlogistics' ),
					),
				),
			),
			array(
				'id'		=> 'zozo_header_11_left_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Header Left Text', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'You can use any shortcodes to set text on Header when you have the left config above set to Text/Shortcode', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-11' )),
				'default' 	=> esc_html__('Header Left Text', 'tranzlogistics'),
			),
			array(
				'id'       => 'zozo_header_11_right_config',
				'type'     => 'sorter',
				'title'    => 'Header Right Config',
				'subtitle' => esc_html__( 'Choose the elements for the header right area for Header 11. You can drag the items between enabled/disabled and also order them as you like.', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-11' )),
				'options'  => array(
					'enabled'  => array(
						'social-icons'		=> esc_html__( 'Social Icons', 'tranzlogistics' ),
						'cart-icon'			=> esc_html__( 'Cart', 'tranzlogistics' ),
						'search-icon'		=> esc_html__( 'Search', 'tranzlogistics' ),
					),
					'disabled' => array(						
						'primary-menu'		=> esc_html__( 'Primary Menu', 'tranzlogistics' ),
						'contact-info'		=> esc_html__( 'Contact Info', 'tranzlogistics' ),
						'address-info'		=> esc_html__( 'Address / Store Hours', 'tranzlogistics' ),
						'text-shortcode'	=> esc_html__( 'Text/Shortcode', 'tranzlogistics' ),
					),
				),
			),
			array(
				'id'		=> 'zozo_header_11_right_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Header Right Text', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'You can use any shortcodes to set text on Header when you have the right config above set to Text/Shortcode', 'tranzlogistics' ),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-11' )),
				'default' 	=> esc_html__('Header Right Text', 'tranzlogistics'),
			),
			
			
			
			array(
				'id'		=> 'zozo_slider_position',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Slider Position', 'tranzlogistics'),
				'required' 	=> array('zozo_header_type', 'equals', array( 'header-1','header-3','header-7' )),
				'options'  	=> array(
					'below'		=> esc_html__( 'Below Header', 'tranzlogistics' ),
					'above'		=> esc_html__( 'Above Header', 'tranzlogistics' ),
				),
				'default' 	=> 'below'
			),			
		)
	) );
	
	// Header Top Bar
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Header Top Bar', 'tranzlogistics'),
		'id'         => 'header-headertopbar',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'zozo_header_top_bar_left',
				'type'     => 'sorter',
				'title'    => esc_html__( 'Header Top Bar Left Config', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose the config for the header top bar left area', 'tranzlogistics' ),
				'required' => array('zozo_enable_header_top_bar', 'equals', true),
				'options'  => array(
					'enabled'  => array(
						'contact-info'		=> esc_html__( 'Contact Info', 'tranzlogistics' ),
					),
					'disabled' => array(
						'text-shortcode'	=> esc_html__( 'Text/Shortcode', 'tranzlogistics' ),
						'social-icons'		=> esc_html__( 'Social Icons', 'tranzlogistics' ),
						'search-icon'		=> esc_html__( 'Search', 'tranzlogistics' ),
						'top-menu'			=> esc_html__( 'Top Menu', 'tranzlogistics' ),						
						'welcome-msg'		=> esc_html__( 'Welcome Message', 'tranzlogistics' ),
					),
				),
			),
			array(
				'id'		=> 'zozo_header_top_bar_left_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Top Bar Left Text', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'You can use any shortcodes to set text on Top Bar when you have the left config above set to Text/Shortcode', 'tranzlogistics' ),
				'default' 	=> esc_html__('Top Bar Left Text', 'tranzlogistics'),
			),
			array(
				'id'       => 'zozo_header_top_bar_right',
				'type'     => 'sorter',
				'title'    => esc_html__( 'Header Top Bar Right Config', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose the config for the header top bar right area', 'tranzlogistics' ),
				'required' => array('zozo_enable_header_top_bar', 'equals', true),
				'options'  => array(
					'enabled'  => array(
						'social-icons'		=> esc_html__( 'Social Icons', 'tranzlogistics' ),
					),
					'disabled' => array(
						'contact-info'		=> esc_html__( 'Contact Info', 'tranzlogistics' ),
						'search-icon'		=> esc_html__( 'Search', 'tranzlogistics' ),
						'top-menu'			=> esc_html__( 'Top Menu', 'tranzlogistics' ),						
						'welcome-msg'		=> esc_html__( 'Welcome Message', 'tranzlogistics' ),
						'text-shortcode'	=> esc_html__( 'Text/Shortcode', 'tranzlogistics' ),
					),
				),
			),
			array(
				'id'		=> 'zozo_header_top_bar_right_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Top Bar Right Text', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'You can use any shortcodes to set text on Top Bar when you have the right config above set to Text/Shortcode', 'tranzlogistics' ),
				'default' 	=> esc_html__('Top Bar Right Text', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_welcome_msg',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Welcome Message', 'tranzlogistics'),
				'desc' 		=> '',
				'default' 	=> esc_html__("Welcome to Tranzlogistics", "tranzlogistics"),
			),
			array(
				'id'		=> 'zozo_header_phone',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Header Phone Number', 'tranzlogistics'),
				'desc' 		=> esc_html__('Phone number will display in the contact info section.', 'tranzlogistics'),
				'default' 	=> "+12 123 456 789"
			),
			array(
				'id'		=> 'zozo_header_email',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Header Email Address', 'tranzlogistics'),
				'desc' 		=> esc_html__('Email address will display in the contact info section.', 'tranzlogistics'),
				'default' 	=> "info@yoursite.com"
			),
			array(
				'id'       => 'zozo_header_address',
				'type'     => 'textarea',
				'title'    => esc_html__( 'Address', 'tranzlogistics' ),
				'default'  => '<strong>One Canada Square, </strong><span>Canary Wharf, United Kingdom.</span>'
			),
			array(
				'id'       => 'zozo_header_business_hours',
				'type'     => 'textarea',
				'title'    => esc_html__( 'Business Hours', 'tranzlogistics' ),
				'default'  => '<strong>Monday-Friday: 9am to 5pm </strong><span>Saturday / Sunday: Closed</span>'
			),
		)
	) );
	
	// Header Styling Options
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Styling', 'tranzlogistics'),
		'id'         => 'header-styling',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       			=> 'zozo_header_spacing',
				'type'     			=> 'spacing',
				'mode'     			=> 'padding',
				'units'         	=> array( 'em', 'px', '%' ),
				'units_extended'	=> 'true',
				'title'    			=> esc_html__( 'Header Padding', 'tranzlogistics' ),
				'subtitle' 			=> esc_html__( 'Choose the spacing for header.', 'tranzlogistics' ),
			),
		)
	) );
	
	// Header Menu Options
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Main Menu', 'tranzlogistics'),
		'id'         => 'header-mainmenu',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       	=> 'zozo_menu_type',
				'type'     	=> 'select',
				'title'    	=> esc_html__( 'Menu Type', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Please select menu type.', 'tranzlogistics' ),
				'options'  	=> array(
					'standard'		=> esc_html__( 'Standard Menu', 'tranzlogistics' ),
					'megamenu'		=> esc_html__( 'Mega Menu', 'tranzlogistics' ),
				),
				'default'  	=> 'megamenu'
			),
			array(
				'id'		=> 'zozo_menu_separator',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Menu Separator', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'       	=> 'zozo_dropdown_menu_skin',
				'type'     	=> 'select',
				'title'    	=> esc_html__( 'Dropdown Menu Skin', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Please select dropdown menu skin type.', 'tranzlogistics' ),
				'options'  	=> array(
					'light'		=> esc_html__( 'Light', 'tranzlogistics' ),
					'dark'		=> esc_html__( 'Dark', 'tranzlogistics' ),
				),
				'default'  	=> 'light'
			),
			array(
				'id'             => 'zozo_dropdown_menu_width',
				'type'           => 'dimensions',
				'units'          => array( 'em', 'px', '%' ),
				'units_extended' => 'true',
				'title'          => esc_html__( 'Dropdown Menu Width ( Only Standard Mode )', 'tranzlogistics' ),
				'subtitle'       => esc_html__( 'Enter dropdown menu width for standard mode.', 'tranzlogistics' ),
				'height'         => false,
				'default'        => array(
					'width'  => 220,
					'units'  => 'px',
				)
			),
			array(
				'id'             => 'zozo_menu_height',
				'type'           => 'dimensions',
				'units'          => 'px',
				'units_extended' => 'false',

				'title'          => esc_html__( 'Main Menu Height', 'tranzlogistics' ),
				'subtitle'       => esc_html__( 'Enter main menu height.', 'tranzlogistics' ),
				'width'         => false,
				'default'        => array(
					'height'  => 80,
					'units'   => 'px',
				)
			),
			array(
				'id'             => 'zozo_sticky_menu_height',
				'type'           => 'dimensions',
				'units'          => 'px',
				'units_extended' => 'false',
				'title'          => esc_html__( 'Sticky Main Menu Height', 'tranzlogistics' ),
				'subtitle'       => esc_html__( 'Enter main menu height in sticky.', 'tranzlogistics' ),
				'width'         => false,
				'default'        => array(
					'height'  => 60,
					'units'   => 'px',
				)
			),
			array(
				'id'		=> 'menu_height',
				'type' 		=> 'info',
				'title' 	=> esc_html__('If Header Type 4, 5, 6, 11', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'             => 'zozo_logo_bar_height',
				'type'           => 'dimensions',
				'units'          => 'px',
				'units_extended' => 'false',
				'title'          => esc_html__( 'Logo Bar Height', 'tranzlogistics' ),
				'subtitle'       => esc_html__( 'Enter logo bar height.', 'tranzlogistics' ),
				'width'         => false,
				'default'        => array(
					'height'  => 76,
					'units'   => 'px',
				)
			),
			array(
				'id'             => 'zozo_menu_height_alt',
				'type'           => 'dimensions',
				'units'          => 'px',
				'units_extended' => 'false',
				'title'          => esc_html__( 'Main Menu Height', 'tranzlogistics' ),
				'subtitle'       => esc_html__( 'Enter main menu height.', 'tranzlogistics' ),
				'width'         => false,
				'default'        => array(
					'height'  => 60,
					'units'   => 'px',
				)
			),
			array(
				'id'             => 'zozo_sticky_menu_height_alt',
				'type'           => 'dimensions',
				'units'          => 'px',
				'units_extended' => 'false',
				'title'          => esc_html__( 'Sticky Main Menu Height', 'tranzlogistics' ),
				'subtitle'       => esc_html__( 'Enter main menu height in sticky.', 'tranzlogistics' ),
				'width'         => false,
				'default'        => array(
					'height'  => 60,
					'units'   => 'px',
				)
			),
		)
	) );

	
	// Mobile Header Settings
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Mobile Header', 'tranzlogistics' ),
        'id'     => 'mobile-header',
        'desc'   => '',
        'icon'   => 'el el-icon-iphone-home',
		'fields' => array(
			array(
				'id'		=> 'mobile_logo',
				'type' 		=> 'media',
				'url'		=> false,
				'readonly' 	=> false,
				'title' 	=> esc_html__('Mobile Logo', 'tranzlogistics'),
				'desc'     	=> esc_html__( "Upload an image or insert an image url to use for the mobile logo.", "tranzlogistics" ),
				'default' 	=> array(
					'url' 		=> '',
					'width' 	=> '',
					'height' 	=> ''
				)
			),
			array(
				'id' 		=> 'mobile_header_visible',
				'type' 		=> 'select',
				'title' 	=> esc_html__('Mobile Header Visiblity', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Select at what screen size the main header is replaced by the mobile header.', 'tranzlogistics'),
				'options' 	=> array(
					'tablet-land'	=> esc_html__( 'Tablet (Landscape)', 'tranzlogistics' ),
					'tablet-port'	=> esc_html__( 'Tablet (Portrait)', 'tranzlogistics' ),
					'mobile'  		=> esc_html__( 'Mobile', 'tranzlogistics' ),
				),
				'default' 	=> 'tablet-land'
			),
			array(
				'id'		=> 'sticky_mobile_header',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Mobile Sticky Header', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'       	=> 'mobile_header_layout',
				'type'     	=> 'select',
				'title'    	=> esc_html__( 'Mobile Header Layout', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Choose the config for the layout of the mobile header.', 'tranzlogistics' ),
				'options'  	=> array(
					'left-logo'			=> esc_html__( 'Left Logo', 'tranzlogistics' ),
					'right-logo'		=> esc_html__( 'Right Logo', 'tranzlogistics' ),
					'center-logo'  		=> esc_html__( 'Center Logo (Menu Left)', 'tranzlogistics' ),
					'center-logo-alt'  	=> esc_html__( 'Center Logo (Menu Right)', 'tranzlogistics' ),
				),
				'default'  	=> 'left-logo'
			),
			array(
				'id'		=> 'mobile_top_text',
				'type'     	=> 'textarea',
				'title' 	=> esc_html__('Mobile Top Bar Text', 'tranzlogistics'),
				'subtitle' 	=> esc_html__( 'You can use any shortcodes or text to show above mobile header', 'tranzlogistics' ),
				'desc' 		=> esc_html__( 'Leave blank to hide.', 'tranzlogistics' ),
				'default' 	=> '',
			),
			array(
				'id'		=> 'mobile_show_search',
				'type' 		=> 'button_set',
				'title' 	=> esc_html__('Enable search box', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Check this to show the search box in the mobile header.', 'tranzlogistics'),
				'options'  	=> array(
					'1' 	=> esc_html__('On', 'tranzlogistics'),
					'0' 	=> esc_html__('Off', 'tranzlogistics'),
				),
				'default'  => '1'
			),
			array(
				'id'		=> 'mobile_show_translation',
				'type' 		=> 'button_set',
				'title' 	=> esc_html__('Enable translation options', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Check this to show the translation options in the mobile header. NOTE: WPML plugin is required for this.', 'tranzlogistics'),
				'options'  	=> array(
					'1' 	=> esc_html__('On', 'tranzlogistics'),
					'0' 	=> esc_html__('Off', 'tranzlogistics'),
				),
				'default'  => '0'
			),
			array(
				'id'		=> 'mobile_social_icons',
				'type' 		=> 'button_set',
				'title' 	=> esc_html__('Enable mobile social icons', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Enable yes to show social icons on mobile menu warpper.', 'tranzlogistics'),
				'options'  	=> array(
					'1' 	=> esc_html__('On', 'tranzlogistics'),
					'0' 	=> esc_html__('Off', 'tranzlogistics'),
				),
				'default'  => '1'
			),
		)
	) );
	
		// Page Title Bar Settings
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Page Title Bar', 'tranzlogistics' ),
        'id'     => 'page-title-bar',
        'desc'   => '',
        'icon'   => 'el el-icon-indent-left',
		'fields' => array(
			array(
				'id'		=> 'zozo_enable_breadcrumbs',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Breadcrumbs', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			
			array(
				'id'		=> 'zozo_enable_page_title_bar',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Page Title Bar', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			
			array(
				'id'		=> 'zozo_enable_page_title',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Page Title', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		
			array(
					'id'       	=> 'zozo_page_title_bar_type_new',
					'type'     	=> 'select',
					'title'    	=> esc_html__( 'Page Title Bar Type', 'tranzlogistics' ),
					'subtitle' 	=> esc_html__( 'Choose Page Title Bar Type.', 'tranzlogistics' ),					
					'options'  	=> array(
						'default'		=> esc_html__( 'Default', 'tranzlogistics' ),
						'mini'		=> esc_html__( 'Mini', 'tranzlogistics' ),
					),
					'default'  	=> 'default'
				),
				
			array(
					'id'       	=> 'zozo_page_title_bar_skin_new',
					'type'     	=> 'select',
					'title'    	=> esc_html__( 'Page Title Bar Skin', 'tranzlogistics' ),
					'subtitle' 	=> esc_html__( 'Choose Page Title Bar Skin.', 'tranzlogistics' ),					
					'options'  	=> array(
						'default'		=> esc_html__( 'Default', 'tranzlogistics' ),
						'dark'		=> esc_html__( 'Dark', 'tranzlogistics' ),
					),
					'default'  	=> 'default'
				),
				
			array(
					'id'       	=> 'zozo_page_title_alignment_new',
					'type'     	=> 'select',
					'title'    	=> esc_html__( 'Page Title Alignment', 'tranzlogistics' ),
					'subtitle' 	=> esc_html__( 'Choose Page Title Alignment.', 'tranzlogistics' ),					
					'options'  	=> array(
						'default'		=> esc_html__( 'Default', 'tranzlogistics' ),
						'right'		=> esc_html__( 'Right', 'tranzlogistics' ),
						
						'center'		=> esc_html__( 'Center', 'tranzlogistics' ),
					),
					'default'  	=> 'default'
				),	
				
			array(
				'id'		=> 'zozo_page_title_bar_height',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Page Title Bar Height', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'Enter the height of the page title bar. In pixels ex: 120px.', 'tranzlogistics' ),
				'default' 	=> ""
			),
			
			array(
				'id'		=> 'zozo_page_title_bar_mobile_height',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Page Title Bar Mobile Height', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'Enter the height of the page title bar on mobile. In pixels ex: 120px.', 'tranzlogistics' ),
				'default' 	=> ""
			),
			
			array(
				'id'       		=> 'zozo_page_title_color',
				'type'     		=> 'color',
				'title'    		=> esc_html__( 'Title Color', 'tranzlogistics' ),
				'validate' 		=> 'color',
				'transparent' 	=> false,
			),	
			
			array(
				'id'       		=> 'zozo_page_title_breadcrumbs_color',
				'type'     		=> 'color',
				'title'    		=> esc_html__( 'Breadcrumbs Color', 'tranzlogistics' ),
				'validate' 		=> 'color',
				'transparent' 	=> false,
			),
			
			array(
				'id'       		=> 'zozo_page_title_border_color',
				'type'     		=> 'color',
				'title'    		=> esc_html__( 'Border Color', 'tranzlogistics' ),
				'validate' 		=> 'color',
				'transparent' 	=> false,
			),
			
			array(
				'id'       		=> 'zozo_page_title_background_color',
				'type'     		=> 'color',
				'title'    		=> esc_html__( 'Background Color', 'tranzlogistics' ),
				'validate' 		=> 'color',
				'transparent' 	=> false,
			),
			
			array(
				'id'		=> 'zozo_page_title_background_image',
				'type' 		=> 'media',
				'url'		=> false,
				'readonly' 	=> false,
				'title' 	=> esc_html__('Background Image', 'tranzlogistics'),
				'desc'     	=> esc_html__( "Upload your background image.", "tranzlogistics" ),
			),
			
			array(
					'id'       	=> 'zozo_page_title_background_image_repeat',
					'type'     	=> 'select',
					'title'    	=> esc_html__( 'Background Repeat', 'tranzlogistics' ),										
					'options'  	=> array(
						'repeat'		=> esc_html__( 'Repeat', 'tranzlogistics' ),
						'repeat-x'		=> esc_html__( 'Repeat-x', 'tranzlogistics' ),
						
						'repeat-y'		=> esc_html__( 'Repeat-y', 'tranzlogistics' ),
						
						'no-repeat'		=> esc_html__( 'No Repeat', 'tranzlogistics' ),
					),
					'default'  	=> 'repeat'
				),	
				
			array(
					'id'       	=> 'zozo_page_title_background_position',
					'type'     	=> 'select',
					'title'    	=> esc_html__( 'Background Position', 'tranzlogistics' ),										
					'options'  	=> array(
						'left top'		=> esc_html__( 'Left Top', 'tranzlogistics' ),
						'left center'		=> esc_html__( 'Left Center', 'tranzlogistics' ),
						
						'left bottom'		=> esc_html__( 'Left Bottom', 'tranzlogistics' ),
						
						'center top'		=> esc_html__( 'Center Top', 'tranzlogistics' ),
						'center center'		=> esc_html__( 'Center Center', 'tranzlogistics' ),
						
						'center bottom'		=> esc_html__( 'Center Bottom', 'tranzlogistics' ),
						
						'right top'		=> esc_html__( 'Right Top', 'tranzlogistics' ),
						'right center'		=> esc_html__( 'Right Center', 'tranzlogistics' ),
						
						'right bottom'		=> esc_html__( 'Right Bottom', 'tranzlogistics' ),
					),
					'default'  	=> 'left top'
				),	
				
				array(
				'id'		=> 'zozo_page_title_parallax_bg_image',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Parallax Background Image', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			    ),
				
				array(
				'id'		=> 'zozo_page_title_scale_bg_image',
				'type' 		=> 'checkbox',
				'title' 	=> esc_html__('100% Scale Background Image', 'tranzlogistics'),
				'default' 	=> '0',				
			    ),
				
				array(
				'id'		=> 'zozo_page_title_video_bg',
				'type' 		=> 'checkbox',
				'title' 	=> esc_html__('Enable Video Background ?', 'tranzlogistics'),
				'default' 	=> '0',				
			    ),
				
				array(
				'id'		=> 'zozo_page_title_video_bg_id',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Video ID', 'tranzlogistics'),
				'desc' 		=> esc_html__( 'Enter video id. ex:GHRv565gfg', 'tranzlogistics' ),
				'default' 	=> ""
			),		
					
		)
	) );
	
	
	// Footer Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Footer', 'tranzlogistics' ),
        'id'     => 'footer',
        'desc'   => '',
        'icon'   => 'el el-icon-website',
		'fields' => array(
			array(
				'id'		=> 'zozo_copyright_bar_enable',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Copyright Bar', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'       => 'zozo_copyright_text',
				'type'     => 'textarea',
				'title'    => esc_html__( 'Copyright Text', 'tranzlogistics' ),
				'desc'     => esc_html__( 'Enter an copyright text to show on footer. Use [year] shortcode to display current year.', 'tranzlogistics' ),				
				'default'  => sprintf( wp_kses( __( 'Designed by <a href="%s">zozothemes.com</a>', 'tranzlogistics' ), array(  'a' => array( 'href' => array() ) ) ), esc_url( "http://themes.zozothemes.com/" ) )
			),
			array(
				'id'		=> 'zozo_footer_widgets_enable',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Footer Widgets', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_enable_back_to_top',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Back To Top', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'       	=> 'zozo_back_to_top_position',
				'type'     	=> 'select',
				'title'    	=> esc_html__( 'Back To Top Position', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Choose Back To Top position in footer.', 'tranzlogistics' ),
				'required' 	=> array('zozo_enable_back_to_top', 'equals', true),
				'options'  	=> array(
					'floating_bar'		=> esc_html__( 'Floating Style', 'tranzlogistics' ),
					'footer_top'		=> esc_html__( 'In Footer Top', 'tranzlogistics' ),
				),
				'default'  	=> 'floating_bar'
			),
			array(
				'id'		=> 'zozo_enable_footer_menu',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Footer Menu', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Footer Type
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Footer Type', 'tranzlogistics'),
		'id'         => 'footer-footertype',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_footer_copyright_align',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Footer Copyright Bar Align', 'tranzlogistics'),
				'options'  	=> array(
					'left'		=> esc_html__( 'Left', 'tranzlogistics' ),
					'center'	=> esc_html__( 'Center', 'tranzlogistics' ),
				),
				'default' 	=> 'left'
			),
			array(
				'id'		=> 'zozo_footer_skin',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Footer Skin', 'tranzlogistics'),
				'options'  	=> array(
					'light'		=> esc_html__( 'Light', 'tranzlogistics' ),
					'dark'		=> esc_html__( 'Dark', 'tranzlogistics' ),
				),
				'default' 	=> 'dark'
			),
			array(
				'id'		=> 'zozo_footer_style',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Footer Style', 'tranzlogistics'),
				'options'  	=> array(
					'default'	=> esc_html__( 'Normal', 'tranzlogistics' ),
					'sticky'	=> esc_html__( 'Sticky', 'tranzlogistics' ),					
				),
				'default' 	=> 'default'
			),
			array(
				'id'		=> 'zozo_footer_type',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Footer Type', 'tranzlogistics'),
				'options' 	=> array(
					'footer-1' 			=> array('alt' => esc_html__('Default Footer', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-01.jpg'),
					'footer-2' 			=> array('alt' => esc_html__('Footer 3 Column', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-02.jpg'),
					'footer-3' 			=> array('alt' => esc_html__('Footer 3 Column Centered', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-03.jpg'),
					'footer-8' 			=> array('alt' => esc_html__('Footer 3 Column Alt', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-08.jpg'),
					'footer-4' 			=> array('alt' => esc_html__('Footer 2 Column', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-04.jpg'),
					'footer-5' 			=> array('alt' => esc_html__('Footer 2 Column Large', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-05.jpg'),
					'footer-6' 			=> array('alt' => esc_html__('Footer 2 Column Large', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-06.jpg'),							
					'footer-7' 			=> array('alt' => esc_html__('Footer One Column', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/footers/footer-07.jpg'),
				),
				'default' 	=> 'footer-1'
			),
		)
	) );
	
	// Footer Styling Options
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Styling', 'tranzlogistics'),
		'id'         => 'footer-styling',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       			=> 'zozo_footer_spacing',
				'type'     			=> 'spacing',
				'mode'     			=> 'padding',
				'units'         	=> array( 'em', 'px', '%' ),
				'units_extended'	=> 'true',
				'title'    			=> esc_html__( 'Footer Widgets Padding', 'tranzlogistics' ),
				'subtitle' 			=> esc_html__( 'Choose the spacing for footer widgets section.', 'tranzlogistics' ),
			),
			array(
				'id'       			=> 'zozo_footer_copyright_spacing',
				'type'     			=> 'spacing',
				'mode'     			=> 'padding',
				'units'         	=> array( 'em', 'px', '%' ),
				'units_extended'	=> 'true',
				'title'    			=> esc_html__( 'Footer Copyright Bar Padding', 'tranzlogistics' ),
				'subtitle' 			=> esc_html__( 'Choose the spacing for footer copyright bar.', 'tranzlogistics' ),
			),
		)
	) );
	
	// Typography Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Typography', 'tranzlogistics' ),
        'id'     => 'typography',
        'desc'   => '',
        'icon'   => 'el el-icon-text-height',
		'fields' => array(
			array(
				'id'       		=> 'zozo_body_font',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Body Font', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the body font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'font-weight'  	=> true,
				'font-style'  	=> false,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '15px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '400',
					'font-style'  => '',
					'line-height' => '28px',
				),
			),
			array(
				'id'       		=> 'zozo_h1_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'H1 Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the H1 font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '45px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '',
					'font-style'  => '',
					'line-height' => '42px',
				),
			),
			array(
				'id'       		=> 'zozo_h2_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'H2 Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the H2 font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '29px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '300',
					'font-style'  => '',
					'line-height' => '35px',
				),
			),
			array(
				'id'       		=> 'zozo_h3_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'H3 Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the H3 font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '22px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '',
					'font-style'  => '',
					'line-height' => '29px',
				),
			),
			array(
				'id'       		=> 'zozo_h4_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'H4 Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the H4 font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '20px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '',
					'font-style'  => '',
					'line-height' => '24px',
				),
			),
			array(
				'id'       		=> 'zozo_h5_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'H5 Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the H5 font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '17px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '',
					'font-style'  => '',
					'line-height' => '20px',
				),
			),
			array(
				'id'       		=> 'zozo_h6_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'H6 Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the H6 font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '14px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '',
					'font-style'  => '',
					'line-height' => '17px',
				),
			),
		)
	) );
	
	// Menu Typography
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Menu', 'tranzlogistics'),
		'id'         => 'typography-menu',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       		=> 'zozo_top_menu_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Top Menu Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Top menu font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '12px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '500',
					'font-style'  => '',
					'line-height' => '12px',
				),
			),
			array(
				'id'       		=> 'zozo_menu_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Main Menu Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Main menu font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'line-height'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '14px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '500',
					'font-style'  => '',
				),
			),
			array(
				'id'       		=> 'zozo_submenu_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Sub Menu Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Sub menu font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '14px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '500',
					'font-style'  => '',
					'line-height' => '20px',
				),
			),
		)
	) );
	
	// Title Typography
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Page/Post', 'tranzlogistics'),
		'id'         => 'typography-title',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       		=> 'zozo_single_post_title_fonts',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Page/Post Title Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Page/Post font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '25px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '300',
					'font-style'  => '',
					'line-height' => '35px',
				),
			),
			array(
				'id'       		=> 'zozo_post_title_font_styles',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Blog Archive Title Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Blog Archive Title font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '25px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '500',
					'font-style'  => '',
					'line-height' => '24px',
				),
			),
		)
	) );
	
	// Widgets Typography
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Widgets', 'tranzlogistics'),
		'id'         => 'typography-widgets',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       		=> 'zozo_widget_title_fonts',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Widget Title Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Widget Title font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '17px',
					'line-height' => '20px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '',
					'font-style'  => '',
				),
			),
			array(
				'id'       		=> 'zozo_widget_text_fonts',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Widget Text Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Widget Text font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '15px',
					'line-height' => '28px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '400',
					'font-style'  => '',
				),
			),
			array(
				'id'       		=> 'zozo_footer_widget_title_fonts',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Footer Widget Title Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Footer Widget Title font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '17px',
					'line-height' => '20px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '',
					'font-style'  => '',
				),
			),
			array(
				'id'       		=> 'zozo_footer_widget_text_fonts',
				'type'     		=> 'typography',
				'title'    		=> esc_html__( 'Footer Widget Text Font Style', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Footer Widget Text font properties.', 'tranzlogistics' ),
				'google'   		=> true,
				'subsets'  		=> true,
				'all_styles'  	=> true,
				'text-align'	=> false,
				'default'  		=> array(
					'color'       => '',
					'font-size'   => '15px',
					'line-height' => '28px',
					'font-family' => 'Roboto',
					'google'      => true,
					'font-weight' => '400',
					'font-style'  => '',
				),
			),
		)
	) );
	
	// Skin Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Skin', 'tranzlogistics' ),
        'id'     => 'skin',
        'desc'   => '',
        'icon'   => 'el el-icon-broom',
		'fields' => array(
			array(
				'id'		=> 'zozo_theme_skin',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Theme Skin', 'tranzlogistics'),
				'options'  	=> array(
					'light'		=> esc_html__( 'Light', 'tranzlogistics' ),
				),
				'default' 	=> 'light'
			),
			array(
				'id'       		=> 'zozo_custom_scheme_color',
				'type'     		=> 'color',
				'title'    		=> esc_html__( 'Custom Color Scheme', 'tranzlogistics' ),
				'validate' 		=> 'color',
				'transparent' 	=> false,
				'default' 	=> '#db0f31'
			),
			array(
				'id'       		=> 'zozo_custom_color_skin',
				'type'     		=> 'link_color',
				'title'    		=> esc_html__( 'Custom Color Skin', 'tranzlogistics' ),
				'subtitle' 		=> esc_html__( 'Specify the Color when Custom Color Scheme works as background color.', 'tranzlogistics' ),
				'active'   		=> false,
				'default'  		=> array(
					'regular' 	=> '',
					'hover'   	=> '',							
				)
			),
			array(
				'id'       => 'zozo_link_color',
				'type'     => 'link_color',
				'title'    => esc_html__( 'Link Color', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose link color.', 'tranzlogistics' ),
				'active'   => false,
				'default'  => array(
					'regular' => '#db0f31',
					'hover'   => '',
				)
			),
		)
	) );
	
	// Body/Page Background
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Body/Page', 'tranzlogistics'),
		'id'         => 'skin-bodypage',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       	=> 'zozo_body_bg_image',
				'type'     	=> 'background',
				'title'    	=> esc_html__( 'Body Background', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Body background with image, color, etc.', 'tranzlogistics' ),
			),
			array(
				'id'       	=> 'zozo_page_bg_image',
				'type'     	=> 'background',
				'title'    	=> esc_html__( 'Page Background', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Page background with image, color, etc.', 'tranzlogistics' ),
			),
		)
	) );
	
	// Header Background
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Header', 'tranzlogistics'),
		'id'         => 'skin-header',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       	=> 'zozo_header_bg_image',
				'type'     	=> 'background',
				'title'    	=> esc_html__( 'Header Background', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Header background with image, color, etc.', 'tranzlogistics' ),
				'default' 	=> ''
			),
			array(
				'id'       	=> 'zozo_sticky_bg_image',
				'type'     	=> 'background',
				'title'    	=> esc_html__( 'Sticky Background', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Sticky background with image, color, etc.', 'tranzlogistics' ),
				'default' 	=> ''
			),
			array(
				'id'       => 'zozo_header_top_background_color',
				'type'     => 'color',
				'title'    => esc_html__( 'Header Top Background Color', 'tranzlogistics' ),
				'default'  => '',
				'validate' => 'color',
			),
			array(
				'id'       => 'zozo_sliding_background_color',
				'type'     => 'color',
				'title'    => esc_html__( 'Sliding Bar Background Color', 'tranzlogistics' ),
				'default'  => '',
				'validate' => 'color',
			),
		)
	) );
	
	// Menu Background
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Menu', 'tranzlogistics'),
		'id'         => 'skin-menu',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'menu_hover',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Menu Hover Colors', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'       => 'zozo_top_menu_hcolor',
				'type'     => 'link_color',
				'title'    => esc_html__( 'Top Menu Link Color', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose Top Menu link hover color.', 'tranzlogistics' ),
				'regular'   => false,
				'active'   => false,
				'default'  => array(
					'hover'   => '',							
				)
			),
			array(
				'id'       => 'zozo_main_menu_hcolor',
				'type'     => 'link_color',
				'title'    => esc_html__( 'Main Menu Link Hover Color', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose Main Menu link hover color.', 'tranzlogistics' ),
				'regular'   => false,
				'active'   => false,
				'default'  => array(
					'hover'   => '',							
				)
			),
			array(
				'id'		=> 'submenu_hover',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Menu Dropdown', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_submenu_show_border',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Border', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id' 		=> 'zozo_main_submenu_border',
				'type' 		=> 'border',
				'all' 		=> false,
				'title' 	=> esc_html__( 'Dropdown Menu Border', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Enter border for menu dropdown.', 'tranzlogistics' ),
				'required' 	=> array('zozo_submenu_show_border', 'equals', true),
				'default' 	=> array(
					'border-color'  => '',
					'border-style'  => 'solid',
					'border-top'    => '3px',
					'border-right'  => '0px',
					'border-bottom' => '0px',
					'border-left'   => '0px'
				)
			),
			array(
				'id'       => 'zozo_submenu_bg_color',
				'type'     => 'color',
				'title'    => esc_html__( 'Background Color', 'tranzlogistics' ),
				'default'  => '#ffffff',
				'validate' => 'color',
			),
			array(
				'id'       => 'zozo_sub_menu_hcolor',
				'type'     => 'link_color',
				'title'    => esc_html__( 'Sub Menu Link Color', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose Sub Menu link hover color.', 'tranzlogistics' ),
				'regular'   => false,
				'active'   => false,
				'default'  => array(
					'hover'   => '',							
				)
			),
			array(
				'id'       => 'zozo_submenu_hbg_color',
				'type'     => 'color',
				'title'    => esc_html__( 'Link Hover Background Color', 'tranzlogistics' ),
				'default'  => '',
				'validate' => 'color',
			),
		)
	) );
	
	// Footer Background
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Footer', 'tranzlogistics'),
		'id'         => 'skin-footer',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       	=> 'zozo_footer_bg_image',
				'type'     	=> 'background',
				'title'    	=> esc_html__( 'Footer Background', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Footer background with image, color, etc.', 'tranzlogistics' ),
				'default'  => '',
			),
			array(
				'id'       	=> 'zozo_footer_copy_bg_image',
				'type'     	=> 'background',
				'title'    	=> esc_html__( 'Footer Copyright Background', 'tranzlogistics' ),
				'subtitle' 	=> esc_html__( 'Footer copyright bar background with image, color, etc.', 'tranzlogistics' ),
				'default'  => '',
			),
		)
	) );
	
	// Social Colors
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Social', 'tranzlogistics'),
		'id'         => 'skin-social',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'       => 'zozo_social_bg_color',
				'type'     => 'link_color',
				'title'    => esc_html__( 'Social Icon Background Color', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose Social Icon Background color and hover color.', 'tranzlogistics' ),
				'active'   => false,
				'default'  => array(
					'regular' => '',
					'hover'   => '',							
				)
			),
			array(
				'id'       => 'zozo_social_icon_color',
				'type'     => 'link_color',
				'title'    => esc_html__( 'Social Icon Color', 'tranzlogistics' ),
				'subtitle' => esc_html__( 'Choose Social Icon color and hover color.', 'tranzlogistics' ),
				'active'   => false,
				'default'  => array(
					'regular' => '',
					'hover'   => '',							
				)
			),
		)
	) );
	
	// Social Icons
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Social', 'tranzlogistics' ),
        'id'     => 'social',
        'desc'   => '',
        'icon'   => 'el el-icon-link',
		'fields' => array(
			array(
				'id'		=> 'zozo_social_icon_type',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Icon Type', 'tranzlogistics'),
				'options' 	=> array(
					'circle' 		=> array('alt' => esc_html__('Circle', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/circle-icon.jpg'),
					'flat' 			=> array('alt' => esc_html__('Square', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/flat-icon.jpg'),
					'rounded' 		=> array('alt' => esc_html__('Rounded', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/rounded-icon.jpg'),
					'transparent' 	=> array('alt' => esc_html__('Transparent', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/transparent-icon.jpg'),
				),
				'default' 	=> 'transparent'
			),
			array(
				'id'		=> 'zozo_facebook_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Facebook', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Facebook icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> "#"
			),
			array(
				'id'		=> 'zozo_twitter_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Twitter', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Twitter icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> "#"
			),
			array(
				'id'		=> 'zozo_linkedin_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('LinkedIn', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for LinkedIn icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> "#"
			),
			array(
				'id'		=> 'zozo_pinterest_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Pinterest', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Pinterest icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> "#"
			),
			array(
				'id'		=> 'zozo_googleplus_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Google Plus+', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Google Plus+ icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> "#"
			),
			array(
				'id'		=> 'zozo_youtube_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Youtube', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Youtube icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_rss_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('RSS', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for RSS icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_tumblr_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Tumblr', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Tumblr icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_reddit_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Reddit', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Reddit icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_dribbble_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Dribbble', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Dribbble icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_digg_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Digg', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Digg icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_flickr_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Flickr', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Flickr icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_instagram_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Instagram', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Instagram icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_vimeo_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Vimeo', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Vimeo icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_skype_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Skype', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Skype icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_blogger_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Blogger', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Blogger icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_yahoo_link',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Yahoo', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the link for Yahoo icon to appear. To remove it, just leave it blank.', 'tranzlogistics'),
				'default' 	=> ""
			),
		)
	) );
	
	// Portfolio
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Portfolio', 'tranzlogistics' ),
        'id'     => 'portfolio',
        'desc'   => '',
        'icon'   => 'el el-icon-picture',
		'fields' => array(
			array(
				'id'		=> 'zozo_portfolio_archive_count',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Number of Portfolio Items Per Page', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the number of posts to display per page in archive/category.', 'tranzlogistics'),
				'default' 	=> "10"
			),
			array(
				'id'		=> 'zozo_portfolio_archive_layout',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Portfolio Archive/Category Layout', 'tranzlogistics'),
				'options'  	=> array(
					'grid'		=> esc_html__( 'Grid', 'tranzlogistics' ),
					'classic'	=> esc_html__( 'Classic', 'tranzlogistics' ),
				),
				'default' 	=> 'grid'
			),
			array(
				'id'		=> 'zozo_portfolio_archive_columns',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Portfolio Columns', 'tranzlogistics'),
				'options'  	=> array(
					'2' 		=> esc_html__('2 Columns', 'tranzlogistics'),
					'3' 		=> esc_html__('3 Columns', 'tranzlogistics'),
					'4' 		=> esc_html__('4 Columns', 'tranzlogistics')
				),
				'default' 	=> '4'
			),
			array(
				'id'		=> 'zozo_portfolio_archive_gutter',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Portfolio Items Spacing', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter gap size between portfolio items. Only enter number Ex: 10', 'tranzlogistics'),
				'default' 	=> "30"
			),
			array(
				'id'		=> 'portfolio_details_text',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Portfolio Details', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_portfolio_category_label',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Category Label', 'tranzlogistics'),
				'desc' 		=> esc_html__('Change Category label to show in portfolio details.', 'tranzlogistics'),
				'default' 	=> esc_html__('Category:', 'tranzlogistics')
			),

			array(
				'id'		=> 'zozo_portfolio_tag_label',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Tag Label', 'tranzlogistics'),
				'desc' 		=> esc_html__('Change Tag label to show in portfolio details.', 'tranzlogistics'),
				'default' 	=> esc_html__('Tags:', 'tranzlogistics')
			),
			array(
				'id'		=> 'zozo_portfolio_client_label',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Client Label', 'tranzlogistics'),
				'desc' 		=> esc_html__('Change Client label to show in portfolio details.', 'tranzlogistics'),
				'default' 	=> esc_html__('Client:', 'tranzlogistics')
			),
			array(
				'id'		=> 'zozo_portfolio_date_label',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Date Label', 'tranzlogistics'),
				'desc' 		=> esc_html__('Change Date label to show in portfolio details.', 'tranzlogistics'),
				'default' 	=> esc_html__('Date:', 'tranzlogistics')
			),
			array(
				'id'		=> 'zozo_portfolio_estimation_label',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Estimation Label', 'tranzlogistics'),
				'desc' 		=> esc_html__('Change Estimation label to show in portfolio details.', 'tranzlogistics'),
				'default' 	=> esc_html__('Estimation:', 'tranzlogistics')
			),
			array(
				'id'		=> 'zozo_portfolio_duration_label',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Duration Label', 'tranzlogistics'),
				'desc' 		=> esc_html__('Change Duration label to show in portfolio details.', 'tranzlogistics'),
				'default' 	=> esc_html__('Duration:', 'tranzlogistics')
			),
			array(
				'id'		=> 'zozo_portfolio_prev_next',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Post Navigation', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_portfolio_related_slider',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Related Works Slider', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_portfolio_related_title',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Related Works Slider Title', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> "Related Projects"
			),
			array(
				'id'		=> 'zozo_portfolio_citems',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Display', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> "3"
			),
			array(
				'id'		=> 'zozo_portfolio_citems_scroll',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Scrollby', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_portfolio_ctablet',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Tablet', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> "2"
			),
			array(
				'id'		=> 'zozo_portfolio_cmobile_land',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Landscape', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_portfolio_cmobile',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Portrait', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_portfolio_cmargin',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Margin ( Items Spacing )', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> "20"
			),
			array(
				'id'		=> 'zozo_portfolio_cautoplay',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Autoplay', 'tranzlogistics'),
				'default' 	=> true,
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_portfolio_ctimeout',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Timeout Duration (in milliseconds)', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_cautoplay', 'equals', true),
				'default' 	=> "5000"
			),
			array(
				'id'		=> 'zozo_portfolio_cloop',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Infinite Loop', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_portfolio_cpagination',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Pagination', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_portfolio_cnavigation',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Navigation', 'tranzlogistics'),
				'required' 	=> array('zozo_portfolio_related_slider', 'equals', true),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Services
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Services', 'tranzlogistics' ),
        'id'     => 'services',
        'desc'   => '',
        'icon'   => 'el el-icon-star-empty',
		'fields' => array(
			array(
				'id'		=> 'zozo_service_archive_count',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Number of Service Items Per Page', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the number of posts to display per page in archive/category.', 'tranzlogistics'),
				'default' 	=> "10"
			),
			array(
				'id'		=> 'zozo_service_archive_columns',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Service Columns', 'tranzlogistics'),
				'options'  	=> array(
					'2' 		=> esc_html__('2 Columns', 'tranzlogistics'),
					'3' 		=> esc_html__('3 Columns', 'tranzlogistics'),
					'4' 		=> esc_html__('4 Columns', 'tranzlogistics')
				),
				'default' 	=> '4'
			),
			array(
				'id'		=> 'icons_service_info',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Services Slider Configuration', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_service_citems',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Display', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_service_citems_scroll',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Scrollby', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_service_ctablet',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Tablet', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_service_cmobile_land',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Landscape', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_service_cmobile',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Portrait', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_service_cmargin',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Margin ( Items Spacing )', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_service_cautoplay',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Autoplay', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_service_ctimeout',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Timeout Duration (in milliseconds)', 'tranzlogistics'),
				'default' 	=> "5000"
			),
			array(
				'id'		=> 'zozo_service_cloop',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Infinite Loop', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_service_cpagination',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Pagination', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_service_cnavigation',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Navigation', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Casestudies
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Case Studies', 'tranzlogistics' ),
        'id'     => 'casestudies',
        'desc'   => '',
        'icon'   => 'el el-icon-search-alt',
		'fields' => array(
			array(
				'id'		=> 'zozo_casestudy_archive_count',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Number of Case Study Items Per Page', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the number of posts to display per page in archive/category.', 'tranzlogistics'),
				'default' 	=> "10"
			),
			array(
				'id'		=> 'zozo_casestudy_archive_columns',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Case Study Columns', 'tranzlogistics'),
				'options'  	=> array(
					'2' 		=> esc_html__('2 Columns', 'tranzlogistics'),
					'3' 		=> esc_html__('3 Columns', 'tranzlogistics'),
					'4' 		=> esc_html__('4 Columns', 'tranzlogistics')
				),
				'default' 	=> '4'
			),
			array(
				'id'		=> 'icons_casestudy_info',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Case Studies Slider Configuration', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_casestudy_citems',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Display', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_casestudy_citems_scroll',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Scrollby', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_casestudy_ctablet',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Tablet', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_casestudy_cmobile_land',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Landscape', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_casestudy_cmobile',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Portrait', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_casestudy_cmargin',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Margin ( Items Spacing )', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_casestudy_cautoplay',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Autoplay', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_casestudy_ctimeout',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Timeout Duration (in milliseconds)', 'tranzlogistics'),
				'default' 	=> "5000"
			),
			array(
				'id'		=> 'zozo_casestudy_cloop',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Infinite Loop', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_casestudy_cpagination',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Pagination', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_casestudy_cnavigation',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Navigation', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	
	// Post
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Post', 'tranzlogistics' ),
        'id'     => 'post',
        'desc'   => '',
        'icon'   => 'el el-icon-file',
		'fields' => array(
			array(
				'id'		=> 'zozo_disable_blog_pagination',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Infinite Scroll', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_read_more_text',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Read More Button Text', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the custom read more button text.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'blog_excerpt_length',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Excerpt Length', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_blog_excerpt_length_large',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Large Layout', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the excerpt length for blog style large.', 'tranzlogistics'),
				'default' 	=> "80"
			),
			array(
				'id'		=> 'zozo_blog_excerpt_length_grid',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Grid Layout', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the excerpt length for blog style grid.', 'tranzlogistics'),
				'default' 	=> "10"
			),
			array(
				'id'		=> 'zozo_blog_excerpt_length_list',
				'type'     	=> 'text',
				'title' 	=> esc_html__('List Layout', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enter the excerpt length for blog style list.', 'tranzlogistics'),
				'default' 	=> "30"
			),
			array(
				'id'		=> 'gallery_slider',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Blog Gallery Slider', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_blog_slideshow_autoplay',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Autoplay for Gallery Slider', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_slideshow_timeout',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Timeout Duration (in milliseconds)', 'tranzlogistics'),
				'required' 	=> array('zozo_blog_slideshow_autoplay', 'equals', true),
				'default' 	=> "5000"
			),
			array(
				'id'		=> 'post_meta',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Blog Post Meta', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_blog_date_format',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Post Meta Date Format', 'tranzlogistics'),
				"desc" 		=> "Enter post meta date format. Refer formats from <a href='http://codex.wordpress.org/Formatting_Date_and_Time'>Formatting Date and Time</a>",
				'default' 	=> "d.m.Y"
			),
			array(
				'id'		=> 'zozo_blog_post_featured_image',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Post Featured Image', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_post_meta_author',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Post Meta Author', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_post_meta_date',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Post Meta Date', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_post_meta_categories',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Post Meta Categories', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_post_meta_comments',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Post Meta Comments', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_read_more',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Disable Read More Link', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Blog Archive
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Blog Archive', 'tranzlogistics'),
		'id'         => 'post-blogarchive',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_blog_archive_layout',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Archive Layout', 'tranzlogistics'),
				'options' 	=> array(
					'one-col' 			=> array('alt' => esc_html__('Full width', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/one-col.png'),
					'two-col-right' 	=> array('alt' => esc_html__('Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-right.png'),
					'two-col-left' 		=> array('alt' => esc_html__('Left Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-left.png'),
					'three-col-middle' 	=> array('alt' => esc_html__('Left and Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-middle.png'),
					'three-col-right' 	=> array('alt' => esc_html__('Two Right Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-right.png'),
					'three-col-left' 	=> array('alt' => esc_html__('Two Left Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-left.png'),
				),
				'default' 	=> 'two-col-right'
			),
			array(
				'id'		=> 'zozo_archive_blog_type',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Post Layout', 'tranzlogistics'),
				'options' 	=> array(
					'large' 	=> array('alt' => esc_html__('Large Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-large.jpg'),
					'list' 		=> array('alt' => esc_html__('List Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-list.jpg'),
					'grid' 		=> array('alt' => esc_html__('Grid Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-grid.jpg'),					
				),
				'default' 	=> 'large'
			),
			array(
				'id'		=> 'zozo_archive_blog_grid_columns',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Grid Columns', 'tranzlogistics'),
				'required' 	=> array('zozo_archive_blog_type', 'equals', 'grid'),
				'options'  	=> array(
					'two' 		=> esc_html__('2 Columns', 'tranzlogistics'),
					'three' 	=> esc_html__('3 Columns', 'tranzlogistics'),
					'four' 		=> esc_html__('4 Columns', 'tranzlogistics')
				),
				'default' 	=> 'two'
			),
			array(
				'id'		=> 'zozo_show_archive_featured_slider',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Featured Post Slider', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Blog
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Blog', 'tranzlogistics'),
		'id'         => 'post-blog',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_blog_page_title_bar',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Page title bar for Blog', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_title',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Blog Page Title', 'tranzlogistics'),	
				'desc' 		=> esc_html__('Blog Page Title for the main blog page.', 'tranzlogistics'),
				'default' 	=> "Our Blog"
			),
			array(
				'id'		=> 'zozo_blog_slogan',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Blog Page Slogan', 'tranzlogistics'),	
				'desc' 		=> esc_html__('Blog Page Slogan for the main blog page.', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_blog_layout',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Blog Layout', 'tranzlogistics'),
				'options' 	=> array(
					'one-col' 			=> array('alt' => esc_html__('Full width', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/one-col.png'),
					'two-col-right' 	=> array('alt' => esc_html__('Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-right.png'),
					'two-col-left' 		=> array('alt' => esc_html__('Left Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-left.png'),
					'three-col-middle' 	=> array('alt' => esc_html__('Left and Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-middle.png'),
					'three-col-right' 	=> array('alt' => esc_html__('Two Right Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-right.png'),
					'three-col-left' 	=> array('alt' => esc_html__('Two Left Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-left.png'),
				),
				'default' 	=> 'two-col-right'
			),
			array(
				'id'		=> 'zozo_blog_type',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Post Layout', 'tranzlogistics'),
				'options' 	=> array(
					'large' 	=> array('alt' => esc_html__('Large Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-large.jpg'),
					'list' 		=> array('alt' => esc_html__('List Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-list.jpg'),
					'grid' 		=> array('alt' => esc_html__('Grid Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-grid.jpg'),					
				),
				'default' 	=> 'large'
			),
			array(
				'id'		=> 'zozo_blog_grid_columns',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Grid Columns', 'tranzlogistics'),
				'required' 	=> array('zozo_blog_type', 'equals', 'grid'),
				'options'  	=> array(
					'two' 		=> esc_html__('2 Columns', 'tranzlogistics'),
					'three' 	=> esc_html__('3 Columns', 'tranzlogistics'),
					'four' 		=> esc_html__('4 Columns', 'tranzlogistics')
				),
				'default' 	=> 'two'
			),
			array(
				'id'		=> 'zozo_show_blog_featured_slider',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Featured Post Slider', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Single Post Layout
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Single Post', 'tranzlogistics'),
		'id'         => 'post-single',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_single_post_layout',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Single Post Layout', 'tranzlogistics'),
				'options' 	=> array(
					'one-col' 			=> array('alt' => esc_html__('Full width', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/one-col.png'),
					'two-col-right' 	=> array('alt' => esc_html__('Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-right.png'),
					'two-col-left' 		=> array('alt' => esc_html__('Left Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/two-col-left.png'),
					'three-col-middle' 	=> array('alt' => esc_html__('Left and Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-middle.png'),
					'three-col-right' 	=> array('alt' => esc_html__('Two Right Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-right.png'),
					'three-col-left' 	=> array('alt' => esc_html__('Two Left Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/three-col-left.png'),
				),
				'default' 	=> 'two-col-right'
			),
			array(
				'id'		=> 'zozo_blog_social_sharing',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Social Sharing', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_author_info',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Author Info', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_blog_comments',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Comments', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'related_post_slider',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Related Posts Slider', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_show_related_posts',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Related Posts', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_related_blog_items',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Display', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
				'default' 	=> "3"
			),
			array(
				'id'		=> 'zozo_related_blog_items_scroll',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Scrollby', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_related_blog_autoplay',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Auto Play', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
			),
			array(
				'id'		=> 'zozo_related_blog_timeout',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Timeout Duration (in milliseconds)', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
				'default' 	=> "5000"
			),
			array(
				'id'		=> 'zozo_related_blog_loop',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Infinite Loop', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
			),
			array(
				'id'		=> 'zozo_related_blog_margin',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Margin ( Items Spacing )', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
				'default' 	=> "30"
			),
			array(
				'id'		=> 'zozo_related_blog_tablet',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Tablet', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
				'default' 	=> "3"
			),
			array(
				'id'		=> 'zozo_related_blog_landscape',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Landscape', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
				'default' 	=> "2"
			),
			array(
				'id'		=> 'zozo_related_blog_portrait',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Portrait', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_related_blog_dots',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Pagination', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
			),
			array(
				'id'		=> 'zozo_related_blog_nav',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Navigation', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'required' 	=> array('zozo_show_related_posts', 'equals', true),
			),
			array(
				'id'		=> 'zozo_blog_prev_next',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Post Navigation', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'gallery_slider',
				'type' 		=> 'info',
				'title' 	=> esc_html__('Blog Gallery Slider', 'tranzlogistics'),
				'notice' 	=> false
			),
			array(
				'id'		=> 'zozo_single_blog_carousel',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Gallery Slider as Carousel globally ?', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_single_blog_citems',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Display', 'tranzlogistics'),
				'default' 	=> "3"
			),
			array(
				'id'		=> 'zozo_single_blog_citems_scroll',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Scrollby', 'tranzlogistics'),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_single_blog_cautoplay',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Auto Play', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_single_blog_ctimeout',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Timeout Duration (in milliseconds)', 'tranzlogistics'),
				'default' 	=> "5000"
			),
			array(
				'id'		=> 'zozo_single_blog_cloop',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Infinite Loop', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_single_blog_cmargin',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Margin ( Items Spacing )', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_single_blog_ctablet',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Tablet', 'tranzlogistics'),
				'default' 	=> "3"
			),
			array(
				'id'		=> 'zozo_single_blog_cmlandscape',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Landscape', 'tranzlogistics'),
				'default' 	=> "2"
			),
			array(
				'id'		=> 'zozo_single_blog_cmportrait',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Portrait', 'tranzlogistics'),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_single_blog_cdots',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Pagination', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_single_blog_cnav',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Navigation', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Featured Post Slider
	Redux::setSection( $opt_name, array(
		'title' 	 => esc_html__('Featured Post Slider', 'tranzlogistics'),
		'id'         => 'post-featuredpostslider',
		'subsection' => true,
		'fields'     => array(
			array(
				'id'		=> 'zozo_featured_slider_type',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Featured Post Slider Display', 'tranzlogistics'),
				'options'  	=> array(
					'below_header' 		=> esc_html__('Below Header', 'tranzlogistics'),
					'above_content' 	=> esc_html__('Above Content', 'tranzlogistics'),
					'above_footer' 		=> esc_html__('Above Footer', 'tranzlogistics')
				),
				'default' 	=> 'below_header'
			),
			array(
				'id'		=> 'zozo_featured_posts_limit',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Featured Posts Limit', 'tranzlogistics'),						
				'default' 	=> "6"
			),
			array(
				'id'		=> 'zozo_featured_slider_citems',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Display', 'tranzlogistics'),						
				'default' 	=> "3"
			),
			array(
				'id'		=> 'zozo_featured_slider_citems_scroll',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items to Scrollby', 'tranzlogistics'),						
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_featured_slider_cautoplay',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Auto Play', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_featured_slider_ctimeout',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Timeout Duration (in milliseconds)', 'tranzlogistics'),
				'default' 	=> "5000"
			),
			array(
				'id'		=> 'zozo_featured_slider_cloop',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Infinite Loop', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_featured_slider_cmargin',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Margin ( Items Spacing )', 'tranzlogistics'),
				'default' 	=> ""
			),
			array(
				'id'		=> 'zozo_featured_slider_ctablet',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Tablet', 'tranzlogistics'),
				'default' 	=> "3"
			),
			array(
				'id'		=> 'zozo_featured_slider_cmlandscape',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Landscape', 'tranzlogistics'),
				'default' 	=> "2"
			),
			array(
				'id'		=> 'zozo_featured_slider_cmportrait',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Items To Display in Mobile Portrait', 'tranzlogistics'),
				'default' 	=> "1"
			),
			array(
				'id'		=> 'zozo_featured_slider_cdots',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Pagination', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_featured_slider_cnav',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Navigation', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Search Page
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Search Page', 'tranzlogistics' ),
        'id'     => 'search',
        'desc'   => '',
        'icon'   => 'el el-icon-search',
		'fields' => array(
			array(
				'id'		=> 'zozo_search_page_type',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Search Results Layout', 'tranzlogistics'),
				'options' 	=> array(
					'large' 	=> array('alt' => esc_html__('Large Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-large.jpg'),
					'list' 		=> array('alt' => esc_html__('List Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-list.jpg'),
					'grid' 		=> array('alt' => esc_html__('Grid Layout', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS . '/images/layouts/blog-grid.jpg'),					
				),
				'default' 	=> 'grid'
			),
			array(
				'id'		=> 'zozo_search_grid_columns',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Grid Columns', 'tranzlogistics'),
				'required' 	=> array('zozo_search_page_type', 'equals', 'grid'),
				'options'  	=> array(
					'two' 		=> esc_html__('2 Columns', 'tranzlogistics'),
					'three' 	=> esc_html__('3 Columns', 'tranzlogistics'),
					'four' 		=> esc_html__('4 Columns', 'tranzlogistics')
				),
				'default' 	=> 'two'
			),			
			array(
				'id'		=> 'zozo_search_results_content',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Search Results Content', 'tranzlogistics'),
				'options'  	=> array(
					'both' 			=> esc_html__('Posts and Pages', 'tranzlogistics'),
					'only_posts' 	=> esc_html__('Only Posts', 'tranzlogistics'),
					'only_pages' 	=> esc_html__('Only Pages', 'tranzlogistics'),
				),
				'default' 	=> 'only_posts'
			),
		)
	) );
	
	// Social Sharing Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Social Share', 'tranzlogistics' ),
        'id'     => 'socialshare',
        'desc'   => '',
        'icon'   => 'el el-icon-share-alt',
		'fields' => array(
			array(
				'id'		=> 'zozo_sharing_facebook',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Facebook Share', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_twitter',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Twitter Share', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_linkedin',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable LinkedIn Share', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_googleplus',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Google Plus Share', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_pinterest',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Pinterest Share', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_tumblr',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Tumblr Share', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_reddit',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Reddit Share', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_digg',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Digg Share', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_sharing_email',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Email Share', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
		
	// Custom Post Type Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Custom Post Types', 'tranzlogistics' ),
        'id'     => 'customposttypes',
        'desc'   => '',
        'icon'   => 'el el-icon-adjust-alt',
		'fields' => array(
			array(
				'id' 		=> 'cpt_disable',
				'type' 		=> 'checkbox',
				'title' 	=> esc_html__('Disable Custom Post Types', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('You can disable the custom post types used within the theme here, by checking the corresponding box.', 'tranzlogistics'),
				'options' 	=> array(
					'zozo_portfolio' 	=> esc_html__( 'Portfolio', 'tranzlogistics' ),
					'zozo_services' 	=> esc_html__( 'Services', 'tranzlogistics' ),
					'zozo_casestudies' 	=> esc_html__( 'Casestudies', 'tranzlogistics' ),
					'zozo_event' 	=> esc_html__( 'Event', 'tranzlogistics' ),
					'zozo_testimonial' 	=> esc_html__( 'Testimonials', 'tranzlogistics' ),
					'zozo_team_member' 	=> esc_html__( 'Team Member', 'tranzlogistics' )
				),
				'default' 	=> array(
					'zozo_portfolio' 	=> '0',
					'zozo_services' 	=> '0',
					'zozo_casestudies' 	=> '0',
					'zozo_event' 	=> '0',
					'zozo_testimonial' 	=> '0',
					'zozo_team_member' 	=> '0',
				)
			),
			array(
				'id'		=> 'portfolio_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Portfolio Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('The slug name cannot be the same name as your portfolio page or the layout will break. This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'default' 	=> "portfolio"
			),
			array(
				'id'		=> 'portfolio_categories_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Portfolio Categories Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'default' 	=> "portfolio-categories"
			),
			array(
				'id'		=> 'portfolio_tags_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Portfolio Tags Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('This is portfolio tag slug.', 'tranzlogistics'),
				'default' 	=> "portfolio-tags"
			),
			array(
				'id'		=> 'services_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Services Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('The slug name cannot be the same name as your services page or the layout will break. This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'desc' 		=> "<strong>Make sure to regenerate permalinks.</strong>",
				'default' 	=> "services"
			),
			array(
				'id'		=> 'service_categories_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Service Categories Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'desc' 		=> "<strong>Make sure to regenerate permalinks.</strong>",
				'default' 	=> "service-categories"
			),
			array(
				'id'		=> 'casestudies_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Case Studies Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('The slug name cannot be the same name as your casestudies page or the layout will break. This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'desc' 		=> "<strong>Make sure to regenerate permalinks.</strong>",
				'default' 	=> "case-studies"
			),
			array(
				'id'		=> 'casestudy_categories_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Casestudy Categories Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'desc' 		=> "<strong>Make sure to regenerate permalinks.</strong>",
				'default' 	=> "case-study-categories"
			),
			array(
				'id'		=> 'event_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Event Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('The slug name cannot be the same name as your event page or the layout will break. This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'desc' 		=> "<strong>Make sure to regenerate permalinks.</strong>",
				'default' 	=> "event"
			),
			array(
				'id'		=> 'event_categories_slug',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Event Categories Slug', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('This option changes the permalink when you use the permalink type as %postname%.', 'tranzlogistics'),
				'desc' 		=> "<strong>Make sure to regenerate permalinks.</strong>",
				'default' 	=> "event-categories"
			),
		)
	) );
	
	// Woocommerce Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Woocommerce', 'tranzlogistics' ),
        'id'     => 'woocommerce',
        'desc'   => '',
        'icon'   => 'el el-icon-shopping-cart',
		'fields' => array(
			array(
				'id'		=> 'zozo_woo_enable_catalog_mode',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Catalog Mode', 'tranzlogistics'),
				'default' 	=> false,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'desc' 		=> esc_html__('Enable this setting to set the products into catalog mode, with no cart or checkout process.', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_woo_archive_layout',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Product Archive Layout', 'tranzlogistics'),
				'options' 	=> array(
					'one-col' 			=> array('alt' => esc_html__('Full width', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/one-col.png'),
					'two-col-right' 	=> array('alt' => esc_html__('Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/two-col-right.png'),
					'two-col-left' 		=> array('alt' => esc_html__('Left Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/two-col-left.png'),
					'three-col-middle' 	=> array('alt' => esc_html__('Left and Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/three-col-middle.png'),
					'three-col-right' 	=> array('alt' => esc_html__('Two Right Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/three-col-right.png'),
					'three-col-left' 	=> array('alt' => esc_html__('Two Left Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/three-col-left.png'),
				),
				'default' 	=> 'one-col'
			),
			array(
				'id'		=> 'zozo_woo_single_layout',
				'type' 		=> 'image_select',
				'title' 	=> esc_html__('Single Product Layout', 'tranzlogistics'),
				'options' 	=> array(
					'one-col' 			=> array('alt' => esc_html__('Full width', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/one-col.png'),
					'two-col-right' 	=> array('alt' => esc_html__('Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/two-col-right.png'),
					'two-col-left' 		=> array('alt' => esc_html__('Left Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/two-col-left.png'),
					'three-col-middle' 	=> array('alt' => esc_html__('Left and Right Sidebar', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/three-col-middle.png'),
					'three-col-right' 	=> array('alt' => esc_html__('Two Right Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/three-col-right.png'),
					'three-col-left' 	=> array('alt' => esc_html__('Two Left Sidebars', 'tranzlogistics'), 'img' => TRANZLOGISTICS_CORE_ADMIN_ASSETS.'/images/layouts/three-col-left.png'),
				),
				'default' 	=> 'two-col-right'
			),
			array(
				'id'		=> 'zozo_loop_products_per_page',
				'type'     	=> 'text',
				'title' 	=> esc_html__('Products Per Page', 'tranzlogistics'),
				'default' 	=> "12"
			),
			array(
				'id'		=> 'zozo_loop_shop_columns',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Product Columns', 'tranzlogistics'),
				'options'  	=> array(
					'2' 		=> esc_html__('2 Columns', 'tranzlogistics'),
					'3' 		=> esc_html__('3 Columns', 'tranzlogistics'),
					'4' 		=> esc_html__('4 Columns', 'tranzlogistics'),
					'5' 		=> esc_html__('5 Columns', 'tranzlogistics')
				),
				'default' 	=> '3'
			),
			array(
				'id'		=> 'zozo_related_products_count',
				'type'     	=> 'select',
				'title' 	=> esc_html__('Related Products Count', 'tranzlogistics'),
				'options'  	=> array(
					'2' 		=> esc_html__('2 Products', 'tranzlogistics'),
					'3' 		=> esc_html__('3 Products', 'tranzlogistics'),
					'4' 		=> esc_html__('4 Products', 'tranzlogistics'),
					'5' 		=> esc_html__('5 Products', 'tranzlogistics')
				),
				'default' 	=> '3'
			),
			array(
				'id'		=> 'zozo_woo_shop_ordering',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Enable Shop Page Ordering', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_woo_social_sharing',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Show Woocommerce Social Sharing', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
			),
		)
	) );
	
	// Miscellaneous Options
	Redux::setSection( $opt_name, array(
        'title'  => esc_html__( 'Miscellaneous', 'tranzlogistics' ),
        'id'     => 'miscellaneous',
        'desc'   => '',
        'icon'   => 'el el-icon-wrench',
		'fields' => array(
			array(
				'id'		=> 'zozo_remove_scripts_version',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Remove Version Parameter From JS & CSS Files', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('Most scripts and style-sheets includes query string to identifying the version. This can cause issues with caching and such, which will result in less than optimal load times. You can enable this setting on to remove the query string from such strings.', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_minify_css',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Minify CSS', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('This theme makes use of a lot of css styles, use this function to load a single minified file with all the required styles. Disable for testing purposes.', 'tranzlogistics'),
			),
			array(
				'id'		=> 'zozo_minify_js',
				'type' 		=> 'switch',
				'title' 	=> esc_html__('Minify JS', 'tranzlogistics'),
				'default' 	=> true,
				'on' 		=> esc_html__('Yes', 'tranzlogistics'),
				'off' 		=> esc_html__('No', 'tranzlogistics'),
				'subtitle' 	=> esc_html__('This theme makes use of a lot of js scripts, use this function to load a single minified file with all the required code. Disable for testing purposes.', 'tranzlogistics'),
			),
		)
	) );
    /*
     * <--- END SECTIONS
     */