@login
Feature: Log in functionality
    As a user
    I want to be able to log in to the site
    So that I can access features and functionality
    
    Scenario: Log in form exists
        Given I am a user
        And I log out
        When I navigate to the "Log in" page
        Then there is a "[data-hook=login__form]" element
        And there is a "[data-hook=login__password]" element
        And there is a "[data-hook=login__returnUrl]" element
        And there is a "[data-hook=login__submit]" element