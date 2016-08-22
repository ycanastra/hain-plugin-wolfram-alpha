'use strict'

module.exports = (pluginContext) => {
  const shell = pluginContext.shell

  function search (query, res) {
    const query_trim = query.trim()

    if (query_trim.length === 0) {
      return
    }

    res.add({
      id: query_trim,
      payload: 'open',
      title: query_trim,
      desc: `Search ${query_trim} on wolframalpha.com`
    })
  }

  function execute (id, payload) {
    if (payload !== 'open') {
      return
    }

    shell.openExternal(`https://www.wolframalpha.com/input/?i=${id}`)
  }
  return { search, execute }
}
