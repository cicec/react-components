import React, { Component } from 'react'

class Confirm extends Component {
    render() {
        const { contentText, onOk, onCancel } = this.props
        return (
            <div className="modal-confirm">
                {contentText}
                <button type="button" onClick={onOk}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-check-circle-fill" />
                    </svg>
                </button>
                <button type="button" onClick={onCancel}>
                    <svg className="icon" aria-hidden="true">
                        <use xlinkHref="#icon-close-circle-fill" />
                    </svg>
                </button>
            </div>
        )
    }
}

export default Confirm