import renderer from 'react-test-renderer';

import DatePicker from './DateTimePicker';

test('', () => {
  const component = renderer.create(
    <DatePicker />,
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.handleStartDateChange();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.handleEndDateChange();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

});
