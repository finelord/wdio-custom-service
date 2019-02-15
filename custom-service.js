class CustomService {
    onPrepare() {
        console.log('onPrepare hook');
    }
    onComplete() {
        console.log('onComplete hook');
    }
}

module.exports = new CustomService();