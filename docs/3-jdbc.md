# 3. JDBC

Java pot connectar-se amb diferents SGBD i en diferents sistemes operatius. Independentment del mètode en què s'emmagatzemen les dades ha d'existir sempre un **mediador** entre l'aplicació i el sistema de base de dades i en Java aqueixa funció la realitza **JDBC**.

>[!WARNING] <strong>ATENCIÓ!:</strong>
>Per a la connexió a les bases de dades utilitzarem la API estàndard de JAVA denominada JDBC (Java Data Base Connection)

JDBC és un API (Application Programming Interface) inclòs dins del llenguatge Java per a l'accés a bases de dades. Consisteix en un conjunt de classes i interfícies escrites en Java que ofereixen un complet API per a la programació amb bases de dades, per tant és l'única solució 100% Java que permet l'accés a bases de dades.

JDBC és una especificació formada per una col·lecció d'interfícies i classes abstractes, que tots els fabricants de drivers han d'implementar si volen realitzar una implementació del seua driver 100% Java i compatible amb JDBC (JDBC-compliant driver). Pel fet que JDBC està escrit completament a Java també posseeix l'avantatge de ser independent de la plataforma.

>[!WARNING] <strong>ATENCIÓ!:</strong>
>No serà necessari escriure un programa per a cada tipus de base de dades, una mateixa aplicació escrita utilitzant JDBC podrà manejar bases de dades Oracle, Sybase, SQL Server, etc.

A més podrà executar-se en qualsevol sistema operatiu que posseïsca una Màquina Virtual de Java, és a dir, seran aplicacions completament independents de la plataforma. Unes altres APIS que se solen utilitzar bastant per a l'accés a bases de dades són DAO (Data Access Objects) i RDO (Remote Data Objects), i ADO (ActiveX Data Objects), però el problema que ofereixen aquestes solucions és que només són per a plataformes Windows.

JDBC té les seues classes en el paquet java.sql i altres extensions en el paquet javax.sql.

## 3.1 Funcions del JDBC

Bàsicament el API JDBC fa possible la realització de les següents tasques:

- Establir una connexió amb una base de dades.
- Enviar sentències SQL.
- Manipular dades.
- Processar els resultats de l'execució de les sentències.

## 3.2 Drivers JDBC

Els drivers ens permeten connectar-nos amb una base de dades determinada. Existeixen **quatre tipus de drivers JDBC**, cada tipus presenta una filosofia de treball diferent. A continuació es passa a comentar cadascun dels drivers:

- **JDBC-ODBC bridge plus ODBC driver (tipus 1)**: permet al programador/a accedir a fonts de dades ODBC existents mitjançant JDBC. El JDBC-ODBC Bridge (pont JDBC-ODBC) implementa operacions JDBC traduint-les a operacions ODBC, es troba dins del paquet sun.jdbc.odbc i conté llibreries natives per a accedir a ODBC. Al ser usuari de ODBC, depenem de les dll de ODBC i això limita la quantitat de plataformes on es pot executar l'aplicació.

- **Native-API partly-Java driver (tipus 2)**: són similars als drivers de tipus 1, encara que també necessiten una configuració en la màquina client. Aquest tipus de driver converteix anomenades JDBC a anomenades de Oracle, Sybase, Informix, DB2 o altres SGBD. Tampoc es poden utilitzar dins de miniaplicacions al posseir codi natiu.

- **JDBC-Net pure Java driver (tipus 3)**: Aquests controladors estan escrits en Java i s'encarreguen de convertir les anomenades JDBC a un protocol independent de la base de dades i a més en l'aplicació servidora utilitzen les funcions natives del sistema de gestió de base de dades mitjançant l'ús d'una biblioteca JDBC en el servidor. L'avantatge d'aquesta opció és la portabilitat.

- **JDBC de Java client (tipus 4)**: Aquests controladors estan escrits en Java i s'encarreguen de convertir les anomenades JDBC a un protocol independent de la base de dades i en l'aplicació servidora utilitzen les funcions natives del sistema de gestió de base de dades sense necessitat de biblioteques. L'avantatge d'aquesta opció és la portabilitat. Són com els drivers de tipus 3 però sense la figura de l'intermediari i tampoc requereixen cap configuració en la màquina client. Els drivers de tipus 4 es poden utilitzar per a servidors Web de grandària petita i mitjana, així com per a intranets.
