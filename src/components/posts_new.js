import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderField(field) {
        //ES6 destructuring, equivalent to:
        // const touched = field.meta.touched
        const { meta: { touched, error } } = field;

        const fieldClassName = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={fieldClassName}>
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                    // alternative to:
                    // onChange={field.input.onChange}
                    // onFocus={field.input.onFocus} etc. etc.
                />
                <div className="text-help">
                    {touched ? error: ''}
                </div>
            </div>
        )
    }

    onSubmit(values) {
        console.log(values);
    }

    render() {
        // Property (handleSubmit) from redux-form, ES6 destructuring
        const { handleSubmit } = this.props;

        // ES5 version
        // const handleSubmit = this.props.handleSubmit;

        return (
            <div>
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                    <Field
                        name="title"
                        component={this.renderField}
                        label="Title"
                    />
                     <Field
                        name="categories"
                        component={this.renderField}
                        label="Categories"
                    />
                    <Field
                        name="content"
                        component={this.renderField}
                        label="Post Content"
                    />
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

function validate(values) {
    const errors = {};

    // Validate the inputs from 'values
    if (!values.title) {
        errors.title = "*Please enter a title for the post.";
    }

    if (!values.categories) {
        errors.categories = "*Please enter categories for the post.";
    }

    if (!values.content) {
        errors.content = "*Please enter content for the post.";
    }

    // If errors is empty, the form is validated to submit
    // If errors has any properties, redux-form assumes that form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);