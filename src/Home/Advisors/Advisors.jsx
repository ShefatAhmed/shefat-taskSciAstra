import React from 'react';

const Advisors = () => {
    return (
        <section>
            <h2 class="text-2xl font-semibold mb-4">Mentors & Advisors</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div class="text-left mx-auto">
                    <img src="https://www.fortismumbai.com/frontend/docimage/DR_OMKAR_HAJARNIS-1581332473.jpg" alt="" class="w-32 h-32 rounded-full mx-auto mb-2" />
                        <p class="text-lg font-semibold">Dr. Omkar</p>
                        <p class="text-gray-600">Principal Project Scientist</p>
                        <p class="text-gray-600">IIT Madras</p>
                </div>
                <div class="text-center">
                    <img src="https://media.licdn.com/dms/image/C5603AQECJ-xMWVNZrA/profile-displayphoto-shrink_800_800/0/1516266460077?e=2147483647&v=beta&t=aE02MsfazXYRCkAbd18--EAWhWmnNFzkkC_BOG4B-eA" alt="" class="w-32 h-32 rounded-full mx-auto mb-2" />
                        <p class="text-lg font-semibold">Akhil Tripati</p>
                        <button class="btn bg-indigo-500 px-4 py-2 rounded text-white mt-2">Message him now</button>
                </div>
                <div class="text-center">
                    <img src="https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/258601530_1086846158790850_6274399736227891342_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGVWBWO9mdZ-Eqmzx7yQBZva_5iWy5D8QZr_mJbLkPxBtDJeL6iXLo8wTxP9GCIfx6k-sn8Nw-IUiz_IczHq3Fh&_nc_ohc=KUQtI8sy9N0AX-PH5hY&_nc_ht=scontent.fjsr11-1.fna&oh=00_AfAzri-_v4CgQ2pBKB7SxWzICUxRUKKPBOVxcQI4oXuA_Q&oe=64EE88D9" alt="" class="w-32 h-32 rounded-full mx-auto mb-2" />
                        <p class="text-lg font-semibold">Vivek Dwivedi</p>
                        <button class="btn bg-indigo-500 px-4 py-2 rounded text-white mt-2">Message him now</button>
                </div>
            </div>
        </section>
    );
};

export default Advisors;