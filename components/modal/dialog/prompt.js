import React, { Component } from 'react'

class Prompt extends Component {
    constructor() {
        super()
        this.handleChange = this.handleChange.bind(this)
        this.state = { enterContent: '' }
    }

    handleChange(event) {
        this.setState({ enterContent: event.target.value })
    }

    render() {
        const { contentText, onOk, onCancel } = this.props
        const { enterContent } = this.state
        return (
            <div className="modal-prompt dialog">
                <h4>{contentText}</h4>
                <input type="text" value={enterContent} onChange={this.handleChange} />
                <div className="button-wrapper">
                    <button type="button" className="check" onClick={() => { if (onOk) onOk(enterContent) }}>
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

export default Prompt