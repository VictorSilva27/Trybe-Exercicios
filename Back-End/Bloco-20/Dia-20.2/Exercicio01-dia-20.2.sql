SELECT "This is SQL Exercise, Practice and Solution";
SELECT 100, 200, 300;
SELECT 10 + 15;
SELECT 2 * 2 * 3 / 2;

SELECT * FROM Scientists.Scientists;

SELECT name AS 'nome_do_projeto', hours AS 'tempo_de_trabalho' FROM Scientists.Projects;

SELECT name AS 'Nome_Cientista' FROM Scientists.Scientists
ORDER BY name ASC;

SELECT name AS 'nome_do_projeto' FROM Scientists.Projects
ORDER BY name ASC;
SELECT CONCAT('O projeto ', name, ' precisou de ', hours, ' horas para ser concluído.') AS 'mensagem' FROM Scientists.Projects;

SELECT name, hours FROM Scientists.Projects
ORDER BY hours DESC LIMIT 3;

SELECT DISTINCT project FROM Scientists.AssignedTo;

SELECT name FROM Scientists.Projects
ORDER BY hours DESC LIMIT 1;

SELECT name FROM Scientists.Projects
ORDER BY hours ASC LIMIT 1 OFFSET 1;

SELECT * FROM Scientists.Projects
ORDER BY hours ASC LIMIT 5;

SELECT CONCAT('Existem ', COUNT(*), ' cientistas na tabela Scientists') AS 'mensagem' FROM Scientists.Scientists;
SELECT * FROM Scientists.Scientists;
