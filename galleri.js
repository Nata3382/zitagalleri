const url = "#";

fetch(url)
  .then(function (res) {
    return res.json();
  })
  .then(function (data) {
    handleProductList(data);
  });

function handleProductList(data) {
  data.forEach(showProduct);
}

function showProduct(product) {
    const template = document.querySelector("#smallProductTemplate").content;
    const copy = template.cloneNode(true);
    copy.querySelector("a").href = `product.html?id=${product.id}`;
    copy.querySelector(
        "img.productimage"
      ).src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`;
      copy.querySelector("img.productimage").alt = product.productdisplayname;

    copy.querySelector("p.size").textContent = product.size;
    copy.querySelector("h1").textContent = product.title;
  
    
    const parent = document.querySelector("section");
    parent.appendChild(copy);
  }