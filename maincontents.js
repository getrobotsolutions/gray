


function navigateTo(location) {
    switch (location) {
        case "home":
            location.href = "../../maincontents.htm";
            break;
        case "photos":
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "take_a_photo":
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        case "be_a_robot":
            location.href = "Contents/RobotAvatar/index.htm";
            break;
        default:
            break;
    }
}




function OnJoystickControlled(strPara){
    var btn_info = strPara.split(',')[4];


    if(btn_info[0] == '1'){
            window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hey there, have you seen the Océ Colorado--the hottest roll in town?");//I'm here to assist you, press any button on my screen to begin");
          
    }

    if(btn_info[1] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Hey would you like to stop babysitting your printer? Then you need to see the Océ Colorado.");
        
    }
    if(btn_info[2] == '1'){
        window.external.ChangeLanguage("en-us");
            SetVolume(1);
            window.external.PlaySpeech("Hi there, my name is Hannah, why don't you take a break and watch one of my videos. Just push the button on my screen!");
    }
    if(btn_info[3] == '1'){
        window.external.ChangeLanguage("en-us");
        SetVolume(1);
        window.external.PlaySpeech("Hey why don't you take a break, come on in and see our next presentation from Canon See Impossible.");
        
    }
    if(btn_info[4] == '1'){
        FC_ContentsCall('Home');
    }
}