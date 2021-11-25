import React, { useState } from 'react';
import File from '../../Pages/allFile/File'


const fakeData = [
    {
        "id": 1,
        "name": "Motorhome",
        "img": "https://i.ibb.co/mvgrm35/Modern-25-Feet-Travel-Trailer-Camping-in-the-Forest-Evening-Dusk-Photography-Recreation-Photo-Collec.jpg",
        "description": "Dr-Abu-Mohammod-Nurul-Ahad is a diabetes Specialist doctor in Comilla. His qualification is MBBS, MPhil (BSMMU), IAEA Fellowship Training (South Korea). He is a Professor & Head in the Department of Oncology at Shahabuddin Medical College & Hospital",
        "degree": "MBBS,",
        "chamberTime": "Saturday to Thursday(4:00 pm - 9:00 pm)",
        "Speciality": "Diabetes"
    },
    {
        "id": 2,
        "name": "Luxery Tent",
        "img": "https://i.ibb.co/Pr2m3rp/2-Luxery-Tent.jpg",
        "description": "Dr-Sharmin-Rahaman is a Medicine Specialist doctor in Comilla. His qualification is MBBS, MPhil (BSMMU), IAEA Fellowship Training (South Korea). He is a Professor & Head in the Department of Oncology at Shahabuddin Medical College & Hospital",
        "degree": "MBBS,",
        "chamberTime": "Saturday to Thursday(4:00 pm - 9:00 pm)",
        "Speciality": "Medicine"
    },
    {
        "id": 3,
        "name": "Classic-Tent",
        "img": "https://i.ibb.co/3vKDMNG/3-Classic-Tent.jpg",
        "description": "Dr-Ajit-Kumar-Paul is a Dental Specialist doctor in Comilla. His qualification is MBBS, MPhil (BSMMU), IAEA Fellowship Training (South Korea). He is a Professor & Head in the Department of Oncology at Shahabuddin Medical College & Hospital",
        "degree": "MBBS,",
        "chamberTime": "Saturday to Thursday(4:00 pm - 9:00 pm)",
        "Speciality": "Dental"
    },
    {
        "id": 4,
        "name": "Tent",
        "img": "https://i.ibb.co/m9pL3xW/4-Tent.jpg",
        "description": "Dr-Mahmudul-Hasan-Khan is a aparoscopic Specialist doctor in Comilla. His qualification is MBBS, MPhil (BSMMU), IAEA Fellowship Training (South Korea). He is a Professor & Head in the Department of Oncology at Shahabuddin Medical College & Hospital",
        "degree": "MBBS,",
        "chamberTime": "Saturday to Thursday(4:00 pm - 9:00 pm)",
        "Speciality": "Aparoscopic"
    },
    {
        "id": 5,
        "name": "Forest",
        "img": "https://i.ibb.co/Lpymwnn/Relaxing-mature-Hispanic-couple-camping-in-the-wilderness-Relaxing-family-time.jpg",
        "description": "Dr-Md-Abdul-Hoque is a Pediatric Specialist doctor in Comilla. His qualification is MBBS, MPhil (BSMMU), IAEA Fellowship Training (South Korea). He is a Professor & Head in the Department of Oncology at Shahabuddin Medical College & Hospital",
        "degree": "MBBS,",
        "chamberTime": "Saturday to Thursday(4:00 pm - 9:00 pm)",
        "Speciality": "Pediatric"
    },
    {
        "id": 6,
        "name": "Small Trailer",
        "img": "https://i.ibb.co/gdypSkz/Glamping-campsite-in-the-forest-Big-camping-tent-for-luxury-outdoor-vacation-Staycations-hyper-local.jpg",
        "description": "Dr-Parvin-Mujib is a Neurology Specialist doctor in Comilla. His qualification is MBBS, MPhil (BSMMU), IAEA Fellowship Training (South Korea). He is a Professor & Head in the Department of Oncology at Shahabuddin Medical College & Hospital",
        "degree": "MBBS,",
        "chamberTime": "Saturday to Thursday(4:00 pm - 9:00 pm)",
        "Speciality": "Neurology"
    }
]

const FindFile = () => {
    const [search, setSearch] = useState('');
    return (
        <div>
            <form class="form-inline container w-25 mt-5">
                <input
                    class="form-control mr-sm-2"
                    type="search"
                    placeholder="search"
                    aria-label="Search"
                    onChange={(event) => {
                        setSearch(event.target.value);
                    }}>

                </input>
            </form>

            {
                fakeData.filter(data => {
                    console.log(data.Speciality);
                    if (search === "") {
                        return data;
                    }
                    else if (data.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
                        return data;
                    }
                }).map(data => <File
                    data={data}
                    key={data.name}
                >
                </File>)
            }

        </div>
    );
};

export default FindFile;