var React = require('react')
var Map = require('./Map')

var StoreLocator = React.createClass({
  render: function () {
    return (
      <div className='store-locator'>
        <div className='location-column'>
          <div className='title'>
            Store Locator
          </div>
        </div>
        <div className='map'>
          <Map lat='53.4719986' lng='-2.2414979' />
        </div>
      </div>
    )
  }
})

module.exports = StoreLocator
