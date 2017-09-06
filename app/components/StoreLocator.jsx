var React = require('react')
var Map = require('./Map')
var stores = require('../data/stores')
var findElement = require('../helpers/findElement')
var CurrentLocation = require('./CurrentLocation')


var StoreLocator = React.createClass({
    getInitialState () {
        return {
            lat: 53.4719986,
            lng: -2.2414979
        }
    },

    handleMarkerClick: function (details) {
        var storeId = details.id 
        var store = findElement(stores, storeId)

        this.setState({
            currentLocation: storeId,
            lat: store.lat,
            lng: store.lng
        })
    },
    render: function () {
        return (
        <div className='store-locator'>
            <div className='location-column'>
            <div className='title'>
                Store Locator
            </div>
            <CurrentLocation storeId={this.state.currentLocation} />
        </div>
            <div className='map'>
            <Map lat={this.state.lat} lng={this.state.lng} onMarkerClick = {this.handleMarkerClick} />
            </div>
        </div>
        )
    }
})

module.exports = StoreLocator
