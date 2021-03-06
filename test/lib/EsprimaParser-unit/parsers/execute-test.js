describe('execute tests', () => {
  const exp = {
    caller: 'caller',
    callee: 'callee'
  }
  beforeEach(() => {
    sandbox.stub(esprimaParser, 'executeExp')
  })

  it('should call executeExp with exp and return', () => {
    const resultFromExecuteExp = 'resultFromExecuteExp'

    esprimaParser.executeExp.returns(resultFromExecuteExp)

    const result = esprimaParser.execute(exp)

    expect(
      esprimaParser.executeExp
        .calledWithExactly(exp)
    ).to.be.true
    expect(result).to.be.equal(resultFromExecuteExp)
  })
})
