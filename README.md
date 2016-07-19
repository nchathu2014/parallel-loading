![](http://i.imgur.com/cslTyLo.png)  
For more reference : http://labjs.com/
# Parallel Loading
**LABjs** is a dynamic script loader intended to replace the use of the ugly, non-performant `<script>` tag with a flexible and performance-optimized alternative API.


The defining characteristic of LABjs is the ability to load all JavaScript files in parallel, as fast as the browser will allow, but giving you the option to ensure proper execution order if you have dependencies between files.

## Run
```sh
$ npm install
npm run start
```

## Results

### Without LABjs
![Imgur](http://i.imgur.com/Eiskulq.png?1)

### With LABjs
![Imgur](http://i.imgur.com/DJ1TPNG.png?1)