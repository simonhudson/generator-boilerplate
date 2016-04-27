@mainNav 
Feature: Main navigation - responsive
    As a user 
    I want the C1 Home page to have a responsive main navigation element 
    So that I can navigate around the site no matter what device I am using
    
    Scenario: Main navigation present
        Given I am a user
        When I navigate to the "Home" page
        Then there is a "[data-hook=main-nav]" element

    Scenario: Main navigation visible at more than 1024px
        Given I am a user
        When I navigate to the "Home" page
        And the viewport "width" is "more than" "1024"
        Then the "[data-hook=main-nav]" element is visible

    Scenario: Main navigation hidden at less than 1024px
        Given I am a user
        When I navigate to the "Home" page
        And the viewport "width" is "less than" "1024"
        Then the "[data-hook=main-nav]" element is not visible

    Scenario: Main navigation toggle hidden at more than 1024px
        Given I am a user
        When I navigate to the "Home" page
        And the viewport "width" is "more than" "1024"
        Then the "[data-hook=main-nav__toggle]" element is not visible

    Scenario: Main navigation toggle visible at less than 1024px
        Given I am a user
        When I navigate to the "Home" page
        And the viewport "width" is "less than" "1024"
        Then the "[data-hook=main-nav__toggle]" element is visible

    Scenario: Main navigation toggle functionality
        Given I am a user
        When I navigate to the "Home" page
        And the viewport "width" is "less than" "1024"
        And the "[data-hook=main-nav]" element is not visible
        When I click on the element "[data-hook=main-nav__toggle]"
        Then the "[data-hook=main-nav]" element is visible