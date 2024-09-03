const Square = require('./Square')

describe('Square', ()=> {
    describe('shape rendering', ()=> {
        it('should render the shape when given the prompts', ()=> {
            const square = new Square()
            square.text ='SVG'
            square.textColor='white'
            square.shapeColor = 'blue'
            expect(square.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect width="200" height="200" x="10" y="10" fill="${square.shapeColor}"/>
        <text x='110' y='120' text-anchor='middle' font-size='60' fill="${square.textColor}">${square.text}</text>
        </svg>`)
            })
        })
})