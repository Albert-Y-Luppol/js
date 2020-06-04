let eventBus = new Vue();

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
        },
        cart: {
            type: Array,
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

                <details-tabs :shipping="shipping" :details = "variants[selectedVariant].variantDetails"></details-tabs>

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

                <span class="warning" v-show="cartWarning">Your cart is empty!</span>
            </div>

            <product-tabs :reviews="reviews"></product-tabs>

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
            reviews: []
        }
    },

    methods: {
        addToCart(){
            this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId);
        },
        removeCart(){
            this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId);
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
    },
    mounted(){
        eventBus.$on('review-submitted', productReview =>{
            this.reviews.push(productReview);
        });

    }
});

Vue.component('product-review',{
    template: `
        <form class="review-form" @submit.prevent="onSubmit">

            <p v-if="errors.length">
                <b>Please correct the following error<span v-if="errors.length > 1">s</span>:</b>
                <ul>
                    <li v-for="error in errors">{{ error }}</li>
                </ul>
            </p>

            <p>
                <label for="name">Name:</label>
                <input id="name" v-model="name">
            </p>

            <p>
                <label for="review">Review:</label>
                <textarea id="review" v-model="review"></textarea>
            </p>

            <p>
                <label for="rating">Rating:</label>
                <select id="rating" v-model.number="rating">
                    <option>5</option>
                    <option>4</option>
                    <option>3</option>
                    <option>2</option>
                    <option>1</option>
                </select>
            </p>

            <p>
                <input type="submit" value="Submit">
            </p>
        </form>
    `,
    data(){
        return {
            name: null,
            review: null,
            rating: null,
            errors:[],
        }
    },
    methods:{
        onSubmit(){
            this.errors = [];
            if(this.name && this.review && this.rating){
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                }
    
                eventBus.$emit('review-submitted', productReview);
    
                this.name = null;
                this.review = null;
                this.rating = null;
            } else{
                if(!this.name) this.errors.push("Name required.");
                if(!this.review) this.errors.push("Review required.");
                if(!this.rating) this.errors.push("Rating required.");
            }
        }
    }
});

Vue.component('product-tabs', {
    props:{
        reviews: {
            type: Array,
            required: true
        }
    },
    template: `
        <div>
            <span   class="tab"
                    :class="{ activeTab: selectedTab !== tab }"
                    v-for="(tab, index) in tabs"
                    :key="index"
                    @click="selectedTab = tab">
                
                {{ tab }}
            </span>

            <div v-show="selectedTab === 'Reviews'">
                <h2>Reviews</h2>
                <p v-if="!reviews.length">There are no reviews yet.</p>
                <ul v-else>
                    <li v-for="review in reviews">
                        <p>{{ review.name }}</p>
                        <p>Rating: {{ review.rating }}</p>
                        <p>{{ review.review }}</p>
                    </li>
                </ul>
            </div>

            <product-review v-show="selectedTab === 'Make a Review'"></product-review>
        </div>
    `,
    data(){
        return {
            tabs: ['Reviews', 'Make a Review'],
            selectedTab: 'Reviews'
        }
    }
});


Vue.component('details-tabs',{
    props: {
        shipping: {
            required: true,
        },
        details: {
            type: Array,
            required: true
        }
    },
    template: `
    <div>
        <span   v-for="(tab, index) in tabs"
                :key="index"
                class="tab"
                :class="{ activeTab: tab !== selectedTab}"
                @click="selectedTab = tab">
                
            {{ tab }}
        </span>

        <p v-show="selectedTab === 'Shipping'">Shipping: {{ shipping }}</p>
        
        <productDetails v-show="selectedTab === 'Details'" :details="details"></productDetails>

    </div>
    `,
    data(){
        return {
            tabs: ['Details', 'Shipping'],
            selectedTab: 'Details'
        }
    }
});

let app = new Vue({
    el: '#app',
    data: {
        premium: true,
        cart: []
    },
    methods: {
        updateCart(id){
            this.cart.push(id);
        },
        removeFromCart(id){
            let i = this.cart.indexOf(id);
            if(i != -1){
                this.cart.splice(i, 1);
            } else {
                setTimeout(()=>{
                    this.cartWarning = false
                }, 1000);
            }
        },
    }
});