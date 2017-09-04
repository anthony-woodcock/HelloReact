var React = require('react')

var StoreLocator = React.createClass({
  render: function () {
    return (
      <div className="store-locator">
        <div className="location-column">
          <div className="title">
            Store Locator
          </div>
        </div>
        <div className="map"></div>
      </div>
    )
  }
})

module.exports = StoreLocator