import { render, screen, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import Footer from '../components/Footer';
import '@testing-library/jest-dom';
import '../__mocks__/globalFetch';

describe('Home component renders correctly', () => {
  it('Shows the first H1 (before "data" loaded) being "Loading..."', () => {
    render(<Home />)
    const heading = screen.getByRole('heading', {
      name: 'Loading...',
    })
    expect(heading).toBeDefined()
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