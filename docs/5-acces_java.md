# 5. Accés a bases de dades mitjançant codi Java

En aquest apartat s'ofereix una introducció als aspectes fonamentals de l'accés a bases de dades mitjançant codi Java. En els següents apartats s'explicaran alguns aspectes en major detall, sobretot els relacionats amb les classes Statement i ResultSet.

## 5.1 Afegir la llibreria JDBC al projecte

Per a poder utilitzar la llibreria JDBC en un projecte Java primer haurem d'afegir-la al projecte. Per a això hem de fer clic dret sobre la carpeta ‘Libraries’ del projecte i seleccionar ‘Add JAR/Folder’. En la finestra emergent haurem de seleccionar l'arxiu del driver prèviament descarregat mysql-connector-java-9.2.0.jar i clic en OK.

<div style="border: 6px solid rgb(240, 102, 61); max-width: 90%; margin: 0 auto; text-align: center;">
    <img src="/uf12/add_library.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

## 5.2 Carregar el Driver

En un projecte Java que realitze connexions a bases de dades és necessari, primer de tot, utilitzar Class.forName(...).newInstance() per a carregar dinàmicament el Driver que utilitzarem. Això només és necessari fer-ho una vegada en el nostre programa. Pot llançar excepcions pel que es necessari utilitzar un bloc try-catch.

```java
try {
  Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
} catch (Exception e) {
  // manegem l'error
}
```

Cal tindre en compte que les classes i mètodes utilitzats per a connectar-se a una base de dades (explicats més endavant) funcionen amb tots els drivers disponibles per a Java (JDBC és només un, i ha molts més). Açò és possible ja que l'estàndard de Java només els defineix com a interfícies (**interface**) i cada llibreria driver els implementa (defineix les classes i el seu codi). Per això és necessari utilitzar Class.forName(…) per a indicar-li a Java quin driver utilitzarem.

<div style="display: flex;">

<div style="flex: 0.9; padding: 10px;">

Aquest nivell de abstracció facilita el desenvolupament de projectes ja que si necessitàrem utilitzar un altre sistema de base de dades (que no fora MySQL) sols necessitaríem canviar la línia de codi que carrega el driver i poc més. Si cada sistema de base de dades necessitara que utilitzàrem diferents classes i mètodes, tot
seria molt més complicat.

Les quatre classes fonamentals que tota aplicació Java necessita per a connectar-se a una base de dades i executar sentències són: **DriverManager**, **Connection**, **Statement** i **ResultSet**.

</div>

<div style="flex: 1; padding:10px;">

<div style="border: 6px solid rgb(240, 102, 61); max-width: 100%; margin: 0 auto; text-align: center;">
    <img src="/uf12/esquema_base_dades.png" style="max-width: 100%; height: auto; margin: 0;" alt="Esquema d'herència">
</div>

</div>
</div>

## 5.3 Classe DriverManager

La classe java.sql.DriverManager és la capa gestora del driver JDBC. S'encarrega de manejar el Driver apropiat i permet crear connexions amb una base de dades  mitjançant el mètode estàtic getConnection(…) que té dues variants:

`DriveManager.getConnection(String url)`  
`DriveManager.getConnection(String url, String user, String password)`

Aquest mètode intentarà establir una connexió amb la base de dades segons la URL indicada. Opcionalment se li pot passar l'usuari i contrasenya com a argument (també es pot indicar en la pròpia URL). Si la connexió és satisfactòria retornarà un objecte Connection.

Exemple de connexió a la base de dades ‘prova’ en localhost:

`String url = "jdbc:mysql://localhost:3306/prova";`  
`Connection conn = DriverManager.getConnection(url,"root","");`

Aquest mètode pot llançar dos tipus d'excepcions (que caldrà manejar amb un try-catch):

- **SQLException**: La connexió no ha pogut produir-se. Pot ser per multitud de motius com una URL mal formada, un error en la xarxa, host o port incorrecte, base de dades no existent, usuari i contrasenya no vàlids, etc.
- **SQLTimeOutException**: S'ha superat el LoginTimeout sense rebre resposta del servidor.

## 5.4 Classe Connection

**Un objecte java.sql.Connection representa una sessió de connexió amb una base de dades**. Una aplicació pot tindre tantes connexions com necessite, ja siga amb una o diverses bases de dades.

El mètode més rellevant és **createStatement()** que retorna un objecte Statement associat a aquesta connexió que permet executar sentències SQL. El mètode createStatement() pot llançar excepcions de tipus **SQLException**.

`Statement stmt = conn.createStatement();`

Quan ja no la necessitem és aconsellable **tancar la connexió amb close()** per a alliberar recursos.

`conn.close();`

## 5.5 Classe Statement

Un objecte java.sql.Statement permet executar sentències SQL en la base de dades a través de la connexió amb la qual es va crear el Statement (veure apartat anterior). Els tres mètodes més comuns d’execució de sentències SQL són executeQuery(…), executeUpdate(…) i execute(…). Poden llançar excepcions de tipus SQLException i SQLTimeoutException.

- **ResultSet executeQuery(String sql)**: Executa la sentència sql indicada (de tipus SELECT). Retorna un objecte ResultSet amb les dades proporcionades pel servidor. 

`ResultSet rs = stmt.executeQuery("SELECT * FROM venedors");`

- **int executeUpdate(String sql)**: Executa la sentència sql indicada (de tipus DML com per exemple INSERT, UPDATE o DELETE). Retorna un nombre de registres que han sigut inserits, modificats o eliminats.

`int nr = stmt.executeUpdate("INSERT INTO venedors VALUES (1, 'Pedro Gil', '2017-04-11', 15000);");`

Quan ja no ho necessitem és aconsellable tancar el statement amb close() per a alliberar recursos.

`stmt.close();`

## 5.6 Classe ResultSet

Un objecte java.sql.ResultSet conté un conjunt de resultats (dades) obtinguts després d'executar una sentència SQL, normalment de tipus SELECT. És una estructura de dades en forma de taula amb registres (files) que podem recórrer per a accedir a la informació dels seus camps (columnes).

ResultSet utilitza internament un cursor que apunta al ‘registre actual’ sobre el qual podem operar. Inicialment aquest cursor està situat abans de la primera fila i disposem de diversos mètodes per a desplaçar el cursor. El més comú és next():

- boolean next(): Mou el cursor al següent registre. Retorna true si va anar possible i false en cas contrari (si ja arribem al final de la taula).

Alguns dels mètodes per a obtindre les dades del registre actual són:

- String getString(String columnLabel): Retorna una dada String de la columna indicada pel seu nom. Per exemple: `rs.getString("nom");`
- String getString(int columnIndex): Retorna una dada String de la columna indicada pel seu nom. La primera columna és la 1, no la zero. Per exemple: `rs.getString(2);`

Existeixen mètodes anàlegs als anteriors per a obtindre valors de tipus int, long, float, double, boolean, Date, Time, Array, etc. Poden consultar-se tots en la documentació oficial de Java.

- `int getInt(String columnLabel)` / `int getInt(int columnIndex)`
- `double getDouble(String columnLabel)` / `double getDouble(int columnIndex)`
- `boolean getBoolean(String columnLabel)` / `boolean getBoolean(int columnIndex)`
- `Date getDate(String columnLabel)` / `int getDate(int columnIndex)`
- etc.

Més endavant veurem com es realitza la modificació i inserció de dades. Tots aquests mètodes poden llançar una **SQLException**.

Vegem un exemple de com recórrer un ResultSet anomenat rs i mostrar-lo per pantalla:

```java
while(rs.next()){
  int id = rs.getInt("id");
  String nom = rs.getString("nom");
  Date data = rs.getDate("data_ingrés");
  float salari = rs.getFloat("salari");
  System.out.println(id + " " + nom + " " + data + " " + salari);
}
```

## 5.7 Exemple complet

Vegem un exemple complet de connexió i accés a una base de dades utilitzant tots els elements esmentats en aquest apartat.

```java
try {
  // Carreguem la classe que implementa el Driver
  Class.forName("com.mysql.cj.jdbc.Driver").newInstance();
  // Creem una nova connexió a la base de dades 'prova'
  String url = "jdbc:mysql://localhost:3306/prova?serverTimezone=UTC";
  Connection conn = DriverManager.getConnection(url,"root","");
  // Obtenim un Statement de la connexió
  Statement st = conn.createStatement();
  // Executem una consulta SELECT per a obtindre la taula venedors
  String sql = "SELECT * FROM venedors";
  ResultSet rs = st.executeQuery(sql);
  // Recorrem tot el ResultSet i mostrem les seues dades
  while(rs.next()) {
    int id = rs.getInt("id");
    String nom = rs.getString("nom");
    Date data = rs.getDate("data_ingresse");
    float salari  = rs.getFloat("salari");
    System.out.println(id + " " + nom + " " + data + " " + salari);
  }
  // Tanquem el statement i la connexió
  st.close();
  conn.close();
}catch (SQLException e) {
  e.printStackTrace();
}catch (Exception e) {
  e.printStackTrace();
}
```
