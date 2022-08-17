import React from 'react';

const dimensionArtBanner = 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blte6088e7599a28fd3/62b4ac17919dfb0f9bf00456/REV_Valorant_2022_E5A1_PlayVALORANT_PlayValorantHomepage_3440x1020_MB02.jpg'

const ArtBanner = () => {
    return (
        <div>
            <img src={dimensionArtBanner}  alt='Valorant Dimension season art banner'/>
        </div>
    );
};

export default ArtBanner;