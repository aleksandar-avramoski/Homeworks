-- Find average rating per movie
SELECT 
	m.title,
	AVG(r.rating) AS movie_rating
FROM movies m
JOIN reviews r
ON m.movie_id = r.movie_id
GROUP BY m.title;

SELECT * FROM movie_revenues;

-- Create and query a temp table with movies where total revenue (domestic plus international) is greated than 100000000 
CREATE TEMP TABLE movies_with_high_revenue ( 
	movie VARCHAR(50) 
);

INSERT INTO movies_with_high_revenue (movie) 
SELECT m.title
FROM movies m
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
GROUP BY m.title
HAVING SUM(mr.domestic_revenue + mr.international_revenue) >= 100000000;

-- Create a function to get average rating of a movie by title
CREATE OR REPLACE FUNCTION average_rating_of_movie(
	movie_title VARCHAR(50)
)
RETURNS DECIMAL AS $$
DECLARE 
	avg_rating DECIMAL;
BEGIN 
	SELECT AVG(r.rating) INTO avg_rating
	FROM movies m
	JOIN reviews r 
	ON m.movie_id = r.movie_id
	WHERE m.title = movie_title;
	
	RETURN avg_rating;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM average_rating_of_movie('Inception');

-- Find the top 5 actors with most movie appearances
SELECT
	a.first_name,
	a.last_name,
	COUNT(cm.movie_id) AS movie_appearances
FROM actors a
JOIN cast_members cm
ON a.actor_id = cm.actor_id
JOIN movies m
ON m.movie_id = cm.movie_id
GROUP BY a.first_name, a.last_name
ORDER BY movie_appearances DESC
LIMIT 5;

-- Show all user emails in lowercase
SELECT 
	username,
	LOWER(email) AS email
FROM users;

-- Show year of release for each movie
SELECT
	title,
	EXTRACT(YEAR FROM release_date) AS release_year
FROM movies;

-- Round domestic revenue to nearest dollar
SELECT
	ROUND(domestic_revenue) AS domestic_revenue
FROM movie_revenues;

-- Count how many reviews each movie has
SELECT
	m.title,
	COUNT(r.movie_id) AS review_count
FROM movies m
JOIN reviews r
ON m.movie_id = r.movie_id
GROUP BY m.title
ORDER BY review_count DESC;

-- Show full name of all actors (first + last name)
SELECT
	first_name || ' ' || last_name AS actors_full_name
FROM actors;

-- Get total number of movies directed by a specific director CREATE OR REPLACE FUNCTION count_movies_by_director(director_name TEXT) (Custom Function That Returns a Single Value)
CREATE OR REPLACE FUNCTION count_movies_by_director(director_name TEXT)
RETURNS INTEGER AS $$
DECLARE
	num_of_movies INTEGER;
BEGIN
	SELECT COUNT(m.movie_id)
	INTO num_of_movies
	FROM directors d
	JOIN movies m 
	ON d.director_id = m.director_id
	WHERE d.first_name || ' ' || d.last_name = director_name;

	RETURN num_of_movies;
END;
$$ LANGUAGE plpgsql;

DROP FUNCTION IF EXISTS count_movies_by_director;

SELECT * FROM count_movies_by_director('Christopher Nolan');

-- Get all movies with rating above a certain number (Custom Function That Returns a Table)
CREATE OR REPLACE FUNCTION get_movies_with_rating_above_certain_number(
	rating_num INTEGER
) 
RETURNS TABLE (movie_title VARCHAR(50)) AS $$
BEGIN 
	RETURN QUERY 
	SELECT m.title
	FROM movies m
	JOIN reviews r
	ON m.movie_id = r.movie_id
	WHERE r.rating > rating_num;
END;
$$ LANGUAGE plpgsql;

SELECT * FROM get_movies_with_rating_above_certain_number(9);