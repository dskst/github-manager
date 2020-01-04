import Member from '../../src/module/Member';

describe('Member', () => {
     describe('isExists', () => {
          test('Is exist on GitHub', () => {
               return expect(new Member().isExists()).toBeTruthy();
          })
     })
});