const Triangle = require('./Triangle')

describe('Triangle', ()=> {
    describe('shape rendering', ()=> {
        it('should render the shape when given the prompts', ()=> {
            const triangle = new Triangle()
            triangle.text ='SVG'
            triangle.textColor ='white'
            triangle.shapeColor = 'blue'
            expect(triangle.render()).toBe(`<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <polygon points='150,30 300,300 0,300' fill="${triangle.shapeColor}"/>
        <text x='150' y='170' text-anchor='middle' font-size='60' fill="${triangle.textColor}">${triangle.text}</text>
        </svg>`)
            })
        })
})