const Employee = require('../lib/Employee');

describe('Employee Tests', () => {
    describe('Employee Data', () => {
        it('should return employee data as an object including the employee name, id, and email address', () => {
            const data = new Employee ('Vince', 14, 'notVince@email.com');

            expect(data.name).toEqual('Vince');
            expect(data.id).toEqual(14);
            expect(data.email).toEqual('notVince@email.com');
        });
    });
    describe('Employee Methods', () => {
        it('should return employee data as an object including the employee name, id, email address and role', () => {
            const data = new Employee ('Clark', 99, 'clark@kent.com');

            expect(data.getName()).toEqual('Clark');
            expect(data.getId()).toEqual(99);
            expect(data.getEmail()).toEqual('clark@kent.com');
            expect(data.getRole()).toEqual('Employee');
        });
    });
});