import renderer from 'react-test-renderer';
import ToDoList from "./ToDoList";

test('', () => {
  const component = renderer.create(
    <ToDoList />
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();



});
