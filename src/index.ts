import { webSocket } from 'rxjs/webSocket'
const ws = require('ws')

interface BitcoinApiMsg {
    event: string,
    data: {
        channel: string
    }
}

const bitcoinAPI = webSocket({
    WebSocketCtor: ws,
    url: 'wss://ws.bitstamp.net'
})
const sendMessage = (msg: BitcoinApiMsg) => bitcoinAPI.next(msg)

sendMessage({
    event: "bts:subscribe",
    data: {
        channel:  "live_trades_btcusd"
    }
})

bitcoinAPI.subscribe(
    (msg: BitcoinApiMsg) => console.log('Message', msg),
    err => console.log(err), // Called if at any point WebSocket API signals some kind of error.
    () => console.log('complete') // Called when connection is closed (for whatever reason).
)