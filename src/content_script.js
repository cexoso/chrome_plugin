import { injectCustomJs } from './util'

function postMessage({ type, data }) {
    window.postMessage({ type, to: 'frontend', from: 'mid', data }, '*')
}

window.addEventListener('message', e => {
    const regExp = /^mingyuan\/(\w*)\/([\w:\d]*)$/
    const { type, to, data } = e.data;
    if (to === 'mid' && type && type.match(regExp)) {
        const m = type.match(regExp);
        switch (m[1]) {
            case 'controller':
                postMessage({ type: 'mingyuan/controller/alive:yes', data: 'test' })
                break;
            case 'data':
                const response = res => postMessage({ type: `mingyuan/data/${m[2].replace('req', 'res')}`, data: res });
                fetch(...e.data.data).then(res => res.text())
                    .then(response, response);
                break;
        }
    }
});
postMessage({ type: 'mingyuan/controller/online', data: 'test' });
