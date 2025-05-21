# 4. Accés a Base de dades des de NetBeans

Sempre que vulguem treballar amb el servidor i les bases de dades del mateix haurem d'iniciar l'eina XAMPP descarregada anteriorment i iniciar els serveis Apache i MySQL/MariaDB:

<div style="border: 6px solid rgb(240, 102, 61); max-width: 85%; margin: 0 auto; text-align: center;">
    <img src="/uf12/XAMPP.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## 4.1 Instal·lació del JDBC Driver

Per a poder connectar-se a una base de dades MySQL/MariaDB des de l'explorador de NetBeans necessitem instal·lar el driver mysql-connector de Java. Primer cal descarregar-lo de l'adreça web http://dev.mysql.com/downloads/connector/j/ En l'opció de sistema operatiu devem seleccionar "Platform Independent" i després descarregar el ZIP.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/descargar_driver_mySQL-connector.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

No fa falta registrar-se per a descarregar-lo, només s’ha de prémer en “No thanks, just start my download.” Descomprimeix el ZIP i cerca l'arxiu mysql-connector-java-9.2.0.jar. Tingues en compte que el número de versió pot ser diferent a la que es mostra en la imatge.

Ara **obri NetBeans**, veu al **panell `Services` → `Databases`**, fes **clic dret en l'opció `Drivers`** i selecciona l'opció **`New Driver`** del menú contextual. Es mostrarà el diàleg New JDBC Driver.

<div style="display: flex;">

<div style="flex: 0.48; padding: 10px;">

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/new_driver.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

</div>

<div style="flex: 1; padding:10px;">

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/new_driver2.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

</div>
</div>

Fes clic en `Add...` i selecciona el fitxer *mysql-connector-java-9.2.0.jar* que has descarregat anteriorment. Una vegada seleccionat el fitxer ens ha d'emplenar la classe principal del Driver que en el nostre cas ha de ser com.mysql.cj.jdbc.Driver i el nom del nostre driver, per exemple *MySQL (Connector/J driver)*.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 85%; margin: 0 auto; text-align: center;">
    <img src="/uf12/add_new_driver.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

 

>[!NOTE] <strong>NOTA:</strong>
>Si estàs utilitzant l'última versió de NetBeans <u>és possible que en `Services` → `Databases` → `Drivers` ja t'aparega l'opció ‘MySQL (Connector/J driver)’</u>. Malgrat això pot ser que necessites instal·lar el driver. Dona-li al driver amb clic dret → `Connect Using...` i comprova si en la finestra t'apareix el missatge "driver file is missing". En tal cas, dona-li a `Add driver` i selecciona l'arxiu jar esmentat anteriorment.

Arribats a aquest punt ja tenim enllaçat el driver JDBC de MySQL/MariaDB des del Database Explorer. Ara el que ens queda és crear una connexió amb una base de dades MySQL/MariaDB.

## 4.2 Connexió a base de Dades mitjançant el JDBC Driver

Fes **clic dret** en **MySQL (Connector/J driver)** i selecciona l'opció `Connect Using...`.

Apareixerà la finestra `New Connection Wizard`:

<div style="border: 6px solid rgb(240, 102, 61); max-width: 90%; margin: 0 auto; text-align: center;">
    <img src="/uf12/new_connection_wizard.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

- **Driver Name**: El driver que volem utilitzar. En aquest cas *MySQL (Connector/J driver)*.
- **Host**: L'adreça IP o nom de domini de la màquina on està instal·lat el servidor MySQL. En el nostre cas *localhost* (màquina local).
- **Port**: Port de connexió. MySQL utilitza el *3306* per defecte.
- **Database**: El nom de la base de dades a la qual volem accedir. Podem deixar aquest camp buit per a poder accedir a totes les que existisquen en el servidor.
- **User Name**: Nom d'usuari. Utilitzarem *root* (administrador).
- **Password**: Contrasenya de l'usuari. Ho deixarem en blanc ja que després d'instal·lar MySQL la contrasenya per defecte està buida. En el nostre cas per a practicar i aprendre això serà suficient, però en un entorn real tindríem que configurar una contrasenya robusta.
- **JDBC URL**: La URL de connexió amb el format "jdbc:mysql://HOST:PORT" Es crea automàticament a partir de la informació anterior. És possible que incloga per defecte variables com ‘zeroDateTimeBehavior’ en la imatge.

Fes clic en `Finalitzar`. Si tot va bé, en `Services` → `Databases` apareixerà una nova connexió anomenada *jdbc:mysql://localhost:3306… [root on Default schema]*.

>[!NOTE] <strong>NOTA:</strong>
>Si falla a causa d'un error ‘server time zone’ pots solucionar-lo afegint a l'URL la variable serverTimezone amb el valor UTC: **jdbc:mysql://localhost:3306/?serverTimezone=UTC**

<div style="border: 6px solid rgb(240, 102, 61); max-width: 90%; margin: 0 auto; text-align: center;">
    <img src="/uf12/database_creada.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

Si despleguem la connexió creada veurem que podem accedir a totes les bases de dades, taules, etc. emmagatzemades en el servidor al qual estem connectats (a cadascú li apareixeran les bases de dades que tinga en el seu sistema, poden ser diferents a les de la imatge).

**Això és molt útil ja que ens permetrà accedir còmodament a la base de dades, realitzar consultes, executar comandos, etc. mentre desenvolupem un projecte amb NetBeans**.

Per a executar un comando sobre la base de dades a la qual ens hem connectat només cal fer clic dret sobre la connexió i seleccionar l'opció `Execute Command...`. S'obrirà un panell en l'editor central en el que podrem introduir sentències SQL (tantes com vulguem) i executar-les fent clic en la icona **`Run SQL`**:

<div style="border: 6px solid rgb(240, 102, 61); max-width: 90%; margin: 0 auto; text-align: center;">
    <img src="/uf12/execute_command.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

 
<div style="border: 6px solid rgb(240, 102, 61); max-width: 90%; margin: 0 auto; text-align: center;">
    <img src="/uf12/crear_database_prova.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

Prova d'executar la sentència *CREATE DATABASE prova;* com en la imatge. En el panell de baix es mostrarà un missatge amb el resultat de l'execució.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 85%; margin: 0 auto; text-align: center;">
    <img src="/uf12/crear_database_output.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

En aquest cas indica "Executed successfully" (s'ha executat satisfactòriament). En la connexió JDBC del panell de l'esquerra apareixerà la nova base de dades "prova" que hem creat.

Cal tindre en compte que com hem configurat aquesta connexió sense especificar cap base de dades concreta, si volguérem executar sentències sobre una base de dades de les disponibles hauríem d'utilitzar sempre la sentència *USE nom_de_base_de_dades*. Per exemple:

```sql
USE tendaonline;
SELECT * FROM clients;
```

Si treballarem habitualment sobre la mateixa base de dades i volem evitar haver d'escriure sempre la sentència USE en totes les execucions de sentències SQL, podem crear una connexió configurada per a utilitzar una base de dades concreta. Per a això primer hauríem de seguir el mateix procediment explicat en aquest apartat (**Clic dret en MySQL (Connector/J driver)** → `Connect Using...` → **Introduir les dades en el diàleg New Connection Wizard** i en el camp **Database** escriure la base de dades desitjada).

En els següents apartats veurem alguns exemples d'execució de sentències SQL utilitzant aquesta nova connexió a la base de dades "prova".

## 4.3 Crear una taula

Des del IDE de NetBeans podem crear taules de dues formes: per sentències SQL o utilitzant un assistent de creació de taules.

### 4.3.1 Mitjançant sentències SQL

Seleccionem la connexió jdbc:mysql://localhost:3306/prova creada en l'apartat anterior. Fem clic dret sobre ella → Execute Command... i introduïm el següent comando SQL:

```sql
USE prova;

CREATE TABLE venedors (
    id INT NOT NULL AUTO_INCREMENT,
    nom VARCHAR(50) NOT NULL DEFAULT '',
    data_ingres DATE NOT NULL DEFAULT '2000-01-01',
    salari FLOAT NOT NULL DEFAULT 0,
    PRIMARY KEY (id)
);
```

Si tot ha anat bé dins de ‘prova → Tables’ veurem la nova taula. És possible que necessitem fer clic dret → Refresh (sobre prova) perquè s’actualitze la informació.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 34%; margin: 0 auto; text-align: center;">
    <img src="/uf12/taula_creada.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

### 4.3.2 Mitjançant l'assistent de creació de taules

Sobre la carpeta "Tables" de la connexió desitjada, fem clic dret i triem `Create Table`. S'obrirà l'assistent de creació de taules. Afegim totes les columnes que necessitem mitjançant l'opció `Add Column` (indicant les opcions de cada columna) i fem clic en `OK`.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 80%; margin: 0 auto; text-align: center;">
    <img src="/uf12/crear_taula_manualment.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## 4.4 Inserir dades

Executar el comando INSERT INTO… sobre la connexió desitjada. Per exemple:

```sql
INSERT INTO venedors VALUES (1, 'Pedro Gil', '2017-04-11', 15000);
```

<div style="border: 6px solid rgb(240, 102, 61); max-width: 90%; margin: 0 auto; text-align: center;">
    <img src="/uf12/inserir_dades.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## 4.5 Consultar valors

Executar el comando SELECT… sobre la connexió desitjada. Per exemple:

```sql
SELECT * FROM venedors;
```

<div style="border: 6px solid rgb(240, 102, 61); max-width: 90%; margin: 0 auto; text-align: center;">
    <img src="/uf12/consultar_valor.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>
