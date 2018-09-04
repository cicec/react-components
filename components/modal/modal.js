import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Alert from './dialog/alert'
import Confirm from './dialog/confirm'
import Prompt from './dialog/prompt'

const DialogTypes = {
    ALERT: 'alert',
    CONFIRM: 'confirm',
    PROMPT: 'prompt'
}

class Modal extends Component {
    renderDialogForType(type, props) {
        switch (type) {
            case DialogTypes.ALERT:
                return <Alert {...props} />
            case DialogTypes.CONFIRM:
                return <Confirm {...props} />
            case DialogTypes.PROMPT:
                return <Prompt {...props} />
            default:
                throw new Error('dialog type error')
        }
    }

    render() {
        const { type, contentText, onOk, onCancel } = this.props
        return (
            <div className="modal">
                {this.renderDialogForType(type, { contentText, onOk, onCancel })}
            </div>
        )
    }
}

function popupDialog(params) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<Modal {...params} />, div)
}

export default {
    alert(params) {
        popupDialog({ type: DialogTypes.ALERT, ...params })
    },
    confirm(params) {
        popupDialog({ type: DialogTypes.CONFIRM, ...params })
    },
    prompt(params) {
        popupDialog({ type: DialogTypes.PROMPT, ...params })
    }
}