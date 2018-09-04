import React, { Component } from 'react'

class Confirm extends Component {
    render() {
        const { contentText, onOk, onCancel } = this.props
        return (
            <div className="modal-confirm dialog">
                <h4>{contentText}</h4>
                <div className="button-wrapper">
                    <button type="button" className="check" onClick={() => { if (onOk) onOk() }}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-check-circle-fill" />
                        </svg>
                    </button>
                    <button type="button" className="close" onClick={() => { if (onCancel) onCancel() }}>
                        <svg className="icon" aria-hidden="true">
                            <use xlinkHref="#icon-close-circle-fill" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }
}

export default Confirm