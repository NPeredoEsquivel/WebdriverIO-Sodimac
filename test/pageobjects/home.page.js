const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a homepage
 */
class HomePage extends Page {
    /**
     * this get the search elements to find the query value
     */
    get searchBox () { return $('.DesktopSearchBar-module_searchbox-input__HXYgR') }
    get searchBoxButton () { return $('.DesktopSearchBar-module_lens-icon__2x7d_') }
    

    /**
     * theese methods are programmed to search values, obtain values, and click
     * in the search box 
     */
    searchText (valueToSearch) {
        this.searchBox.setValue(valueToSearch);
    }

    getSearchText () {
        return this.searchBox.getValue();
    }

    searchButton () {
        this.searchBoxButton.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new HomePage();
