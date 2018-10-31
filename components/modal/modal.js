import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'
import Alert from './dialog/alert'
import Confirm from './dialog/confirm'
import Prompt from './dialog/prompt'

const DialogTypes = {
    ALERT: 'alert',
    CONFIRM: 'confirm',
    PROMPT: 'prompt'
}

class Modal extends Component {
    constructor() {
        super()
        this.onClose = this.onClose.bind(this)
        this.transitionTime = 300
        this.state = { showDialog: false }
    }

    componentDidMount() {
        this.setState({ showDialog: true })
    }

    onClose(confirm, data) {
        const { onOk, onCancel, removeDialog } = this.props
        if (confirm && onOk) onOk(data)
        else if (onCancel) onCancel()
        setTimeout(removeDialog, this.transitionTime)
        this.setState({ showDialog: false })
    }

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
        const { type, contentText } = this.props
        const { onClose } = this
        const { showDialog } = this.state
        return (
            <CSSTransition
                in={showDialog}
                classNames="modal-wrapper"
                timeout={this.transitionTime}
            >
                <div className="modal">
                    <CSSTransition
                        in={showDialog}
                        classNames="dialog-wrapper"
                        timeout={this.transitionTime}
                    >
                        {
                            this.renderDialogForType(type, {
                                contentText,
                                onOk(data) { onClose(true, data) },
                                onCancel() { onClose(false) },
                            })
                        }
                    </CSSTransition>
                </div>
            </CSSTransition>
        )
    }
}

function popupDialog(params) {
    const div = document.createElement('div')
    document.body.appendChild(div)
    ReactDOM.render(<Modal
        {...params}
        removeDialog={() => {
            ReactDOM.unmountComponentAtNode(div)
            document.body.removeChild(div)
        }}
    />, div)
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