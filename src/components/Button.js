import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class Button extends React.Component {
    shouldComponentUpdate(nextProps) {
        const { change: crntChange, locale: crntLocale } = this.props;
        const { change: nextChange, locale: nxtLocale } = nextProps;
        if (crntChange === nextChange && crntLocale === nxtLocale) {
            return false;
        }
        return true;
    }

    render() {
        const { change, locale, show, enable } = this.props;
        if (!enable) return null;
        return (
            <div>
                <button type="button" onClick={() => change(locale)}>
                    {locale === 'bn-BD' ? 'Change Clock' : 'ঘড়ি পরিবর্তন করুন'}
                </button>
                <p>{show ? 'hello english' : 'hello bangla'}</p>
            </div>
        );
    }
}
export default Button;
