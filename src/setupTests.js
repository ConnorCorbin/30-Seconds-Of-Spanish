import '@testing-library/jest-dom/extend-expect';
import 'jest-styled-components';
import { configure, mount, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

global.mount = mount;
global.shallow = shallow;
