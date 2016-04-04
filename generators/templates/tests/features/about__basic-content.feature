@about @basic @content
Feature: About page basic content
    As a user
    I want the About page to have some basic content
    So that I can understand what the page is about
    
    Scenario: About page title
        Given I am a user on the "About" page
        When the "About" page loads
        Then there should be a "title" element on the "About" page containing the text "<%= projectName %>"

    Scenario: About page heading
        Given I am a user on the "About" page
        When the "About" page loads
        Then there should be a "h1" element on the "About" page containing the text "About us"