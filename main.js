var images = [
    "https://image.freepik.com/free-vector/cartoon-senior-elderly-old-man_29190-4600.jpg",
    "https://www.clipartkey.com/mpngs/m/13-133994_grandmother-clipart-animated-grand-mother-cartoon-image-png.png",
    "https://i.postimg.cc/wjMnFtMX/father.jpg" ,
    "https://i.postimg.cc/bw5W5zSK/mother.jpg",
     "https://i.postimg.cc/5ymDKL83/bro.jpg", 
     "https://i.postimg.cc/JnL6wtrd/sister.jpg",
      
  ];
  var names = [
  "Rakesh Lamba",
  "Damyanti Lamba",
  "Ajit Singh Lamba",
  "Archana Lamba",
  "Aditya Lamba",
  "Anushri Lamba"
  ];

  var i = 0;
  function update()
  {
      i++;
      var numbers_of_family_member_in_array = 6
      if(i > numbers_of_family_member_in_array )
      {
          i = 0;
      }
      var updatedImage = images[i];
      var updatedName  = names[i];
      document.getElementById("family_member_image").src = updatedImage;
      document.getElementById("family_member_name").innerHTML = updatedName;
  }
  
  