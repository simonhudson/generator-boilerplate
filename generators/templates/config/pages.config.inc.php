<?php

$siteRoot = './';

$pages = (object) array(

    'login' => (object) array(
        'url' => 'login',
        'mainNavText' => 'Log in',
        'pageTitle' => 'Log in',
        'omitFromNav' => true
    ),
    'logout' => (object) array(
        'url' => 'logout',
        'mainNavText' => 'Log out',
        'pageTitle' => 'Log out',
        'omitFromNav' => true
    ),
    'home' => (object) array(
        'url' => $siteRoot,
        'mainNavText' => 'Home',
        'pageTitle' => 'Home',
        'icon' => 'home',
        'hiddenPageHeading' => true
    ),
    'about' => (object) array(
        'url' => 'about',
        'mainNavText' => 'About us',
        'pageTitle' => 'About us',
        'icon' => 'map-marker',
        'hasSubNav' => true
    ),
    'employees' => (object) array(
        'url' => 'employees',
        'mainNavText' => 'Employees',
        'pageTitle' => 'Employees',
        'icon' => 'users',
        'hasSubNav' => true
    ),
    'contact' => (object) array(
        'url' => 'contact',
        'mainNavText' => 'Contact us',
        'pageTitle' => 'Contact us',
        'icon' => 'envelope-o',
    )

);


?>