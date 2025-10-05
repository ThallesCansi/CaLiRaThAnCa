gdjs.JogoCode = {};
gdjs.JogoCode.localVariables = [];
gdjs.JogoCode.GDShipObjects1_1final = [];

gdjs.JogoCode.GDShotObjects1_1final = [];

gdjs.JogoCode.GDSunRoundObjects1_1final = [];

gdjs.JogoCode.GDShipObjects1= [];
gdjs.JogoCode.GDShipObjects2= [];
gdjs.JogoCode.GDShipObjects3= [];
gdjs.JogoCode.GDShipObjects4= [];
gdjs.JogoCode.GDSunObjects1= [];
gdjs.JogoCode.GDSunObjects2= [];
gdjs.JogoCode.GDSunObjects3= [];
gdjs.JogoCode.GDSunObjects4= [];
gdjs.JogoCode.GDBalckBGObjects1= [];
gdjs.JogoCode.GDBalckBGObjects2= [];
gdjs.JogoCode.GDBalckBGObjects3= [];
gdjs.JogoCode.GDBalckBGObjects4= [];
gdjs.JogoCode.GDStarsObjects1= [];
gdjs.JogoCode.GDStarsObjects2= [];
gdjs.JogoCode.GDStarsObjects3= [];
gdjs.JogoCode.GDStarsObjects4= [];
gdjs.JogoCode.GDShotObjects1= [];
gdjs.JogoCode.GDShotObjects2= [];
gdjs.JogoCode.GDShotObjects3= [];
gdjs.JogoCode.GDShotObjects4= [];
gdjs.JogoCode.GDEarthObjects1= [];
gdjs.JogoCode.GDEarthObjects2= [];
gdjs.JogoCode.GDEarthObjects3= [];
gdjs.JogoCode.GDEarthObjects4= [];
gdjs.JogoCode.GDSunRoundObjects1= [];
gdjs.JogoCode.GDSunRoundObjects2= [];
gdjs.JogoCode.GDSunRoundObjects3= [];
gdjs.JogoCode.GDSunRoundObjects4= [];
gdjs.JogoCode.GDBlackTranObjects1= [];
gdjs.JogoCode.GDBlackTranObjects2= [];
gdjs.JogoCode.GDBlackTranObjects3= [];
gdjs.JogoCode.GDBlackTranObjects4= [];
gdjs.JogoCode.GDExplosionObjects1= [];
gdjs.JogoCode.GDExplosionObjects2= [];
gdjs.JogoCode.GDExplosionObjects3= [];
gdjs.JogoCode.GDExplosionObjects4= [];
gdjs.JogoCode.GDFlashObjects1= [];
gdjs.JogoCode.GDFlashObjects2= [];
gdjs.JogoCode.GDFlashObjects3= [];
gdjs.JogoCode.GDFlashObjects4= [];
gdjs.JogoCode.GDGameOverObjects1= [];
gdjs.JogoCode.GDGameOverObjects2= [];
gdjs.JogoCode.GDGameOverObjects3= [];
gdjs.JogoCode.GDGameOverObjects4= [];
gdjs.JogoCode.GDMessageGoodObjects1= [];
gdjs.JogoCode.GDMessageGoodObjects2= [];
gdjs.JogoCode.GDMessageGoodObjects3= [];
gdjs.JogoCode.GDMessageGoodObjects4= [];
gdjs.JogoCode.GDTryAgainObjects1= [];
gdjs.JogoCode.GDTryAgainObjects2= [];
gdjs.JogoCode.GDTryAgainObjects3= [];
gdjs.JogoCode.GDTryAgainObjects4= [];
gdjs.JogoCode.GDMessageBadObjects1= [];
gdjs.JogoCode.GDMessageBadObjects2= [];
gdjs.JogoCode.GDMessageBadObjects3= [];
gdjs.JogoCode.GDMessageBadObjects4= [];
gdjs.JogoCode.GDInstructionsObjects1= [];
gdjs.JogoCode.GDInstructionsObjects2= [];
gdjs.JogoCode.GDInstructionsObjects3= [];
gdjs.JogoCode.GDInstructionsObjects4= [];
gdjs.JogoCode.GDEarth_9595orbitObjects1= [];
gdjs.JogoCode.GDEarth_9595orbitObjects2= [];
gdjs.JogoCode.GDEarth_9595orbitObjects3= [];
gdjs.JogoCode.GDEarth_9595orbitObjects4= [];
gdjs.JogoCode.GDScoreObjects1= [];
gdjs.JogoCode.GDScoreObjects2= [];
gdjs.JogoCode.GDScoreObjects3= [];
gdjs.JogoCode.GDScoreObjects4= [];


gdjs.JogoCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("SunRound"), gdjs.JogoCode.GDSunRoundObjects1);
{for(var i = 0, len = gdjs.JogoCode.GDSunRoundObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDSunRoundObjects1[i].rotate(2.5, runtimeScene);
}
}
}

}


};gdjs.JogoCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackTran"), gdjs.JogoCode.GDBlackTranObjects2);
gdjs.copyArray(runtimeScene.getObjects("Earth_orbit"), gdjs.JogoCode.GDEarth_9595orbitObjects2);
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.JogoCode.GDInstructionsObjects2);
gdjs.copyArray(runtimeScene.getObjects("MessageGood"), gdjs.JogoCode.GDMessageGoodObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.JogoCode.GDShipObjects2);
{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}
{for(var i = 0, len = gdjs.JogoCode.GDBlackTranObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDBlackTranObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Fadein", 0, "linear", 0.25, true);
}
}
{for(var i = 0, len = gdjs.JogoCode.GDShipObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDShipObjects2[i].activateBehavior("TopDownMovement", false);
}
}
{gdjs.evtTools.camera.hideLayer(runtimeScene, "GameOver");
}
{for(var i = 0, len = gdjs.JogoCode.GDMessageGoodObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDMessageGoodObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{for(var i = 0, len = gdjs.JogoCode.GDInstructionsObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDInstructionsObjects2[i].getBehavior("Opacity").setOpacity(130);
}
}
{for(var i = 0, len = gdjs.JogoCode.GDEarth_9595orbitObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDEarth_9595orbitObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


gdjs.JogoCode.eventsList0(runtimeScene);
}


};gdjs.JogoCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12805628);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.JogoCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.JogoCode.GDShipObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Playing");
}
{for(var i = 0, len = gdjs.JogoCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDShipObjects1[i].activateBehavior("TopDownMovement", true);
}
}
{for(var i = 0, len = gdjs.JogoCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDShipObjects1[i].activateBehavior("EllipseMovement", false);
}
}
{for(var i = 0, len = gdjs.JogoCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDInstructionsObjects1[i].hide();
}
}
}

}


};gdjs.JogoCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "NotStarted");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JogoCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.JogoCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12807548);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "score_temp");
}
}

}


};gdjs.JogoCode.eventsList5 = function(runtimeScene) {

};gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShipObjects3Objects = Hashtable.newFrom({"Ship": gdjs.JogoCode.GDShipObjects3});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDEarth_95959595orbitObjects3Objects = Hashtable.newFrom({"Earth_orbit": gdjs.JogoCode.GDEarth_9595orbitObjects3});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDEarth_95959595orbitObjects3Objects = Hashtable.newFrom({"Earth_orbit": gdjs.JogoCode.GDEarth_9595orbitObjects3});
gdjs.JogoCode.userFunc0x9b36c0 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

};
gdjs.JogoCode.eventsList6 = function(runtimeScene) {

{


gdjs.JogoCode.eventsList5(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Earth_orbit"), gdjs.JogoCode.GDEarth_9595orbitObjects3);
gdjs.copyArray(gdjs.JogoCode.GDShipObjects2, gdjs.JogoCode.GDShipObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShipObjects3Objects, gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDEarth_95959595orbitObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.JogoCode.GDEarth_9595orbitObjects3 */
/* Reuse gdjs.JogoCode.GDShipObjects3 */
{for(var i = 0, len = gdjs.JogoCode.GDShipObjects3.length ;i < len;++i) {
    gdjs.JogoCode.GDShipObjects3[i].separateFromObjectsList(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDEarth_95959595orbitObjects3Objects, false);
}
}
}

}


{


gdjs.JogoCode.userFunc0x9b36c0(runtimeScene);

}


};gdjs.JogoCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Playing");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.JogoCode.GDShipObjects2);
{for(var i = 0, len = gdjs.JogoCode.GDShipObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDShipObjects2[i].activateBehavior("TopDownMovement", true);
}
}

{ //Subevents
gdjs.JogoCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShotObjects3Objects = Hashtable.newFrom({"Shot": gdjs.JogoCode.GDShotObjects3});
gdjs.JogoCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12811996);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flare_spawn_temp");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "flare_spawn_temp") >= runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber();
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.JogoCode.GDShotObjects2, gdjs.JogoCode.GDShotObjects3);

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShotObjects3Objects, -(392), gdjs.randomFloatInRange(0, 896), "");
}
{for(var i = 0, len = gdjs.JogoCode.GDShotObjects3.length ;i < len;++i) {
    gdjs.JogoCode.GDShotObjects3[i].setZOrder(6);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getScene().getVariables().getFromIndex(5).getAsNumber() * gdjs.randomFloatInRange(0.3, 1));
}
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "flare_spawn_temp");
}
}

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.JogoCode.GDShotObjects2 */
{for(var i = 0, len = gdjs.JogoCode.GDShotObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDShotObjects2[i].addForce(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() * gdjs.randomFloatInRange(1, 10), 0, 0);
}
}
}

}


};gdjs.JogoCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Shot"), gdjs.JogoCode.GDShotObjects3);
{for(var i = 0, len = gdjs.JogoCode.GDShotObjects3.length ;i < len;++i) {
    gdjs.JogoCode.GDShotObjects3[i].activateBehavior("LinearMovement", false);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Playing");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Shot"), gdjs.JogoCode.GDShotObjects2);
{for(var i = 0, len = gdjs.JogoCode.GDShotObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDShotObjects2[i].activateBehavior("LinearMovement", true);
}
}

{ //Subevents
gdjs.JogoCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.JogoCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "score_temp") >= 10;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(0.8);
}
}

}


};gdjs.JogoCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "score_temp") >= 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageBad"), gdjs.JogoCode.GDMessageBadObjects3);
gdjs.copyArray(runtimeScene.getObjects("MessageGood"), gdjs.JogoCode.GDMessageGoodObjects3);
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("Sim");
}
{for(var i = 0, len = gdjs.JogoCode.GDMessageGoodObjects3.length ;i < len;++i) {
    gdjs.JogoCode.GDMessageGoodObjects3[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.JogoCode.GDMessageBadObjects3.length ;i < len;++i) {
    gdjs.JogoCode.GDMessageBadObjects3[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.JogoCode.GDScoreObjects2);
{for(var i = 0, len = gdjs.JogoCode.GDScoreObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDScoreObjects2[i].getBehavior("Text").setText("Years:" + gdjs.evtTools.common.toString(Math.floor(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "score_temp"))));
}
}
}

}


};gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShipObjects2Objects = Hashtable.newFrom({"Ship": gdjs.JogoCode.GDShipObjects2});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShotObjects2Objects = Hashtable.newFrom({"Shot": gdjs.JogoCode.GDShotObjects2});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShipObjects2Objects = Hashtable.newFrom({"Ship": gdjs.JogoCode.GDShipObjects2});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDSunRoundObjects2Objects = Hashtable.newFrom({"SunRound": gdjs.JogoCode.GDSunRoundObjects2});
gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.JogoCode.GDExplosionObjects1});
gdjs.JogoCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Playing");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.JogoCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


gdjs.JogoCode.eventsList7(runtimeScene);
}


{


gdjs.JogoCode.eventsList9(runtimeScene);
}


{


gdjs.JogoCode.eventsList10(runtimeScene);
}


{


gdjs.JogoCode.eventsList11(runtimeScene);
}


{

gdjs.JogoCode.GDShipObjects1.length = 0;

gdjs.JogoCode.GDShotObjects1.length = 0;

gdjs.JogoCode.GDSunRoundObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.JogoCode.GDShipObjects1_1final.length = 0;
gdjs.JogoCode.GDShotObjects1_1final.length = 0;
gdjs.JogoCode.GDSunRoundObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.JogoCode.GDShipObjects2);
gdjs.copyArray(runtimeScene.getObjects("Shot"), gdjs.JogoCode.GDShotObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShipObjects2Objects, gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShotObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JogoCode.GDShipObjects2.length; j < jLen ; ++j) {
        if ( gdjs.JogoCode.GDShipObjects1_1final.indexOf(gdjs.JogoCode.GDShipObjects2[j]) === -1 )
            gdjs.JogoCode.GDShipObjects1_1final.push(gdjs.JogoCode.GDShipObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.JogoCode.GDShotObjects2.length; j < jLen ; ++j) {
        if ( gdjs.JogoCode.GDShotObjects1_1final.indexOf(gdjs.JogoCode.GDShotObjects2[j]) === -1 )
            gdjs.JogoCode.GDShotObjects1_1final.push(gdjs.JogoCode.GDShotObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Ship"), gdjs.JogoCode.GDShipObjects2);
gdjs.copyArray(runtimeScene.getObjects("SunRound"), gdjs.JogoCode.GDSunRoundObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDShipObjects2Objects, gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDSunRoundObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.JogoCode.GDShipObjects2.length; j < jLen ; ++j) {
        if ( gdjs.JogoCode.GDShipObjects1_1final.indexOf(gdjs.JogoCode.GDShipObjects2[j]) === -1 )
            gdjs.JogoCode.GDShipObjects1_1final.push(gdjs.JogoCode.GDShipObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.JogoCode.GDSunRoundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.JogoCode.GDSunRoundObjects1_1final.indexOf(gdjs.JogoCode.GDSunRoundObjects2[j]) === -1 )
            gdjs.JogoCode.GDSunRoundObjects1_1final.push(gdjs.JogoCode.GDSunRoundObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.JogoCode.GDShipObjects1_1final, gdjs.JogoCode.GDShipObjects1);
gdjs.copyArray(gdjs.JogoCode.GDShotObjects1_1final, gdjs.JogoCode.GDShotObjects1);
gdjs.copyArray(gdjs.JogoCode.GDSunRoundObjects1_1final, gdjs.JogoCode.GDSunRoundObjects1);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.JogoCode.GDShipObjects1 */
gdjs.JogoCode.GDExplosionObjects1.length = 0;

{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GameOver");
}
{for(var i = 0, len = gdjs.JogoCode.GDShipObjects1.length ;i < len;++i) {
    gdjs.JogoCode.GDShipObjects1[i].activateBehavior("TopDownMovement", false);
}
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDExplosionObjects1Objects, (( gdjs.JogoCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.JogoCode.GDShipObjects1[0].getPointX("")), (( gdjs.JogoCode.GDShipObjects1.length === 0 ) ? 0 :gdjs.JogoCode.GDShipObjects1[0].getPointY("")), "");
}
}

}


};gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDFlashObjects2Objects = Hashtable.newFrom({"Flash": gdjs.JogoCode.GDFlashObjects2});
gdjs.JogoCode.asyncCallback12820588 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.JogoCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Flash"), gdjs.JogoCode.GDFlashObjects3);

{for(var i = 0, len = gdjs.JogoCode.GDFlashObjects3.length ;i < len;++i) {
    gdjs.JogoCode.GDFlashObjects3[i].deleteFromScene(runtimeScene);
}
}
gdjs.JogoCode.localVariables.length = 0;
}
gdjs.JogoCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.JogoCode.localVariables);
for (const obj of gdjs.JogoCode.GDFlashObjects2) asyncObjectsList.addObject("Flash", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.JogoCode.asyncCallback12820588(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.JogoCode.userFunc0x9ab1c8 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

window.parent.postMessage(

{type: 'GDEVELOP_EVENT', action: 'COMPLETED', gameId: 'game-1'},

'*'

);
};
gdjs.JogoCode.eventsList14 = function(runtimeScene) {

{


gdjs.JogoCode.userFunc0x9ab1c8(runtimeScene);

}


};gdjs.JogoCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12820156);
}
if (isConditionTrue_0) {
gdjs.JogoCode.GDFlashObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.JogoCode.mapOfGDgdjs_9546JogoCode_9546GDFlashObjects2Objects, 0, 0, "GUI");
}
{for(var i = 0, len = gdjs.JogoCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDFlashObjects2[i].getBehavior("Flash").Flash(0.5, null);
}
}

{ //Subevents
gdjs.JogoCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "Sim");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12436900);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.JogoCode.GDTryAgainObjects2);
{for(var i = 0, len = gdjs.JogoCode.GDTryAgainObjects2.length ;i < len;++i) {
    gdjs.JogoCode.GDTryAgainObjects2[i].SetLabelTextOp("Continue", null);
}
}

{ //Subevents
gdjs.JogoCode.eventsList14(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12821540);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "GameOver");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.JogoCode.GDTryAgainObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "Sim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDTryAgainObjects2.length;i<l;++i) {
    if ( gdjs.JogoCode.GDTryAgainObjects2[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.JogoCode.GDTryAgainObjects2[k] = gdjs.JogoCode.GDTryAgainObjects2[i];
        ++k;
    }
}
gdjs.JogoCode.GDTryAgainObjects2.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TryAgain"), gdjs.JogoCode.GDTryAgainObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "Sim");
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.JogoCode.GDTryAgainObjects1.length;i<l;++i) {
    if ( gdjs.JogoCode.GDTryAgainObjects1[i].IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.JogoCode.GDTryAgainObjects1[k] = gdjs.JogoCode.GDTryAgainObjects1[i];
        ++k;
    }
}
gdjs.JogoCode.GDTryAgainObjects1.length = k;
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "FalaJuca", false);
}
}

}


};gdjs.JogoCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "GameOver");
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "score_temp");
}

{ //Subevents
gdjs.JogoCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.JogoCode.eventsList17 = function(runtimeScene) {

{


gdjs.JogoCode.eventsList1(runtimeScene);
}


{


gdjs.JogoCode.eventsList3(runtimeScene);
}


{


gdjs.JogoCode.eventsList12(runtimeScene);
}


{


gdjs.JogoCode.eventsList16(runtimeScene);
}


};

gdjs.JogoCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.JogoCode.GDShipObjects1.length = 0;
gdjs.JogoCode.GDShipObjects2.length = 0;
gdjs.JogoCode.GDShipObjects3.length = 0;
gdjs.JogoCode.GDShipObjects4.length = 0;
gdjs.JogoCode.GDSunObjects1.length = 0;
gdjs.JogoCode.GDSunObjects2.length = 0;
gdjs.JogoCode.GDSunObjects3.length = 0;
gdjs.JogoCode.GDSunObjects4.length = 0;
gdjs.JogoCode.GDBalckBGObjects1.length = 0;
gdjs.JogoCode.GDBalckBGObjects2.length = 0;
gdjs.JogoCode.GDBalckBGObjects3.length = 0;
gdjs.JogoCode.GDBalckBGObjects4.length = 0;
gdjs.JogoCode.GDStarsObjects1.length = 0;
gdjs.JogoCode.GDStarsObjects2.length = 0;
gdjs.JogoCode.GDStarsObjects3.length = 0;
gdjs.JogoCode.GDStarsObjects4.length = 0;
gdjs.JogoCode.GDShotObjects1.length = 0;
gdjs.JogoCode.GDShotObjects2.length = 0;
gdjs.JogoCode.GDShotObjects3.length = 0;
gdjs.JogoCode.GDShotObjects4.length = 0;
gdjs.JogoCode.GDEarthObjects1.length = 0;
gdjs.JogoCode.GDEarthObjects2.length = 0;
gdjs.JogoCode.GDEarthObjects3.length = 0;
gdjs.JogoCode.GDEarthObjects4.length = 0;
gdjs.JogoCode.GDSunRoundObjects1.length = 0;
gdjs.JogoCode.GDSunRoundObjects2.length = 0;
gdjs.JogoCode.GDSunRoundObjects3.length = 0;
gdjs.JogoCode.GDSunRoundObjects4.length = 0;
gdjs.JogoCode.GDBlackTranObjects1.length = 0;
gdjs.JogoCode.GDBlackTranObjects2.length = 0;
gdjs.JogoCode.GDBlackTranObjects3.length = 0;
gdjs.JogoCode.GDBlackTranObjects4.length = 0;
gdjs.JogoCode.GDExplosionObjects1.length = 0;
gdjs.JogoCode.GDExplosionObjects2.length = 0;
gdjs.JogoCode.GDExplosionObjects3.length = 0;
gdjs.JogoCode.GDExplosionObjects4.length = 0;
gdjs.JogoCode.GDFlashObjects1.length = 0;
gdjs.JogoCode.GDFlashObjects2.length = 0;
gdjs.JogoCode.GDFlashObjects3.length = 0;
gdjs.JogoCode.GDFlashObjects4.length = 0;
gdjs.JogoCode.GDGameOverObjects1.length = 0;
gdjs.JogoCode.GDGameOverObjects2.length = 0;
gdjs.JogoCode.GDGameOverObjects3.length = 0;
gdjs.JogoCode.GDGameOverObjects4.length = 0;
gdjs.JogoCode.GDMessageGoodObjects1.length = 0;
gdjs.JogoCode.GDMessageGoodObjects2.length = 0;
gdjs.JogoCode.GDMessageGoodObjects3.length = 0;
gdjs.JogoCode.GDMessageGoodObjects4.length = 0;
gdjs.JogoCode.GDTryAgainObjects1.length = 0;
gdjs.JogoCode.GDTryAgainObjects2.length = 0;
gdjs.JogoCode.GDTryAgainObjects3.length = 0;
gdjs.JogoCode.GDTryAgainObjects4.length = 0;
gdjs.JogoCode.GDMessageBadObjects1.length = 0;
gdjs.JogoCode.GDMessageBadObjects2.length = 0;
gdjs.JogoCode.GDMessageBadObjects3.length = 0;
gdjs.JogoCode.GDMessageBadObjects4.length = 0;
gdjs.JogoCode.GDInstructionsObjects1.length = 0;
gdjs.JogoCode.GDInstructionsObjects2.length = 0;
gdjs.JogoCode.GDInstructionsObjects3.length = 0;
gdjs.JogoCode.GDInstructionsObjects4.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects1.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects2.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects3.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects4.length = 0;
gdjs.JogoCode.GDScoreObjects1.length = 0;
gdjs.JogoCode.GDScoreObjects2.length = 0;
gdjs.JogoCode.GDScoreObjects3.length = 0;
gdjs.JogoCode.GDScoreObjects4.length = 0;

gdjs.JogoCode.eventsList17(runtimeScene);
gdjs.JogoCode.GDShipObjects1.length = 0;
gdjs.JogoCode.GDShipObjects2.length = 0;
gdjs.JogoCode.GDShipObjects3.length = 0;
gdjs.JogoCode.GDShipObjects4.length = 0;
gdjs.JogoCode.GDSunObjects1.length = 0;
gdjs.JogoCode.GDSunObjects2.length = 0;
gdjs.JogoCode.GDSunObjects3.length = 0;
gdjs.JogoCode.GDSunObjects4.length = 0;
gdjs.JogoCode.GDBalckBGObjects1.length = 0;
gdjs.JogoCode.GDBalckBGObjects2.length = 0;
gdjs.JogoCode.GDBalckBGObjects3.length = 0;
gdjs.JogoCode.GDBalckBGObjects4.length = 0;
gdjs.JogoCode.GDStarsObjects1.length = 0;
gdjs.JogoCode.GDStarsObjects2.length = 0;
gdjs.JogoCode.GDStarsObjects3.length = 0;
gdjs.JogoCode.GDStarsObjects4.length = 0;
gdjs.JogoCode.GDShotObjects1.length = 0;
gdjs.JogoCode.GDShotObjects2.length = 0;
gdjs.JogoCode.GDShotObjects3.length = 0;
gdjs.JogoCode.GDShotObjects4.length = 0;
gdjs.JogoCode.GDEarthObjects1.length = 0;
gdjs.JogoCode.GDEarthObjects2.length = 0;
gdjs.JogoCode.GDEarthObjects3.length = 0;
gdjs.JogoCode.GDEarthObjects4.length = 0;
gdjs.JogoCode.GDSunRoundObjects1.length = 0;
gdjs.JogoCode.GDSunRoundObjects2.length = 0;
gdjs.JogoCode.GDSunRoundObjects3.length = 0;
gdjs.JogoCode.GDSunRoundObjects4.length = 0;
gdjs.JogoCode.GDBlackTranObjects1.length = 0;
gdjs.JogoCode.GDBlackTranObjects2.length = 0;
gdjs.JogoCode.GDBlackTranObjects3.length = 0;
gdjs.JogoCode.GDBlackTranObjects4.length = 0;
gdjs.JogoCode.GDExplosionObjects1.length = 0;
gdjs.JogoCode.GDExplosionObjects2.length = 0;
gdjs.JogoCode.GDExplosionObjects3.length = 0;
gdjs.JogoCode.GDExplosionObjects4.length = 0;
gdjs.JogoCode.GDFlashObjects1.length = 0;
gdjs.JogoCode.GDFlashObjects2.length = 0;
gdjs.JogoCode.GDFlashObjects3.length = 0;
gdjs.JogoCode.GDFlashObjects4.length = 0;
gdjs.JogoCode.GDGameOverObjects1.length = 0;
gdjs.JogoCode.GDGameOverObjects2.length = 0;
gdjs.JogoCode.GDGameOverObjects3.length = 0;
gdjs.JogoCode.GDGameOverObjects4.length = 0;
gdjs.JogoCode.GDMessageGoodObjects1.length = 0;
gdjs.JogoCode.GDMessageGoodObjects2.length = 0;
gdjs.JogoCode.GDMessageGoodObjects3.length = 0;
gdjs.JogoCode.GDMessageGoodObjects4.length = 0;
gdjs.JogoCode.GDTryAgainObjects1.length = 0;
gdjs.JogoCode.GDTryAgainObjects2.length = 0;
gdjs.JogoCode.GDTryAgainObjects3.length = 0;
gdjs.JogoCode.GDTryAgainObjects4.length = 0;
gdjs.JogoCode.GDMessageBadObjects1.length = 0;
gdjs.JogoCode.GDMessageBadObjects2.length = 0;
gdjs.JogoCode.GDMessageBadObjects3.length = 0;
gdjs.JogoCode.GDMessageBadObjects4.length = 0;
gdjs.JogoCode.GDInstructionsObjects1.length = 0;
gdjs.JogoCode.GDInstructionsObjects2.length = 0;
gdjs.JogoCode.GDInstructionsObjects3.length = 0;
gdjs.JogoCode.GDInstructionsObjects4.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects1.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects2.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects3.length = 0;
gdjs.JogoCode.GDEarth_9595orbitObjects4.length = 0;
gdjs.JogoCode.GDScoreObjects1.length = 0;
gdjs.JogoCode.GDScoreObjects2.length = 0;
gdjs.JogoCode.GDScoreObjects3.length = 0;
gdjs.JogoCode.GDScoreObjects4.length = 0;


return;

}

gdjs['JogoCode'] = gdjs.JogoCode;
