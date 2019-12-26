import Member from '../../src/module/Member';

test('exist member', () => {
     return expect(new Member().getHoge()).toBe('hoge');
});