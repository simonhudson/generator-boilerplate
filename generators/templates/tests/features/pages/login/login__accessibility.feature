@login @a11y
Feature: Log in page accessibility
    As a user
    I want the Log in page to have a good level of accessibility
    So that it can be accessed, used and understood by as many users as possible
    
    Scenario: WCAG compliance
        Given I am a user
        When I navigate to the "Log in" page
        Then the "Log in" page should pass WCAG-AA compliance