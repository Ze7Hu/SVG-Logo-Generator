class Svg{
  constructor (){
  this.textElement =''
  this.shapeElement=''
  }

  render(){

  return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`
  }
  setText(text, color){
    if(text.length>3){
      throw new Error('text must be three chracters or less')
    }
    this.textElement=`<text x="150" y="125" font-family="serif" text-anchor='middle' font-size="25"
fill= "${color}"> ${text}</text>`
  }

setShape(shape){
  this.shapeElement=shape.render()
}
}
module.exports= Svg