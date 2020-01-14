# Iframe

<div class="alert alert-warning">  
📢 Don't fork this project. Use, contribute, or open issues using your feature request.
</div>

![image](https://user-images.githubusercontent.com/18701182/67055752-abcb0500-f11f-11e9-8c24-50234214d474.png)

An app that makes it possible to render external iframes on a store 

## Configuration - standard Iframe

1. Add the `vtex.iframe` to the theme's dependencies on the `manifest.json`
```
...
"dependencies": {
 ...
 "vtex.iframe": "0.x"
 ...
}
...
```
 
 2. Add the interface `iframe` to any **custom page** (Iframes are not allowed outside custom pages).
 
 ```
 ...
"store.custom#about-us": {
    "blocks": [
      "flex-layout.row#about-us",
      "iframe"
    ]
  },

 "iframe": {
   "props": {
     "src": ""
   }
 },
 ...
 ```

| Prop name | Type | Description | Default value |
|--------------|--------|--------------| --------|
| `src` | String | Source address the iframe should render | `null`
| `width` | Number | Width attribute of the iframe | `null`
| `height` | Number | Height attribute of the iframe | `null`

## Configuration - dynamic Iframe

1. Add the `vtex.iframe` to the theme's dependencies on the `manifest.json`
```json
"dependencies": {
 ...
  "vtex.iframe": "0.x"
}
...
```
 
 2. Add the interface `dynamicIframe` to any **custom page** (Dynamic Iframes are not allowed outside custom pages).
 
 ```
 ...
"store.custom.locationPage":{
        "allowed":[
            "dynamicIframe"
        ]
    },
```


3. Add the dynamicIframe block and its properties to the blocks.json file

```json
 "store.custom.locationPage":{
        "children":[
            "dynamicIframe"
        ]
    },
    "dynamicIframe":{
        "props":{
            "srcPrepend":"https://www.{account}.com/",
            "srcAppend":"pagename",
            "dynamicParams":["param1","param2"],
            "width":"1920",
            "height":"1000",
            "title":"{pagename} iframe wrapper for {account}"
        }
    }
```
4. register your new page in routes.json with appropriate parameters passed into the page url

```json
"store.custom.locationPage":{
        "path": "/:param1/:param2/pagename"
    },
```

| Prop name | Type | Description | Default value |
|--------------|--------|--------------| --------|
| `srcPrepend` | String | domain for Iframe src with any additional desired SEO routing elements  | `null`
| `srcAppend` | String | value appended to end of Iframe src | `null`
| `dynamicParams` | String [] | array of parameter names passed from routes.json | `null`
| `width` | Number | Width attribute of the iframe | `null`
| `height` | Number | Height attribute of the iframe | `null`
| `title` | String | title attribute of the iframe tag | `null`

## Customization

There is a `.container` handle that wraps the iframe, it's also possible to use `blockClass`
