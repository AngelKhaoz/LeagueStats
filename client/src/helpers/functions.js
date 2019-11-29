/**
 *  Return the relative time betweeen a chosen moment and the current time
 * @param previous : time we want to get difference 
 */
export function timeDifference(previous) {
  const current = new Date()
  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerWeek = msPerDay * 7
  const elapsed = current - previous

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago'
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago'
  } else if (elapsed < msPerWeek) {
    return Math.round(elapsed / msPerDay) + ' days ago'
  } else {
    const oldDate = new Date(previous)
    const day = oldDate.getDate() < 10 ? '0' + oldDate.getDate() : oldDate.getDate()
    const month = oldDate.getMonth() < 9 ? '0' + (oldDate.getMonth() + 1) : (oldDate.getMonth() + 1)
    return day + '.' + month + '.' + oldDate.getFullYear().toString().substr(-2)
  }
}

/**
 *  Check if 2 summoner names are the same
 * @param a : first summoner name
 * @param b : second summoner name
 */
export function compareSummonernames(a, b) {
  return a.toLowerCase().replace(/ /g, '') === b.toLowerCase().replace(/ /g, '')
}
