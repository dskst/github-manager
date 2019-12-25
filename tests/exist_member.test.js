// const exist_member = require('../src/exist_member');

requireAsync('../src/exist_member', function(err, module) {
    console.log(module.exports);
});

// test('exit member', (exist_member) => {
//     return exit_member.then(username => {
//         expect(run(username)).toBe(true);
//     });
// });

// test('exist member', () => {
//     return expect(member.run()).resolves.toBe('foo');
// });