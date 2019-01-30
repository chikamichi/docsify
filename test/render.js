const {expect} = require('chai')

const loader = require('./_loader')

describe('render', function() {
	it('important content (tips)', async function() {
		docsify = await loader()
  		const output = docsify.compiler.compile('!> **Time** is money, my friend!')
  		expect(output).equal('<p class="tip"><strong>Time</strong> is money, my friend!</p>')
	})
})
