# 10. Esborrat

Per a eliminar un registre només cal desplaçar el cursor al registre desitjat i cridar al mètode:

- **void deleteRow()**: Elimina el registre actual del ResultSet i també de la base de dades.

El següent codi esborra el tercer registre de la taula 'clients':

::: tabs
== Java

```java
// Creem un Statement scrollable i modificable
Statement stmt = conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_UPDATABLE);
// Executem un SELECT i obtenim la taula clients en un ResultSet
String sql = "SELECT * FROM clients";
ResultSet rs = stmt.executeQuery(sql);
// Desplacem el cursor al tercer registre
rs.absolute(3)
rs.delete*Row();
```

:::
