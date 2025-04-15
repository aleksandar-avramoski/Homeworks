-- Find all genres that have more than 3 movies with a rating of 'R'
SELECT 
	g.name,
	COUNT(*) AS more_than_3_movies
FROM genres g
JOIN movie_genres mg
ON g.genre_id = mg.genre_id
JOIN movies m
ON m.movie_id = mg.movie_id
WHERE m.rating = 'R'
GROUP BY g.name
HAVING COUNT(*) > 3;

-- Find directors who have made movies with total revenue over 500 million and have directed at least 2 movies
SELECT 
	d.first_name,
	d.last_name,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue,
	COUNT(m.movie_id) AS directed_movies
FROM directors d
JOIN movies m
ON d.director_id = m.director_id
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
GROUP BY d.first_name, d.last_name
HAVING SUM(mr.domestic_revenue + mr.international_revenue) > 500000000 AND COUNT(m.movie_id) >= 2;

-- Find actors who have appeared in more than 2 different genres and have won at least 1 award
SELECT
	a.first_name,
	a.last_name,
	COUNT(DISTINCT mg.genre_id) AS appeared_in_different_genres,
	COUNT(DISTINCT aw.award_id) AS awards
FROM actors a
JOIN cast_members cm
ON a.actor_id = cm.actor_id
JOIN movies m
ON m.movie_id = cm.movie_id
JOIN movie_genres mg
ON m.movie_id = mg.movie_id
JOIN actor_awards aw
ON a.actor_id = aw.actor_id
GROUP BY a.first_name, a.last_name
HAVING COUNT(DISTINCT mg.genre_id) > 1 AND COUNT(DISTINCT aw.award_id) >= 1;

-- Find movies that have received more than 3 reviews with an average rating above 7
SELECT 
	m.title,
	COUNT(r.review_id) AS total_reviews,
	AVG(r.rating) AS average_rating
FROM movies m
JOIN reviews r
ON m.movie_id = r.movie_id
GROUP BY m.title
HAVING COUNT(r.review_id) > 3 AND AVG(r.rating) > 7;

-- Find production companies that have invested more than 100 million in movies released after 2015
SELECT
	pc.name,
	SUM(mpc.investment_amount) AS total_investment
FROM production_companies pc
JOIN movie_production_companies mpc
ON pc.company_id = mpc.company_id
JOIN movies m
ON m.movie_id = mpc.movie_id
WHERE EXTRACT(YEAR FROM m.release_date) > 2015
GROUP BY pc.name
HAVING SUM(mpc.investment_amount) > 100000000;

-- Find countries where more than 2 movies were filmed with a total budget exceeding 150 million
SELECT
	ml.country,
	COUNT(ml.movie_id) AS movies,
	SUM(m.budget) AS total_budget
FROM movie_locations ml
JOIN movies m
ON ml.movie_id = m.movie_id
GROUP BY ml.country
HAVING COUNT(ml.movie_id) > 2 AND SUM(m.budget) > 150000000;

-- Find genres where the average movie duration is over 120 minutes and at least one movie has won an Oscar
SELECT
	g.name,
	AVG(m.duration_minutes) AS movie_duration,
	COUNT(ma.award_id) AS total_awards
FROM genres g
JOIN movie_genres mg
ON g.genre_id = mg.genre_id
JOIN movies m
ON m.movie_id = mg.movie_id
JOIN movie_awards ma
ON m.movie_id = ma.movie_id
JOIN awards a
ON a.award_id = ma.award_id
WHERE a.award_type = 'Oscar'
GROUP BY g.name
HAVING AVG(m.duration_minutes) > 120 AND COUNT(a.award_id) > 0;

-- Find years where more than 3 movies were released with an average budget over 50 million
SELECT 
	EXTRACT(YEAR FROM m.release_date) AS release_year,
	COUNT(*) AS released_movies,
	AVG(m.budget) AS movie_budget
FROM movies m
GROUP BY EXTRACT(YEAR FROM m.release_date)
HAVING COUNT(*) > 3 AND AVG(m.budget) > 50000000;

-- Find actors who have played lead roles in more than 2 movies with a total revenue exceeding 200 million
SELECT 
	a.first_name,
	a.last_name,
	COUNT(*) AS total_movies_with_lead_role,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM actors a
JOIN cast_members cm
ON a.actor_id = cm.actor_id
JOIN movies m
ON m.movie_id = cm.movie_id
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
WHERE cm.is_lead_role = 'true'
GROUP BY a.first_name, a.last_name
HAVING COUNT(*) > 2 AND SUM(mr.domestic_revenue + mr.international_revenue) > 200000000;





-- Create a view that shows top-rated movies. Include: movie title, average rating, review count, director name
CREATE VIEW top_rated_movies AS
SELECT 
	m.title,
	AVG(r.rating) AS average_rating,
	COUNT(r.movie_id) AS review_count,
	d.first_name,
	d.last_name
FROM movies m
JOIN reviews r
ON m.movie_id = r.movie_id
JOIN directors d
ON d.director_id = m.director_id
GROUP BY m.title, d.first_name, d.last_name
HAVING COUNT(r.movie_id) > 0
ORDER BY average_rating DESC;

SELECT * FROM top_rated_movies;

-- Create a view for movie financial performance. Include: movie title, budget, total revenue, profit, ROI
CREATE VIEW movie_financial_performance AS
SELECT
	m.title,
	m.budget,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue,
	(SUM(mr.domestic_revenue + mr.international_revenue) - m.budget) AS profit,
    ((SUM(mr.domestic_revenue + mr.international_revenue) - m.budget) / m.budget) * 100 AS roi
FROM movies m
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
GROUP BY m.title, m.budget
ORDER BY m.title ASC;

SELECT * FROM movie_financial_performance;

-- Create a view for actor filmography. Include: actor name, movie count, genre list, total revenue
CREATE VIEW actor_filmography AS
SELECT 
	a.first_name,
	a.last_name,
	COUNT(cm.movie_id) AS movie_count,
	STRING_AGG(DISTINCT g.name, ', ') AS genre_list,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM actors a
JOIN cast_members cm
ON a.actor_id = cm.actor_id
JOIN movies m
ON m.movie_id = cm.movie_id
JOIN movie_genres mg
ON m.movie_id = mg.movie_id
JOIN genres g
ON g.genre_id = mg.genre_id 
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
GROUP BY a.first_name, a.last_name
ORDER BY movie_count DESC;

SELECT * FROM actor_filmography;

-- Create a view for genre statistics. Include: genre name, movie count, average rating, total revenue
CREATE VIEW genre_statistics AS
SELECT 
    g.name,
	COUNT(mg.movie_id) AS movie_count,
	AVG(r.rating) AS average_rating,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM genres g
JOIN movie_genres mg
ON g.genre_id = mg.genre_id
JOIN movies m
ON m.movie_id = mg.movie_id
JOIN reviews r
ON m.movie_id = r.movie_id
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
GROUP BY g.name
ORDER BY movie_count DESC;

SELECT * FROM genre_statistics;

-- Create a view for production company performance. Include: company name, movie count, total investment, total revenue
SELECT * FROM movie_production_companies;
SELECT * FROM production_companies;
SELECT * FROM movies;
SELECT * FROM movie_revenues;

CREATE VIEW production_company_performance AS
SELECT 
    pc.name,
	COUNT(mpc.movie_id) AS movie_count,
	SUM(mpc.investment_amount) AS total_investment,
	SUM(mr.domestic_revenue + mr.international_revenue) AS total_revenue
FROM production_companies pc
JOIN movie_production_companies mpc
ON pc.company_id = mpc.company_id
JOIN movies m
ON m.movie_id = mpc.movie_id
JOIN movie_revenues mr
ON m.movie_id = mr.movie_id
GROUP BY pc.name
ORDER BY movie_count DESC;

SELECT * FROM production_company_performance;
    
	


	


	
	
	