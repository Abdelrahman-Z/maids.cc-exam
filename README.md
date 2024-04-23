# Angular Quiz: Building a Dynamic User Dashboard

## Project Description

This Angular project serves as a demonstration of proficiency in Angular (7+) by creating an interactive user dashboard. The project employs advanced features such as state management frameworks, directives, and observables, while emphasizing proper styling, animations, and caching techniques. 

## Project Setup

To set up the project, Angular CLI is used as the foundation. The project is initialized as an Angular 7+ application.

## Page Layout

The page layout consists of a header and a horizontally centered, paginated users list.

## Data Retrieval

User data is fetched from HTTP endpoints:

- User card data (including avatar image, first_name, last_name, and id) is fetched from `https://reqres.in/api/users?page={page}` for pagination.
- Details for a single user are fetched via `https://reqres.in/api/users/{id}`.

## Navigation

Click functionality is enabled on the user cards to navigate to a new page displaying detailed information about the selected user.

## Search Functionality

An instant search field within the header allows users to search for users by ID without requiring a separate button. Search results are displayed, and users can navigate to the user details page if the user exists.

## User Details Page

Each individual user's page includes a back button to navigate back to the main user list.

## Caching Implementation

Caching mechanisms are introduced to avoid redundant HTTP requests, optimizing the application's performance.

## User Experience Enhancements

A loading bar is displayed to indicate pending network requests, ensuring a smoother user experience during data retrieval.

## Additional Considerations

- State management frameworks like NgRx or Redux are employed for efficient state handling.
- Custom directives are implemented for improved UI interactions or functionalities.
- Observables from RxJS are utilized to manage asynchronous operations.
- Proper styling and animations are applied to enhance the user interface.
- The project codebase is well-documented and structured.

## Submission Requirements

- Share the project via a Github/Gitlab link or provide a zipped project file that includes all necessary files.

This Angular project aims to showcase proficiency in utilizing advanced Angular features, best practices, and creating a dynamic user interface while focusing on clarity, performance, and usability.
