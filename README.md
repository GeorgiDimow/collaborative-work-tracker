# collaborative-work-tracker

Collaborative Work Tracker (CWT) Project
The Collaborative Work Tracker (CWT) project is designed to identify pairs of employees who have collaborated on common projects for the longest period. The application calculates the duration of collaboration, taking into account the DateTo field (nullable, defaulting to today) and supporting multiple date formats. Input data is loaded from a CSV file, and the application is built using React, adhering to clean code conventions.

Features
Collaboration Duration Calculation:
The application utilizes an algorithm to transform the input data into a map structure, facilitating easy access to collaboration details. The algorithm focuses on optimizing data manipulation for efficient tracking of employee collaborations.

Flexible Date Parsing:
The data parsing mechanism employs regular expressions (regex) to identify and handle different date formats. This flexibility ensures robust support for various date representations, enhancing the application's compatibility with diverse datasets.

Search Feature:
The search functionality aims for simplicity and ease of use. Users can search for collaboration details based on employee IDs and project IDs. The search feature is implemented with a user-friendly interface, allowing users to input queries and obtain relevant collaboration information.