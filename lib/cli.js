const fs = require('fs');
const Svg = require('./svg')

const {Circle, Triangle, Square} = require('./shapes')
const {writeFile} = require('fs/promises')
const inquirer= require ('inquirer');

class CLI{
  run(){
    return inquirer.prompt([
    {
        type:'input',
        name:'text',
        message:'Enter text for the logo.(maximum of 3 characters)',
      validate: (text)=> text.length <=3 || 'text must not be more than 3 characters'
    },
    {
      type:'input',
      name:'textColor',
      message:'Enter a text color(or a hexadecimal number).',
    },
    {
      type:'list',
      name:'shapeType',
      message:'Choose a shape for the logo.', 
      choices:['circle', 'triangle', 'square']
    },
    {
      type:'input',
      name:'shapeColor',
      message:'Enter a shape color.',
    }
  
  ])
  .then(({ text, textColor, shapeType, shapeColor}) => {
    let shape;
    switch(shapeType){
      case 'circle':
        shape= new Circle()
        break;

        case 'square':
        shape= new Square()
        break;

        default:
          shape= new Triangle()
          break;
    }
    shape.setColor(shapeColor)
    const svg= new Svg()
    svg.setText(text, textColor)
    svg.setShape(shape)
    return writeFile('logo.svg', svg.render())
  })
    .then(()=> console.log('generated logo.svg file'))
    .catch((err)=>{
      console.log(err)
      console.log('error occured')
    })

  }
}
module.exports= CLI