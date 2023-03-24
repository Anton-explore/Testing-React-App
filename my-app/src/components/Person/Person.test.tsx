import { render, screen } from '@testing-library/react';
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../assets/styles/theme';
import Person from './Person';


describe('Person', () => {
  test('renders the description, name and position', () => {
    // const title = 'Test title';
    const description = 'Test description';
    const name = 'Test name';
    const position = 'Test position';

      render(
        // <ThemeProvider theme={theme}>
          <Person description={description} name={name} position={position}/>
        // </ThemeProvider>
      );

    const imgElement = screen.getByRole('img');
    expect(imgElement).toMatchSnapshot();
    // expect(imgElement).toBeInTheDocument();

    const descriptionElement = screen.getByText(description);
    expect(descriptionElement).toBeInTheDocument();

    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument();

    const positionElement = screen.getByText(position);
    expect(positionElement).toBeInTheDocument();

  });
});