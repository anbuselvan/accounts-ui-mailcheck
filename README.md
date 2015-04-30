# Accounts UI MailCheck

#### A cool meteor package that suggests a right domain when your users misspell it in the accounts-ui email address.


### Documentation

Please check the full documentation from the [mailcheck](https://github.com/mailcheck/mailcheck/blob/master/README.md) repository.


### How to add?

```
meteor add accounts-ui
meteor add accounts-password
meteor add anbuselvan:accounts-ui-mailcheck
```


### Initialize and add custom text

##### Default values

```js
  MeteorMailCheck.EmailPrefixText = "Did you mean";
  MeteorMailCheck.EmailSuffixText = "?";
  MeteorMailCheck.DisableClickEvent = false;
  MeteorMailCheck.EnableAutoHide = false;
  MeteorMailCheck.AutoHideDelay = 3000;
  MeteorMailCheck.AutoHideOnFocus = false;
```

##### Customize it based on your requirements

```js
if (Meteor.isClient) {
  Meteor.startup(function() {
    //update with your custom text
    MeteorMailCheck.EmailPrefixText = "Suggested email: ";
    MeteorMailCheck.EmailSuffixText = "";
    
    // set auto hide preferences
    MeteorMailCheck.EnableAutoHide = true;
    MeteorMailCheck.AutoHideDelay = 5000;
    MeteorMailCheck.AutoHideOnFocus = true;
    
    //initialize mailcheck
    MeteorMailCheck.init();
  });
});
```


### Override the styles to match your design

```css
#mailcheck-suggestion-text {
  font-size: 75%;
  text-align: right;
}

.mailcheck-suggestion-email {
  font-size: 75%;
  text-decoration: underline;
  cursor: pointer;
}
```

### Sample App

Check the mailcheck-test project from **examples/mailcheck-test** folder.

### Quick preview

![Screen Capture](https://raw.githubusercontent.com/anbuselvan/accounts-ui-mailcheck/master/screenshot/mailcheck.gif)

### See it in action

[Meteor - MailCheck](http://mailcheck.meteor.com)
