class Deque {
  constructor() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  addBack(element) {
    this.items[this.count] = element
    this.count++
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element)
    } else if (this.lowestCount > 0) {
      this.lowestCount--
      this.items[this.lowestCount] = element
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }
      this.count++
      this.lowestCount = 0
      this.items[0] = element
    }
  }

  removeBack() {
    if (this.isEmpty())
      return undefined

    this.count--
    const result = this.items[this.count]
    delete this.items[this.count]
    return result
  }

  removeFront() {
    if (this.isEmpty())
      return undefined

    const result = this.items[this.lowestCount]
    delete this.items[this.lowestCount]
    this.lowestCount++
    return result
  }

  peekFront() {
    if (this.isEmpty())
      return undefined

    return this.items[this.lowestCount]
  }

  peekBack() {
    if (this.isEmpty())
      return undefined

    return this.items[this.count - 1]
  }

  size() {
    return this.count - this.lowestCount
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty())
      return ''

    let objString = `${this.items[this.lowestCount]}`

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.items[i]}`
    }

    return objString
  }
}

module.exports = Deque
