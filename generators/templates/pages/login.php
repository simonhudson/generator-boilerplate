<?php include('layout/precontent.inc.php'); ?>
    <div class="grid__wrap">
        <div class="grid__span--8">
            <h1><?= pageHeading(); ?></h1>
            <form action="<?= $_SERVER['PHP_SELF']; ?>" class="js-validate" data-hook="login__form" id="login__form" method="post">
                <fieldset>
                    <legend class="hidden">Log in</legend>
                    <label class="hidden" for="login__password">Password</label>
                    <?php if (isset($_POST['login__submit']) && $_POST['login__password'] !== 'admin'): ?>
                        <span class="error-text" data-hook="login__password--error">Incorrect password</span>
                    <?php endif; ?>
                    <input
                        data-val-error-empty="<?= $formConfig->password->validation->errorMsg->empty; ?>"
                        data-val-error-invalid="<?= $formConfig->password->validation->errorMsg->invalid; ?>"
                        data-val-isrequired="true"
                        data-val-regex="<?= '^(admin)$';//$formConfig->password->validation->regex; ?>"
                        data-val-type="text"
                        data-hook="login__password"
                        id="login__password"
                        name="login__password"
                        placeholder="<?= $formConfig->password->placeholder; ?>"
                        type="password" />
                </fieldset>
                <input data-hook="login__returnUrl" id="login__returnUrl" name="login__returnUrl" type="hidden" value="<?= getReturnUrl(); ?>" />
                <input data-hook="login__submit" id="login__submit" name="login__submit" type="submit" value="Log in" />
            </form>
        </div>
    </div>
<?php include('layout/postcontent.inc.php'); ?>