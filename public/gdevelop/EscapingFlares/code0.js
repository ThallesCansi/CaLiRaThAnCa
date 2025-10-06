gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDTitleObjects1= [];
gdjs.MenuCode.GDTitleObjects2= [];
gdjs.MenuCode.GDTitleObjects3= [];
gdjs.MenuCode.GDStarsObjects1= [];
gdjs.MenuCode.GDStarsObjects2= [];
gdjs.MenuCode.GDStarsObjects3= [];
gdjs.MenuCode.GDSunObjects1= [];
gdjs.MenuCode.GDSunObjects2= [];
gdjs.MenuCode.GDSunObjects3= [];
gdjs.MenuCode.GDBalckBGObjects1= [];
gdjs.MenuCode.GDBalckBGObjects2= [];
gdjs.MenuCode.GDBalckBGObjects3= [];
gdjs.MenuCode.GDStartButtomObjects1= [];
gdjs.MenuCode.GDStartButtomObjects2= [];
gdjs.MenuCode.GDStartButtomObjects3= [];
gdjs.MenuCode.GDBlackTranObjects1= [];
gdjs.MenuCode.GDBlackTranObjects2= [];
gdjs.MenuCode.GDBlackTranObjects3= [];
gdjs.MenuCode.GDShotObjects1= [];
gdjs.MenuCode.GDShotObjects2= [];
gdjs.MenuCode.GDShotObjects3= [];
gdjs.MenuCode.GDEarthObjects1= [];
gdjs.MenuCode.GDEarthObjects2= [];
gdjs.MenuCode.GDEarthObjects3= [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewSpriteObjects3= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackTran"), gdjs.MenuCode.GDBlackTranObjects2);
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.MenuCode.GDTitleObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}
{for(var i = 0, len = gdjs.MenuCode.GDBlackTranObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackTranObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.MenuCode.GDTitleObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDTitleObjects2[i].getBehavior("ShakeObject_PositionAngleScale").ShakeObject_PositionAngleScale(0, 7, 7, 5, 5, 1.2, true, null);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartButtom"), gdjs.MenuCode.GDStartButtomObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDStartButtomObjects2.length;i<l;++i) {
    if ( gdjs.MenuCode.GDStartButtomObjects2[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDStartButtomObjects2[k] = gdjs.MenuCode.GDStartButtomObjects2[i];
        ++k;
    }
}
gdjs.MenuCode.GDStartButtomObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackTran"), gdjs.MenuCode.GDBlackTranObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDBlackTranObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDBlackTranObjects2[i].getBehavior("Tween").addObjectOpacityTween2("FadeOut", 255, "easeInQuad", 1, false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("BlackTran"), gdjs.MenuCode.GDBlackTranObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDBlackTranObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDBlackTranObjects1[i].getBehavior("Tween").hasFinished("FadeOut") ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDBlackTranObjects1[k] = gdjs.MenuCode.GDBlackTranObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDBlackTranObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Jogo", false);
}
}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDStarsObjects1.length = 0;
gdjs.MenuCode.GDStarsObjects2.length = 0;
gdjs.MenuCode.GDStarsObjects3.length = 0;
gdjs.MenuCode.GDSunObjects1.length = 0;
gdjs.MenuCode.GDSunObjects2.length = 0;
gdjs.MenuCode.GDSunObjects3.length = 0;
gdjs.MenuCode.GDBalckBGObjects1.length = 0;
gdjs.MenuCode.GDBalckBGObjects2.length = 0;
gdjs.MenuCode.GDBalckBGObjects3.length = 0;
gdjs.MenuCode.GDStartButtomObjects1.length = 0;
gdjs.MenuCode.GDStartButtomObjects2.length = 0;
gdjs.MenuCode.GDStartButtomObjects3.length = 0;
gdjs.MenuCode.GDBlackTranObjects1.length = 0;
gdjs.MenuCode.GDBlackTranObjects2.length = 0;
gdjs.MenuCode.GDBlackTranObjects3.length = 0;
gdjs.MenuCode.GDShotObjects1.length = 0;
gdjs.MenuCode.GDShotObjects2.length = 0;
gdjs.MenuCode.GDShotObjects3.length = 0;
gdjs.MenuCode.GDEarthObjects1.length = 0;
gdjs.MenuCode.GDEarthObjects2.length = 0;
gdjs.MenuCode.GDEarthObjects3.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);
gdjs.MenuCode.GDTitleObjects1.length = 0;
gdjs.MenuCode.GDTitleObjects2.length = 0;
gdjs.MenuCode.GDTitleObjects3.length = 0;
gdjs.MenuCode.GDStarsObjects1.length = 0;
gdjs.MenuCode.GDStarsObjects2.length = 0;
gdjs.MenuCode.GDStarsObjects3.length = 0;
gdjs.MenuCode.GDSunObjects1.length = 0;
gdjs.MenuCode.GDSunObjects2.length = 0;
gdjs.MenuCode.GDSunObjects3.length = 0;
gdjs.MenuCode.GDBalckBGObjects1.length = 0;
gdjs.MenuCode.GDBalckBGObjects2.length = 0;
gdjs.MenuCode.GDBalckBGObjects3.length = 0;
gdjs.MenuCode.GDStartButtomObjects1.length = 0;
gdjs.MenuCode.GDStartButtomObjects2.length = 0;
gdjs.MenuCode.GDStartButtomObjects3.length = 0;
gdjs.MenuCode.GDBlackTranObjects1.length = 0;
gdjs.MenuCode.GDBlackTranObjects2.length = 0;
gdjs.MenuCode.GDBlackTranObjects3.length = 0;
gdjs.MenuCode.GDShotObjects1.length = 0;
gdjs.MenuCode.GDShotObjects2.length = 0;
gdjs.MenuCode.GDShotObjects3.length = 0;
gdjs.MenuCode.GDEarthObjects1.length = 0;
gdjs.MenuCode.GDEarthObjects2.length = 0;
gdjs.MenuCode.GDEarthObjects3.length = 0;
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewSpriteObjects3.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
