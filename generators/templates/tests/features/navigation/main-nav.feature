@mainNav 
Feature: Main navigation
    As a user 
    I want the C1 Home page to have a main navigation element 
    So that I can navigate around the site
    
    Scenario: Main navigation present
        Given I am a user
        When I navigate to the "Home" page
        And the viewport "width" is "more than" "1024"
        Then there is a "[data-hook=main-nav]" element

    Scenario: Main navigation links: Home
        Given I am a user
        When I navigate to the "Home" page
        And I click on the element "[data-hook=main-nav__home]"
        Then the browser loads the "Home" page