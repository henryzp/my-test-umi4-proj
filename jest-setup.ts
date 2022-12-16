import 'reflect-metadata';
import '@testing-library/jest-dom';
import _ from 'lodash';
jest.mock('@/store');
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

globalThis._ = _;

if (globalThis.window) {
  document.body.appendChild(document.createElement('script'));
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // Deprecated
      removeListener: jest.fn(), // Deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });
}
