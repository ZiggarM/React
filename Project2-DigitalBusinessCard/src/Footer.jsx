import React from "react";
import { SocialIcon } from 'react-social-icons';

export default function Footer(){
    return(
        <footer>
        <SocialIcon network="twitter" style={{ height: 25, width: 25 }} />
        <SocialIcon network="facebook" style={{ height: 25, width: 25 }} />
        <SocialIcon network="instagram" style={{ height: 25, width: 25 }} />
        <SocialIcon network="linkedin" style={{ height: 25, width: 25 }} />
        <SocialIcon network="github" style={{ height: 25, width: 25 }} />
        </footer>
    )
}