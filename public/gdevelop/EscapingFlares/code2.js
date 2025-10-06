gdjs.FalaJucaCode = {};
gdjs.FalaJucaCode.localVariables = [];
gdjs.FalaJucaCode.GDNewSpriteObjects1= [];
gdjs.FalaJucaCode.GDNewSpriteObjects2= [];
gdjs.FalaJucaCode.GDStarsObjects1= [];
gdjs.FalaJucaCode.GDStarsObjects2= [];
gdjs.FalaJucaCode.GDEarthObjects1= [];
gdjs.FalaJucaCode.GDEarthObjects2= [];
gdjs.FalaJucaCode.GDShipObjects1= [];
gdjs.FalaJucaCode.GDShipObjects2= [];
gdjs.FalaJucaCode.GDMessageGoodObjects1= [];
gdjs.FalaJucaCode.GDMessageGoodObjects2= [];
gdjs.FalaJucaCode.GDSquareObjects1= [];
gdjs.FalaJucaCode.GDSquareObjects2= [];
gdjs.FalaJucaCode.GDSquareTiledObjects1= [];
gdjs.FalaJucaCode.GDSquareTiledObjects2= [];
gdjs.FalaJucaCode.GDTryAgainObjects1= [];
gdjs.FalaJucaCode.GDTryAgainObjects2= [];
gdjs.FalaJucaCode.GDHomeObjects1= [];
gdjs.FalaJucaCode.GDHomeObjects2= [];
gdjs.FalaJucaCode.GDMessageBadObjects1= [];
gdjs.FalaJucaCode.GDMessageBadObjects2= [];
gdjs.FalaJucaCode.GDShip2Objects1= [];
gdjs.FalaJucaCode.GDShip2Objects2= [];
gdjs.FalaJucaCode.GDExplosionObjects1= [];
gdjs.FalaJucaCode.GDExplosionObjects2= [];


gdjs.FalaJucaCode.userFunc0xd59bb0 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

window.parent.postMessage(

{type: 'GDEVELOP_EVENT', action: 'ALBUM', gameId: 'game-1'},

'*'

);
};
gdjs.FalaJucaCode.eventsList0 = function(runtimeScene) {

{


gdjs.FalaJucaCode.userFunc0xd59bb0(runtimeScene);

}


};gdjs.FalaJucaCode.eventsList1 = function(runtimeScene) {

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

gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.FalaJucaCode.GDTryAgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FalaJucaCode.GDTryAgainObjects1.length;i<l;++i) {
    if ( gdjs.FalaJucaCode.GDTryAgainObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.FalaJucaCode.GDTryAgainObjects1[k] = gdjs.FalaJucaCode.GDTryAgainObjects1[i];
        ++k;
    }
}
gdjs.FalaJucaCode.GDTryAgainObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Home"), gdjs.FalaJucaCode.GDHomeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.FalaJucaCode.GDHomeObjects1.length;i<l;++i) {
    if ( gdjs.FalaJucaCode.GDHomeObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.FalaJucaCode.GDHomeObjects1[k] = gdjs.FalaJucaCode.GDHomeObjects1[i];
        ++k;
    }
}
gdjs.FalaJucaCode.GDHomeObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.FalaJucaCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.FalaJucaCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.FalaJucaCode.GDNewSpriteObjects1.length = 0;
gdjs.FalaJucaCode.GDNewSpriteObjects2.length = 0;
gdjs.FalaJucaCode.GDStarsObjects1.length = 0;
gdjs.FalaJucaCode.GDStarsObjects2.length = 0;
gdjs.FalaJucaCode.GDEarthObjects1.length = 0;
gdjs.FalaJucaCode.GDEarthObjects2.length = 0;
gdjs.FalaJucaCode.GDShipObjects1.length = 0;
gdjs.FalaJucaCode.GDShipObjects2.length = 0;
gdjs.FalaJucaCode.GDMessageGoodObjects1.length = 0;
gdjs.FalaJucaCode.GDMessageGoodObjects2.length = 0;
gdjs.FalaJucaCode.GDSquareObjects1.length = 0;
gdjs.FalaJucaCode.GDSquareObjects2.length = 0;
gdjs.FalaJucaCode.GDSquareTiledObjects1.length = 0;
gdjs.FalaJucaCode.GDSquareTiledObjects2.length = 0;
gdjs.FalaJucaCode.GDTryAgainObjects1.length = 0;
gdjs.FalaJucaCode.GDTryAgainObjects2.length = 0;
gdjs.FalaJucaCode.GDHomeObjects1.length = 0;
gdjs.FalaJucaCode.GDHomeObjects2.length = 0;
gdjs.FalaJucaCode.GDMessageBadObjects1.length = 0;
gdjs.FalaJucaCode.GDMessageBadObjects2.length = 0;
gdjs.FalaJucaCode.GDShip2Objects1.length = 0;
gdjs.FalaJucaCode.GDShip2Objects2.length = 0;
gdjs.FalaJucaCode.GDExplosionObjects1.length = 0;
gdjs.FalaJucaCode.GDExplosionObjects2.length = 0;

gdjs.FalaJucaCode.eventsList1(runtimeScene);
gdjs.FalaJucaCode.GDNewSpriteObjects1.length = 0;
gdjs.FalaJucaCode.GDNewSpriteObjects2.length = 0;
gdjs.FalaJucaCode.GDStarsObjects1.length = 0;
gdjs.FalaJucaCode.GDStarsObjects2.length = 0;
gdjs.FalaJucaCode.GDEarthObjects1.length = 0;
gdjs.FalaJucaCode.GDEarthObjects2.length = 0;
gdjs.FalaJucaCode.GDShipObjects1.length = 0;
gdjs.FalaJucaCode.GDShipObjects2.length = 0;
gdjs.FalaJucaCode.GDMessageGoodObjects1.length = 0;
gdjs.FalaJucaCode.GDMessageGoodObjects2.length = 0;
gdjs.FalaJucaCode.GDSquareObjects1.length = 0;
gdjs.FalaJucaCode.GDSquareObjects2.length = 0;
gdjs.FalaJucaCode.GDSquareTiledObjects1.length = 0;
gdjs.FalaJucaCode.GDSquareTiledObjects2.length = 0;
gdjs.FalaJucaCode.GDTryAgainObjects1.length = 0;
gdjs.FalaJucaCode.GDTryAgainObjects2.length = 0;
gdjs.FalaJucaCode.GDHomeObjects1.length = 0;
gdjs.FalaJucaCode.GDHomeObjects2.length = 0;
gdjs.FalaJucaCode.GDMessageBadObjects1.length = 0;
gdjs.FalaJucaCode.GDMessageBadObjects2.length = 0;
gdjs.FalaJucaCode.GDShip2Objects1.length = 0;
gdjs.FalaJucaCode.GDShip2Objects2.length = 0;
gdjs.FalaJucaCode.GDExplosionObjects1.length = 0;
gdjs.FalaJucaCode.GDExplosionObjects2.length = 0;


return;

}

gdjs['FalaJucaCode'] = gdjs.FalaJucaCode;
