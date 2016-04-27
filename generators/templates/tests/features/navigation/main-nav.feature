@mainNav 
Feature: Main navigation
    As a user 
    I want the C1 Home page to have a main navigation element 
    So that I can navigate around the site
    
    Scenario: Main navigation present
        Given I am a user
        When I navigate to the "Home" page
        And the viewport "width" is "more than" "700"
        Then there is a "[data-hook=main-nav]" element

    Scenario: Main navigation links: Home
        Given I am a user
        When I navigate to the "Home" page
        And I click on the element "[data-hook=main-nav__home]"
        Then the browser loads the "Home" page

    Scenario: Main navigation links: Home
        Given I am a user
        When I navigate to the "Home" page
        And I click on the element "[data-hook=main-nav__credit-cards]"
        Then the browser loads the "Credit Cards" page

    Scenario: Main navigation links: Home
        Given I am a user
        When I navigate to the "Home" page
        And I click on the element "[data-hook=main-nav__loans]"
        Then the browser loads the "Loans" page

    Scenario: Main navigation links: Home
        Given I am a user
        When I navigate to the "Home" page
        And I click on the element "[data-hook=main-nav__mortgages]"
        Then the browser loads the "Mortgages" page

    Scenario: Main navigation links: Home
        Given I am a user
        When I navigate to the "Home" page
        And I click on the element "[data-hook=main-nav__help]"
        Then the browser loads the "About" page