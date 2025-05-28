# 9. Inserció

Per a  inserir nous registres necessitarem utilitzar, almenys, aquests dos mètodes:

- **void moveToInsertRow()**: Desplaça el cursor al ‘registre d'inserció’. És un registre especial utilitzat per a inserir nous registres en el ResultSet. Posteriorment tindrem que cridar als mètodes updateXXX() ja coneguts per a establir els valors del registre d'inserció. Per a finalitzar cal cridar a insertRow().
- **void insertRow()**: Inserida el ‘registre d'inserció’ en el ResultSet, passant a ser un registre normal més, i també l'insereix en la base de dades.

El següent codi inserix un nou registre en la taula ‘clients’. Suposarem que conn és un objecte Connection previament creat:

```java
// Creem un Statement scrollable i modificable
Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
// Executem un SELECT i obtenim la taula clients en un ResultSet
String sql = "SELECT * FROM clients";
ResultSet rs = stmt.executeQuery(sql);
// Creem un nou registre i l'inserim
rs.moveToInsertRow();
rs.updateString(2,"Killy Lopez");
rs.updateString(3,"Wall Street 3674");
rs.insertRow();
```

Els camps el valor dels quals no s'haja establit amb updateXXX() tindran un valor NULL. Si en la base de dades aquest camp no està configurat per a admetre nuls es produirà una SQLException.

Després d'inserir el nostre nou registre en l'objecte ResultSet podrem tornar a l'anterior posició en la qual es trobava el cursor (abans d'invocar moveToInsertRow()) cridant al mètode moveToCurrentRow(). Aquest mètode només es pot utilitzar en combinació amb moveToInsertRow().
