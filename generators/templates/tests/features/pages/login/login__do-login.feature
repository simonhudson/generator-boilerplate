@login @watch
Feature: Log in functionality
    As a user
    I want to be able to log in to the site
    So that I can access features and functionality
    
    Scenario: Log in form exists
        Given I am a user who is not logged in
        When I navigate to the "Log in" page
        Then there is a "[data-hook=login__form]" element
        And there is a "[data-hook=login__password]" element
        And there is a "[data-hook=login__returnUrl]" element
        And there is a "[data-hook=login__submit]" element

    Scenario: Submit empty value
        Given I am a user who is not logged in
        And I navigate to the "Log in" page
        When I enter value "" in element "[data-hook=login__password]"
        And I submit the form "[data-hook=login__form]"
        Then the browser loads the "Log in" page

    Scenario: Submit invalid value
        Given I am a user who is not logged in
        And I navigate to the "Log in" page
        When I enter value "foo" in element "[data-hook=login__password]"
        And I submit the form "[data-hook=login__form]"
        Then the browser loads the "Log in" page

    Scenario: Submit valid value
        Given I am a user who is not logged in
        And I navigate to the "Log in" page
        When I enter value "admin" in element "[data-hook=login__password]"
        And I submit the form "[data-hook=login__form]"
        Then the browser loads the "Home" page