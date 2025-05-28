# 6. Navegabilitat i concurrència

Quan **invoquem a createStatement() sense arguments**, com hem vist anteriorment, en executar sentències SQL obtindrem un **ResultSet per defecte en el qual el cursor només pot moure's cap avant i les dades són de només lectura**. A vegades això no és suficient i necessitem major funcionalitat.

Per això el mètode createStatement() està sobrecarregat (existeixen diverses versions d'aquest mètode) la qual cosa ens permet invocar-ho amb arguments en els quals podem especificar el funcionament.

- **Statement createStatement(int resultSetType, int resultSetConcurrency)**: Retorna un objecte Statement els objectes del qual ResultSet seran del tipus i concurrència especificats.
  
Els valors vàlids són constants definides en ResultSet.

**L'argument resultSetType** indica el tipus de ResultSet:

- **ResultSet.TYPE_FORWARD_ONLY**: ResultSet per defecte, forward-only i no-actualitzable.
  - Només permet moviment cap avant amb `next()`.
  - Les seues dades NO s'actualitzen. És a dir, no reflectirà canvis produïts en la base de dades. Conté una instantània del moment en el qual es va realitzar la consulta.
- **ResultSet.TYPE_SCROLL_INSENSITIVE**: ResultSet desplaçable i no actualitzable.
  - Permet llibertat de moviment del cursor amb altres mètodes com `first()`, `previous()`, `last()`, etc. a més de `next()`.
  - Les seues dades NO s'actualitzen, com en el cas anterior.
- **ResultSet.TYPE_SCROLL_SENSITIVE**: ResultSet desplaçable i actualitzable.
  - Permet llibertat de moviments del cursor, com en el cas anterior.
  - Les seues dades SÍ QUE s'actualitzen. És a dir, <u>mentre el ResultSet estiga obert s'actualitzarà automàticament amb els canvis produïts en la base de dades</u>. Això pot succeir fins i tot mentre s'està recorrent el ResultSet, la qual cosa pot ser convenient o contraproduent segons el cas.

L'argument resultSetConcurrency indica la concurrència del ResultSet:

- **ResultSet.CONCUR_READ_ONLY**: Només lectura. És el valor per defecte.
- **ResultSet.CONCUR_UPDATABLE**: Permet modificar les dades emmagatzemades en el ResultSet per a després aplicar els canvis sobre la base de dades (més endavant es veurà com).

**El ResultSet per defecte que s'obté amb `createStatement()` sense arguments és el mateix que amb `createStatement(ResultSet.TYPE_FORWARD_ONLY, ResultSet.CONCUR_READ_ONLY)`.**
