import { Selector } from 'testcafe';

// eslint-disable-next-line no-undef
fixture `getting started`
    .page `0.0.0.0:3000/`;
test('My first test', async t => {
    await t 
        .click('.btn-link')
        .typeText('#addItemInput', 'task1')
        .typeText('#addItemDueInput', '12052021')
        .click('.btn-success');
    
});