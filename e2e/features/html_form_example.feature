@automation_training
Feature: Accessing HTML form test
  As a customer
  I want to access to HTML form test
  So that I can complete all fields and submit

  Background:
    Given I am on the index page

  @test-1
  Scenario: Complete user name, password and comment fields in HTML form
    When I click on "HTML form example" option
    Then I validate the page title is "Basic HTML Form Example"