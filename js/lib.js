const productList = [
  { id: "1", name: "Trà Đào", price: 30000, image: "../assets/images/tradao.jpg", productLink: "https://shopee.vn/product/494234783/9882740709?gads_t_sig=gqRjZGVrxHCFomtpsTE0MjUxOnRzc19zZGtfa2V5omt20QABpGFsZ2_SAAAAZKNkZWvAomN0xEAAAAAMRoz0ZUjQw0QlRa--FjB0AKnHQPF7xv4DyGj9-GQwqn4zSdB6gztmw7ebmtsZs9FPJxlVqctc57WUE3IRqmNpcGhlcnRleHTEbAAAAAxINA5Py3pq2JpFBZKMY7x7vBfN1sLG-YYMoJYOInGOdmSsFyEB78BFxi5GtU6M3freex6mCQkkg7KekA_W3xWW8JE8dVXWESmveb19QDPlyo4Th6HWEcuQdj5D5ntiAJCtHyOhnBhG0w&gad_source=1&gad_campaignid=23303460869&gbraid=0AAAAADPpQE6Xbvda_I_0xRZkg5USDIzi0&gclid=Cj0KCQjw2YDQBhD_ARIsAE1qeSdLvz5rrwpQ9xzb9smnlRRB0GQza5Vhkr0UGOgefRJyI8T1HsEO6RkaAvY3EALw_wcB" },
  { id: "2", name: "Trà Dâu", price: 30000, image: "../assets/images/tradau.jpg", productLink: "https://hongkongbaleytea.com/2" },
  { id: "3", name: "Trà Vải", price: 30000, image: "../assets/images/travai.jpg", productLink: "https://www.unileverfoodsolutions.com.vn/vi/cong-thuc-nau-an/tra-vai-thanh-ngot-R0081356.html" },
  { id: "4", name: "Trà Ổi", price: 30000, image: "../assets/images/traoi.jpg", productLink: "https://www.trahoatanuc.vn/product/tra-oi-hong/" },
  { id: "5", name: "Trà nhiệt đới", price: 30000, image: "../assets/images/tranhietdoi.jpg", productLink: "https://www.chethaingon.net/tra-trai-cay-nhiet-doi-thoi-bung-con-sot-mua-he.html" },
  { id: "6", name: "Trà Táo", price: 30000, image: "../assets/images/tratao.jpg", productLink: "https://dayphache.edu.vn/tra-tao-bac-ha" },
  { id: "7", name: "Trà Nho", price: 30000, image: "../assets/images/tranho.jpg", productLink: "https://www.trasuavietnam.com/menu/p/tranho" },
  { id: "8", name: "Trà Dưa Lưới", price: 30000, image: "../assets/images/tradualuoi.jpg", productLink: "https://order.hannacoffee.com.vn/san-pham/tra-dua-luoi-hoang-kim/" },
  { id: "9", name: "Trà Chanh Dây", price: 30000, image: "../assets/images/trachanhday.jpg", productLink: "https://fptshop.com.vn/tin-tuc/dien-may/tra-chanh-day-164571" },
  { id: "10", name: "Trà Xoài", price: 30000, image: "../assets/images/traxoai.jpg", productLink: "https://dayphache.edu.vn/cach-lam-tra-xoai" }
];

function addProduct(id, name, price, image, hyperLink)
{
	//Tạo một product item
	//1. Tạo khung chứa 1 item
	const productItem = document.createElement("div");
	productItem.setAttribute("class","product-item col m-4");

	//2. Tạo khung chưa hình
	const productImage = document.createElement("div");
	productImage.setAttribute("class","product-image h-75");

	//3. Tạo đối tượng hình ảnh
	const Image = document.createElement("img");
	Image.setAttribute("src", image);
	Image.setAttribute("alt", name);
	Image.setAttribute("class", "img-fluid object-fit-cover h-100");

	//4. Gán hình vào khung
	productImage.appendChild(Image);

	//5. Tạo khung chưa thông tin
	const productInfo = document.createElement("div");
	productInfo.setAttribute("class","product-info h-25 text-center");

	//Tạo paragraph 1
	const productName = document.createElement("p");
	const productNameText = document.createTextNode(name);
    productName.appendChild(productNameText);

	//Tạo paragraph 2
	const productPrice = document.createElement("p");
	const productPriceText = document.createTextNode(price);
	productPrice.appendChild(productPriceText);

	//Tạo hyperLink
	const productLink = document.createElement("a");
	const productLinkText = document.createTextNode("Xem chi tiết");
	productLink.appendChild(productLinkText);
	productLink.setAttribute("href", hyperLink);
	productLink.setAttribute("class", "btn btn-info");

	//Gắn paragraph 1, 2 và Link vào khung 
	productInfo.appendChild(productName);
	productInfo.appendChild(productPrice);
	productInfo.appendChild(productLink);

	//6. Gắn khung hình và thông tin vào product item
	productItem.appendChild(productImage);
	productItem.appendChild(productInfo);

	//Gắn product item vào product list
	document.getElementById("product-list").appendChild(productItem);
}

function showProduct(products)
{
	const container = document.getElementById('product-list');

	container.innerHTML = "";

	products.forEach(item => {
		//Tạo element cha bằng createElement
		const productItem = document.createElement('div');
		productItem.className = 'product-item col-md-3 col-sm-6';
		//productItem.setAttribute("class", "product-item col-md-3 col-sm-6");
		//Sử dụng Template Literal nạp dữ liệu vào 
		productItem.innerHTML = `
			<div class="product-image ratio ratio-1x1 overflow-hidden">
				<img src="${item.image}" alt="${item.name}" class="img-fluid object-fit-cover">
			</div>
			<div class="product-info p-2 text-center">
				<p class="product-name mb-1">${item.name}</p>
				<p class="product-price text-danger fw-bold mb-2">
					${item.price.toLocaleString('vi-VN')}
				</p>
				<a href="${item.productLink}" class="btn btn-sm btn-outline-primary w-100">
					Xem chi tiết
				</a>
			</div>
		`;
		container.appendChild(productItem);
	});
}