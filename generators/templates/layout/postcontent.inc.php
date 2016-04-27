    </main>

    <footer class="footer--global">
        <div class="grid__wrap">

            <div class="grid__span--6">

            </div>

            <div class="grid__span--6">

            </div>

            <div class="grid__span--6 content-right">
                <p class="small-text">
                    <?php if (isset($_SESSION['isLoggedIn'])): ?>
                    <a href="<?= $pages->logout->url; ?>?returnUrl=<?= $currentPage; ?>"><?= $pages->logout->mainNavText; ?></a>
                    <?php else: ?>
                    <a href="<?= $pages->login->url; ?>?returnUrl=<?= $currentPage; ?>">Admin log in</a>
                    <?php endif; ?>
                </p>
                <p class="small-text"><a href="http://www.heyhudson.com" target="_blank">Website by Simon Hudson<span class="hidden">&nbsp;(opens in a new window)</span></a></p>
            </div>

        </div>
    </footer>

<script src="<?= $paths->libs; ?>jquery/dist/jquery.js"></script>
<script src="<?= $paths->js; ?>main.min.js"></script>
</body>
</html>