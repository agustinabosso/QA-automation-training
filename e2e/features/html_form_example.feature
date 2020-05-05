@automation_training
Feature: Accessing HTML form test
  As a customer
  I want to access to HTML form test
  So that I can complete all fields and submit

  Background:
    Given I am on the index page
    When I click on "HTML form example" option

  @test-1
  Scenario: Validate the redirection to Html form example page
    Then I validate the page title is "Basic HTML Form Example"

  @test-2
  Scenario: Complete user name, password and comment fields in HTML form
    And I enter "Agus bosso" in "username" field
    And I enter "corona123" in "password" field
    And I enter "HTML uses form elements with sub input, label, textarea, select and option elements." in "textarea comment" field
    And I select checkbox "2" in checkbox items section
    And I select checkbox "1" in checkbox items section
    And I deselect checkbox "3" in checkbox items section
    And I select radio "1" in radio items section
    And I select "Drop Down Item 3" from dropdown
    And I deselect all options in multiple selects value
    And I select "Selection Item 3" from multiple selection
    And I select "Selection Item 1" from multiple selection
    And I click on "Submit" button
    Then "You submitted a form" message is displayed
    And "username" submitted value is "Agus bosso"
    And "password" submitted value is "corona123"
    And "comments" submitted value is "HTML uses form elements with sub input, label, textarea, select and option elements."

