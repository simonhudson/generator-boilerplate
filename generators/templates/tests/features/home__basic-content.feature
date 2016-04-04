@home @basic @content
Feature: Home page basic content
    As a user
    I want the Home page to have some basic content
    So that I can understand what the page is about
    
    Scenario: Home page title
        Given I am a user on the "Home" page
        When the "Home" page loads
        Then there should be a "title" element on the "Home" page containing the text "<%= projectName %>"

    Scenario: Home page heading
        Given I am a user on the "Home" page
        When the "Home" page loads
        Then there should be a "h1" element on the "Home" page containing the text "Home"