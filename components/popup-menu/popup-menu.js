import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import './style/popup-menu.css'

class PopupMenu extends Component {
    constructor() {
        super()
        this.triggers = { click: 'click', hover: 'hover', rightClick: 'right-click' }
        this.checkTrigger = this.checkTrigger.bind(this)
        this.popupMenu = this.popupMenu.bind(this)
        this.hideMenu = this.hideMenu.bind(this)
        this.state = { showMenu: false }
    }

    componentDidMount() {
        document.addEventListener('click', this.hideMenu)
    }

    checkTrigger(event) {
        const { trigger } = this.props
        return trigger.some(item => item === event)
    }

    popupMenu(e) {
        e.preventDefault()
        e.nativeEvent.stopImmediatePropagation()
        this.setState({ showMenu: true })
    }

    hideMenu() {
        this.setState({ showMenu: false })
    }

    render() {
        const { children, items, placement } = this.props
        const { triggers, checkTrigger, popupMenu, handleMenuClick } = this
        const { showMenu } = this.state
        return (
            <div
                className="popup-menu"
                onClick={checkTrigger(triggers.click) ? popupMenu : null}
                onMouseOver={checkTrigger(triggers.hover) ? popupMenu : null}
                onContextMenu={checkTrigger(triggers.rightClick) ? popupMenu : null}
            >
                {children}
                <CSSTransition
                    in={showMenu}
                    classNames="menu-transition"
                    timeout={300}
                >
                    <div className={`menu ${placement}`}>
                        {showMenu ? items : null}
                    </div>
                </CSSTransition>
            </div>
        )
    }
}

export default PopupMenu