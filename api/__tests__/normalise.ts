import lights from '../__mocks__/lights'
import { normaliseLights } from '../normalise';

describe('testing changing shape of api response', () => {
    it('transforms lights', () => {
        expect(normaliseLights(lights)).toMatchSnapshot();
    });
}) 