import notificationDOM from './notification'
import './toast.css'

let notification
const notice = (type, content, duration = 2000, onClose) => {
    if (!notification) notification = notificationDOM
    return notification.addNotice({ type, content, duration, onClose })
}

export default {
    info(content, duration, onClose) {
        return notice('info', content, duration, onClose)
    },
    success(content, duration, onClose) {
        return notice('success', content, duration, onClose)
    },
    warning(content, duration, onClose) {
        return notice('warning', content, duration, onClose)
    },
    error(content, duration, onClose) {
        return notice('error', content, duration, onClose)
    },
    loading(content, duration = 0, onClose) {
        return notice('loading', content, duration, onClose)
    }
}