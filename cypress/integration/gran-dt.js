/// <reference types="Cypress"/>

const url = "http://localhost:8080";

context("Gran DT",()=>{
    before(()=>{
        cy.visit(url);
    });

    describe("Juega al Gran DT", ()=>{

        const NUMERO_JUGADORES_LISTA = 40;
        const JUGADORES_CANCHA = 12;

        it("Se asegura que exista una lista de jugadores y una cancha con sus 11 jugadores", ()=>{
            cy.get("#lista-jugadores").find("a").should("have.length", NUMERO_JUGADORES_LISTA);
        });

        it("Se asegura que este la imagen de la cancha y las 11 siluetas", ()=>{
            cy.get("#contenedor-cancha").find("img").should("have.length", JUGADORES_CANCHA);
        });

        it("Se asegura que al elegir a Messi aparezca en la cancha, quede deshabilitado para no volver a elegirlo y descuenta su valor del presupuesto", ()=>{
            cy.get("#jugadores").click();
            cy.get("#contenedor-cancha").find("#formacion1-del-centro").should("have.class", "Lionel Messi");
            cy.get("#jugadores-seleccionados").should("have.class","list-group-item list-group-item-action disabled" );
            cy.get("#dinero").should("have.text", 50000000);
        });

        it("Se asegura que se pueda cambiar de formacion y aparezca todo correctamente",() =>{
            cy.get("#selector-formaciones").select("4-4-2");
            cy.get("#dinero").should("have.text", 65000000);
            cy.get("#jugadores").should("have.class","list-group-item list-group-item-action");
            cy.get("#jugadores").click();
            cy.get("#contenedor-cancha").find("#formacion2-del-centro-derecho").should("have.class", "Lionel Messi");
            cy.get("#jugadores-seleccionados").should("have.class","list-group-item list-group-item-action disabled" );
            cy.get("#dinero").should("have.text", 50000000);
        });

        it("Se asegura que al pasarte del presupuesto aparezca el boton de reinicio, se vuelva el cartel rojo y aparezca el texto indicado", ()=>{
            cy.contains("Karim Benzema").click();
            cy.contains("Sergio Busquets").click();
            cy.contains("Eden Hazard").click();
            cy.contains("Toni Kroos").click();
            cy.contains("Luka Modric").click();
            cy.contains("Sergio Ramos").click();
            cy.contains("Raphael Varane").click();
            cy.get("#dinero").should("have.text", "Te pasaste del presupuesto, empieza de nuevo!");
            cy.get(".presupuesto").should("have.id", "error");
            cy.get("#texto-presupuesto").should("have.text", "");
            cy.get("#boton-reinicio").click();
        });
    });
});
