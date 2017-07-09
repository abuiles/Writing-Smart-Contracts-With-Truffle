const HelloWorld = artifacts.require('HelloWorld')

contract('HelloWorld', function(accounts) {
  it('sets the first account as the contract creator', async function() {
    const contract = await HelloWorld.deployed()
    const creator = await contract.getCreator()

    assert.equal(creator, accounts[0], 'main account is the creator')
  })
  it('has hello world as initial message ', async function() {
    const contract = await HelloWorld.deployed()
    const message = await contract.getMessage()

    assert.equal(message, 'hello world', 'message is hello world')
  })
  it('changes the message via setMessage', async function() {
    const contract = await HelloWorld.deployed()
    await contract.setMessage('hola mundo')
    const message = await contract.getMessage()

    assert.equal(message, 'hola mundo', 'message is hola mundo')
  })
})
