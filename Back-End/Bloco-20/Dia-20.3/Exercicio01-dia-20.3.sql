SELECT * FROM PecasFornecedores.Pecas
WHERE name LIKE '%GR%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE peca = 2
ORDER BY fornecedor;

SELECT peca, Preco, fornecedor FROM PecasFornecedores.Fornecimentos
WHERE fornecedor LIKE '%N%';

SELECT * FROM PecasFornecedores.Fornecedores
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

SELECT COUNT(*) FROM PecasFornecedores.Fornecedores
WHERE code LIKE '%F%';

SELECT * FROM PecasFornecedores.Fornecimentos
WHERE preco BETWEEN 15 AND 40
ORDER BY preco ASC;

SELECT * FROM PecasFornecedores.Vendas
WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';