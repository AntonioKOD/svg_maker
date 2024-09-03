class Square{
    constructor(text, textColor, shapeColor){
        this.text = text
        this.textColor= textColor
        this.shapeColor = shapeColor
    }

    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
       <rect width="200" height="200" x="10" y="10" fill="${this.shapeColor}"/>
        <text x='110' y='120' text-anchor='middle' font-size='60' fill="${this.textColor}">${this.text}</text>
        </svg>`
    }
}

module.exports = Square;