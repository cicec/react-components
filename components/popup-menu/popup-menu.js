import React, { Component } from 'react'
import './style/popup-menu.css'

class PopupMenu extends Component {
    constructor() {
        super()
        this.triggers = { click: 'click', hover: 'hover', rightClick: 'right-click' }
        this.placements = { top: 'top', buttom: 'bottom', left: 'left', right: 'right'}
        this.popup = this.popup.bind(this)
        this.state = { menu: null }
    }

    popup() {
        const { items } = this.props
        this.setState({ menu: items })
    }

    render() {
        const { children, placement, trigger } = this.props
        const { triggers, popup } = this
        const { menu } = this.state
        return (
            <div
                className="popup-menu right"
                onClick={trigger.some(trigger => trigger === triggers.click) ? popup : null}
            >
                {children}
                {menu}
            </div>
        )
    }
}

export default PopupMenu