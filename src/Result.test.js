import React from 'react';
import { render } from '@testing-library/react';
import Results from './components/Result';

describe('Results component', () => {
  it('renders correctly with a number value', () => {
    const { asFragment } = render(<Results result="42" />);
    expect(asFragment()).toMatchSnapshot();
  });

  it('renders correctly with a different number value', () => {
    const { asFragment } = render(<Results result="123" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
