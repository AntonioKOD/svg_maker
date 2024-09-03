const Circle = require('./lib/Circle')
const Square = require('./lib/Square')
const fs = require('fs')
const inquirer = require('inquirer')
const Triangle = require('./lib/Triangle')





inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter text tu place in the logo',
            name: 'textInput',
            validate: function(input){
                if(input.length > 3 ){
                    return 'Text should be 3 characters or less'
                }
                return true
            },
            filter: function(input){
                return input.toUpperCase();
            }

        },
        {
            type: 'input',
            message: 'Enter the color of the text: HEX or just text',
            name: 'colorInput',
        },
        {
            type: 'input',
            message: 'Enter the color of the shape',
            name:'shapeColor',
        },
        {
            type: 'list',
            message: 'choose one of the shapes',
            name: 'shape',
            choices: ['circle', 'triangle', 'square']
        }
    ])
    .then((answers) => {
        if(answers.shape === 'circle'){
            const circle = new Circle(answers.textInput, answers.colorInput, answers.shapeColor)
            
            fs.writeFile('logo.svg', circle.render(), function(err){
                if(err){
                    console.log(err)
                }
                console.log('success')
            })

        } else if(answers.shape === 'square'){
            const square = new Square(answers.textInput, answers.colorInput, answers.shapeColor)
            
            fs.writeFile('logo.svg', square.render(), function(err){
                if(err){
                    console.log(err)
                }
                console.log('success')
            })
        }else if(answers.shape === 'triangle'){
            const triangle = new Triangle(answers.textInput, answers.colorInput, answers.shapeColor)
            
            fs.writeFile('logo.svg', triangle.render(), function(err){
                if(err){
                    console.log(err)
                }
                console.log('success')
            })
        }
        
        

        
    })



