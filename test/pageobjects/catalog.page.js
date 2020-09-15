const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a catalog page
 */
class CatalogPage extends Page {
    /**
     * this obtain the elements in the catalog page, when all the 
     * products are sorted
     */
    get productContainer () { return $('div.search-results-products-container>div:nth-of-type(1)>div') }
    /**
     * this obtain the first element's price in the catalog. 
     */
    get itemPriceFromList () { return this.productContainer.$('div.desktop-price-cart-btn>div.media-component>div.product-price-and-logo>div>div>span:nth-of-type(1)') }
    /**
     * this obtain the first element's href. 
     */
    get itemImageFromList () { return this.productContainer.$('div.link-with-wrapper>a') }
    
    /**
     * this obtains the item detail price 
     */
    get itemDetailElementPrice() { return $('div.product-details-wrapper>div.product-info>div.product-price>div.product-price-and-logo>div>div>div.price>span:nth-of-type(1)')}
    
    
    /**
     * different methods with the logic to test the 
     * catalog price vs the detail price of the first product
     */
    getPrice () {
        return this.itemPriceFromList.getText();
    }

    clickItem () {
        this.itemImageFromList.click()
    }

    getItemDetailPrice(){
        return this.itemDetailElementPrice.getText()
    }

}

module.exports = new CatalogPage();
