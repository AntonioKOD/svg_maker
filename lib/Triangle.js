class Triangle{
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor= textColor
        this.shapeColor = shapeColor
    }

    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <polygon points='150,30 300,300 0,300' fill="${this.shapeColor}"/>
        <text x='150' y='170' text-anchor='middle' font-size='60' fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = Triangle;