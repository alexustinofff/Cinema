# Учебный проект Устинова Александра

[Макет](https://www.figma.com/file/DGCvEpASKiK0BQZsV4UWji/%D0%9B%D0%B5%D0%BD%D0%B4%D0%B8%D0%BD%D0%B3-stc-%D0%BA%D0%B8%D0%BD%D0%BE%D1%82%D0%B5%D0%B0%D1%82%D1%80?node-id=93%3A12)

npm install --save-dev @babel/core @babel/cli
npm install @babel/preset-env --save-dev

npx babel js -d target --watch

# Webpack Boilerplate

A webpack boilerplate that includes the following libs:

- jQuery
- bootstrap
- font-awesome
- waypoints
- jquery.scrollto
- animate.css

in order to quickly build up a production-ready marketing website.

### Example Page

[DEMO](http://geniuscarrier.com/demo/webpack-boilerplate/)

![GIF](http://geniuscarrier.me/images/webpack-boilerplate.gif)

### Install dependencies

```
npm install
```

### Developing locally

1. Run

   ```
   npm run dev
   ```

2. In your browser, navigate to: [http://localhost:8080/](http://localhost:8080/)

### Publish

1. In `webpack.config.js` file, replace `www.example.com` with the real domain name.

2. Run

   ```
   npm run build
   ```

3. Copy the following folders/files to web server

   /build,
   /image,
   index.html
