import React from 'react';

import mechanic1 from '../../../images/mechanic/mechanic-1.jpg';
import mechanic2 from '../../../images/mechanic/mechanic-2.jpg'
import mechanic3 from '../../../images/mechanic/mechanic-3.jpg'
import mechanic4 from '../../../images/mechanic/mechanic-4.jpg'
import mechanic5 from '../../../images/mechanic/mechanic-5.jpg'
import mechanic6 from '../../../images/mechanic/mechanic-6.jpg'
import Expert from '../Expert/Expert';

const experts = [
    {
        img: mechanic1,
        name: 'Johana Monn',
        expertize: 'Psychologist'
    },
    {
        img: mechanic2,
        name: 'Anna Winds',
        expertize: 'Psychologist'
    },
    {
        img: mechanic3,
        name: 'Dan Washington',
        expertize: 'Pediatrics'
    },
    {
        img: mechanic4,
        name: 'Will Smith',
        expertize: 'Therapist'
    },
    {
        img: mechanic5,
        name: 'Jim Hendrix',
        expertize: 'Psychologist'
    },
    {
        img: mechanic6,
        name: 'Lisa Smith',
        expertize: 'Psychologist'
    },
]

const Experts = () => {
    return (
        <div className="container" id="experts">
            <h2 className="text-primary mt-5">Our Experts</h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.name}
                        expert={expert}
                    >

                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;