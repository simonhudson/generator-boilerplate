@login
Feature: Log in page basic content
    As a user
    I want the Log in page to have some basic content
    So that I can understand what the page is about
    
    Scenario: Page loads successfully
        Given I am a user
        When I navigate to the "Log in" page
        Then the browser loads the "Log in" page

    Scenario: Page title
        Given I am a user
        When I navigate to the "Log in" page
        Then there is a "title" element
        And the title is "<%= projectName %>"