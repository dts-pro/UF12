# Introducció

Per a començar a realitzar els exercicis s'ha de crear la base de dades, així com la taula "\*productos1" i inserida diversos productes. Per a això:

1. **Crea la base de dades anomenada "\*uf12"**
2. **Crea la taula anomenada "productos1"**:

```sql
CREATE TABLE IF NOT EXISTS productos ( 
CODIGO_ARTICULO VARCHAR(10) PRIMARY KEY, 
SECCION VARCHAR(50) NOT NULL, 
NOMBRE VARCHAR(50) NOT NULL, 
PRECIO DOUBLE NOT NULL, 
PAIS VARCHAR(50) NOT NULL, 
FECHA DATE NOT NULL); 
```

3. Inserta els registres en la taula producto1

```sql
INSERT INTO productos1 (CODIGO_ARTICULO, SECCION, NOMBRE, PRECIO, PAIS, FECHA)  
VALUES ('P0908', 'ELECTRONICA', 'Cámara de seguridad', 59.99, 'ESPAÑA', '2022-03-01'); 
```

```sql
INSERT INTO productos1 (CODIGO_ARTICULO, SECCION, NOMBRE, PRECIO, PAIS, FECHA)  
VALUES ('P1186', 'HOGAR', 'Juego de sábanas', 34.99, 'FRANCIA', '2022-02-27');
```

```sql
INSERT INTO productos1 (CODIGO_ARTICULO, SECCION, NOMBRE, PRECIO, PAIS, FECHA)  
VALUES ('P2875', 'DEPORTES', 'Pelota de fútbol', 22.50, 'ALEMANIA', '2022-03-15');
```

```sql
INSERT INTO productos1 (CODIGO_ARTICULO, SECCION, NOMBRE, PRECIO, PAIS, FECHA)
VALUES ('P4021', 'ELECTRODOMESTICOS', 'Licuadora', 49.99, 'ITALIA', '2022-03-05');
```

```sql
INSERT INTO productos1 (CODIGO_ARTICULO, SECCION, NOMBRE, PRECIO, PAIS, FECHA) 
VALUES ('P5704', 'MODA', 'Chaqueta de cuero', 99.99, 'ESPAÑA', '2022-03-12');
```

## Exercici 1

Crear programa que es connecte a la base de dades.

Seleccionar tots els productes de la base de dades i mostrar per consola el nom de cadascun.

Tractar la possible excepció *SQLException.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 75%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exercici1.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## Exercici 2

Modificar l’exercici 1 per a utilitzar el autoClose i per a mostrar per consola tots els atributs de cadascun.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exercici2.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## Exercici 3

Modifica l'exercici 2 per a extraure la connexió a una classe externa anomenada "ConexionBBDD" i en aquesta crea el mètode **getConexion()** que s'encarregue de retornar una connexió.

Aquesta classe estarà situada en un paquet anomenat "utils" dins del projecte.

## Exercici 4

Modifica l'exercici 3 per a:

1. Afegir en la classe ConexionBBDD:
   - Un mètode **existeTabla()** que comprova si existeix la taula (que li se passarà com a un paràmetre de entrada e tipus String).  
    Aquest mètode pot utilitzar la consulta *SELECT COUNT(\*) FROM information_schema.tables WHERE table_name = 'NOM_DE_LA_TAULA'* per a saber si existeix la taula a la base de dades.
   - Un mètode **crearTablaProductos()** que crearà la taula "productos2" i afegirà 5 productes (la taula tindrà les mateixes columnes que "productos1").  
    Nota: per a la data es pot importar la classe `import java.sql.Date;`

2. Afegir al mètode main() una comprovació que si la taula "productos2" no existeix, la crea cridant als mètodes que s’han creat al punt anterior.
3. Extrau del AutoClose la declaració del Statement i del ResultSet, ja que s’hauran de executar després de la comprovació anterior.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exercici4.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## Exercici 5

Modifica el exercici 4 per a mostrar cada registre filtrant la consulta per la seua “SECCION” i el seu “PAIS”. S’ha d’utilitzar la classe “PreparedStatement” concretament el mètode prepareStatement(query) per a preparar la consulta i després afegir els valors per a filtrar com a paràmetres.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exercici5.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## Exercici 6

Modifica el exercici 5 afegint una segona consulta després de mostrar la del exercici 5.

Esta ha de modificar les dades de la consulta anterior (amb UPDATE), canviant el preu del/s producte/s “PRECIO” a 9999.

S’ha d’utilitzar la classe “PreparedStatement” per a preparar la consulta i després afegir els valors a canviar com a paràmetres.

Per últim, mostra el numero de files afectades.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exercici6_1.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>
 
<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exercici6_2.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## Exercici 7

Modifica el exercici 6 afegint una nova classe nomenada “Productes” dins del paquet de “utils”. Esta ha de tindre els mateixos atributs i amb el mateix nom que les columnes de la taula “productes2” de la base de dades.

Afegeix també els mètodes getters i setters a la classe.

Al mètode main(), després de la consulta de modificació anterior, afegeix una consulta que lliste tots els registres de la taula “productos2” de la base de dades i  els guarde en un ArrayList de productes. Per últim, utilitzant el Arraylist i les funcions pertinents de producte imprimeix els productes.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/exercici7.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>