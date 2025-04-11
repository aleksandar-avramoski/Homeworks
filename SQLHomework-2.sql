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
ON m.director_id = d.director_id;

-- Show actors and their movies
SELECT 
	a.first_name,
	a.last_name,
	m.title
FROM cast_members AS cm
INNER JOIN actors AS a
ON cm.actor_id = a.actor_id
INNER JOIN movies AS m
ON cm.movie_id = m.movie_id;

-- Show movies and their genres
SELECT 
	m.title,
	g.name
FROM movies AS m
INNER JOIN movie_genres as mg
ON m.movie_id = mg.movie_id
INNER JOIN genres AS g
ON g.genre_id = mg.genre_id;

-- Show users and their reviews
SELECT 
	u.username,
	r.review_text,
	r.rating
FROM reviews AS r
INNER JOIN users AS u
ON r.user_id = u.user_id;

-- Show movies and their locations
SELECT 
	m.title,
	ml.city,
	ml.country,
	ml.specific_location
FROM movie_locations AS ml
INNER JOIN movies AS m
ON m.movie_id = ml.movie_id;

-- Show movies and their production companies
SELECT 
	m.title,
	pc.name
FROM movies AS m
INNER JOIN movie_production_companies  AS mpc
ON m.movie_id = mpc.movie_id
INNER JOIN production_companies AS pc
ON pc.company_id = mpc.company_id;

-- Show actors and their awards
SELECT 
    a.first_name,
    a.last_name,
    ads.award_type
FROM actors AS a
INNER JOIN actor_awards AS aw
ON a.actor_id = aw.actor_id
INNER JOIN awards AS ads
ON ads.award_id = aw.award_id;

-- Show movies and their awards
SELECT 
	m.title,
	aw.name,
	aw.award_type
FROM movies AS m
INNER JOIN movie_awards AS ma
On m.movie_id = ma.movie_id
INNER JOIN awards AS aw
ON aw.award_id = ma.award_id; 

-- Show users and their watchlist movies
SELECT 
	u.username,
	m.title
FROM users AS u
INNER JOIN user_watchlist AS uw
ON u.user_id = uw.user_id
INNER JOIN movies AS m
ON m.movie_id = uw.movie_id;

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
ON m.director_id = d.director_id
WHERE m.rating = 'R';

-- Show all movies from 2019 and their genres
SELECT 
	m.title,
	g.name
FROM movies AS m
INNER JOIN movie_genres AS mg
ON m.movie_id = mg.movie_id
INNER JOIN genres AS g
ON g.genre_id = mg.genre_id
WHERE m.release_date BETWEEN '2019-01-01' AND '2019-12-31';

-- Show all American actors and their movies
SELECT 
	a.first_name,
	a.last_name,
	m.title
FROM actors AS a
INNER JOIN cast_members AS cm
ON a.actor_id = cm.actor_id
INNER JOIN movies AS m
ON m.movie_id = cm.movie_id
WHERE a.nationality = 'American';

-- Show all movies with a budget over 100M and their production companies
SELECT 
	m.title,
	pc.name
FROM movies AS m
INNER JOIN movie_production_companies AS mpc
ON m.movie_id = mpc.movie_id
INNER JOIN production_companies AS pc
ON m.movie_id = pc.company_id
WHERE m.budget > 100000000;

-- Show all movies filmed in 'London' and their directors
SELECT 
	m.title,
	d.first_name,
	d.last_name,
	ml.city
FROM movies AS m
INNER JOIN movie_locations AS ml
ON m.movie_id = ml.movie_id
INNER JOIN directors AS d
ON m.director_id = d.director_id
WHERE ml.city = 'London';

-- Show all horror movies and their actors
SELECT 
	m.title,
	a.first_name,
	a.last_name
FROM movies AS m
INNER JOIN movie_genres AS mg
ON m.movie_id = mg.movie_id
INNER JOIN genres AS g
ON g.genre_id = mg.genre_id
INNER JOIN cast_members AS cm
ON m.movie_id = cm.movie_id
INNER JOIN actors AS a
ON a.actor_id = cm.actor_id
WHERE g.name = 'Horror';

-- Show all movies with reviews rated 5 and their reviewers
SELECT 
	m.title,
	u.username,
	r.rating
FROM movies AS m
INNER JOIN reviews AS r
ON m.movie_id = r.movie_id
INNER JOIN users AS u
ON u.user_id = r.user_id
WHERE r.rating = 5;

-- Show all British directors and their movies
SELECT
	d.first_name,
	d.last_name,
	m.title
FROM directors AS d
INNER JOIN movies AS m
ON d.director_id = m.director_id
WHERE d.nationality = 'British';

-- Show all movies longer than 180 minutes and their genres
SELECT
	m.title,
	g.name
FROM movies AS m
INNER JOIN movie_genres AS mg
ON m.movie_id = mg.movie_id
INNER JOIN genres AS g
ON g.genre_id = mg.genre_id
WHERE m.duration_minutes > 180;

-- Show all Oscar-winning movies and their directors
SELECT 
	m.title,
	d.first_name,
	d.last_name,
	a.award_type
FROM movies AS m
INNER JOIN directors AS d
ON m.director_id = d.director_id
INNER JOIN movie_awards AS ma
ON m.movie_id = ma.movie_id
INNER JOIN awards AS a
ON a.award_id = ma.award_id
WHERE a.award_type = 'Oscar';
