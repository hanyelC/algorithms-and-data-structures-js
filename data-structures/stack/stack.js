class Stack {
  constructor() {
    this.items = {}
    this.count = 0
  }

  push(element) {
    this.items[this.count] = element
    this.count++
  }

  pop() {
    if (this.isEmpty())
      return undefined

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  isEmpty() {
    return this.count === 0
  }

  peek() {
    if (this.isEmpty())
      return undefined

    return this.items[this.count - 1]
  }

  size() {
    return this.count
  }

  clear() {
    this.items = {}
    this.count = 0
  }

  toString() {
    if (this.isEmpty())
      return ''

    let string = `${this.items[0]}`
    for (let i = 1; i < this.count; i++) {
      string = `${string}, ${this.items[i]}`
    }
    return string
  }
}

module.exports = Stack
