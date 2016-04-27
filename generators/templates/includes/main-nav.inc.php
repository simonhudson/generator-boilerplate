<div class="curtain-nav main-nav--level-1 js-curtain--level-1" data-hook="main-nav">
    <nav class="level-1__nav">
        <ul class="level-1__list">
            <?php foreach($pages as $page): ?>
                <?php
                    $linkHook = str_replace('./', '', $page->url);
                    $linkHook = str_replace('.php', '', $linkHook);
                    if (!isset($page->omitFromNav)): ?>
                        <?php $subNavMenu = ($page->url !== $siteRoot ? $page->url : 'home'); ?>
                        <li class="main-nav__item level-1__item main-nav__item">
                            <a class="main-nav__link level-1__link main-nav__link <?= ($page->url === $currentPage) ? ' current' : ''; ?>" data-hook="main-nav__<?= (empty($linkHook) ? 'home' : $linkHook); ?>" href="<?= $siteRoot.$page->url; ?>">
                                <span aria-hidden="true" class="fa fa-<?=$page->icon; ?>"></span>&nbsp;
                                <span class="main-nav__text"><?= $page->mainNavText; ?></span>
                            </a>
                            <?php if (isset($page->hasSubNav)): ?>
                                <a class="sub-nav__toggle" data-showhide-target="sub-nav--<?= $subNavMenu; ?>" href="#">
                                    <span aria-hidden="true" class="fa fa-chevron-down"></span>
                                    <span class="hidden">Toggle navigation</span>
                                </a>
                            <?php endif; ?>
                            <?php if (isset($page->hasSubNav)): ?>
                                <ul class="main-nav-level-2__list" data-showhide-content="sub-nav--<?= $subNavMenu; ?>">
                                    <?php foreach ($subNav->$subNavMenu as $subPage): ?>
                                        <li class="main-nav-level-2__item">
                                            <a class="main-nav-level-2__link" href="<?= $subPage->url; ?>"><?= $subPage->mainNavText; ?></a>
                                        </li>
                                    <?php endforeach; ?>
                                </ul>
                            <?php endif; ?>
                        </li>
                    <?php endif; ?>
            <?php endforeach; ?>
        </ul>
    </nav>
</div>