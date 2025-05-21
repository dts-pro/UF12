# 2. REPÀS DEL LLENGUATGE SQL

En aquest apartat es dona un repàs als aspectes més rellevants del llenguatge SQL de manipulació de bases de dades relacionals que ja hauràs vist en el mòdul de Bases de Dades. Te vindrà bé per a repassar conceptes. Si no has cursat aquest mòdul, és molt important que lliges aquest apartat amb atenció. No és necessari tindre un coneixement avançat sobre el llenguatge SQL però sí els aspectes més bàsics que es cobreixen en aquest apartat.

SQL inclou sentències tant de creació de dades (CREATE) com de manipulació de dades (INSERT, UPDATE i DELETE) així com de consulta de dades (SELECT).

La sintaxi del llenguatge SQL està format per quatre grups sintàctics que poden combinar-se en diverses de les sentències més habituals. Aquests 4 grups són: Comandos, Clàusules, Operadors i Funcions. En aquest apartat repassarem només els tres primers.

## 2.1 Comandaments

Existeixen tres tipus de comandos en SQL:

- Els **DDL** (Data Definition Language), que permeten crear, modificar i esborrar noves bases de dades, taules, camps i vistes.
- Els **DML** (Data Manipulation Language), que permeten introduir informació en la BD, esborrar-la i modificar-la.
- Els **DQL** (Data Query Language), que permeten generar consultes per a ordenar, filtrar i extraure informació de la base de dades.

Els comandos DDL són:

- **CREATE**:  Crear noves taules, camps i índexs.
- **ALTER**: Modificació de taules afegint camps o modificant la definició dels camps.
- **DROP**: Instrucció per a eliminar taules, camps i índexs.

El comandos DML són:

- **INSERT**: Inserir registres a la base de dades.
- **UPDATE**: Instrucció que modifica els valors dels camps i registres especificats en els criteris.
- **DELETE**: Eliminar registres d'una taula de la base de dades.

El principal comando DQL és:

- **SELECT**: Consulta de registres de la base de dades que compleixen un criteri determinat.

## 2.2 Clàusules

Les clàusules són condicions de modificació, utilitzades per a definir les dades que es desitgen seleccionar o manipular:

- **FROM**: Utilitzada per a especificar la taula de la qual se seleccionaran els registres.
- **WHERE**: Clàusula per a detallar les condicions que han de reunir els registres resultants.
- **GROUP** BY: Utilitzat per a separar registres seleccionats en grups específics.
- **HAVING**: Utilitzada per a expressar la condició que ha de complir cada grup.
- **ORDER BY**: Utilitzada per a ordenar els registres seleccionats d'acord amb un criteri donat.

## 2.3 Operadors

Operadors lògics:

- **AND**: Avalua dues condicions i retorna el valor cert, si totes dues condicions són certes.
- **OR**: Avalua dues condicions i retorna el valor cert, si alguna de les dues condicions és certa.
- **NOT**: Negació lògica. Retorna el valor contrari a l'expressió.

Operadors de comparació:

- **<** [...] menor que [...]
- **\>** [...] major que [...]
- **<>** [...] diferent a [...]
- **<=** [...] menor o igual que [...]
- **\>=** [...] major o igual que [...]
- **=** [...] igual que [...]
- **BETWEEN**: Especifica un interval de valors
- **LIKE**: Compara un model
- **IN**: Operadors per a especificar registres d'una taula

## 2.4 Exemples de sentències SQL

Per a **crear una base de dades**:

```sql
CREATE DATABASE <nom_de_la_taula>
```

>Exemple:
>
>```sql
>CREATE DATABASE tendaonline;
>```

Per a **eliminar** una base de dades:

```sql
DROP DATABASE <base_de_dades>
```

>Exemple:
>
>```sql
>DROP DATABASE tendaonline;
>```

Per a **utilitzar** una base de dades: 

```sql
USE <base de dades>
```

>Exemple:
>
>```sql
>USE tendaonline
>```
><i><u>NOTA</u></i>: Amb USE indiquem sobre quina base de dades volem treballar (podem tindre diverses).

Per a **crear una taula**: 

```sql
CREATE TABLE <nom_de_la_taula> (<columna 1> [,<columna 2] ...)
```

On \<columna_n> es formula segons la següent sintaxi:

```sql
<columna_n> <tipus_de_dada> [DEFAULT <expressio>] [<const1> [<const2>]...]
```

La clàusula **DEFAULT** permet especificar un valor per omissió per a la columna. Opcionalment, per a indicar la forma o característica de cada columna, es poden utilitzar les constants: **NOT NULL**, **UNIQUE** o **PRIMARY KEY**.

La clàusula PRIMARY KEY s'utilitza per a definir la columna com a clau principal de la taula. Això suposa que la columna no pot contindre valors nuls ni duplicats. Una taula pot contindre una sola restricció PRIMARY KEY.

La clàusula UNIQUE indica que la columna no permet valors duplicats. Una taula pot tindre diverses restriccions UNIQUE.

>Exemple:
>
>```sql
>CREATE TABLE clients(
>nom CHAR(30) NOT NULL,
>direccio CHAR(30) NOT NULL,
>telefon CHAR(12) PRIMARY KEY NOT NULL,
>observacions CHAR(240)
>);
>```

Per a **esborrar una taula**:

```sql
DROP TABLE <nom_de_la_taula>
```

>Exemple: esborrar la taula 'clients'
>
>```sql
>DROP TABLE clients;
>```

Per a **inserir registres en una taula**:

```sql
INSERT INTO <nom_de_la_taula> [(columna1, columna2, ...)] VALUES (valor1, valor2, ...);
```

>Exemple: Inserim dos nous registres en la taula clients
>
>```sql
>INSERT INTO clients VALUES 
>('Pepito Pérez','VALÈNCIA','963003030','Ninguna'), 
>('Maria Martínez','VALÈNCIA','961002030','Ninguna');
>```

Per a **modificar registres ja existents** en una taula:

```sql
UPDATE <nom_de_la_taula> SET <columna1> = (<expressio1> | NULL) [<columna2> = ...]...  
WHERE <condició_de_cerca>
```

>Exemples: Canviem el camp 'direcció' del registre el telèfon del qual és '963003030'
>
>```sql
>UPDATE clients SET direccio = 'Port de Sagunt'
>WHERE telefon = '963003030';
>```

Per a **esborrar registres d'una taula**:

```sql
DELETE FROM <taula> WHERE <condició de cerca>
```

>Exemple: Esborrem els registres el camp dels quals 'telefon' és 963003030.
>
>```sql
>DELETE FROM clients WHERE telefon = '963003030';
>```

Per a **realitzar una consulta**, és a dir, obtindre registres d'una base de dades:

```sql
SELECT [ALL | DISTINCT] <llista de selecció>
FROM <taules>
WHERE <condicions de selecció>
[ORDER BY <columna1> [ASC|DESC][, <columna2>[ASC|DESC]]...]
```

>Alguns exemples senzills:
>
>**Obtenim tots els registres** de la taula 'clients':
>
>```sql
>SELECT * FROM clients;
>```
>
>**Obtenim només el camp 'nom'** de tots els registres de la taula 'clients':
>
>```sql
>SELECT nom FROM clients;
>```
>
>**Obtenim només els camps 'nom' i 'telefon'** de la taula 'clients':
>
>```sql
>SELECT nom, telefon FROM clients;
>```
>
>**Obtenim tots els registres** de 'clients' **ordenats per nom**:
>
>```sql
>SELECT * FROM clients ORDER BY nom;
>```
>
>**Obtenim només els noms i telèfons** dels clients, **ordenats per nom**:
>
>```sql
>SELECT nom, telefon FROM clients ORDER BY nom;
>```
>
>**Obtenim tots els registres** de 'clients' **on el camp 'telefon' és major que 1234**:
>
>```sql
>SELECT * FROM clients WHERE telefon > '1234';
>```
>
>**Obtenim tots els registres** de 'clients' en els quals **el camp 'telefon' comença per 91**:
>
>```sql
>SELECT * FROM clients WHERE telefon LIKE '91';
>```
