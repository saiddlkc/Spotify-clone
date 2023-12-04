# Spotify Clone with Deezer API

Welcome to the Spotify Clone project using the Deezer API! This project aims to recreate some functionalities of Spotify using the Deezer API. Below are the steps and instructions to recreate this project:

## Project Overview

This project will involve creating a web application with the following features:

1. Login and Register Page:

   - Users can sign up or log in to the application. User information will be saved in JSON format for simplicity.

1. Main Page with Genre Sections:

   - The main page will display four sections showcasing different music genres. Users can browse and explore music by clicking on these genres.

1. Search Page:

   - A search page will allow users to search for artists or songs using the Deezer API. The application should fetch and display search results.

1. Library for Favorited Songs:

   - Users can favorite songs, and these favorites will be stored in local storage. There will be a dedicated library page displaying the favorited songs.

1. Music Bar for Preview:
   - A music bar at the bottom of the application will allow users to click on a song and play a preview of it.

## Setup Instructions

1. Enviroment Setup

   - Feel Free to use npm packages
   - Use a single git repo for your team

2. Deezer API Integration

   - Sign up for the Deezer API and get your API keys(RAPID API has better UI so I recommend using that).
   - Explore the Deezer(or Rapid) API documentation to understand how to fetch music data.
   - Implement the necessary API calls in your application to retrieve songs, artists, and genres.

3. User Authentication (Login/Register)

   - Create HTML forms for user login and registration.
   - Use JavaScript to handle form submissions and manage user authentication.
   - Store user information in a JSON file.

4. Main Page and Genre Sections

   - Design the main page layout with sections for different music genres.
   - Fetch genre-specific data using Deezer API and display it accordingly.
   - Implement functionality to navigate to a detailed view when a genre is clicked.

5. Search Page

   - Design a search page with input fields for searching artists or songs.
   - Use Deezer API endpoints to retrieve search results based on user queries.
   - Display search results in a user-friendly manner.

6. Library for Favorited Songs

   - Implement functionality to add songs to a user's favorites list.
   - Store these favorites in local storage and create a separate library page to display them.

7. Music Bar for Song Previews
   - Create a music player component at the bottom of the application.
   - Enable users to click on a song from any section (genres, search results, favorites) to play a preview in the music bar.

## Additional Notes

- This project is a starting point for recreating Spotify-like functionality using the Deezer API. Feel free to expand on it by adding more features or improving the user interface but please keep it as originally looking as possible.

GL HF.
