Travel-Tracker
Express.js and PostgreSQL-powered web app to track visited countries

Features
Allows users to add countries they have visited.
Displays the total number of visited countries.
Provides error handling for invalid country names and duplicate entries.
Prerequisites
Node.js installed on your machine.
PostgreSQL installed and running locally.
Installation
Clone the repository:

git clone https://github.com/ShibuJoseph18/Travel-Tracker
Install dependencies:

cd travel-tracker
npm install
Set up the PostgreSQL database:

Create a database named travel_tracker.
Run the schema.sql script to create the database schema:
psql -U <username> -d travel_tracker -a -f database/schema.sql
Run the populate.sql script to populate the database with initial data:
psql -U <username> -d travel_tracker -a -f database/populate.sql
Usage
Start the server:
nodemon index.js
Visit http://localhost:3000 in your web browser.
Enter the name of the country you have visited in the input field and click "Add".
View the list of visited countries and the total count.
Contributing
Contributions are welcome! Please create a new branch, make your changes, and submit a pull request.

