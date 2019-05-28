module.exports = {
  schedule: {
    interval: 30000,
    type: 'all',
    // immediate: true
  },
  async task(ctx) {
    console.log('schedule1==================')
  },
};