Vue.component('productDetails', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>
    `
});

Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },

    template: `
        <div class="product">

            <div class="product-image">
                <img v-bind:src="image" :alt="description" :title="description">
            </div>

            <div class="product-info">
                <h1>{{ title }}</h1>
                <span :class="{lineThrough: inStock, warning: !inStock}">Out of Stock</span>
                <!-- <p v-show="inStock">In Stock</p> -->
                <span class="warning" v-if="onSale">{{ saleInfo }} on Sale!</span>
                <p>Shipping: {{ shipping }}</p>
        
                <productDetails :details="variants[selectedVariant].variantDetails"></productDetails>

                <div v-for="(variant, index) in variants" 
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                </div>

                <ul>
                    <li v-for="size in sizes">{{ size }}</li>
                </ul>

                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{disabledButton: !inStock}">Add to cart</button>
                <button @click="removeCart"
                        :disabled="cart == 0"
                        :class="{disabledButton: cart == 0}">Remove from Cart</button>
            
                <div class="cart">
                    <p>Cart ({{cart}})</p>
                </div>

                <span class="warning" v-show="cartWarning">Your cart is empty!</span>
            </div>

        </div>
    `,
    data(){
        return {
            brand: 'Vue Mastery',
            product: 'Socks',
            description: 'A pair of warm, fuzzy socks',
            selectedVariant: 0,
            cartWarning: false,
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green.jpg',
                    variantQuantity: 10,
                    variantSale: true,
                    variantDetails: ['80% cotton', '20% polyester', 'Gender-neutral']
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-blue.jpg',
                    variantQuantity: 0,
                    variantSale: false,
                    variantDetails: ['75% cotton', '25% polyester', 'Male']
                }
            ],
            sizes: ['35 - 38', '37 - 40', '39 - 42', '41 - 44', '43 - 46'],
            cart: 0
        }
    },

    methods: {
        addToCart(){
            this.cart++;
        },
        removeCart(){
            this.cart--;
            if (this.cart < 0){
                this.cart = 0;
                this.cartWarning = true;
                setTimeout(()=>{
                    this.cartWarning = false
                }, 1000);
            }
        },
        updateProduct(index){
            this.selectedVariant = index;
        },
    },

    computed: {
        title(){
            return this.brand + ' ' + this.product;
        },
        image(){
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock(){
            return this.variants[this.selectedVariant].variantQuantity;
        },
        onSale(){
            return this.variants[this.selectedVariant].variantSale;
        },
        saleInfo(){
            let color = this.variants[this.selectedVariant].variantColor;
            color = color.charAt(0).toUpperCase() + color.slice(1);

            let product = this.product.toLowerCase();

            return color + ' ' + product
        },
        shipping(){
            if (this.premium) return "Free";
            return 2.99;
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        premium: false
    }
});