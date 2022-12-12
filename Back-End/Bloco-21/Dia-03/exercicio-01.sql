CREATE TABLE setor(
	setor_id INT PRIMARY KEY AUTO_INCREMENT,
    setor VARCHAR(20)
)ENGINE=InnoDB;

INSERT INTO setor(setor)
VALUES ('Adiministração'),('Vendas'),('Operacional'),('Estratégico'),('Marketing');

CREATE TABLE funcionario(
	funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(20),
    sobrenome VARCHAR(20),
    contato VARCHAR(30),
    telefone VARCHAR(15),
    data_cadastro VARCHAR(50)
)ENGINE=InnoDB;

INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(12, 'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', '2020-05-05 08:50:25');
INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(13, 'André', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', '2020-02-05 00:00:00');
INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(14, 'Cíntia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', '2020-05-05 10:55:35');
INSERT INTO funcionario (funcionario_id, nome, sobrenome, contato, telefone, data_cadastro) VALUES(15, 'Fernanda', 'Mendes', 'fernandamendes@yahoo.com', '(33)99200-1556', '2020-05-05 11:45:40');

CREATE TABLE funcionario_setor(
	funcionario_id INT NOT NULL,
    setor_id INT NOT NULL,
    FOREIGN KEY (funcionario_id) REFERENCES funcionario(funcionario_id),
    FOREIGN KEY (setor_id) REFERENCES setor(setor_id)
)ENGINE=InnoDB;

INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 1);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(12, 2);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(13, 3);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 4);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(14, 2);
INSERT INTO funcionario_setor (funcionario_id, setor_id) VALUES(15, 5);
