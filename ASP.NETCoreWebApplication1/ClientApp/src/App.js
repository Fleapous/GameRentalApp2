import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import { Layout } from './components/Layout';
import './custom.css';
import { AuthProvider } from "./components/AuthProvider";
import Admin from "./Pages/Admin/Admin";

export default class App extends Component {
  static displayName = App.name;

  render() {
    return (
        <AuthProvider>
          <Layout>
            <Routes>
                <Route path="/Admin/*" element={<Admin />} />
              {AppRoutes.map((route, index) => {
                const { element, routes, ...rest } = route;
                return (
                    <Route
                        key={index}
                        {...rest}
                        element={element}
                    >
                      {routes && routes.map((nestedRoute, nestedIndex) => (
                          <Route
                              key={nestedIndex}
                              {...nestedRoute}
                          />
                      ))}
                    </Route>
                );
              })}
            </Routes>
          </Layout>
        </AuthProvider>
    );
  }
}
