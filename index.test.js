const utils = require('./index')

describe('[Exercise 1] trimProperties', () => {
  test('[1] returns an object with the properties trimmed', () => {
    // EXAMPLE
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[2] returns a copy, leaving the original object intact', () => {
  const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
  utils.trimProperties(input)
  expect(input).toEqual({ foo: '  foo ', bar: 'bar ', baz: ' baz' })
  })
})

describe('[Exercise 2] trimPropertiesMutation', () => {
  test('[3] returns an object with the properties trimmed', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const expected = { foo: 'foo', bar: 'bar', baz: 'baz' }
    const actual = utils.trimProperties(input)
    expect(actual).toEqual(expected)
  })
  test('[4] the object returned is the exact same one we passed in', () => {
    const input = { foo: '  foo ', bar: 'bar ', baz: ' baz' }
    const actual = utils.trimPropertiesMutation(input)
    expect(actual).toBe(input)
  })
})

describe('[Exercise 3] findLargestInteger', () => {
  test('[5] returns the largest number in an array of objects { integer: 2 }', () => {
    const input = [{ integer: 1 }, { integer: 2 }, { integer: 3 }, { integer: 300 }]
    const actual = utils.findLargestInteger(input)
    expect(actual).toBe(300)
  })
})

describe('[Exercise 4] Counter', () => {
  let counter
  beforeEach(() => {
    counter = new utils.Counter(3) // each test must start with a fresh counter
  })
  test('[6] the FIRST CALL of counter.countDown returns the initial count', () => {
    expect(counter.countDown).toBeDefined()
    expect(counter.countDown).toBe(utils.Counter.prototype.countDown)

    expect(counter.number).toBe(3)
    const number = new utils.Counter(2).countDown()
    expect(number).toBe(2)
  })
  test('[7] the SECOND CALL of counter.countDown returns the initial count minus one', () => {
    counter.countDown() // returns 3
    expect(counter.countDown()).toBe(2)
  })
  test('[8] the count eventually reaches zero but does not go below zero', () => {
    counter.countDown() // returns 3
    counter.countDown()
    expect(counter.countDown()).toBe(1)
    counter.countDown()
    expect(counter.countDown()).toBe(0)
    expect(counter.countDown()).toBe(0)
  })
})

describe('[Exercise 5] Seasons', () => {
  let seasons
  beforeEach(() => {
    seasons = new utils.Seasons() // each test must start with fresh seasons
  })
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    expect(seasons.next).toBeDefined()
    expect(seasons.next).toBe(utils.Seasons.prototype.next)

    expect(seasons.next()).toBe('summer')
  })
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next()
    expect(seasons.next()).toBe('fall')
  })
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('winter')
  })
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('spring')
  })
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    seasons.next()
    seasons.next()
    seasons.next()
    seasons.next()
    expect(seasons.next()).toBe('summer')
  })
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 0; i < 39; i++) {seasons.next()}
    expect(seasons.next()).toBe('spring')
  })
})

describe('[Exercise 6] Car', () => {
  let focus
  beforeEach(() => {
    focus = new utils.Car('focus', 20, 30) // each test must start with a fresh car
  })
  test('[15] driving the car returns the updated odometer', () => {
    expect(focus.drive).toBeDefined()
    expect(focus.drive).toBe(utils.Car.prototype.drive)

    expect(focus.drive(100)).toBe(100)
    expect(focus.drive(100)).toBe(200) // returns 200
    expect(focus.drive(100)).toBe(300) // returns 300
    expect(focus.drive(200)).toBe(500) // returns 500
    expect(focus.drive(200)).toBe(600) // returns 600 (ran out of tank after 100 miles)
    expect(focus.tank).toBe(0)
    expect(focus.drive(1)).toBe(600)
  })
  test('[16] driving the car uses gas', () => {
    expect(focus.tank).toBe(20)
    focus.drive(600)
    expect(focus.drive(1)).toBe(600)
    expect(focus.tank).toBe(0)
    expect(focus.odometer).toBe(600)
  })
  test('[17] refueling allows to keep driving', () => {
    focus.drive(600)
    expect(focus.tank).toBe(0)
    expect(focus.refuel(5)).toBe(150)
    focus.drive(150)
    focus.refuel(20)
    focus.drive(600)
    expect(focus.tank).toBe(0)
    expect(focus.odometer).toBe(1350)
  })
  test('[18] adding fuel to a full tank has no effect', () => {
    expect(focus.refuel(20)).toBe(600)
    expect(focus.drive(1800)).toBe(600)
    expect(focus.refuel(18800)).toBe(600)
  })
})

describe('[Exercise 7] isEvenNumberAsync', () => {
  test('[19] resolves true if passed an even number', async () => {
    const input = 2
    const expected = true
    const actual = await utils.isEvenNumberAsync(input)
    expect(actual).toBe(expected)
  })
  test('[20] resolves false if passed an odd number', async () => {
    const input = 3
    const expected = false
    const actual = await utils.isEvenNumberAsync(input)
    expect(actual).toBe(expected)
  })
})