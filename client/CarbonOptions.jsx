import React from 'react';
import './style.css'; //test this
import { Link } from 'react-router-dom';

const CarbonOptions = () => {


  return (
    <div class="mdc-card__actions mdc-card__actions--full-bleed" >
      <button class="mdc-icon-button mdc-card__action mdc-card__action--icon"
        aria-pressed="false"
        aria-label="Add to favorites"
        title="Add to favorites">
        <i class="material-icons mdc-icon-button__icon mdc-icon-button__icon--on">favorite</i>
        <i class="material-icons mdc-icon-button__icon">favorite_border</i>
      </button>
      <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="Share">share</button>
      <button class="material-icons mdc-icon-button mdc-card__action mdc-card__action--icon" title="More options">more_vert</button>
    </div>
  )
}

export default CarbonOptions;