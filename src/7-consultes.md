# 7. Consultes

## 7.1 Navegació d'un ResultSet

Com ja s'ha vist, en un objecte ResultSet es troben els resultats de l'execució d'una sentència SQL. Per tant, un objecte ResultSet conté les files que satisfan les condicions d'una sentència SQL, i ofereix mètodes de navegació pels registres com next() que desplaça el cursos al següent registre
del ResultSet.

A més d'aquest mètode de desplaçament bàsic, existeixen uns altres de desplaçament lliure que podrem utilitzar sempre que el ResultSet siga de tipus ResultSet.TYPE_SCROLL_INSENSITIVE o ResultSet.TYPE_SCROLL_SENSITIVE com s'ha dit abans.

Alguns d'aquests mètodes són:

- **void beforeFirst()**: Mou el cursor abans de la primera fila.
- **boolean first()**: Mou el cursor a la primera fila.
- **boolean next()**: Mou el cursor a la següent fila. Permés en tots els tipus de ResultSet.
- **boolean previous()**: Mou el cursor a la fila anterior.
- **boolean last()**: Mou el cursor a l'última fila.
- **void afterLast()**. Moure el cursor després de l'última fila.
- **boolean absolute(int row)**: Posiciona el cursor en el número de registre indicat. Cal tindre en compte que el primer registre és el 1, no el zero. Per exemple `absolute(7)` desplaçarà el cursor al seté registre. Si valor és negatiu es posiciona en el número de registre indicat però començant a comptar des del final (l'últim és el-1). Per exemple si té 10 registres i cridem absolute(-2) es desplaçarà al registre núm. 9.
- **boolean relative(int registres)**: Desplaça el cursor un nombre relatiu de registres, que pot ser positiu o negatiu. Per exemple si el cursor està en el registre 5 i cridem a relative(10) es desplaçarà al registre 15. Si després cridem a relative(-4) es desplaçarà al registre 11.

Els mètodes que retornen un tipus boolean retornaran ‘true’ si ha sigut possible moure el cursor a un registre vàlid, i ‘false’ en cas contrari, per exemple si no té cap registre o hem saltat a un número de registre que no existeix.

Tots aquests mètodes poden produir una excepció de tipus SQLException.

També existeixen altres mètodes relacionats amb la posició del cursor.

- **int getRow()**: Retorna el número de registre actual. Zero si no hi ha registre actual.
- **boolean isBeforeFirst()**: Retorna ‘true’ si el cursor està abans del primer registre.
- **boolean isFirst()**: Retorna ‘true’ si el cursor està en el primer registre.
- **boolean isLast()**: Retorna ‘true’ si el cursor està en l'últim registre.
- **boolean isAfterLast()**: Retorna ‘true’ si el cursor està després de l'últim registre.

## 7.2 Obtenint dades del ResultSet

Els mètodes getXXX() ofereixen els mitjans per a recuperar els valors de les columnes (camps) de la fila (registre) actual del ResultSet. No és necessari que les columnes siguen obtingudes utilitzant un ordre determinat.

Per a designar una columna podem utilitzar el seu nom o bé el seu número (començant per 1).

Per exemple si la segona columna d'un objecte ResultSet es diu "títol" i emmagatzema dades de tipus String, es podrà recuperar el seu valor de les dues formes següents (rs és un objecte ResultSet):

`String valor = rs.getString(2);`  
`String valor = rs.getString("titol");`

És important tindre en compte que les columnes es numeren d'esquerra a dreta i que la primera és la número 1, no la zero. També que les columnes no són case sensitive, és a dir, no distingeixen entre majúscules i minúscules.

>[!IMPORTANT] <strong>IMPORTANT!:</strong>
>La informació referent a les columnes d'un ResultSet es pot obtindre cridant al **mètode getMetaData()** que retornarà un objecte ResultSetMetaData que contindrà el número, tipus i propietats de les columnes del ResultSet.

Si coneixem el nom d'una columna, però no el seu índex, el mètode findColumn() pot ser utilitzat per a obtindre el número de columna, passant-li com a argument un objecte String que siga el nom de la columna corresponent, aquest mètode ens retornarà un enter que serà l'índex corresponent a la columna.

## 7.3 Tipus de dades i conversions

Quan es llança un mètode getXXX() determinat sobre un objecte ResultSet per a obtindre el valor d'un camp del registre actual, el driver JDBC converteix la dada que es vol recuperar al tipus Java especificat i llavors retorna un valor Java adequat. Per exemple si utilitzem el mètode getString() i el tipus de la dada en la base de dades és VARCHAR, el driver JDBC convertirà la dada VARCHAR de tipus SQL a un objecte String de Java.

Alguna cosa semblant succeeix amb altres tipus de dades SQL com per exemple DATE. Podrem accedir a ell tant amb getDate() com amb getString(). La diferència és que el primer retornarà un objecte Java de tipus Date i el segon retornarà un String.

Sempre que siga possible el driver JDBC convertirà el tipus de dada emmagatzemada en la base de dades al tipus sol·licitat pel mètode getXXX(), però hi ha conversions que no es poden realitzar i llançaran una excepció, com per exemple si intentem fer un getInt() sobre un camp que no conté un valor numèric.
