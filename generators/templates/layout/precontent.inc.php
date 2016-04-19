<?php
session_start();
include('config/site.config.inc.php');
include('config/pages.config.inc.php');
include('config/paths.config.inc.php');
include('functions/functions.inc.php');
$currentPage = currentPage();
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
