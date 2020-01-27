import React from 'react';
import { render, fireEvent, wait } from '@testing-library/react';
import StarWarsCharacters from './StarWarsCharacters';

test('Are characters being rendered', () => {
  const container = render(<StarWarsCharacters />);
  const charactersDiv = container.getByTestId('testing');
  const prevBtn = container.getByTestId('prev-btn');
  const nextBtn = container.getByTestId('next-btn');

})