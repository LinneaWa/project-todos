import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TaskReducer, IdeaReducer } from 'reducers/reducers';
import { Header } from 'components/Header';
import { StartPage } from 'pages/StartPage';
import { NeedToDo } from 'pages/NeedToDo';
import { WantToDo } from 'pages/WantToDo';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  const reducers = combineReducers({
    TaskReducer: TaskReducer.reducer,
    IdeaReducer: IdeaReducer.reducer
  });

  const store = configureStore({
    reducer: reducers
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/needtodo" element={<NeedToDo />} />
          <Route path="/wanttodo" element={<WantToDo />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
