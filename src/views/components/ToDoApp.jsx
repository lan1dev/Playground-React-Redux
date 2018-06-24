import React, { Fragment } from 'react';
import Title from '../common/Title';
import FlexBox from '../common/FlexBox';
import ToDoFormContainer from '../containers/ToDoFormContainer';
import ToDoListContainer from '../containers/ToDoListContainer';

const App = () => (
  <Fragment>
    <Title>ToDo</Title>
    <FlexBox direction="column" align="center">
      <ToDoFormContainer />
      <ToDoListContainer />
    </FlexBox>
  </Fragment>
);

export default App;
