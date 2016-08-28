describe('FunctionAgent tests', () => {
  const functionAgentInitArguments = {
    body: 'body',
    params: 'params',
    scriptUrl: 'scriptUrl',
    closureStack: 'closureStack'
  }
  let FunctionAgent

  before(() => {
    FunctionAgent = require(`${libDir}/structures/FunctionAgent`)
  })

  describe('constructor tests', () => {
    it('should set instance properties properly to given init arguments', () => {
      const functionAgent = new FunctionAgent(functionAgentInitArguments)

      expect(functionAgent.body).to.be.equal(functionAgentInitArguments.body)
      expect(functionAgent.params).to.be.equal(functionAgentInitArguments.params)
      expect(functionAgent.scriptUrl).to.be.equal(functionAgentInitArguments.scriptUrl)
      expect(functionAgent.closureStack).to.be.equal(functionAgentInitArguments.closureStack)
    })
  })
})
