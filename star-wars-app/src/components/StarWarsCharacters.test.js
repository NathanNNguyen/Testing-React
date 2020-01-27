import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';
import { getData } from '../api';

jest.mock('../api');

test('Are characters being rendered', async () => {
  getData.mockResolvedValueOnce({
    count: 87,
    next: "https://swapi.co/api/people/?page=2",
    previous: null,
    results: []
  })

  const container = render(<StarWarsCharacters />);
  const charactersDiv = container.getByTestId('testing');

  const url = 'https://swapi.co/api/people';

  const prevBtn = container.getByText(/previous/i);
  fireEvent.click(prevBtn);


  const nextBtn = container.getByText(/next/i);


  expect(getData).toHaveBeenCalledTimes(1);
  expect(getData).toHaveBeenCalledWith(url);

  wait(() => expect(getByText(/previous/i)));
})