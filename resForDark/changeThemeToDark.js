function changeTheme()
{
    var getSection = document.getElementsByClassName("makeThisDark");
    if(getSection[0].style.background != "black")
    {
        getSection[0].style.background="black";
        getSection[0].style.color="white";

    }
    else{
    getSection[0].style.background="white";
    getSection[0].style.color="black";
    }
}