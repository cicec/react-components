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
            <div className="modal-prompt">
                {contentText}
                <input type="text" value={enterContent} onChange={this.handleChange} />
                <button type="button" onClick={() => { onOk(enterContent) }}>
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

export default Prompt