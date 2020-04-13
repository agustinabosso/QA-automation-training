@automation_training
Feature: Accessing HTML form test
  As a customer
  I want to access to HTML form test
  So that I can complete all fields and submit

  Background:
    Given I am on the index page
    When I click on "HTML form example" option
    Then I validate the page title is "Basic HTML Form Example"

  @test-1
  Scenario: Complete user name, password and comment fields in HTML form
    When I enter "Agus Bosso" in "username" field
    And I enter "Corona123" in "password" field
    And I enter "HTML uses form elements with sub input, label, textarea, select and option elements." in "textarea comment" field
    And I click on "Submit" button
    Then "You submitted a form" message is displayed
    And "username" submitted value is "Agus Bosso"
    And "password" submitted value is "Corona123"
    And "comments" submitted value is "HTML uses form elements with sub input, label, textarea, select and option elements."