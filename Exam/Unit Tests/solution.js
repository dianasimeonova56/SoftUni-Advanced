const { expect } = require('chai');
const { onlineStore } = require('./solution');

describe("Test", function () {
    describe("isProductAvailable", () => {
        it("happy path", () => {
            expect(onlineStore.isProductAvailable("product", 0)).to.equal(`Sorry, product is currently out of stock.`);
            expect(onlineStore.isProductAvailable("product", -2)).to.equal(`Sorry, product is currently out of stock.`);
            expect(onlineStore.isProductAvailable("product", 5)).to.equal(`Great! product is available for purchase.`);
        });
        it("invalid input", () => {
            expect(() => onlineStore.isProductAvailable(1, 0)).to.throw();
            expect(() => onlineStore.isProductAvailable("product", 'zero')).to.throw();
        })
    });
    describe("canAffordProduct", () => {
        it("happy path", () => {
            expect(onlineStore.canAffordProduct(3, 1)).to.equal("You don't have sufficient funds to buy this product.");
            expect(onlineStore.canAffordProduct(3, 4)).to.equal(`Product purchased. Your remaining balance is $1.`);
            expect(onlineStore.canAffordProduct(3, 0)).to.equal(`You don't have sufficient funds to buy this product.`);
        });
        it("invalid input", () => {
            expect(() => onlineStore.canAffordProduct('seventy', 69)).to.throw();
            expect(() => onlineStore.canAffordProduct(70, 'sixty-nine')).to.throw();
            expect(() => onlineStore.canAffordProduct('seventy', 'sixty-nine')).to.throw();
        })
    });
    describe("getRecommendedProducts", () => {
        it("happy path", () => {
            expect(onlineStore.getRecommendedProducts([{
                name: "aa",
                category: "bb"
            }], "bb")).to.deep.equal(`Recommended products in the bb category: aa`);
            expect(onlineStore.getRecommendedProducts([{
                name: "aaa",
                category: "bb"
            },
            {
                name: "ab",
                category: "bb"
            }
            ], "bb")).to.deep.equal(`Recommended products in the bb category: aaa, ab`);
        });
        it("no matches", () => {
            expect(onlineStore.getRecommendedProducts([{
                name: "aaa",
                category: "bb"
            }], "c")).to.deep.equal(`Sorry, we currently have no recommended products in the bb category.`);
        });
        it("invalid input", () => {
            expect(() => onlineStore.getRecommendedProducts('products', 'Photography')).to.throw();
            expect(() => onlineStore.getRecommendedProducts([{
                name: "Camera",
                category: "Photography"
            }], 2)).to.throw();
        });
    });

});
