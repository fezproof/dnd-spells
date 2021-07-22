import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassList from '../components/ClassList';
import ClassPage from './class';

const AppRouter: FC = () => {
  return (
    <Routes basename="/dnd-spells">
      <Route path="/">
        <ClassList />
      </Route>
      <Route path="class">
        <Route path=":index">
          <ClassPage />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
