const Circle = require('./Circle')

describe('Circle', ()=> {
    describe('shape rendering', ()=> {
        it('should render the shape when given the prompts', ()=> {
            const circle = new Circle()
            circle.text ='SVG'
            circle.textColor='white'
            circle.shapeColor = 'blue'
            expect(circle.render()).toBe(`<svg version='1.1' width='300' height='200' xlmns='http://www.w3.org/2000/svg'>
        <circle cx='150' cy='100' r='80' fill='${circle.shapeColor}'/>
        <text x='150' y='125' font-size='60' text-anchor='middle' fill='${circle.textColor}'>${circle.text}</text>
        </svg>
        `)
            })
        })
})