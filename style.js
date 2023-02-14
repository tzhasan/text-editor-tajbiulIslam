function targetTextArea(elementID){
  const element=document.getElementById(elementID)
  return element
}
// bold
document.getElementById('bold').addEventListener('click',function(){
  if (targetTextArea('text-field').style.fontWeight === "bold") {
    targetTextArea('text-field').style.fontWeight = "normal";
  } else {
    targetTextArea('text-field').style.fontWeight = "bold";
  }
})
// italic
document.getElementById('italic').addEventListener('click',function(){
  if (targetTextArea('text-field').style.fontStyle === "italic") {
    targetTextArea('text-field').style.fontStyle = "normal";
  } else {
    targetTextArea('text-field').style.fontStyle = "italic";
  }
})
// underline
document.getElementById('underline').addEventListener('click',function(){
  if (targetTextArea('text-field').style.textDecoration === "underline") {
    targetTextArea('text-field').style.textDecoration = "none";
  } else {
    targetTextArea('text-field').style.textDecoration = "underline";
  }
})
// align left
document.getElementById('align-left').addEventListener('click',function(){
  if (targetTextArea('text-field').style.textAlign === "start") {
    targetTextArea('text-field').style.textAlign = "start";
  }
  else if (targetTextArea('text-field').style.textAlign === "center") {
    targetTextArea('text-field').style.textAlign = "start";
  }
   else {
    targetTextArea('text-field').style.textAlign = "start";
  }
})
// align CENTER
document.getElementById('align-center').addEventListener('click',function(){
  if (targetTextArea('text-field').style.textAlign === "start") {
    targetTextArea('text-field').style.textAlign = "center";
  }
  else if (targetTextArea('text-field').style.textAlign === "end") {
    targetTextArea('text-field').style.textAlign = "center";
  }
  
  else {
    targetTextArea('text-field').style.textAlign = "center";
  }
})

// align-right
document.getElementById('align-right').addEventListener('click',function(){
  if (targetTextArea('text-field').style.textAlign === "start") {
    targetTextArea('text-field').style.textAlign = "right";
  }
  else if (targetTextArea('text-field').style.textAlign === "center") {
    targetTextArea('text-field').style.textAlign = "right";
  }
  
  else {
    targetTextArea('text-field').style.textAlign = "right";
  }
})

// justify-right
document.getElementById('align-justify').addEventListener('click',function(){
  if (targetTextArea('text-field').style.textAlign === "start") {
    targetTextArea('text-field').style.textAlign = "justify";
  }
  else if (targetTextArea('text-field').style.textAlign === "center") {
    targetTextArea('text-field').style.textAlign = "justify";
  }
  
  else {
    targetTextArea('text-field').style.textAlign = "justify";
  }
})
// color
document.getElementById('color-btn').addEventListener('click', function(){
  const colorinput= document.getElementById('color-input')
  // const color=colorinput.value
  const textarea=document.getElementById('text-field')
  textarea.style.color=colorinput.value
  console.log(textarea.value)
})
// font-size
document.getElementById('font-size').addEventListener('click', function(){
  const numberElement=document.getElementById('font-size')
  const pixelValue=numberElement.value
  const textarea=document.getElementById('text-field')
  textarea.style.fontSize=((25+parseFloat(pixelValue))+'px')
})




