# Weatherforecast App

Här är mitt exempel på hur en layout och design av vår väder app kan se ut.

Appen använder [Firebase](https://firebase.google.com/) som backend för att spara favorit städer i en Firebase RealTime databas.
Appen använder även sig av [Openweathermap API](https://openweathermap.org/api) som REST API för att hämta aktuellt väder för vald stad.

## REST anrop

I **http.js** fil har jag använt först JavaScripts inbyggda _fetch_ api. Det är den koden som är bort kommenterad.
Den kod som är aktiv använder sig av ett 3d parts bibliotek **[axios](https://axios-http.com/)** som är ett väldigt populärt http klient bibliotek för React. Framförallt är det extremt enkelt att använda.

## Adaptivt användar gränssnitt

Jag har valt att uteslutande använda React Native's hook _useWindowDimensions_ för att göra det enkelt att följa med i koden.

Jag har även enbart arbetat med _width_ egenskapen ifrån useWindowDimensions, även det för att hålla koden enkel. Dessutom kontrollerar jag enbart om bredden är mindre än 380px och testat mot iPhone 13 Pro och Nexus 5.

## Komponent uppdelning

Jag har i detta exempel valt att inte bryta upp repetetiv JSX till externa komponent filer. Även detta för att hålla det enkelt.
