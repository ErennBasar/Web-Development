

function ProfilePicture(){

    const imgUrl = './src/assets/tr.png';
    const imgClick = (e) => e.target.style.display = "none";

    return <img className="img-tr" src={imgUrl} onClick={(e)=>imgClick(e)} />
}

export default ProfilePicture;