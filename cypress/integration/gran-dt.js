/// <reference types="Cypress"/>

const url = "http://localhost:8080";

context("Gran DT",()=>{
    before(()=>{
        cy.visit(url);
    });

    describe("Juega al Gran DT", ()=>{
        const NUMERO_TITULARES = 11;
        const NUMERO_SUPLENTES = 5;
        const NUMERO_JUGADORES_LISTA = 40;
        const JUGADORES_CANCHA = 12;

        it("Se asegura que exista una lista de jugadores y una cancha con sus 11 jugadores", ()=>{
            cy.get("#lista-jugadores").find("li").should("have.length", NUMERO_JUGADORES_LISTA);
        });

        it("Se asegura que este la imagen de la cancha y las 11 siluetas", ()=>{
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
        });

        it("Se asegura que exista una lista de 11 titulares y otra de 5 suplentes con sus respectivos titulos", ()=>{
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-titulares").find("p").should("have.text", "Titulares");
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#contenedor-suplentes").find("p").should("have.text", "Suplentes");
        })

        it("Se asegura que al elegir a Messi aparezca en la cancha, quede deshabilitado para no volver a elegirlo y descuenta su valor del presupuesto", ()=>{
            cy.get("#jugadores").click();
            cy.get("#contenedor-cancha").find("#formacion1-del-centro").should("have.class", "Lionel Messi");
            cy.get("#jugadores-seleccionados").should("have.class","list-group-item list-group-item-action disabled" );
            cy.get("#cantidad-presupuesto").should("have.text", 65000000);
        });

        it("Se asegura que se pueda cambiar de formacion y aparezca todo correctamente",() =>{
            cy.get("#selector-formaciones").select("4-5-1");
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
            cy.get("#lista-jugadores").find("li").should("have.length", NUMERO_JUGADORES_LISTA);
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-titulares").find("p").should("have.text", "Titulares");
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#contenedor-suplentes").find("p").should("have.text", "Suplentes");
            cy.get("#cantidad-presupuesto").should("have.text", 80000000);
            cy.get("#jugadores").should("have.class","list-group-item list-group-item-action");
            cy.get("#selector-formaciones").select("5-4-1");
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
            cy.get("#lista-jugadores").find("li").should("have.length", NUMERO_JUGADORES_LISTA);
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-titulares").find("p").should("have.text", "Titulares");
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#contenedor-suplentes").find("p").should("have.text", "Suplentes");
            cy.get("#cantidad-presupuesto").should("have.text", 80000000);
            cy.get("#jugadores").should("have.class","list-group-item list-group-item-action");
            cy.get("#selector-formaciones").select("3-5-2");
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
            cy.get("#lista-jugadores").find("li").should("have.length", NUMERO_JUGADORES_LISTA);
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-titulares").find("p").should("have.text", "Titulares");
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#contenedor-suplentes").find("p").should("have.text", "Suplentes");
            cy.get("#cantidad-presupuesto").should("have.text", 80000000);
            cy.get("#jugadores").should("have.class","list-group-item list-group-item-action");
            cy.get("#selector-formaciones").select("4-3-3");
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
            cy.get("#lista-jugadores").find("li").should("have.length", NUMERO_JUGADORES_LISTA);
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-titulares").find("p").should("have.text", "Titulares");
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#contenedor-suplentes").find("p").should("have.text", "Suplentes");
            cy.get("#cantidad-presupuesto").should("have.text", 80000000);
            cy.get("#jugadores").should("have.class","list-group-item list-group-item-action");
            cy.get("#selector-formaciones").select("4-4-2");
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
            cy.get("#lista-jugadores").find("li").should("have.length", NUMERO_JUGADORES_LISTA);
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-titulares").find("p").should("have.text", "Titulares");
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#contenedor-suplentes").find("p").should("have.text", "Suplentes");
            cy.get("#cantidad-presupuesto").should("have.text", 80000000);
            cy.get("#jugadores").should("have.class","list-group-item list-group-item-action");
            cy.get("#jugadores").click();
            cy.get("#texto-titular1").should("have.text", "Lionel Messi");
            cy.get("#contenedor-cancha").find("#formacion2-del-centro-derecho").should("have.class", "Lionel Messi");
            cy.get("#jugadores-seleccionados").should("have.class","list-group-item list-group-item-action disabled" );
            cy.get("#cantidad-presupuesto").should("have.text", 65000000);
        });

        it("Se asegura que al pasarte del presupuesto aparezca el boton de reinicio, se vuelva el cartel rojo y aparezca el texto indicado", ()=>{
            cy.contains("Karim Benzema").click();
            cy.contains("Sergio Busquets").click();
            cy.contains("Eden Hazard").click();
            cy.contains("Toni Kroos").click();
            cy.contains("Luka Modric").click();
            cy.contains("Sergio Ramos").click();
            cy.contains("Raphael Varane").click();
            cy.contains("Marcelo Vieira").click();
            cy.contains("Jordi Alba").click();
            cy.get("#cantidad-presupuesto").should("have.text", "Te pasaste del presupuesto, empieza de nuevo!");
            cy.get(".presupuesto").should("have.id", "error");
            cy.get("#texto-presupuesto").should("have.text", "");
            cy.get("#boton-reinicio").click();
        });
        
        it("Completa toda la formacion, revisa que los jugadores no seleccionados esten deshabilitados, que la lista de titulares y suplentes este completa y que aun quede dinero en el presupuesto",()=>{
            cy.contains("Ousmane Dembélé").click();
            cy.contains("Sergi Roberto").click();
            cy.contains("Samuel Umtiti").click();
            cy.contains("Júnior Firpo").click();
            cy.contains("Neto Murara").click();
            cy.contains("Rodrygo Goes").click();
            cy.contains("James Rodríguez").click();
            cy.contains("Daniel Carvajal").click();
            cy.contains("Nikola Kalinic").click();
            cy.contains("Marcos Llorente").click();
            cy.contains("Thomas Lemar").click();
            cy.contains("Vitolo Machín").click();
            cy.contains("Sime Vrsaljko").click();
            cy.contains("Kieran Trippier").click();
            cy.contains("Santiago Arias").click();
            cy.contains("Jan Oblak").click();
            cy.get("#lista-jugadores").find("#jugadores").should("have.class", "list-group-item list-group-item-action disabled");
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#cantidad-presupuesto").should("have.text", 22500000);
            cy.get("#texto-titular1").should("have.text", "Ousmane Dembélé");
            cy.get("#texto-titular2").should("have.text", "Rodrygo Goes");
            cy.get("#texto-titular3").should("have.text", "Nikola Kalinic");
            cy.get("#texto-titular4").should("have.text", "Sergi Roberto");
            cy.get("#texto-titular5").should("have.text", "James Rodríguez");
            cy.get("#texto-titular6").should("have.text", "Marcos Llorente");
            cy.get("#texto-titular7").should("have.text", "Samuel Umtiti");
            cy.get("#texto-titular8").should("have.text", "Júnior Firpo");
            cy.get("#texto-titular9").should("have.text", "Daniel Carvajal");
            cy.get("#texto-titular10").should("have.text", "Sime Vrsaljko");
            cy.get("#texto-titular11").should("have.text", "Neto Murara");
            cy.get("#texto-suplente1").should("have.text", "Thomas Lemar");
            cy.get("#texto-suplente2").should("have.text", "Vitolo Machín");
            cy.get("#texto-suplente3").should("have.text", "Kieran Trippier");
            cy.get("#texto-suplente4").should("have.text", "Santiago Arias");
            cy.get("#texto-suplente5").should("have.text", "Jan Oblak");
        });

        it("Se encarga de seleccionar y eliminar los jugadores", ()=>{
            cy.get("#selector-formaciones").select("4-5-1");
            cy.get("#selector-formaciones").select("4-3-3");
            cy.contains("Ousmane Dembélé").click();
            cy.contains("Sergi Roberto").click();
            cy.contains("Samuel Umtiti").click();
            cy.contains("Júnior Firpo").click();
            cy.contains("Neto Murara").click();
            cy.contains("Rodrygo Goes").click();
            cy.contains("James Rodríguez").click();
            cy.contains("Daniel Carvajal").click();
            cy.contains("Nikola Kalinic").click();
            cy.contains("Marcos Llorente").click();
            cy.contains("Thomas Lemar").click();
            cy.contains("Vitolo Machín").click();
            cy.contains("Sime Vrsaljko").click();
            cy.contains("Kieran Trippier").click();
            cy.contains("Santiago Arias").click();
            cy.contains("Jan Oblak").click();
            cy.get("#boton-eliminar1").click();
            cy.get("#boton-eliminar2").click();
            cy.get("#boton-eliminar3").click();
            cy.get("#boton-eliminar4").click();
            cy.get("#boton-eliminar5").click();
            cy.get("#boton-eliminar6").click();
            cy.get("#boton-eliminar7").click();
            cy.get("#boton-eliminar8").click();
            cy.get("#boton-eliminar9").click();
            cy.get("#boton-eliminar10").click();
            cy.get("#boton-eliminar11").click();
            cy.get("#boton-eliminar12").click();
            cy.get("#boton-eliminar13").click();
            cy.get("#boton-eliminar14").click();
            cy.get("#boton-eliminar15").click();
            cy.get("#boton-eliminar16").click();
            cy.get("#texto-titular1").should("have.text", "");
            cy.get("#texto-titular2").should("have.text", "");
            cy.get("#texto-titular3").should("have.text", "");
            cy.get("#texto-titular4").should("have.text", "");
            cy.get("#texto-titular5").should("have.text", "");
            cy.get("#texto-titular6").should("have.text", "");
            cy.get("#texto-titular7").should("have.text", "");
            cy.get("#texto-titular8").should("have.text", "");
            cy.get("#texto-titular9").should("have.text", "");
            cy.get("#texto-titular10").should("have.text", "");
            cy.get("#texto-titular11").should("have.text", "");
            cy.get("#texto-suplente1").should("have.text", "");
            cy.get("#texto-suplente2").should("have.text", "");
            cy.get("#texto-suplente3").should("have.text", "");
            cy.get("#texto-suplente4").should("have.text", "");
            cy.get("#texto-suplente5").should("have.text", "");
        });

        it("Se asegura de que se pase del presupuesto, desaparezcan los botones, queden los demas jugadores deshabilitados, que aparezca el texto en presupuesto correctamente y reinicie el Gran DT",()=>{
            cy.contains("Lionel Messi").click();
            cy.contains("Luis Suarez").click();
            cy.contains("Karim Benzema").click();
            cy.contains("Eden Hazard").click();
            cy.contains("Toni Kroos").click();
            cy.contains("Luka Modric").click();
            cy.contains("Sergio Ramos").click();
            cy.contains("Álvaro Morata").click();
            cy.contains("Antoine Griezmann").click();
            cy.get("#lista-jugadores").find("li").should("have.class", "list-group-item list-group-item-action disabled");
            cy.get("#cantidad-presupuesto").should("have.text", "Te pasaste del presupuesto, empieza de nuevo!");
            cy.get("#boton-reinicio").click();
            cy.get("#lista-jugadores").find("li").should("have.length", NUMERO_JUGADORES_LISTA);
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
            cy.get("#contenedor-titulares").find("li").should("have.length", NUMERO_TITULARES);
            cy.get("#contenedor-titulares").find("p").should("have.text", "Titulares");
            cy.get("#contenedor-suplentes").find("li").should("have.length", NUMERO_SUPLENTES);
            cy.get("#contenedor-suplentes").find("p").should("have.text", "Suplentes");
            cy.get("#cantidad-presupuesto").should("have.text", 80000000);

        });
    });
});
