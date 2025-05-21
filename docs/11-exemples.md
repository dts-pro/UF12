# Exemples

## Exemple 1

Creació d’una base de dades senzilla de prova utilitzant sentències SQL.

**CONNEXIÓ A LA BASE DE DADES**

Seguint els passos del apartat 4 de la teoria crea una connexió nova. 

**CREACIÓ DE LA BASE DE DADES**

Anem a crear una base de dades nova utilitzant sentències SQL.
Per a executar un comando sobre la base de dades cal fer clic dret sobre la connexió i seleccionar l'opció `Execute Command...`.
S'obrirà un panell en l'editor central on podrem introduir sentències SQL i desprès fer clic en la icona `Run SQL`.

```sql
CREATE DATABASE prova;
```

**CONNEXIÓ A LA NOVA BASE DE DADES**

Per a evitar  haver de introduir en cada execució la identificació de la BD amb la que treballem (USE prova;) configurarem una nova connexió.

- Fem clic dret en ‘MySQL (Connector/J driver)’ → `Connect Using...`
- S’obrirà la finestra New Connection Wizard i en el camp Database posarem el nom de la nostra BD: prova.

Apareixerà una nova connexió.

**CREACIÓ D’UNA TAULA**

- Seleccionem la connexió jdbc:mysql://localhost:3306/prova...  
- Fem clic dret sobre ella → Execute Command
- S'obrirà un panell en l'editor central on podrem introduir sentències SQL i després fer clic en la icona ‘Run SQL’.

```sql
CREATE TABLE venedors ( 
id int NOT NULL auto_increment, 
nom varchar(50) NOT NULL default '', 
data_ingres date NOT NULL default '0000-00-00', 
salari float NOT NULL default '0', 
PRIMARY KEY (id) ); 
```

Nota: Depenent de com estiga configurada la nostra instal·lació podem trobar problemes al declarar el valor per defecte del camp de tipus date i posar-lo a 0’s. Si és així i no volem modificar el paràmetres de la instal·lació simplement eliminarem el text *default '0000-00-00'*.

**EXECUCIÓ DE SENTÈNCIES SQL**

- Seguint el passos del punt anterior per obrir-nos una altra finestra, o directament substituint el text en la que ja tenim oberta introduirem les següent instruccions. 
- Inserim una fila. Introduim la sentències SQL i després fer clic en la icona `Run SQL`.

```sql
INSERT INTO venedors
VALUES (1, 'Pedro Gil', '2017-04-11', 15000);  
```

- Consultem el contingut de la taula. Introduim la sentències SQL i després fer clic en la icona `Run SQL`.

```sql
SELECT * FROM venedors
```

PRACTICA

- Inserís més dades en la taula i consulta-les.
- Crea una altra taula, per exemple de productes, amb diversos camps. Insereix algunes dades i consultar-les.

## Exemple 2

Importació d’una base de dades i execució de consultes.

NOTA IMPORTANT: L'objectiu d'aquesta pràctica és aprendre a importar una base de dades i fer algunes consultes bàsiques. El material aportat l’última part de l’exemple és molt més ampli i compren una part relacionada amb bases de dades i el llenguatge SQL amb la finalitat de que pugueu practicar o amplieu coneixements si vos interessa. Es a dir, el material aportat en aquesta última part és un material d’ajuda, no un contingut avaluable.

**IMPORTACIÓ DE LA BD uf12_empresa.sql**

Partirem del fet que ja tenim Xampp arrancat i amb la connexió general a bases de dades connectada.

- Executarem la instrucció:

```sql
CREATE DATABASE uf12_empresa;
```

Veurem que dins de la connexió ja ens apareix la nostra BD.

- Fem clic dret en  ‘MySQL (Connector/J driver)’ → ‘Connect Using...’
- S’obrirà la finestra New Connection Wizard i en el camp Database posarem el nom de la nostra BD: uf12_empresa.

Apareixerà una nova connexió.

- Anem al nostre navegador i introduïm en l’URL la paraula localhost (o bé la IPE 127.0.0.1).
- S’ens obrirà la pantalla de Xampp i en el menú de capçalera farem clic en `phpMyAdmin`.
- En la nova finestra ens situarem sobre la nostra BD i polsarem el botó `Importar`.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exemple2_1.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

- Cercarem la base de dades uf12_empresa.sql que prèviament ens haurem descarregat des de Aules al nostre ordinador.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exemple2_2.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

- Una vegada seleccionada, ens desplaçarem al final de la pantalla i polsarem el botó `Importar`.
- Podrem veure que s’ha incorporat un conjunt de taules a la nostra BD, les quals tenen ja totes registres creats.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 40%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exemple2_3.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

- Tornem a NetBeans per a verificar que ja tenim la BD carregada. Si no apareixen les taules simplement haurem de fer clic dret sobre la BD i seleccionar `Refresh`.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 40%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exemple2_4.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

**MODEL DE LA BASE DE DADES uf12_empresa**

La base de dades està formada per cinc taules, on cada taula emmagatzema informació referent a un tipus particular important. El diagrama de la base de dades es pot veure a la figura següent.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exemple2_5.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

La taula OFICINES emmagatzema dades sobre cadascuna de les cinc oficines de vendes incloent la ciutat on està localitzada l'oficina, la regió de vendes a què pertany, etc.

La taula CLIENTS emmagatzema dades sobre cada client, com ara el nom de l'empresa, el límit de crèdit i el venedor que atén el client.

La taula REPVENTES emmagatzema el número d'empleat, el nom, l'edat, les vendes anuals fins ara i altres dades referents a cada venedor.

La taula PRODUCTES emmagatzema dades sobre cada producte disponible per a venda, tal com el fabricant, el número del producte, la descripció i el preu.

La taula COMANDES porta el compte de cada comanda remesa per un client, identificant el venedor que va acceptar la comanda, el producte sol·licitat, la quantitat i l'import de la comanda, etc. Per simplicitat, cada comanda afecta un sol producte.

**EXECUCIÓ DE CONSULTES**

L’aprenentatge de SQL no forma part del contingut del nostre mòdul. No obstant això, hem inclòs aquest arxiu que conté una àmplia varietat de consultes SELECT sobre la base de dades que hem creat amb la finalitat de que pugueu practicar o amplieu coneixements. Es a dir, es tracta de material d’ajuda, no de contingut avaluable.

En la plataforma Aules trobarem l’arxiu uf12_empresa-SQL.txt que conté un joc de consultes on hi ha una amplia veritat d’instruccions SELECT amb tots els paràmetres que es poden utilitzar amb aquesta sentència.
