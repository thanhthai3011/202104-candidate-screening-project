import renderer from 'react-test-renderer';
import ToDoForm from './ToDoForm';


test('', () => {
  const component = renderer.create(
    <ToDoForm />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.addItem();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();


});
