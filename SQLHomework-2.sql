-- Find all movies released in 2019
SELECT * FROM movies
WHERE release_date BETWEEN '2019-01-01' AND '2019-12-31';

-- Find all actors from 'British' nationality
SELECT * FROM actors
WHERE nationality = 'British';

-- Find all movies with 'PG-13' rating
SELECT * FROM movies
WHERE rating = 'PG-13';

-- Find all directors from 'American' nationality
SELECT * FROM directors
WHERE nationality = 'American';

-- Find all movies with duration more than 150 minutes
SELECT * FROM movies
WHERE duration_minutes > 150;

-- Find all actors with last name 'Pitt'
SELECT * FROM actors
WHERE last_name = 'Pitt';

-- Find all movies with budget greater than 100 million
SELECT * FROM movies
WHERE budget > 100000000;

-- Find all reviews with rating 5
SELECT * FROM reviews
WHERE rating = 5;

-- Find all movies in English language
SELECT * FROM movies
WHERE language = 'English';

-- Find all production companies from 'California'
SELECT * FROM production_companies
WHERE headquarters LIKE '%California';



-- Show movies and their directors
SELECT 
	m.title,
	d.first_name,
	d.last_name
FROM movies AS m
INNER JOIN directors AS d
ON m.movie_id = d.director_id;

-- Show actors and their movies
SELECT 
	a.first_name,
	a.last_name,
	m.title
FROM actors AS a
INNER JOIN movies AS m
ON m.movie_id = a.actor_id;

-- Show movies and their genres
SELECT 
	m.title,
	g.name
FROM movies AS m
INNER JOIN genres AS g
ON m.movie_id = g.genre_id;

-- Show users and their reviews
SELECT 
	u.username,
	r.rating,
	r.review_text
FROM users AS u
INNER JOIN reviews AS r
ON u.user_id = r.review_id;

-- Show movies and their locations
SELECT 
	m.title,
	fl.city,
	fl.country,
	fl.specific_location
FROM movies AS m
INNER JOIN movie_locations AS fl
ON m.movie_id = fl.location_id;

-- Show movies and their production companies
SELECT 
	m.title,
	pc.name
FROM movies AS m
INNER JOIN production_companies AS pc
ON m.movie_id = pc.company_id;

-- Show actors and their awards
SELECT 
	a.first_name,
	a.last_name,
	aw.award_type
FROM actors AS a
INNER JOIN awards AS aw
ON a.actor_id = aw.award_id;

-- Show movies and their awards
SELECT 
	m.title,
	aw.name
FROM movies AS m
INNER JOIN awards AS aw
ON m.movie_id = aw.award_id; 

-- Show users and their watchlist movies
SELECT 
	u.username,
	uw.movie_id
FROM users AS u
INNER JOIN user_watchlist AS uw
ON u.user_id = uw.movie_id;

-- Show movies and their revenues
SELECT 
	m.title,
	mr.domestic_revenue,
	mr.international_revenue
FROM movies AS m
INNER JOIN movie_revenues AS mr
ON m.movie_id = mr.movie_id; 




-- Show all R-rated movies and their directors
SELECT 
	m.title,
	d.first_name,
	d.last_name
FROM movies AS m
INNER JOIN directors as d
ON m.movie_id = d.director_id
WHERE rating = 'PG-13';

-- Show all movies from 2019 and their genres
SELECT 
	m.title,
	g.name
FROM movies AS m
INNER JOIN genres AS g
ON m.movie_id = g.genre_id
WHERE release_date BETWEEN '2019-01-01' AND '2019-12-31';

-- Show all American actors and their movies
SELECT 
	a.first_name,
	a.last_name,
	m.title
FROM actors AS a
INNER JOIN movies AS m
ON a.actor_id = m.movie_id
WHERE a.nationality = 'American';

-- Show all movies with a budget over 100M and their production companies
SELECT 
	m.title,
	pc.name
FROM movies AS m
INNER JOIN production_companies AS pc
ON m.movie_id = pc.company_id
WHERE m.budget > 100000000;

-- Show all movies filmed in 'London' and their directors
SELECT 
	m.title,
	d.first_name,
	d.last_name
FROM movies AS m
INNER JOIN directors AS d
ON m.movie_id = d.director_id
WHERE m.budget > 100000000;

-- Show all movies filmed in 'London' and their directors
SELECT 
	m.title,
	d.first_name,
	d.last_name
FROM movies AS m
INNER JOIN directors AS d
ON m.movie_id = d.director_id
INNER JOIN movie_locations AS ml
ON m.movie_id = ml.location_id
WHERE city = 'London';

-- Show all horror movies and their actors
SELECT 
	m.title,
	a.first_name,
	a.last_name
FROM movies AS m
INNER JOIN actors AS a
ON m.movie_id = a.actor_id
INNER JOIN genres AS g
ON m.movie_id = g.genre_id
WHERE g.name = 'Horror';

-- Show all movies with reviews rated 5 and their reviewers
SELECT 
	m.title,
	r.review_text
FROM movies AS m
INNER JOIN reviews AS r
ON m.movie_id = r.review_id
WHERE r.rating = 5;

-- Show all British directors and their movies
SELECT
	d.first_name,
	d.last_name,
	m.title
FROM directors AS d
INNER JOIN movies AS m
ON d.director_id = m.movie_id
WHERE nationality = 'British';

-- Show all movies longer than 180 minutes and their genres
SELECT
	m.title,
	g.name
FROM movies AS m
INNER JOIN genres AS g
ON m.movie_id = g.genre_id
WHERE duration_minutes > 180;

-- Show all Oscar-winning movies and their directors
SELECT 
	m.title,
	d.first_name,
	d.last_name
FROM movies AS m
INNER JOIN directors AS d
ON m.movie_id = d.director_id
INNER JOIN awards AS a
ON m.movie_id = a.award_id
WHERE award_type = 'Oscar';
