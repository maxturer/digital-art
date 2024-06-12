import * as React from "react";
import gw_monogram from "../images/gw_monogram_2c_rev.png";

const Media = ({ pageMedia, mediaId, embedded }) => {

    function Render({media, isEmbed}) {
        if (isEmbed) {
            return  <iframe src={media}></iframe>
        }
        return  <img src={media} alt="" />
    }

    return (
        <div className="media-container">
            <div className="pagemedia logo" id={mediaId}>
                <div className="logowrap">
                    <img src={gw_monogram} alt="" />
                </div>
            </div>
            <div className="pagemedia media" id="media">
                <div className="mediawrap" id={mediaId}>
                    <Render media={pageMedia} isEmbed={embedded} />
                </div>
            </div>
        </div>
    )
  };

  export default Media;