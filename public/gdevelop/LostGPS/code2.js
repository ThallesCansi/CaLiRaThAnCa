gdjs.JucaCode = {};
gdjs.JucaCode.localVariables = [];
gdjs.JucaCode.GDNarradorObjects1= [];
gdjs.JucaCode.GDNarradorObjects2= [];
gdjs.JucaCode.GDwhiteObjects1= [];
gdjs.JucaCode.GDwhiteObjects2= [];
gdjs.JucaCode.GDEndMsgObjects1= [];
gdjs.JucaCode.GDEndMsgObjects2= [];
gdjs.JucaCode.GDPlayAgainObjects1= [];
gdjs.JucaCode.GDPlayAgainObjects2= [];
gdjs.JucaCode.GDAlbumObjects1= [];
gdjs.JucaCode.GDAlbumObjects2= [];
gdjs.JucaCode.GDNewSpriteObjects1= [];
gdjs.JucaCode.GDNewSpriteObjects2= [];
gdjs.JucaCode.GDCarRedObjects1= [];
gdjs.JucaCode.GDCarRedObjects2= [];
gdjs.JucaCode.GDCarBlueObjects1= [];
gdjs.JucaCode.GDCarBlueObjects2= [];
gdjs.JucaCode.GDJucaObjects1= [];
gdjs.JucaCode.GDJucaObjects2= [];


gdjs.JucaCode.userFunc0xcc5a28 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

window.parent.postMessage(

{type: 'GDEVELOP_EVENT', action: 'COMPLETED', gameId: 'game-1'},

'*'

);

window.parent.postMessage(

{type: 'GDEVELOP_EVENT', action: 'ALBUM', gameId: 'game-1'},

'*'

);
};
gdjs.JucaCode.eventsList0 = function(runtimeScene) {

{


gdjs.JucaCode.userFunc0xcc5a28(runtimeScene);

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Selection", false);
}
}

}


};gdjs.JucaCode.userFunc0xd08fd0 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

window.parent.postMessage(

{type: 'GDEVELOP_EVENT', action: 'COMPLETED', gameId: 'game-1'},

'*'

);

window.parent.postMessage(

{type: 'GDEVELOP_EVENT', action: 'ALBUM', gameId: 'game-1'},

'*'

);
};
gdjs.JucaCode.eventsList1 = function(runtimeScene) {

{


gdjs.JucaCode.userFunc0xd08fd0(runtimeScene);

}


};gdjs.JucaCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PlayAgain"), gdjs.JucaCode.GDPlayAgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JucaCode.GDPlayAgainObjects1.length;i<l;++i) {
    if ( gdjs.JucaCode.GDPlayAgainObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JucaCode.GDPlayAgainObjects1[k] = gdjs.JucaCode.GDPlayAgainObjects1[i];
        ++k;
    }
}
gdjs.JucaCode.GDPlayAgainObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setString("Level1");
}

{ //Subevents
gdjs.JucaCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Album"), gdjs.JucaCode.GDAlbumObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.JucaCode.GDAlbumObjects1.length;i<l;++i) {
    if ( gdjs.JucaCode.GDAlbumObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.JucaCode.GDAlbumObjects1[k] = gdjs.JucaCode.GDAlbumObjects1[i];
        ++k;
    }
}
gdjs.JucaCode.GDAlbumObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.JucaCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.JucaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JucaCode.GDNarradorObjects1.length = 0;
gdjs.JucaCode.GDNarradorObjects2.length = 0;
gdjs.JucaCode.GDwhiteObjects1.length = 0;
gdjs.JucaCode.GDwhiteObjects2.length = 0;
gdjs.JucaCode.GDEndMsgObjects1.length = 0;
gdjs.JucaCode.GDEndMsgObjects2.length = 0;
gdjs.JucaCode.GDPlayAgainObjects1.length = 0;
gdjs.JucaCode.GDPlayAgainObjects2.length = 0;
gdjs.JucaCode.GDAlbumObjects1.length = 0;
gdjs.JucaCode.GDAlbumObjects2.length = 0;
gdjs.JucaCode.GDNewSpriteObjects1.length = 0;
gdjs.JucaCode.GDNewSpriteObjects2.length = 0;
gdjs.JucaCode.GDCarRedObjects1.length = 0;
gdjs.JucaCode.GDCarRedObjects2.length = 0;
gdjs.JucaCode.GDCarBlueObjects1.length = 0;
gdjs.JucaCode.GDCarBlueObjects2.length = 0;
gdjs.JucaCode.GDJucaObjects1.length = 0;
gdjs.JucaCode.GDJucaObjects2.length = 0;

gdjs.JucaCode.eventsList2(runtimeScene);
gdjs.JucaCode.GDNarradorObjects1.length = 0;
gdjs.JucaCode.GDNarradorObjects2.length = 0;
gdjs.JucaCode.GDwhiteObjects1.length = 0;
gdjs.JucaCode.GDwhiteObjects2.length = 0;
gdjs.JucaCode.GDEndMsgObjects1.length = 0;
gdjs.JucaCode.GDEndMsgObjects2.length = 0;
gdjs.JucaCode.GDPlayAgainObjects1.length = 0;
gdjs.JucaCode.GDPlayAgainObjects2.length = 0;
gdjs.JucaCode.GDAlbumObjects1.length = 0;
gdjs.JucaCode.GDAlbumObjects2.length = 0;
gdjs.JucaCode.GDNewSpriteObjects1.length = 0;
gdjs.JucaCode.GDNewSpriteObjects2.length = 0;
gdjs.JucaCode.GDCarRedObjects1.length = 0;
gdjs.JucaCode.GDCarRedObjects2.length = 0;
gdjs.JucaCode.GDCarBlueObjects1.length = 0;
gdjs.JucaCode.GDCarBlueObjects2.length = 0;
gdjs.JucaCode.GDJucaObjects1.length = 0;
gdjs.JucaCode.GDJucaObjects2.length = 0;


return;

}

gdjs['JucaCode'] = gdjs.JucaCode;
