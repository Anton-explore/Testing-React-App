import { render, screen } from '@testing-library/react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../assets/styles/theme';
import CommunityCard from './CommunityCard';


describe('CommunityCard', () => {
  test('renders the Loading', () => {
    const text = 'Loading...';
    const isLoading = true;
   
      render(
        // <ThemeProvider theme={theme}>
          <CommunityCard isLoading={isLoading}/>
          // <div>Loading...</div>
        // </ThemeProvider>
      );
   
    const textElement = screen.getByText(text);
    expect(textElement).toBeInTheDocument();
  
  });

  test('renders the Person', () => {
    const person = 'Person';
    const isLoading = false;
   
      render(
        // <ThemeProvider theme={theme}>
          <CommunityCard isLoading={isLoading}/>
          // <div>Loading...</div>
        // </ThemeProvider>
      );
   
    const personElement = screen.getByText(person);
    expect(personElement).toBeInTheDocument();
  
  });
});