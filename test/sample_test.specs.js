const dialog = require('/Users/jacobvickery/Documents/appium_js/pageAppObjects/dialog');
const expect = require('chai').expect;

describe('Click', ()=>{
  it('Click on the app button', ()=>{
      dialog.appButton.click();
  })
}),

describe('Click', ()=>{
  it('Click on the search button', ()=>{
      dialog.searchButton.click();
  })
}),

describe('Click', ()=>{
  it('Click on the invoke search button', ()=>{
      dialog.invokeSearchButton.click();
  })
}),

describe('Click', ()=>{
  it('Tap on Prefill Query Entry', ()=>{
      dialog.prefillQueryEntry.click();
  })
}),

describe('Type', ()=>{
  it('Type "Test12345" in Prefill Query Box', ()=>{
      dialog.prefillQueryEntry.addValue("Test12345");
  })
}),

describe('Click', ()=>{
  it('Click on onSearchRequested() Button', ()=>{
      dialog.onSearchReqButton.click();
  })
}),

describe('Expect equal value', ()=>{
  it('Compare the two entered values', ()=>{

    let val1 = dialog.prefillQueryEntry.getText();

      // using the chai library here to use the expect keyword
  })
})
