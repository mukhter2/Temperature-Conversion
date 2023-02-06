import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: crntChange } = this.props;
        const { change: nextChange } = nextProps;
        if (crntChange === nextChange) {
            return false;
        }
        return true;
    }

    render() {
        console.log('button rendered');
        const { change } = this.props;
        return (
            <button type="button" onClick={change}>
                Click Here
            </button>
        );
    }
}
export default Button;
