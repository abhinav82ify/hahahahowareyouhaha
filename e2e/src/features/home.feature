Feature: Home page
    Display the home page

    Scenario: Home page is available
        Given User logs in
        Then User should see the home page title, content and start button
        And User should see the app header
        And User should see the logout button