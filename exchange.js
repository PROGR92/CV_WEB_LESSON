function odliczanie()
{
      var dzisiaj = new Date();

      var godzina = dzisiaj.getHours();
      if (godzina<10) godzina="0"+godzina

      var minuta = dzisiaj.getMinutes();
      if (minuta<10) minuta="0"+minuta
      var sekunda = dzisiaj.getSeconds();
      if (sekunda<10) sekunda="0"+sekunda

      //wypisanie na ekran w miejsce bloku "clock" kompletnej daty
    document.getElementById("clock").innerHTML= godzina+":"+minuta+":"+sekunda;
    
    //Funckcja dla cyklicznego wywołania w JavaScripcie
    //podaje sie:"Nazwa funcji";czasodliczania do ponownego wywołania w ms
    setTimeout("odliczanie()",1000);
}
function podmien(num_1)
{
    var text = new Array;
    text[0] = "Kim jestem?";
    text[1] = "Co oferuje?";
    text[2] = "Moje doświadczenie.";
    text[3] = "Dane kontaktowe:";
    text[4] = "Tytuł podstrony:<br><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam facilisis eu elit quis mollis. Donec sed eros pellentesque, malesuada lacus sed, feugiat erat. Donec ipsum arcu, viverra quis neque ac, tristique lobortis dui. Nunc nec turpis quis velit pellentesque ornare quis sit amet orci. Suspendisse maximus sem eget ante ornare scelerisque. Donec elementum scelerisque nisi, vitae blandit purus efficitur id. Suspendisse molestie commodo mauris et pretium." ; 
    
    document.getElementById("tile5").innerHTML=text[num_1];

}

window.onload = odliczanie;