import React from 'react';
import { Segment, Image } from 'semantic-ui-react'
import CreateOrder from './CreateOrder'

function TopBanner() {
    return (
        <div className="banner-container">
        <Image src="https://s3.eu-west-1.amazonaws.com/redsys-prod/articles/eac8c6d69d1ce8ce0ff8824d/images/teaserImage_xxxx_croppedTeaserImage.jpg" fluid className="custom-banner-image" />
        <div className="create-order-overlay">
            <CreateOrder />
        </div>
    </div>
    )
}

export default TopBanner