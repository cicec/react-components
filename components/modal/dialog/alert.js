import React, { Component } from 'react'

class Alert extends Component {
    render() {
        const { contentText, onOk } = this.props
        return (
            <div className="modal-alert dialog">
                <h4>{contentText}</h4>
                <button type="button" onClick={() => { if (onOk) onOk() }}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-check-circle-fill" />
                    </svg>
                </button>
            </div>
        )
    }
}

export default Alert