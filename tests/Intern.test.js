const Intern = require('../lib/Intern');

describe('Intern Tests', () => {
    describe('Intern Data', () => {
        it('should return intern data as an object including the employee name, id, email address, and school name', () => {
            const data = new Intern ('Katherine', 75, 'kane@email.com', 'Metropolis University');

            expect(data.name).toEqual('Katherine');
            expect(data.id).toEqual(75);
            expect(data.email).toEqual('kane@email.com');
            expect(data.school).toEqual('Metropolis University');
        });
    });
    describe('Intern Methods', () => {
        it('should return intern data as an object including the employee name, id, email address, school, and role', () => {
            const data = new Intern ('Jason', 83, 'todd@email.com', 'Ma Gunns');

            expect(data.getName()).toEqual('Jason');
            expect(data.getId()).toEqual(83);
            expect(data.getEmail()).toEqual('todd@email.com');
            expect(data.getSchool()).toEqual('Ma Gunns');
            expect(data.getRole()).toEqual('Intern');
        });
    });
});