import { render, screen } from '@testing-library/react';
import React from 'react';
import fetchMock from 'jest-fetch-mock';
import { fakeUsers } from './mockedData';
import Users from './';

describe('testes da página principal', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('renderiza um usuário mock', async () => {
    fetchMock.mockResponse(JSON.stringify(fakeUsers));

    render(<Users />);

    // const mockedUser = await screen.findByText("Vem Ser");
    // expect(mockedUser).toBeInTheDocument();

    for (let i = 0; i < fakeUsers.length; i++) {
      const mockedUser = await screen.findByText(fakeUsers[i].name);
      expect(mockedUser).toBeInTheDocument();
    }

    //screen.logTestingPlaygroundURL();
  });
});
