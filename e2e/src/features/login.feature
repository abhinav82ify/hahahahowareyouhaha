Feature: Login page
    Display the login page

    Scenario: Login page is available
        Given User is on the "login" page
        When User do nothing
        Then User should see the login page title
        And User should see the field for username and password
        And User should see the login button

    Scenario: When wrong credentials are entered
        Given User is on the "login" page
        When User enters username "abhinav82ify"
        And User enters password "wrongpassword"
        And User clicks on login button
        Then User should see the error message

    Scenario: When correct credentials are entered
        Given User is on the "login" page
        When User enters username "abhinav82ify"
        And User enters password "password"
        And User clicks on login button
        Then User should be taken to "home" page