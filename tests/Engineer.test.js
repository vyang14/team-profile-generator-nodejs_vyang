const Engineer = require('../lib/Engineer');

describe('Engineer Tests', () => {
    describe('Engineer Data', () => {
        it('should return engineer data as an object including the employee name, id, email address, and github username', () => {
            const data = new Engineer ('Harleen', 1994, 'harley@email.com', 'hQuinzel');

            expect(data.name).toEqual('Harleen');
            expect(data.id).toEqual(1994);
            expect(data.email).toEqual('harley@email.com');
            expect(data.github).toEqual('hQuinzel');
        });
    });
    describe('Engineer Methods', () => {
        it('should return engineer data as an object including the employee name, id, email address, github username, and role', () => {
            const data = new Engineer ('James', 39, 'gordon@email.com', 'jGordon');

            expect(data.getName()).toEqual('James');
            expect(data.getId()).toEqual(39);
            expect(data.getEmail()).toEqual('gordon@email.com');
            expect(data.getGithub()).toEqual('jGordon');
            expect(data.getRole()).toEqual('Engineer');
        });
    });
});