import * as React from 'react';
import * as renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme'
import App from '../App';

it('renders without crashing', () => {
  const rendered = renderer.create(<App />).toJSON();
  expect(rendered).toBeTruthy();
});

// it('displays error when cant connect to hub')
//   const app = shallow(<App hubIpAddress={'examplel.com'} apiKey={'wrong'}/>
//   assert error message); 

// it('displays error when cant authenticate')
//   const app = shallow(<App hubIpAddress={'examplel.com'} apiKey={'wrong'}/>
//   assert error message); 

// it('displays all bulbs')
//   const app = shallow(<App hubIpAddress={'mockl'} apiKey={'mock'}/>
//   assert all the rendered bulbs matches the mock data); 