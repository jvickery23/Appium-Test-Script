class Dialog {

   // defined elements

   get appButton() {return $('//android.widget.TextView[@content-desc="App"]')}
   get searchButton() {return $('//android.widget.TextView[@content-desc="Search"]')}
   get invokeSearchButton() {return $('//android.widget.TextView[@content-desc="Invoke Search"]')}
   get prefillQueryEntry() {return $('io.appium.android.apis:id/txt_query_prefill')}
   get onSearchReqButton() {return $('//android.widget.Button[@content-desc="onSearchRequested()"]');}
   get entryText() {return $('android:id/search_src_text')}


 }

module.exports = new Dialog();
