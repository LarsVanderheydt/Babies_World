import React from 'react';
import {string} from 'prop-types';

const Unicorn = ({color}) => {

  return (
    <g id='unicorn-body' transform='translate(36.000000, 205.000000)'>
        <g transform='translate(25.000000, 2.000000)'>
            <path d='M10.6660048,0.461515516 L66.6377157,0.202561005 C66.6377157,0.202561005 82.0876916,56.865713 72.9310651,82.1009928 C25.7744386,94.0301019 3.33246265,80.1395402 3.33246265,80.1395402 C-7.18941687,63.2893656 10.6660048,0.461515516 10.6660048,0.461515516' id='dress' fill='#FFFFFF'></path>
            <g id='shirt'>
                <mask id='mask-2' fill='white'>
                    <use xlinkHref='#body-unicorn-1'></use>
                </mask>
                <g id='Clip-35'></g>
                <path d='M44.7149663,89.6613176 C44.6572795,69.3963765 41.5980506,41.0359059 27.3517133,21.0043765 C18.9527976,9.19496471 10.4760506,5.81990588 10.3913518,5.78743529 L13.2734,-2.3528 C13.6982675,-2.19562353 23.7943639,1.65378824 33.682147,15.2340235 C39.3423157,23.0076706 43.8478337,32.4528471 47.0755446,43.3060235 C51.0522675,56.6796706 53.0932795,72.2674353 53.1427253,89.6359059 L44.7149663,89.6613176 Z' id='Fill-25' fill='#FF0000' mask='url(#mask-2)'></path>
                <path d='M36.7082747,92.6934588 C36.5086602,22.2718118 2.35032289,8.96075294 2.0055759,8.83463529 L4.83131084,0.673694118 C5.2602988,0.830870588 15.4562024,4.67463529 25.4515759,18.2473412 C31.1762988,26.0219294 35.7349253,35.4685176 38.9992627,46.3249882 C43.0222265,59.7028706 45.0870458,75.2948706 45.1360337,92.6680471 L36.7082747,92.6934588 Z' id='Fill-28' fill='#FF7F00' mask='url(#mask-2)'></path>
                <path d='M29.544588,97.0248 C29.3449735,26.6031529 -4.81336386,13.2925647 -5.15856867,13.1659765 L-2.3323759,5.00503529 C-1.90338795,5.16221176 8.29251566,9.00597647 18.2878892,22.5786824 C24.012612,30.3532706 28.5712386,39.7998588 31.8355759,50.6563294 C35.8585398,64.0342118 37.923359,79.6262118 37.972347,96.9993882 L29.544588,97.0248 Z' id='Fill-31' fill='#FFFF00' mask='url(#mask-2)'></path>
                <path d='M21.9595133,100.056988 C21.7598988,29.6353412 -12.3984386,16.3242824 -12.7436434,16.1981647 L-9.9174506,8.03722353 C-9.48846265,8.19392941 0.707440964,12.0381647 10.7023566,25.6108706 C16.4275373,33.3849882 20.9861639,42.8320471 24.2505012,53.6885176 C28.2734651,67.0664 30.3378265,82.6579294 30.3872723,100.031106 L21.9595133,100.056988 Z' id='Fill-34' fill='#29ABE2' mask='url(#mask-2)'></path>
            </g>
        </g>
        <g id='arms' fill={color}>
            <path d='M35.8164645,0.230769231 C35.8164645,0.230769231 -0.197872401,43.8461538 0.260908961,60.4615385 C0.719690323,77.0769231 19.9885075,73.3846154 21.823633,60.9230769 C23.6587584,48.4615385 42.1884789,2.79507692 42.1884789,2.79507692 L35.8164645,0.230769231 Z' id='Fill-38'></path>
            <path d='M92.2468014,0.230769231 C92.2468014,0.230769231 128.261138,43.8461538 127.802357,60.4615385 C127.343576,77.0769231 108.074758,73.3846154 106.239633,60.9230769 C104.404508,48.4615385 85.8743283,2.79507692 85.8743283,2.79507692 L92.2468014,0.230769231 Z' id='Fill-40'></path>
        </g>
    </g>
  );
};

Unicorn.propTypes = {
  color: string.isRequired
};

export default Unicorn;
