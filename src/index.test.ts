import {expect} from 'chai';
import 'mocha';

import {First} from './index';

describe('Hello function', () => {
    it('should return hello world', () => {
        expect(1).equal(1);
    });
    it('POW (2, 3)= 6', () => {
        const first = new First();
        expect(first.pow(2,3)).equal(6);
    });
});