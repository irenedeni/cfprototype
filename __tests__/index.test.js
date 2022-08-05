import { render, screen, waitFor, act } from '@testing-library/react';
import Home from '../pages/index';
import Footer from '../components/Footer';
import ReactDOM from 'react-dom/client';
import '@testing-library/jest-dom';
import '../__mocks__/globalFetch';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe('Home component renders correctly', () => {
  it('Shows the first H1 (before "data" loaded) being "Loading..."', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: 'Loading...',
    })
    expect(heading).toBeDefined()
    // expect(heading).toBeDefined()
    act(() => {    
      document.addEventListener('load',() => {
        ReactDOM.createRoot(container).render(<Home />);
        const heading2 = screen.getByRole('heading', {
          name: 'Latest Posts',
        })
        // expect(heading).not.toBeDefined()
        expect(heading2).toBeDefined()
      })
    })
    
    // act(() => {
    //   document.addEventListener('load',() => {
        // ReactDOM.createRoot(container).render(<Home />);
        // render(<Home />)
        
        // expect(heading).not.toBeDefined()
      // });
    // });
    
  })
});

describe('Footer component renders correctly', () => {
  it('Renders the footer', async () => {
    render(<Footer />)
    const footer = document.querySelector('footer')
    expect(footer).toBeDefined()
  })
});

describe('Fetching data works', () => {
  it('works', async () => {
    const data = await global.fetch();
    expect(data).toBeTruthy;
    expect(global.fetch).toHaveBeenCalled;
  })
})