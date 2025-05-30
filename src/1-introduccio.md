# 1. Introducció

>[!IMPORTANT] <strong>IMPORTANT!:</strong>
> Una **base de dades** és una col·lecció de dades classificades i estructurades que són guardats en un o diversos fitxers, però referenciats com si d'un únic fitxer es tractara.

Per a crear i manipular bases de dades relacionals, existeixen en el mercat diversos sistemes de gestió de bases de dades (SGBD); per exemple, Access, SQL Server, Oracle i DB2. Altres SGBD de lliure distribució són MySQL/MariaDB i PostgreSQL.

Les dades d'una base de dades relacional s'emmagatzemen en taules lògicament relacionades entre si utilitzant camps clau comuns. Al seu torn, cada taula disposa les dades en files i columnes. Per exemple, pensa en una relació de clients, a les files se les denomina **registres**, i a les columnes, **camps**.

Els usuaris d'un sistema administrador de bases de dades poden realitzar sobre una determinada base operacions com inserir, recuperar, modificar i eliminar dades, així com afegir noves taules o eliminar-les. Aquesta operacions s'expressen generalment en un llenguatge denominat **SQL**.

Abans de començar necessitem un **sistema de gestió de base de dades** instal·lat en el nostre ordinador en el qual poder tindre bases de dades a les quals connectar-nos des dels nostres programes escrits en llenguatge Java. Si ja tenim un instal·lat (per exemple MySQL, MariaDB, *PostgreSQL, etc.) podem utilitzar-lo si volem. De totes maneres en aquesta unitat us proposem utilitzar **XAMPP** (**Windows/Linux/iOs** **A**pache **M**ariaDB **P**HP **P**erl) que incorpora un servidor web i
l'eina phpMyAdmin per a treballar amb bases de dades. Ho pots descarregar des de l'adreça: https://www.apachefriends.org 

Per a la seua instal·lació tan sols has de seguir els passos de l'instal·lador.

![XAMPP](/uf12/xampp_web.jpg)

Veureu que les versions més actuals de XAMPP han substituït MySQL per MariaDB. No passa res, tots dos són compatibles i poden utilitzar-se indistintament.
