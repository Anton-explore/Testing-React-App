import { fireEvent, render, screen } from '@testing-library/react';
import { useState } from "react";
// import { ThemeProvider } from 'styled-components';
// import { theme } from '../assets/styles/theme';
import BigCommunity from './BigCommunity';


describe('BigCommunity', () => {
  test('renders the title, button', () => {
    const title = 'Test title';
    

      render(
        // <ThemeProvider theme={theme}>
          <BigCommunity title={title}/>
        // </ThemeProvider>
      );

    const btn = screen.getByRole('button');
    // expect(btn).toMatchSnapshot();
    expect(btn).toBeInTheDocument();

    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();

      });

      test('renders the section. when click button', () => {
        const subTitle = 'Test subTitle';
          render(
            // <ThemeProvider theme={theme}>
              <BigCommunity />
            // </ThemeProvider>
          );
    
        const btn = screen.getByRole('button');

        expect(screen.queryByText(subTitle)).toBeNull();
        fireEvent.click(btn);
        expect(screen.queryByText(subTitle)).toBeInTheDocument();
        fireEvent.click(btn);
        expect(screen.queryByText(subTitle)).toBeNull();
               
          });
});