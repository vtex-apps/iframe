# Iframe

<div class="alert alert-warning">  
📢 Don't fork this project. Use, contribute, or open issues using your feature request.
</div>

![image](https://user-images.githubusercontent.com/18701182/67055752-abcb0500-f11f-11e9-8c24-50234214d474.png)

An app that makes it possible to render external iframes on 

## Configuration

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
| `height` | Number | Width attribute of the iframe | `null`

## Customization

There is a `container` handle that wraps the iframe, it's also possible to use `blockClass`
