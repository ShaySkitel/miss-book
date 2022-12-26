const { useEffect, useState, useRef } = React

import { eventBusService } from "../services/event-bus.service.js"

export function UserMsg() {
    const [msg, setMsg] = useState(null)
    const timeoutIdRef = useRef(null)

    useEffect(() => {
        const unsubscribe = eventBusService.on('show-user-msg', (msg) => {
            setMsg(msg)
            if (timeoutIdRef.current) {
                clearTimeout(timeoutIdRef.current)
                timeoutIdRef.current = null
            }
            timeoutIdRef.current = setTimeout(() => {
                setMsg(null)
            }, 3000);
        })

        return unsubscribe
    })

    if(!msg) return
    return <div className={'user-msg ' + msg.type}>
        {msg.txt}
    </div>
}