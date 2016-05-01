import React from 'react/addons';
import ReactSvgStarRating from '../lib/react-svg-star-rating.jsx';

describe('ReactSvgStarRating', function() {
  var component;

  beforeEach(function() {
    component = React.addons.TestUtils.renderIntoDocument(
      <ReactSvgStarRating/>
    );
  });

  it('should render', function() {
    expect(component.getDOMNode().className).toEqual('react-svg-star-rating');
  });
});
