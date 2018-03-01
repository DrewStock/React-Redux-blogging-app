import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {

    renderTitleField(field) {
        return (
            <div>
                <input
                    type="text"
                    {...field.input}
                    // alternative to:
                    // onChange={field.input.onChange}
                    // onFocus={field.input.onFocus} etc. etc.
                />
            </div>
        )
    }

    render() {
        return (
            <div>
                <form>
                    <Field
                        name="title"
                        component={this.renderTitleField}
                    />
                </form>
            </div>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm'
})(PostsNew);