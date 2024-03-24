import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import MinMaxFilter from '../../../js/searcher/component/search_bar/component/MinMaxFilter';

it('test text minMaxFilter with A,D', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <MinMaxFilter
      minName="testMinMaxFilterMinName"
      maxName="testMinMaxFilterMaxName"
      label="testMinMaxFilterLabel"
      setFilter={mockSetFilter}
    ></MinMaxFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');

  const label = screen.getByText('testMinMaxFilterLabel');
  expect(label.className).toBe('search-param-label');

  let inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBe(2);

  let minInput = inputs[0];
  expect(minInput.className).toBe('min-max-filter');
  expect(minInput.id).toBe('testMinMaxFilterMinName');
  expect(minInput.type).toBe('text');
  expect(minInput.value).toBe('');
  expect(minInput.onchange).toBeDefined();
  expect(minInput.onblur).toBeDefined();

  let maxInput = inputs[1];
  expect(maxInput.className).toBe('min-max-filter');
  expect(maxInput.id).toBe('testMinMaxFilterMaxName');
  expect(maxInput.type).toBe('text');
  expect(maxInput.value).toBe('');
  expect(maxInput.onchange).toBeDefined();
  expect(maxInput.onblur).toBeDefined();

  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(minInput, { target: { value: 'A' } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(minInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(mockSetFilter).toHaveBeenCalledWith({ testMinMaxFilterMinName: 'A' });

  fireEvent.change(maxInput, { target: { value: 'D' } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(maxInput.value).toBe('D');
  expect(mockSetFilter).toHaveBeenCalledTimes(1);

  fireEvent.blur(maxInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(maxInput.value).toBe('D');
  expect(mockSetFilter).toHaveBeenCalledWith({
    testMinMaxFilterMaxName: 'D',
  });
  expect(mockSetFilter).toHaveBeenCalledTimes(2);
  unmount();
});

it('test text minMaxFilter with null,null', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <MinMaxFilter
      minName="testMinMaxFilterMinName"
      maxName="testMinMaxFilterMaxName"
      label="testMinMaxFilterLabel"
      setFilter={mockSetFilter}
    ></MinMaxFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');

  const label = screen.getByText('testMinMaxFilterLabel');
  expect(label.className).toBe('search-param-label');

  let inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBe(2);

  let minInput = inputs[0];
  expect(minInput.className).toBe('min-max-filter');
  expect(minInput.id).toBe('testMinMaxFilterMinName');
  expect(minInput.type).toBe('text');
  expect(minInput.value).toBe('');
  expect(minInput.onchange).toBeDefined();
  expect(minInput.onblur).toBeDefined();

  let maxInput = inputs[1];
  expect(maxInput.className).toBe('min-max-filter');
  expect(maxInput.id).toBe('testMinMaxFilterMaxName');
  expect(maxInput.type).toBe('text');
  expect(maxInput.value).toBe('');
  expect(maxInput.onchange).toBeDefined();
  expect(maxInput.onblur).toBeDefined();

  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(minInput, { target: { value: null } });

  expect(label.className).toBe('search-param-label');
  expect(minInput.value).toBe('');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(minInput);

  expect(label.className).toBe('search-param-label');
  expect(minInput.value).toBe('');
  expect(mockSetFilter).toHaveBeenCalledWith({ testMinMaxFilterMinName: null });

  fireEvent.change(maxInput, { target: { value: null } });

  expect(label.className).toBe('search-param-label');
  expect(minInput.value).toBe('');
  expect(maxInput.value).toBe('');
  expect(mockSetFilter).toHaveBeenCalledTimes(1);

  fireEvent.blur(maxInput);

  expect(label.className).toBe('search-param-label');
  expect(minInput.value).toBe('');
  expect(maxInput.value).toBe('');
  expect(mockSetFilter).toHaveBeenCalledWith({
    testMinMaxFilterMaxName: null,
  });
  expect(mockSetFilter).toHaveBeenCalledTimes(2);
  unmount();
});

it('test number minMaxFilter with 333,555', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <MinMaxFilter
      minName="testMinMaxFilterMinName"
      maxName="testMinMaxFilterMaxName"
      label="testMinMaxFilterLabel"
      type="number"
      setFilter={mockSetFilter}
    ></MinMaxFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');

  const label = screen.getByText('testMinMaxFilterLabel');
  expect(label.className).toBe('search-param-label');

  let inputs = screen.getAllByRole('spinbutton');
  expect(inputs.length).toBe(2);

  let minInput = inputs[0];
  expect(minInput.className).toBe('min-max-filter');
  expect(minInput.id).toBe('testMinMaxFilterMinName');
  expect(minInput.type).toBe('number');
  expect(minInput.value).toBe('');
  expect(minInput.onchange).toBeDefined();
  expect(minInput.onblur).toBeDefined();

  let maxInput = inputs[1];
  expect(maxInput.className).toBe('min-max-filter');
  expect(maxInput.id).toBe('testMinMaxFilterMaxName');
  expect(maxInput.type).toBe('number');
  expect(maxInput.value).toBe('');
  expect(maxInput.onchange).toBeDefined();
  expect(maxInput.onblur).toBeDefined();

  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(minInput, { target: { value: 333 } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(minInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(mockSetFilter).toHaveBeenCalledWith({ testMinMaxFilterMinName: 333 });

  fireEvent.change(maxInput, { target: { value: 555 } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(maxInput.value).toBe('555');
  expect(mockSetFilter).toHaveBeenCalledTimes(1);

  fireEvent.blur(maxInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(maxInput.value).toBe('555');
  expect(mockSetFilter).toHaveBeenCalledWith({
    testMinMaxFilterMaxName: 555,
  });
  expect(mockSetFilter).toHaveBeenCalledTimes(2);
  unmount();
});

it('test text minMaxFilter with A,D asArray', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <MinMaxFilter
      minName="testMinMaxFilterMinName"
      maxName="testMinMaxFilterMaxName"
      label="testMinMaxFilterLabel"
      setFilter={mockSetFilter}
      asArray={true}
    ></MinMaxFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');

  const label = screen.getByText('testMinMaxFilterLabel');
  expect(label.className).toBe('search-param-label');

  let inputs = screen.getAllByRole('textbox');
  expect(inputs.length).toBe(2);

  let minInput = inputs[0];
  expect(minInput.className).toBe('min-max-filter');
  expect(minInput.id).toBe('testMinMaxFilterMinName');
  expect(minInput.type).toBe('text');
  expect(minInput.value).toBe('');
  expect(minInput.onchange).toBeDefined();
  expect(minInput.onblur).toBeDefined();

  let maxInput = inputs[1];
  expect(maxInput.className).toBe('min-max-filter');
  expect(maxInput.id).toBe('testMinMaxFilterMaxName');
  expect(maxInput.type).toBe('text');
  expect(maxInput.value).toBe('');
  expect(maxInput.onchange).toBeDefined();
  expect(maxInput.onblur).toBeDefined();

  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(minInput, { target: { value: 'A' } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(minInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(mockSetFilter).toHaveBeenCalledWith({ testMinMaxFilterMinName: ['A'] });

  fireEvent.change(maxInput, { target: { value: 'D' } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(maxInput.value).toBe('D');
  expect(mockSetFilter).toHaveBeenCalledTimes(1);

  fireEvent.blur(maxInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('A');
  expect(maxInput.value).toBe('D');
  expect(mockSetFilter).toHaveBeenCalledWith({
    testMinMaxFilterMaxName: ['D'],
  });
  expect(mockSetFilter).toHaveBeenCalledTimes(2);
  unmount();
});

it('test number minMaxFilter with 333,555 asArray', () => {
  const mockSetFilter = jest.fn();

  const { unmount } = render(
    <MinMaxFilter
      minName="testMinMaxFilterMinName"
      maxName="testMinMaxFilterMaxName"
      label="testMinMaxFilterLabel"
      type="number"
      asArray={true}
      setFilter={mockSetFilter}
    ></MinMaxFilter>
  );

  const container = screen.getByRole('list');
  expect(container.className).toBe('search-param-con');

  const label = screen.getByText('testMinMaxFilterLabel');
  expect(label.className).toBe('search-param-label');

  let inputs = screen.getAllByRole('spinbutton');
  expect(inputs.length).toBe(2);

  let minInput = inputs[0];
  expect(minInput.className).toBe('min-max-filter');
  expect(minInput.id).toBe('testMinMaxFilterMinName');
  expect(minInput.type).toBe('number');
  expect(minInput.value).toBe('');
  expect(minInput.onchange).toBeDefined();
  expect(minInput.onblur).toBeDefined();

  let maxInput = inputs[1];
  expect(maxInput.className).toBe('min-max-filter');
  expect(maxInput.id).toBe('testMinMaxFilterMaxName');
  expect(maxInput.type).toBe('number');
  expect(maxInput.value).toBe('');
  expect(maxInput.onchange).toBeDefined();
  expect(maxInput.onblur).toBeDefined();

  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.change(minInput, { target: { value: 333 } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(mockSetFilter).toHaveBeenCalledTimes(0);

  fireEvent.blur(minInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(mockSetFilter).toHaveBeenCalledWith({ testMinMaxFilterMinName: [333] });

  fireEvent.change(maxInput, { target: { value: 555 } });

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(maxInput.value).toBe('555');
  expect(mockSetFilter).toHaveBeenCalledTimes(1);

  fireEvent.blur(maxInput);

  expect(label.className).toBe('search-param-label-active');
  expect(minInput.value).toBe('333');
  expect(maxInput.value).toBe('555');
  expect(mockSetFilter).toHaveBeenCalledWith({
    testMinMaxFilterMaxName: [555],
  });
  expect(mockSetFilter).toHaveBeenCalledTimes(2);
  unmount();
});
