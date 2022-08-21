const Manager = require('../lib/Manager');

describe('Manager Tests', () => {
    describe('Manager Data', () => {
        it('should return manager data as an object including the employee name, id, email address, and office number', () => {
            const data = new Manager ('Damian', 22, 'alghul@email.com', 5);

            expect(data.name).toEqual('Damian');
            expect(data.id).toEqual(22);
            expect(data.email).toEqual('alghul@email.com');
            expect(data.office).toEqual(5);
        });
    });
    describe('Manager Methods', () => {
        it('should return manager data as an object including the employee name, id, email address, office number, and role', () => {
            const data = new Manager ('Alfred', 91, 'pennyworth@email.com', 3);

            expect(data.getName()).toEqual('Alfred');
            expect(data.getId()).toEqual(91);
            expect(data.getEmail()).toEqual('pennyworth@email.com');
            expect(data.getOffice()).toEqual(3);
            expect(data.getRole()).toEqual('Manager');
        });
    });
});