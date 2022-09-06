let output=document.querySelector('#myRoot')
function checkPalindrom(palindrom)
{
   let temp = palindrom.toLowerCase();
   var test = true;
   var j = 0;
    for( var i = temp.length-1; i > temp.length / 2; i-- )
    {
        
        if( temp[i] != temp[j] )
        {
           test = false;
           break; 
        }
        j++;
    }
  if( test ) {
    output.innerText="PALİNDROMDUR!";
    output.className="true";
  }
  else {
    output.innerText="PALİNDROM DEYİL!";
    output.className="false";
  }
}
checkPalindrom('Mənəm');