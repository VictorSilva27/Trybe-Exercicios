SELECT * FROM PiecesProviders.Pieces;
SELECT * FROM PiecesProviders.Providers;
SELECT * FROM PiecesProviders.Provides;

SELECT piece, price FROM PiecesProviders.Provides
WHERE provider = 'RBT';

SELECT * FROM PiecesProviders.Provides
ORDER BY price DESC
LIMIT 5;

SELECT provider, price FROM Provides
ORDER BY price DESC
LIMIT 4
OFFSET 2;

SELECT * FROM PiecesProviders.Provides
WHERE provider = 'HAL'
ORDER BY price DESC;

SELECT COUNT(provider) FROM PiecesProviders.Provides
WHERE piece = 1;