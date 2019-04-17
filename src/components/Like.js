import React from 'react';
import { faHeart as solidheart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularheart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Like(props) {
    return (
        <FontAwesomeIcon icon={props.active ? solidheart : regularheart} onClick={() => props.onClick()} />
    );
}

export default Like;