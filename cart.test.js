let Cart = require('./cart')
const cars = require('./data/cars');



describe('Cart Properties:', ()=>{
    test('cart should be an empty array',()=>{
        expect(Array.isArray(Cart.cart)).toEqual(true);
        expect(Cart.cart.length).toEqual(0)
    })

    test('total should have typeof Number, and be equal to 0', ()=>{

        expect(Cart.total).toEqual(0)
    })
})

describe('Cart Methods:', ()=>{
    afterEach(()=>{
        Cart.cart = []
        Cart.total = 0
    })
    test('addToCart() should add car object to cart.',()=>{
        Cart.addToCart(cars[1])
        Cart.addToCart(cars[8])

        expect(Cart.cart.length).toEqual(2)
        expect(Cart.cart[0]).toEqual(cars[1])
        expect(Cart.cart[1]).toEqual(cars[8])
    } )
    test('addToCart() should increase the total property', () =>{
        Cart.addToCart(cars[0])
        Cart.addToCart(cars[8])
        Cart.addToCart(cars[2])

        expect(Cart.total).toEqual(cars[0].price + cars[8].price + cars[2].price)
    })

    test('removeFromCart() should remove a car object from cart', ()=>{
        Cart.addToCart(cars[0])
        Cart.addToCart(cars[1])
        Cart.addToCart(cars[2])

        Cart.removeFromCart( 1, cars[1].price )

        expect(Cart.cart.length).toEqual(2)
        expect(Cart.cart[0]).toEqual(cars[0])
        expect(Cart.cart[1]).toEqual(cars[2])
    })

    test('removeFromCart() should decrease the total property', ()=>{
        Cart.addToCart(cars[0])
        Cart.addToCart(cars[8])
        Cart.addToCart(cars[2])

        Cart.removeFromCart( 0, cars[0].price )
        Cart.removeFromCart( 1, cars[2].price )

        expect(Cart.total).toEqual(cars[8].price)
    })

    test('checkout() should make cart an empty array and total should equal 0', ()=>{
        Cart.addToCart(cars[0])
        Cart.addToCart(cars[1])
        Cart.addToCart(cars[2])

        Cart.checkout()

        expect(Cart.cart.length).toEqual(0)
        expect(Cart.total).toEqual(0)
    })
})
