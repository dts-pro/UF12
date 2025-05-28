# 8. Modificació

Per a poder modificar les dades que conté un ResultSet necessitem un ResultSet de tipus modificable. Per a això hem d'utilitzar la constant ResultSet.CONCUR_UPDATABLE en cridar al mètode createStatement() com s'ha vist abans.

**Per a modificar els valors d'un registre existent s'utilitzen una sèrie de mètodes updateXXX()** de ResultSet . Les XXX indiquen el tipus de la dada i hi ha tants diferents com succeeix amb els mètodes getXXX() d'aquesta mateixa interfície: **updateString()**, **updateInt()**, **updateDouble()**, **updateDate()**, etc.

La diferència és que **els mètodes updateXXX() necessiten dos arguments**:

- **La columna que desitgem actualitzar** (pel seu nom o pel seu número de columna).
- **El valor que volem emmagatzemar** en aquesta columna (del tipus que siga).

Per exemple per a modificar el camp ‘edat’ emmagatzemant el sencer 28 caldria cridar al següent mètode, suposant que rs és un objecte ResultSet:

`rs.updateInt("edat", 28);`

També podria fer-se de la següent manera, suposant que la columna “edat” és la segona:

`rs.updateInt(2, 28);`

Els mètodes updateXXX() no retornen cap valor (són de tipus void). Si es produeix algun error es llançarà una SQLException.

Posteriorment **cal cridar a updateRow() perquè els canvis realitzats s'apliquen sobre la base de dades**. El Driver JDBC s'encarregarà d'executar les sentències SQL necessàries. Aquesta és una característica molt potent ja que ens facilita enormement la tasca de modificar les dades d'una base de dades. Aquest mètode retorna void.

En resum, el procés per a realitzar la modificació d'una fila d'un ResultSet és el següent:

1. **Desplacem el cursor al registre** que volem modificar.
2. Cridem a tots els mètodes **updateXXX(...)** que necessitem.
3. Cridem a updateRow() perquè els canvis s'apliquen a la base de dades.

És important entendre que **cal cridar a updateRow() abans de desplaçar el cursor**. Si desplacem el cursor abans de cridar a updateRow(), es perdran els canvis. Si volem **cancel·lar les modificacions d'un registre del ResultSet** podem cridar a **cancelRowUpdates()**, que cancel·la totes les modificacions realitzades sobre el registre actual. Si ja hem anomenat a updateRow() el mètode cancelRowUpdates() no tindrà cap efecte.

El següent codi d'exemple mostra com modificar el camp ‘direcció’ de l'últim registre d'un ResultSet que conté el resultat d'un SELECT sobre la taula de clients. Suposarem que conn és un objecte Connection previament creat:

```java
// Creem un Statement scrollable i modificable
Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
// Executem un SELECT i obtenim la taula clients en un ResultSet
String sql = "SELECT * FROM clients";
ResultSet rs = stmt.executeQuery(sql);
// Anem a l'últim registre, el modifiquem i actualitzem la base de dades
rs.last();
rs.updateString("direccio", "C/ Pepe Ciges, 3");
rs.updateRow();
```
