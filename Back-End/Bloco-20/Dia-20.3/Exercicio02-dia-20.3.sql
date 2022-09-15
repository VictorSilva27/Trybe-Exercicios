SELECT * FROM Scientists.Scientists
WHERE name LIKE '%e%';

SELECT name FROM Scientists.Projects
WHERE code LIKE 'A%'
ORDER BY name;

SELECT code, name FROM Scientists.Projects
WHERE code LIKE '%3%'
ORDER BY name;

SELECT COUNT(*) FROM Scientists.AssignedTo
WHERE project = 'AeH3'
OR project = 'Ast3'
OR project = 'Che1';

SELECT * FROM Scientists.Projects
WHERE hours > 500;

SELECT * FROM Scientists.Projects
WHERE hours BETWEEN 250 AND 800;
-- ou
SELECT * FROM Scientists.Projects
WHERE hours >= 250 AND hours <= 800;

SELECT name, code FROM Scientists.Projects
WHERE name NOT LIKE 'A%';

SELECT name FROM Scientists.Projects
WHERE name LIKE '%H%';