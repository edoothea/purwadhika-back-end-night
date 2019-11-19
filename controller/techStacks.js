let techStacks = {}

techStacks.getAll = function(req, res) {
  const result = req.db.get('techStacks').value()
  console.log('RESULT', JSON.stringify(result))
  res.send(result)
}

module.exports = techStacks
