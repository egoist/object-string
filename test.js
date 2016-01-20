import test from 'ava'
import oString from './'

test('main', t => {
	t.same(oString('foo:bar'), {foo: 'bar'})
	t.same(oString('foo,bar'), ['foo', 'bar'])
	t.same(oString('foo:bar,tee:zoo'), {
		foo: 'bar',
		tee: 'zoo'
	})
})
