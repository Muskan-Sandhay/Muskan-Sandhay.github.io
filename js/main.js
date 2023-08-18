const url = 'https://raw.githubusercontent.com/Muskan-Sandhay/JsonFile/main/products.json';
const find=document.getElementById("find");
const result=document.getElementById("Result");
find.addEventListener("click",findData);

//creating function for event listener
function findData(){
    const productId = document.getElementById("id").value; 
    console.log(productId);

    //fetch api
    fetch(url)
  .then(response => response.json())
  .then(data => {
    // getting data from json file
    const product = data.find(item => item.Id === productId);
   
//displaying info if product is there otherwise showing it is not there
    if (product) {
        var itemInfo= "id : "+ product["Id"]+ "<br>"+
                      "Maker : "+ product["Maker"]+ "<br>"+
                      "Title : "+ product["Title"]+ "<br>"+
                      "Description : "+ product["Description"];
        result.innerHTML=itemInfo;
    } else {

        result.innerHTML="Product Is Not List"
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
}