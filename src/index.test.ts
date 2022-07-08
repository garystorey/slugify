import { describe, expect, it } from 'vitest'
import { slugify } from './index'

const testString = 'Test Test Test'
describe('Slugify', () => {
  it('should remove whitespace', () => {
    expect(slugify(testString)).toBe('testtesttest')
  })
  it('should replace with an underscore', () => {
    const result = slugify(testString, '_')
    expect(result).toBe('test_test_test')
  })
})
