SELECT m.title, b.domestic_sales, b.international_sales
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id;

SELECT m.title, (b.domestic_sales + b.international_sales)
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id;

SELECT m.title, b.rating
FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b
ON m.id = b.movie_id
ORDER BY rating DESC;

SELECT * FROM Pixar.Theater t
LEFT JOIN Pixar.Movies m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT * FROM Pixar.Theater t
RIGHT JOIN Pixar.Movies m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT * FROM Pixar.Movies m
INNER JOIN Pixar.BoxOffice b ON b.movie_id = m.id
WHERE m.theater_id IS NOT NULL AND b.rating > 8;
