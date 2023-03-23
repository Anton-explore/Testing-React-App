import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  test('renders nav links', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();

    const communityLink = screen.getByRole('link', { name: 'Community' });
    expect(communityLink).toBeInTheDocument();
  });

  test('renders subscribe component on home page', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const subscribeComponent = screen.getByTestId('subscribe-component');
    expect(subscribeComponent).toBeInTheDocument();
  });

  test('renders BigCommunity component on /community page', () => {
    render(
      <MemoryRouter initialEntries={['/community']}>
        <App />
      </MemoryRouter>
    );

    const bigCommunityComponent = screen.getByTestId('big-community-component');
    expect(bigCommunityComponent).toBeInTheDocument();
  });

  test('renders CommunityCard component on /community/:id page', () => {
    const communityId = '1';
    render(
      <MemoryRouter initialEntries={[`/community/${communityId}`]}>
        <App />
      </MemoryRouter>
    );

    const communityCardComponent = screen.getByTestId('community-card-component');
    expect(communityCardComponent).toBeInTheDocument();
  });

  test('renders NotFound component on /not-found page', () => {
    render(
      <MemoryRouter initialEntries={['/not-found']}>
        <App />
      </MemoryRouter>
    );

    const notFoundComponent = screen.getByTestId('not-found-component');
    expect(notFoundComponent).toBeInTheDocument();
  });
});



// import '@testing-library/jest-dom'
// // import { render, screen } from './test-utils';
// // import userEvent from '@testing-library/user-event';
// import App from './App';

// test('full app rendering/navigating', async () => {
//   render(<App />)
//   // const user = userEvent.setup();

//   // verify page content for default route
//   expect(screen.getByText(/Join Our Program/i)).toBeInTheDocument()

//   // verify page content for expected route after navigating
//   await userEvent.click(screen.getByText(/Community/i))
//   expect(screen.getByText(/Big Community of/i)).toBeInTheDocument()
// })


// import { render, screen } from '@testing-library/react';
// import { MemoryRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';


// describe('App', () => {

//   test('renders nav menu with links to Home and Community pages', () => {
//     render(
//       <Router>
//         <App />
//       </Router>
//     );

//     const homeLink = screen.getByRole('link', { name: /home/i });
//     const communityLink = screen.getByRole('link', { name: /community/i });

//     expect(homeLink).toBeInTheDocument();
//     expect(communityLink).toBeInTheDocument();
//   });

//   test('should render navigation menu for valid routes', () => {
//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('Home')).toBeInTheDocument();
//     expect(screen.getByText('Community')).toBeInTheDocument();
//   });

//   test('should not render navigation menu for not-found route', () => {
//     render(
//       <MemoryRouter initialEntries={['/not-found']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(screen.queryByText('Home')).not.toBeInTheDocument();
//     expect(screen.queryByText('Community')).not.toBeInTheDocument();
//   });

//   test('should render the BigCommunity component for /community route', () => {
//     render(
//       <MemoryRouter initialEntries={['/community']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('BigCommunity')).toBeInTheDocument();
//   });

//   test('should render the CommunityCard component for /community/:id route', () => {
//     render(
//       <MemoryRouter initialEntries={['/community/1']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('CommunityCard')).toBeInTheDocument();
//   });

//   test('should render the Subscribe component for / route', () => {
//     render(
//       <MemoryRouter initialEntries={['/']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('Subscribe')).toBeInTheDocument();
//   });

//   test('should render the NotFound component for /not-found route', () => {
//     render(
//       <MemoryRouter initialEntries={['/not-found']}>
//         <App />
//       </MemoryRouter>
//     );

//     expect(screen.getByText('NotFound')).toBeInTheDocument();
//   });
// });