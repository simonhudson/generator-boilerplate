<?php

$siteRoot = './';

$pages = (object) array(

    'home' => (object) array(
        'url' => $siteRoot,
        'mainNavText' => 'Home',
        'pageTitle' => 'Home',
        'hiddenPageHeading' => true,
        'omitFromNav' => true
    ),
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
    )

);


?>