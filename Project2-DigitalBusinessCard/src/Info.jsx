import React from "react";

export default function Info(){
    return(
        <div className="info">
            <img src="https://scontent.fath6-1.fna.fbcdn.net/v/t1.6435-9/60252077_1011236252411946_7601360341687074816_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFkAzBZSFSJpxo8jhHKyLg-ex2g5h0J7sh7HaDmHQnuyLo-cXEBM_EoUSecY0olY0OJLqbv0bNt2rmp9FwICHA6&_nc_ohc=DTv-fuVX5ecAX9lYIbH&_nc_ht=scontent.fath6-1.fna&oh=00_AfBp1_vrRysJismvrBZsLuxbc3DZG6TeOnsZDos9LyFxcg&oe=63EDF341" alt="" />
            <h1 className="name">Marios Niko</h1>
            <p className="job">Frontend Developer</p>
            <small className="website">Marios.website</small>
            <button><i class="fa fa-envelope" aria-hidden="true"></i>Email</button>
        </div>
    )
}