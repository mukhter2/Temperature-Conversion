import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Form extends React.Component {
    state = {
        title: 'JavaScript',
        textArea: 'JavaScript is pain',
        library: 'React',
        isMale: true,
    };

    handleChange = (e) => {
        // this.setState({
        //     [e.target.name]: e.target.value,
        // });
        if (e.target.type === 'text') {
            this.setState({
                title: e.target.value,
            });
        } else if (e.target.type === 'textarea') {
            this.setState({
                textArea: e.target.value,
            });
        } else if (e.target.type === 'select-one') {
            this.setState({
                library: e.target.value,
            });
        } else if (e.target.type === 'checkbox') {
            this.setState({
                isMale: e.target.checked,
            });
        }
    };

    submitHandler = (e) => {
        const { title, textArea, library, isMale } = this.state;
        e.preventDefault();
        console.log(title, textArea, library, isMale);
    };

    render() {
        const { title, textArea, library, isMale } = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value={null} />
                    <input
                        name="title"
                        type="text"
                        placeholder="Enter Title"
                        value={title}
                        onChange={this.handleChange}
                    />
                    <br />
                    <br />
                    <textarea name="textArea" value={textArea} onChange={this.handleChange} />
                    <br />
                    <br />
                    <select value={library} onChange={this.handleChange}>
                        <option value="React">React</option>
                        <option value="Vue">Vue</option>
                        <option value="Angular">Angular</option>
                    </select>
                    <br />
                    <br />
                    <input type="checkbox" checked={isMale} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                </form>
            </div>
        );
    }
}
