# White listing Strings 

In programming world we know how to block or blacklist certain strings and words now in this repository we will also learn how to white list in other words allow the strings to get processed. 


![Screen 1](https://github.com/uiuxlovi/White-listing-strings/blob/master/Screens/Screen1.JPG) 

# Whitelist 
```javascript
app.directive('whitelist', function (){
   return {
      require: 'ngModel',
      link: function(scope, elem, attr, ngModel) {
          var whitelist = attr.whitelist.split(',');
          ngModel.$parsers.unshift(function (value) {
            console.log(value);
             ngModel.$setValidity('whitelist', whitelist.indexOf(value) === 0 || whitelist.indexOf(value) === 1);
             return value;
          });
      }
   };
});
```

# Use in your html 
```html
<div class="mainDiv">
    <form name="myForm" ng-submit="doSomething()" class="ExForm">
       <h4>Whitelisted words are: foo, hello world.</h4>
       <input type="text" name="fruitName" ng-model="data.fruitName" whitelist="foo,hello world" required/>
       <span class="invalid" ng-show="myForm.fruitName.$error.whitelist">
          The phrase "{{data.fruitName}}" is not allowed</span>
       <span class="invalid" ng-show="myForm.fruitName.$error.required">required</span>
       <br/> <br/>
       <button type="submit" ng-disabled="myForm.$invalid">Submit</button>
    </form>
  </div>
```

## **License**

```
MIT License

Copyright (c) 2018 UIUXLOVI.


Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
