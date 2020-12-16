import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Layout from "./hoc/Layout/Layout";
import TeaBrowser from "./containers/TeaBrowser/TeaBrowser";
import ImageUploader from "./containers/ImageUploader/ImageUploader";
import AdminPage from "./containers/AdminPage/AdminPage";
import ProductForm from "./containers/Form/ProductForm";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/adminPage" component={AdminPage} />
            <Route path="/imageUpload" component={ImageUploader} />
            <Route path="/productForm" component={ProductForm} />
            <Route path="/" exact component={TeaBrowser} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
