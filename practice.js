first javascript app
console.log('Hello World');

let points = 110
points > 100 ? alert('gold') : alert('silver')

let conditions = {
    highIncome: false,
    goodCreditScore: false,
    sexyOutfit: true
}

let isApproved = false

for (const condition in conditions)    
    isApproved |= conditions[condition]

isApproved = new Boolean(isApproved).valueOf()

console.log(isApproved)

let isApprovedd = false
let i = 0
while (true) {
    isApprovedd = !isApprovedd
    if (i++ === 10**2) break
}

console.log(isApprovedd)

let a = 'red'
let b = 'blue'

let c = a
a = b
b = c

c = undefined

console.log(a)
console.log(b)
console.log(c)

let varA, condition, anotherCondtion, yetAnotherCondition;
const statement = _=> {}

if (condition) {
    statement()
} else if (anotherCondtion) {
    statement()
} else if (yetAnotherCondition) {
    statement()
} else {
    statement()
}

condition ?  statement() :
anotherCondtion ?  statement() : 
yetAnotherCondition ?  statement() :
void 0

function solution(A) {
    let n = 0
    for (let i = 1; i < A.length - 1; i += 2) 
        A[i] === A[i-1] || A[i] === A[i+1] || (A[i-1] < A[i] && A[i+1] > A[i]) || (A[i-1] > A[i] && A[i+1] < A[i]) ? n++ : void 0

    return n
}

console.log('Nr of possibilites: ', solution([2,3,1,9,10,23,5,6,3]))

(function(){
    let i = 0
    while (i <= 5) {
        if (i % 2 !== 0) console.log(i)
        i++
    }
}())


function doloop(i, n, condition, modification, statement) {
    if (condition()) {
        statement(i)
        i = modification(i)
        doloop(i, n, condition, modification, statement)
    }
}

doloop(1, 10, (i,n)=>i<=n, (i)=>i++, (i)=>console.log(`a${i}`))

const person = {
    name: 'Mosh',
    age: 30
}

for (const key in person) {
    const newKey = key + 1
    person[newKey] = person[key]
    delete person[key]
}

console.log(person)

const colors = ['red', 'green', 'blue']

colors.map(color => console.log(color))

for (const color of colors) 
    console.log(color)

let i = 0
while (i <= 10) {
    if (i % 2 ===  0) {
        i++
        continue
    }

    console.log(i)
    i++
}

const max = (a, b) => (a > b) ? a : b
console.log(max(5,5))

const isLandscape = (width, height) => (width > height)
console.log(isLandscape(400, 600))

const fizzBuzz = (input) => (input % 3 === 0 ? 'Fizz' : '') + (input % 5 === 0 ? 'Buzz' : '') 
    || (typeof input === 'number' ? input : NaN)

console.log(fizzBuzz(3))
console.log(fizzBuzz(5))
console.log(fizzBuzz(15))
console.log(fizzBuzz(17))
console.log(fizzBuzz('a'))


checkSpeed(70)

function checkSpeed(speed) {
    const speedLimit = 70
    const kmPerPoint = 5

    let points = Math.floor((speed - speedLimit) / kmPerPoint)
    if (points >= 12) return 'License susepended'

    return (points <= 0) ? 'Ok' : `Points ${points}`
}

console.log(checkSpeed(60))
console.log(checkSpeed(70))
console.log(checkSpeed(71))
console.log(checkSpeed(75))
console.log(checkSpeed(79))
console.log(checkSpeed(80))
console.log(checkSpeed(180))
console.log(checkSpeed(130))
console.log(checkSpeed(129))

function showNumbers(limit) {
    for (let i = 0; i <= limit; i++)
        console.log(i, i % 2 ? 'ODD' : 'EVEN')
}

showNumbers(10)

function countTruthy(array) {
    let count = 0
    for (const el of array)
        if (!!el) count++

    return count
}

function countTruthy(array) {
    let count = 0
    for (const el of array)
        if (el) count++

    return count
}

console.log(countTruthy([0,1,'','a',undefined,null,NaN,true,{},_=>{},[]]))

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
}

showProperties(movie)

function showProperties(obj) {
    for (const key in obj)
        if (typeof obj[key] === 'string')
            console.log(key, obj[key])
}

console.log(sum(10))

function sum(limit) {
    let sum = 0

    for (let i = 1; i <= limit; i++)
        if (i % 5 === 0 || i % 3 === 0)
            sum += i

    return sum
}

const marks = [80, 80, 50]

console.log(calculateGrade(marks))

function calculateGrade(marks) {
    let sum = 0

    for (const mark of marks)
        sum += mark

    const averageGrade = Math.round(sum / marks.length)

if (averageGrade <= 59) return 'F'
if (averageGrade <= 69) return 'D'
if (averageGrade <= 79) return 'C'
if (averageGrade <= 89) return 'B'
return 'A'
}

function calculateGrade(marks) {
    let sum = 0

    for (const mark of marks)
        sum += mark

    const averageGrade = Math.round(sum / marks.length)

    return (averageGrade <= 59) ? 'F' :
    (averageGrade <= 69) ? 'D' :
    (averageGrade <= 79) ? 'C' :
    (averageGrade <= 89) ? 'B' :
    (averageGrade <= 100) ? 'A' : ''
}

showStars(5)

function showStars(rows) {
    for (let row = 1; row <= rows; row++)
        console.log(new Array(row).fill('*').join(''))   
}

showPrimes(10**5)

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor === 0) return false

    return true
}

function showPrimes(limit) {
    for (let number = 2; number <= limit; number++) 
        if (isPrime(number)) console.log(number)
}




Factory Function
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

const circle1 = createCircle(10)
const circle2 = createCircle(20)

console.log('circle1', circle1)
console.log('circle2', circle2)

circle1.draw()


Constructor Function
function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(10)
circle.draw()

let func1 = _=> 'a'
let func2 = _=> 'b'

const testFunction = _=> func1()

func1 = func2

console.log(testFunction())


function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
}

const Circle1 = new Function('radius', `
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
`)

const another = new Circle1(1)

let x = { value: 10 }
let y = x

x.value = 20

console.log('x', x)
console.log('y', y)


const obj = { value: 10 }

function increase(obj) {
    obj.value++
}

increase(obj)
console.log(obj)


function Circle(radius) {
    this.radius = radius
    this.draw = function() {
        console.log('draw')
    }
}

const circle = new Circle(10)

for (let key in circle)
    console.log(key, circle[key])

for (let key of Object.keys(circle))
    console.log(key, circle[key])

console.log(Object.keys)

for (let entry of Object.entries(circle))
    console.log(entry[0], entry[1])

delete circle.draw

if ('draw' in circle) circle.draw()

const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

const another = {}

for (let key in circle)
    another[key] = circle[key]

console.log('another', another)

const another2 = Object.assign({}, circle)
console.log('another2', another2)

const another3 = { ...circle }
console.log('another3', another3)


const date1 = new Date()

let address1 = new Address('a', 'b', 'c')
let address2 = new Address('a', 'b', 'c')

function Address(street, city, zipCode) {
    this.street = street
    this.city = city
    this.zipCode = zipCode
}

function areEqual(address1, address2) {
    for (const key in address1)
        if (address1[key] !== address2[key]) return false

    return true
}

function areSame(address1, address2) {
    return (address1 === address2)
}

function createBlogPost(title, body, author) {
    return {
        title,
        body,
        author,
        views: 0,
        comments: [{
            author: 'asqwe',
            body: 'comment 1'
        }, {
            author: 'asww2',
            body: 'comment 2'
        }],
        isLive: true
    }
}

const blogPost1 = createBlogPost('Some news', `Omg she did what?`, 'Tudor Todorescu')
console.log('blogPost1', blogPost1)

const numbers = [3, 4]

// End
numbers.push(5, 6)

// Beginning
numbers.unshift(1, 2)

// Middle
numbers.splice(2, 0, 'a', 'b')

console.log(numbers)


const numbers = [1, 2, 3, 1, 4]

console.log(numbers.indexOf('1'))
console.log(numbers.lastIndexOf(1))

console.log(numbers.indexOf(1) !== -1)
console.log(numbers.includes(1))

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]

console.log(courses.includes({ id: 1, name: 'a' }))
console.log(!!courses.find(course => course.name === 'a'))
console.log( courses.findIndex(course => course.name === 'b') )

let numbers = [1, 2, 3, 4]
let another = numbers

// numbers = []
// numbers.length = 0
// numbers.splice(0)
while (numbers.length > 0) numbers.pop()

console.log(numbers)
console.log(another)

const numbers = ['a', 'b', 'c', 'd']

consoleLog = (value, index) => console.log(index, value)

numbers.forEach(consoleLog)

const title = 'Creating arrays 22 in Javascript 123'
const url = `https://www.todorescu.com/${
        title.split(' ')
            .filter(word => isNaN(parseInt(word)) )
            .map(word => word.toLowerCase())
            .join('-')
    }`

console.log('url', url)

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'angular' },
    { id: 3, name: 'JavaScript' }
]

courses.sort((a, b) => {
    const compare1 = a.name.toLowerCase()
    const compare2 = b.name.toLowerCase()

    if (compare1 < compare2) return -1
    if (compare1 > compare2) return 1

    return 0
})

console.log(courses)

const possibilites = [
    ['B', 'C', 'D', 'E']
    ['D', 'E', 'F', 'G']
    ['F', 'G', 'H', 'J']
]

let pr = ''

possibilites.forEach(
    (arr, i) => pr += arr
        .map(p => `${p}${i}` )
        .join(' ')
    )

console.log(pr)

const numbers = arrayFromRange(-15, 3)

console.log(numbers)

function arrayFromRange(min, max) {
    const output = []
    for (let i = min; i <= max; i++) output.push(i)

    return output
}

const numbers = [1, 2, 3, 4, 1, 1]
const output = except(numbers, [1, 2])

console.log(output)

function except(array, excluded) {
    if (array.length > except.length) {
        for (let element of excluded)
        while (array.lastIndexOf(element) !== -1)
            array.splice(array.lastIndexOf(element), 1)

        return array
    }

    const output = []
    for (let element of array)
        if (!excluded.includes(element))
            output.push(element)

    return output
}

const numbers = [1, 2, 3, 4]
const output = move(numbers, 0, 5)

console.log(output)

function move(array, index, offset) {
    const position = index + offset
    if (position >= array.length || position < 0) {
        console.error('Invalid offset')
        return
    }

    const output = [...array]
    const element = output.splice(index, 1)[0]
    output.splice(position, 0, element)

    return output
}

const numbers = [1,2,3,4, 1, 2, 1, 3,  4,  5,  6,   1,    2,    0]

const count = countOccurrences(numbers, 1)

console.log(count)

function countOccurrences(array, searchElement) {
    return array.reduce((t, n) => {
        return t + (n === searchElement)
    }, 0)
}


const numbers = [1,2,3,4, 1, 2, 1, 3,  4,  5,  6,   1,    2,    0]

const max = getMax()

console.log(max)

function getMax(array) {
    if (!array || !array.length) return

    return array.reduce((a, b) => (a > b) ? a : b)
}

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 }
]

renderMovies(movies)

function renderMovies(movies) {
    return movies
        .filter(m => (m.year >= 2018 && m.rating >= 4))
        .sort((a, b) => a.rating - b.rating)
        .reverse()
        .map(m => m.title)
        .forEach(m => console.log(m))
}

function walk() {
    console.log('walk');
}

let run = function walk1() {
    console.log('run')
}
let move = walk1
move()

function sum(currency, discount, ...prices) {
    return prices.reduce((a, b) => a + b) * (1 - discount) + ` ${currency}`
}

console.log(sum('$', 0.1, 20, 30, 40))

try {
    person = a
} catch(e) {
    console.error(e)
}

function start() {
    const message = 'hi'

    if (true) {
        const message = 'hi'
    }

    for (let i = 0; i < 5; i++) {
        const message = 'hi'
    }
}

{ const message = 'hi' }

try {
    const message = 'hi'
    console.log(message)
} catch(e) {
    alert(e)
}

var blur = 'red'


const asd = {
    weather: 10,
    ac() {
        console.log(this)
    }
}

console.log(globalThis)
asd.ac()

var title = 'globalTitle'

const video = {
    title: 'title',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(tag => console.log(`${globalThis.title}-${this.title}-${tag}`))
    }
}

video.showTags()

sum([1, 2, 3, 4]) => 10

function sum(...items) {
    let newItems = []
    items.forEach(i => Array.isArray(i) 
        ? newItems = newItems.concat(i) : newItems.push(i))
    
    return newItems.reduce((a, b) => a + b)
}

console.log(sum(1,2,3,4))
console.log(sum(2, 3, [1,2,3,4], 1, 2, [3, 4]))


const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius**2
    }
}

console.log(circle.area)

circle.radius = 3
console.log(circle.area)


try {
    const numbers = [1, 2, 3, 4]
    const count = countOccurences(undefined, 1)
    console.log(count)
} catch(e) {
    console.error(e.message)
}

function countOccurences(array, searchElement) {
    if (!Array.isArray(array)) throw new Error('Not a valid array')

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0
        return accumulator + occurence
    }, 0)
}
