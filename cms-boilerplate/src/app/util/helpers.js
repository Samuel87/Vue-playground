let mq;

const checkMediaWidth = (q, callback) => {
    if (callback) {
        q.matches ? callback(false) : callback(true);
    }
};

if (matchMedia) {
    mq = window.matchMedia('(min-width: 1024px)');
    mq.addListener(checkMediaWidth);
}

// mq - listener, can be used to detect if matchMedia is supported
// checkMediaWidth - check if media matches, checkMediaWidth(mq, () => { ... })
export { mq, checkMediaWidth };
