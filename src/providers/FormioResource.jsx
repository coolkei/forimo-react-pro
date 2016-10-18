import React from 'react';
import { Match, Link } from 'react-router';
import { combineReducers } from 'redux';
import { Formio, FormioConfirm, FormioGrid } from '../components';
import { formReducer, submissionReducer, submissionsReducer } from '../reducers';
import { addReducer, addRoute } from '../factories';
import { Index, Create, Container, View, Edit, Delete } from '../views/resource';
import { FormActions, SubmissionActions } from '../actions';

export default class {
  constructor(name, src, options = {}) {
    this.name = name;
    this.src = src;
    this.options = options;
    this.options.base = this.options.base || '';

    addReducer(name, this.getReducers(name, src));
    addRoute(this.getRoutes());
  }

  basePath = () => this.options.base + '/' + this.name;

  Container = Container;

  Index = Index

  Create = Create

  View = View

  Edit = Edit

  Delete = Delete

  getRoutes = () => {
    return (
      <div className={this.name}>
        <Match pattern={this.basePath()} exactly component={this.Index(this)} />
        <Match pattern={this.basePath() + 'Create'} exactly component={this.Create(this)} />
        <Match pattern={this.basePath() + '/:' + this.name + 'Id'} component={this.Container(this)} />
      </div>
    );
  }

  getReducers = (name, src) => {
    return combineReducers({
      form: formReducer(name, src),
      submission: submissionReducer(name, src),
      submissions: submissionsReducer(name, src)
    })
  }
}
