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
    renderDialogForType(type) {
        switch (type) {
            case DialogTypes.ALERT:
                return <Alert />
            case DialogTypes.CONFIRM:
                return <Confirm />
            case DialogTypes.PROMPT:
                return <Prompt />
            default:
                throw new Error('dialog type error')
        }
    }

    render() {
        const { type } = this.props
        return this.renderDialogForType(type)
    }
}

function popupDialog(type) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<Modal type={type} />, div)
}

export default {
    alert() {
        popupDialog(DialogTypes.ALERT)
    },
    confirm() {
        popupDialog(DialogTypes.CONFIRM)
    },
    prompt() {
        popupDialog(DialogTypes.PROMPT)
    }
}