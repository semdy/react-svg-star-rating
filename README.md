# react svg star rating

Get the AMD module located at `react-svg-star-rating.js` and include it in your project.

Here is a sample integration:

```js
require.config({
  paths: {
    'react': 'vendor/bower_components/react/react',
    'ReactSvgStarRating': 'react-svg-star-rating'
  }
});

require(['react', 'ReactSvgStarRating'], function(React, ReactSvgStarRating) {

  React.render(React.createElement(ReactSvgStarRating), document.getElementById('widget-container'));

});
```

## Development

* Development server `npm start`.
* Continuously run tests on file changes `npm run watch-test`;
* Run tests: `npm test`;
* Build `npm run build`;
