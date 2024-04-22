const URl=`https://pixabay.com/api/?key=36591132-4bdde6a78c1573771385bc24e&q=Nature&image_type=photo&pretty=true`;

document.addEventListener("DOMContentLoaded", function () {
    const generateBtn = document.getElementById('generate-btn');
    const randomImage = document.getElementById('random-image');
  
    generateBtn.addEventListener('click', function () {
      getRandomImage();
    });
  
   async function getRandomImage(){
    try{
        const response=await fetch(URl);
        if(!response.ok)
        {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); 
       
        let imgUrl=data.hits[Math.floor(Math.random() * data.hits.length)].largeImageURL;
        randomImage.src = imgUrl;
        downloadLink.href = imgUrl;
    }catch(error){
        console.error('There was a problem with the fetch operation:', error);
    }
        
   }
  });
  