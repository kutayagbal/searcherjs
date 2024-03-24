import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import InputFilter from '../../../js/searcher/component/search_bar/component/InputFilter';

it('test text inputFilter with abc', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <InputFilter
      name="testInputFilterName"
      label="testInputFilterLabel"
      setFilter={mockSetFilter}
    ></InputFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');
  expect(screen.getByRole('listitem')).toBeInTheDocument();

  const label = screen.getByText('testInputFilterLabel');
  expect(label.className).toBe('search-param-label');

  let input = screen.getByLabelText('testInputFilterLabel');
  expect(input.className).toBe('input-filter');
  expect(input.id).toBe('testInputFilterName');
  expect(input.type).toBe('text');
  expect(input.value).toBe('');
  expect(input.onchange).toBeDefined();
  expect(input.onblur).toBeDefined();
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(input, { target: { value: 'abc' } });

  expect(label.className).toBe('search-param-label-active');
  expect(input.value).toBe('abc');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(input);

  expect(label.className).toBe('search-param-label-active');
  expect(input.value).toBe('abc');
  expect(mockSetFilter).toHaveBeenCalledWith({ testInputFilterName: 'abc' });
  unmount();
});

it('test text inputFilter with null', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <InputFilter
      name="testInputFilterName"
      label="testInputFilterLabel"
      setFilter={mockSetFilter}
    ></InputFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');
  expect(screen.getByRole('listitem')).toBeInTheDocument();

  const label = screen.getByText('testInputFilterLabel');
  expect(label.className).toBe('search-param-label');

  let input = screen.getByLabelText('testInputFilterLabel');
  expect(input.className).toBe('input-filter');
  expect(input.id).toBe('testInputFilterName');
  expect(input.type).toBe('text');
  expect(input.value).toBe('');
  expect(input.onchange).toBeDefined();
  expect(input.onblur).toBeDefined();
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(input, { target: { value: null } });

  expect(label.className).toBe('search-param-label');
  expect(input.value).toBe('');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(input);

  expect(label.className).toBe('search-param-label');
  expect(input.value).toBe('');
  expect(mockSetFilter).toHaveBeenCalledWith({ testInputFilterName: null });
  unmount();
});

it('test number inputFilter with 123', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <InputFilter
      name="testInputFilterName"
      label="testInputFilterLabel"
      setFilter={mockSetFilter}
      type="number"
    ></InputFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');
  expect(screen.getByRole('listitem')).toBeInTheDocument();

  const label = screen.getByText('testInputFilterLabel');
  expect(label.className).toBe('search-param-label');

  let input = screen.getByLabelText('testInputFilterLabel');
  expect(input.className).toBe('input-filter');
  expect(input.id).toBe('testInputFilterName');
  expect(input.type).toBe('number');
  expect(input.value).toBe('');
  expect(input.onchange).toBeDefined();
  expect(input.onblur).toBeDefined();
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(input, { target: { value: 123 } });

  expect(label.className).toBe('search-param-label-active');
  expect(input.value).toBe('123');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(input);

  expect(label.className).toBe('search-param-label-active');
  expect(input.value).toBe('123');
  expect(mockSetFilter).toHaveBeenCalledWith({ testInputFilterName: 123 });
  unmount();
});
