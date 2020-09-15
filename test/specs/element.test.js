
const HomePage = require('../pageobjects/home.page');
const CatalogPage = require('../pageobjects/catalog.page');
const { expect } = require('chai');


describe("Interacting with elements", function(){
    /**
     * this tests the url, it asserts if the url is correct
     */
    it("Get Sodimac's page", () => {        
        HomePage.open();

        expect(browser.getUrl()).equals('https://www.sodimac.cl/sodimac-cl/')
    })

    /**
     * this tests the search box, to search the value to be tested
     */
    it("Search for 'pintura blanca'", () => {        
        HomePage.searchText("pintura blanca");
        expect(HomePage.getSearchText()).equals("pintura blanca")       
    })

    
    /**
     * this obtains the price value of the first element in the catalog
     * then it get the detail price of the item to compare and assert
     */
    it("Click to search and obtain price of first element", () => { 
        HomePage.searchButton();

        const price = CatalogPage.getPrice()
        CatalogPage.clickItem()

        const detailPrice = CatalogPage.getItemDetailPrice()
        console.log(price)
        console.log(detailPrice)
        expect(price).equals(detailPrice)  
    })
})
