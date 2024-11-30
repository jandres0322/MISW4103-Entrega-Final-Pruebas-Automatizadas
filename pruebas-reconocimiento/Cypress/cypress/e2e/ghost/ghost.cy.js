
describe('Ghosto monkeys', function() {
    it('logs in and performs monkey testing with seed', function() {
        cy.login('estevenhr@gmail.com', 'Consuelo1789.'); // Usa tu email y contraseña de prueba
        cy.wait(100);
        randomClick(100, 123456); // 10 eventos con semilla 12345
    });
});

function randomClick(monkeysLeft) {

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    };

    var monkeysLeft = monkeysLeft;
    if(monkeysLeft > 0) {
        cy.get('a').then($links => {
            var randomLink = $links.get(getRandomInt(0, $links.length));
            if(!Cypress.dom.isHidden(randomLink)) {
                cy.wrap(randomLink).click({force: true});
                monkeysLeft = monkeysLeft - 1;
            }
            cy.wait(100);
            randomClick(monkeysLeft);
        });
    }   
}
