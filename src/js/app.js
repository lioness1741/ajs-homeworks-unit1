function getStatus(live) {
    if (live.health > 50) {
      return 'healthy';
    }
    if (live.health >= 15) {
      return 'wounded';
    }
    return 'critical';
  }

  export default getStatus;