import React from 'react';
import {string} from 'prop-types';

const HeartPacifier = ({color}) => {
  console.log(color);
  return (
    <g id='Page-1' transform='translate(64.000000, 178.000000)'>
        <g id='Group-3'>
            <g id='Clip-2'></g>
            <path d='M7.5364918,0.430925714 C7.88419672,0.441125714 8.23140984,0.45084 8.57862295,0.460554286 C8.71436066,0.508154286 8.84616393,0.57664 8.98583607,0.60044 C11.4856721,1.02641143 13.3358361,2.35289714 14.578623,4.52404 C14.7069836,4.74844 14.8269836,4.97818286 14.9956721,5.28612571 C15.1530492,5.02869714 15.2622295,4.84898286 15.3723934,4.67024 C16.6132131,2.66035429 18.4097705,1.44558286 20.7473115,1.00406857 C21.0571475,0.945782857 21.3674754,0.888468571 21.6773115,0.830668571 C22.0245246,0.840382857 22.3717377,0.850097143 22.7189508,0.859811429 C22.8837049,0.907411429 23.0450164,0.972982857 23.2132131,0.999211429 C27.4245246,1.66026857 30.2420656,5.41969714 29.7207541,9.58518286 C29.376,12.3420971 28.2197705,14.73084 26.2978033,16.6780686 C24.3482951,18.6534686 22.180918,20.4185543 20.1330492,22.3016686 C18.4855082,23.8170971 16.8625574,25.3597257 15.2543607,26.9159543 C14.8987869,27.2603257 14.6519016,27.7144686 14.316,28.1715257 C13.1322295,26.0377829 11.4753443,24.4247257 9.79731148,22.8238114 C7.78337705,20.90184 5.7207541,19.02164 3.82140984,16.9942686 C1.74895082,14.7813543 0.353704918,12.1992971 0.0414098361,9.10966857 C-0.347114754,5.26621143 2.03665574,1.73555429 5.79452459,0.755382857 C6.36403279,0.606754286 6.95518033,0.537297143 7.5364918,0.430925714' id='Fill-1' fill='#FF0000' mask='url(#mask-2)'></path>
        </g>
        <path d='M15.4997475,12.862366 C12.3909828,12.862366 9.86186106,15.3914877 9.86186106,18.5002525 C9.86186106,21.6085123 12.3909828,24.137634 15.4997475,24.137634 C18.6085123,24.137634 21.1371291,21.6085123 21.1371291,18.5002525 C21.1371291,15.3914877 18.6085123,12.862366 15.4997475,12.862366 M15.4997475,27 C10.8126169,27 7,23.1868781 7,18.5002525 C7,13.8131219 10.8126169,10 15.4997475,10 C20.1863732,10 24,13.8131219 24,18.5002525 C24,23.1868781 20.1863732,27 15.4997475,27' id='Fill-4' fill={color}></path>
        <path d='M20,12 C20,14.2094654 17.9856486,16 15.5,16 C13.0148444,16 11,14.2094654 11,12 C11,9.79097283 13.0148444,8 15.5,8 C17.9856486,8 20,9.79097283 20,12' id='Fill-6' fill='#C1272D'></path>
    </g>
  );
};

HeartPacifier.propTypes = {
  color: string.isRequired
};

export default HeartPacifier;