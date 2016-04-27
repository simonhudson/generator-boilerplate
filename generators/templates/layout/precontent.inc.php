<?php
session_start();
include('config/site.config.inc.php');
include('config/forms.config.inc.php');
include('config/pages.config.inc.php');
include('config/paths.config.inc.php');
include('config/sub-nav.config.inc.php');
include('functions/functions.inc.php');
$currentPage = currentPage();

if (isset($_POST['login__returnUrl'])) {
    $returnUrl = $_POST['login__returnUrl'];
}

if (isset($_SESSION['isLoggedIn']) && $currentPage == 'login') {
    header('Location: '.$pages->home->url);
}
// if (!isset($_SESSION['isLoggedIn']) && $currentPage != 'login' && $currentPage != 'register') {
//     header('Location: '.$pages->login->url);
// }
if (isset($_POST['login__submit']) && $_POST['login__password'] === 'admin') {
    $_SESSION['isLoggedIn'] = true;
    header('Location: '.(isset($pages->$returnUrl->url) ? $pages->$returnUrl->url : $pages->home->url));
}

?>
<!doctype html>
<!--[if lt IE 9]>
    <html class="lt-ie9" lang="en">
<![endif]-->
<!--[if gte IE 9]><!-->
<html lang="en">
<!--<![endif]-->
<head>
<meta charset="utf-8"/>
<meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />
<meta content="width=device-width, initial-scale=1" name="viewport" />
<title><?= $site->globalHeadingFragment; ?></title>
<link href="<?= $paths->libs; ?>font-awesome/css/font-awesome.min.css" rel="stylesheet" />
<link href="<?= $paths->css; ?>main.min.css" rel="stylesheet" />
<link rel="shortcut icon" href="<?= $paths->imgs; ?>favicon.ico">
</head>
<body>

    <nav class="access-nav">
        <ul>
            <li class="access-nav__item">
                <a class="access-nav__link" href="#main-content">Skip to main content</a>
            </li>
        </ul>
    </nav>

    <header class="header--global">

        <div class="logo__wrap">
            <a data-hook="header-logo__link" href="<?= $siteRoot; ?>">
                <img alt="<%= projectName %> home" class="logo__img" data-hook="header-logo" src="<?= $paths->imgs; ?>logo.png" />
            </a>
        </div>

        <button class="js-menu-toggle menu-toggle" data-hook="main-nav__toggle">
            <span class="fa fa-bars fa-2x"></span><br />
            <span class="hidden">Menu</span>
        </button>

    </header>

    <?php include ('includes/main-nav.inc.php'); ?>
