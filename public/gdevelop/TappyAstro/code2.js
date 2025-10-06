gdjs.JucaCode = {};
gdjs.JucaCode.localVariables = [];
gdjs.JucaCode.GDNarradorObjects1= [];
gdjs.JucaCode.GDNarradorObjects2= [];
gdjs.JucaCode.GDMessageGoodObjects1= [];
gdjs.JucaCode.GDMessageGoodObjects2= [];
gdjs.JucaCode.GDMessageBadObjects1= [];
gdjs.JucaCode.GDMessageBadObjects2= [];
gdjs.JucaCode.GDNewSpriteObjects1= [];
gdjs.JucaCode.GDNewSpriteObjects2= [];
gdjs.JucaCode.GDwhiterepeatObjects1= [];
gdjs.JucaCode.GDwhiterepeatObjects2= [];
gdjs.JucaCode.GDAlbumObjects1= [];
gdjs.JucaCode.GDAlbumObjects2= [];
gdjs.JucaCode.GDPlayAgainObjects1= [];
gdjs.JucaCode.GDPlayAgainObjects2= [];
gdjs.JucaCode.GDBackgroundObjects1= [];
gdjs.JucaCode.GDBackgroundObjects2= [];


gdjs.JucaCode.userFunc0xc20948 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

window.parent.postMessage(

{type: 'GDEVELOP_EVENT', action: 'ALBUM', gameId: 'game-1'},

'*'

);
};
gdjs.JucaCode.eventsList0 = function(runtimeScene) {

{


gdjs.JucaCode.userFunc0xc20948(runtimeScene);

}


};gdjs.JucaCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), 0, 0, 0);
}
}

}


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
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
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
gdjs.JucaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.JucaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JucaCode.GDNarradorObjects1.length = 0;
gdjs.JucaCode.GDNarradorObjects2.length = 0;
gdjs.JucaCode.GDMessageGoodObjects1.length = 0;
gdjs.JucaCode.GDMessageGoodObjects2.length = 0;
gdjs.JucaCode.GDMessageBadObjects1.length = 0;
gdjs.JucaCode.GDMessageBadObjects2.length = 0;
gdjs.JucaCode.GDNewSpriteObjects1.length = 0;
gdjs.JucaCode.GDNewSpriteObjects2.length = 0;
gdjs.JucaCode.GDwhiterepeatObjects1.length = 0;
gdjs.JucaCode.GDwhiterepeatObjects2.length = 0;
gdjs.JucaCode.GDAlbumObjects1.length = 0;
gdjs.JucaCode.GDAlbumObjects2.length = 0;
gdjs.JucaCode.GDPlayAgainObjects1.length = 0;
gdjs.JucaCode.GDPlayAgainObjects2.length = 0;
gdjs.JucaCode.GDBackgroundObjects1.length = 0;
gdjs.JucaCode.GDBackgroundObjects2.length = 0;

gdjs.JucaCode.eventsList1(runtimeScene);
gdjs.JucaCode.GDNarradorObjects1.length = 0;
gdjs.JucaCode.GDNarradorObjects2.length = 0;
gdjs.JucaCode.GDMessageGoodObjects1.length = 0;
gdjs.JucaCode.GDMessageGoodObjects2.length = 0;
gdjs.JucaCode.GDMessageBadObjects1.length = 0;
gdjs.JucaCode.GDMessageBadObjects2.length = 0;
gdjs.JucaCode.GDNewSpriteObjects1.length = 0;
gdjs.JucaCode.GDNewSpriteObjects2.length = 0;
gdjs.JucaCode.GDwhiterepeatObjects1.length = 0;
gdjs.JucaCode.GDwhiterepeatObjects2.length = 0;
gdjs.JucaCode.GDAlbumObjects1.length = 0;
gdjs.JucaCode.GDAlbumObjects2.length = 0;
gdjs.JucaCode.GDPlayAgainObjects1.length = 0;
gdjs.JucaCode.GDPlayAgainObjects2.length = 0;
gdjs.JucaCode.GDBackgroundObjects1.length = 0;
gdjs.JucaCode.GDBackgroundObjects2.length = 0;


return;

}

gdjs['JucaCode'] = gdjs.JucaCode;
