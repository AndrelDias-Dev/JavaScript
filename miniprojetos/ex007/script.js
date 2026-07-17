const produtos = [
    {
        id: 1, name: 'Camiseta Masculina', currentPrice: 29, discount: false, image: 't-shirt.jpg', category: 'roupas', rating: 4,
        reviews: 33, badge: 'new',
    },

    {
        id: 2, name: 'Livro - Yol Gösteren', currentPrice: 29, discount: 20, image: 'livro.jpg', category: 'livros', rating: 1,
        reviews: 200, badge: 'discount'
    },

    {
        id: 3, name: 'Infinix Hot 40i', currentPrice: 923.99, discount: false, image: 'livro.jpg', category: 'eletronicos', rating: 3,
        reviews: 242, badge: 'normal',
    },

    {
        id: 4, name: 'Skincare Luxury', currentPrice: 40, discount: 20, image: 'skincare.jpg', category: 'roupas', rating: 2,
        reviews: 123, badge: 'discount'
    },

    {
        id: 5, name: 'Tenis "Nike" Azul', currentPrice: 432.34, discount: false, image: 'shoes.jpg', category: 'sports', rating: 4,
        reviews: 232, bagde: 'normal'
    },

    {
        id: 6, name: 'Mouse Logitech', currentPrice: 340.34, oldPrice: null, discount: false, image: 'mouse.jpg', category: 'eletronicos', rating: 3, reviews: 65, badge: 'new'
    },
];

const productGrid = document.querySelector('.products-grid')

function renderProducts() {

    productGrid.innerHTML = ''

    produtos.forEach(produto => {



        productGrid.innerHTML += `

    <div class="product-card">

        <div class="product-top">
            <div class="product-badge discount">
                20%
            </div>

            <button class="favorite-btn">
                <i class="fa-solid fa-heart"></i>
            </button>
        </div>

        <button class="cart">
                Adicionar
        </button>

        <img src="imagens/livro.jpg" alt="">

        <div class="product-info">
            <h3 class="product-name">Livro - Yol Gösteren</h3>

            <p class="product-stars">
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <span>(200)</span>
            </p>

            <p class="product-price">
                <span class="current-price">29$</span>
                <span class="old-price">39$</span>
            </p>


        </div>
    </div>
                        
    `
    })
}

