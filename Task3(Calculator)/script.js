keys = document.querySelectorAll('.btn');
let expression = "";
let result = document.querySelector('p');
keys.forEach(key => {
  key.addEventListener('click', () => {
    if (key.textContent !== "=" && key.textContent !== "C" && key.textContent !== "CE"&& key.textContent !== "×") {
      expression = expression + key.textContent;
      result.textContent = expression.replace('*','×' );
    }
    if(key.textContent === "×")
    {
      expression = expression + "*";
      result.textContent = expression.replace('*','×' );
    }
    try{
      if(key.textContent === "=")
    {
      expression=eval(expression);
      result.textContent=expression;
    }
    }
    catch(error)
    {
      expression="";
      result.textContent="Error";
    }
    if(key.textContent === "C")
    {
      expression=expression.slice(0,-1);
      result.textContent=expression;
    }
    if(key.textContent == "CE")
    {
      expression="";
      result.textContent=expression;
    }


  });
});