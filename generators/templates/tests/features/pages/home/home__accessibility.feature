@home @a11y
Feature: Home page accessibility
    As a user
    I want the Home page to have a good level of accessibility
    So that it can be accessed, used and understood by as many users as possible
    
    Scenario: WCAG compliance
        Given I am a user
        When I navigate to the "Home" page
        Then the "Home" page should pass WCAG-AA compliance