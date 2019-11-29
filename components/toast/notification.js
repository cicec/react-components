import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Notice from './notice'

class Notification extends Component {
  constructor() {
    super()
    this.transitionTime = 300
    this.state = { notices: [] }
    this.removeNotice = this.removeNotice.bind(this)
  }

  getNoticeKey() {
    const { notices } = this.state
    return `notice-${new Date().getTime()}-${notices.length}`
  }

  addNotice(notice) {
    const { notices } = this.state
    notice.key = this.getNoticeKey()
    if (notices.every(item => item.key !== notice.key)) {
      if (notices.length > 0 && notices[notices.length - 1].type === 'loading') {
        notices.push(notice)
        setTimeout(() => {
          this.setState({ notices })
        }, this.transitionTime)
      } else {
        notices.push(notice)
        this.setState({ notices })
      }
      if (notice.duration > 0) {
        setTimeout(() => {
          this.removeNotice(notice.key)
        }, notice.duration)
      }
    }
    return () => {
      this.removeNotice(notice.key)
    }
  }

  removeNotice(key) {
    const { notices } = this.state
    this.setState({
      notices: notices.filter(notice => {
        if (notice.key === key) {
          if (notice.onClose) setTimeout(notice.onClose, this.transitionTime)
          return false
        }
        return true
      })
    })
  }

  render() {
    const { notices } = this.state
    return (
      <TransitionGroup className="toast-notification">
        {notices.map(notice => (
          <CSSTransition
            key={notice.key}
            classNames="toast-notice-wrapper notice"
            timeout={this.transitionTime}
          >
            <Notice {...notice} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  }
}

function createNotification() {
  const div = document.createElement('div')
  document.body.appendChild(div)
  const ref = React.createRef()
  ReactDOM.render(<Notification ref={ref} />, div)
  return {
    addNotice(notice) {
      return ref.current.addNotice(notice)
    },
    destroy() {
      ReactDOM.unmountComponentAtNode(div)
      document.body.removeChild(div)
    }
  }
}

export default createNotification()
