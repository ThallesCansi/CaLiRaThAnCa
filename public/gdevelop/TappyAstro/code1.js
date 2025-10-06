gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDTopPillarObjects1= [];
gdjs.GameCode.GDTopPillarObjects2= [];
gdjs.GameCode.GDTopPillarObjects3= [];
gdjs.GameCode.GDTopPillarObjects4= [];
gdjs.GameCode.GDTopPillarObjects5= [];
gdjs.GameCode.GDBottomPillarObjects1= [];
gdjs.GameCode.GDBottomPillarObjects2= [];
gdjs.GameCode.GDBottomPillarObjects3= [];
gdjs.GameCode.GDBottomPillarObjects4= [];
gdjs.GameCode.GDBottomPillarObjects5= [];
gdjs.GameCode.GDCurrentScoreObjects1= [];
gdjs.GameCode.GDCurrentScoreObjects2= [];
gdjs.GameCode.GDCurrentScoreObjects3= [];
gdjs.GameCode.GDCurrentScoreObjects4= [];
gdjs.GameCode.GDCurrentScoreObjects5= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDFlashObjects5= [];
gdjs.GameCode.GDInstructionsObjects1= [];
gdjs.GameCode.GDInstructionsObjects2= [];
gdjs.GameCode.GDInstructionsObjects3= [];
gdjs.GameCode.GDInstructionsObjects4= [];
gdjs.GameCode.GDInstructionsObjects5= [];
gdjs.GameCode.GDBackgroundObjects1= [];
gdjs.GameCode.GDBackgroundObjects2= [];
gdjs.GameCode.GDBackgroundObjects3= [];
gdjs.GameCode.GDBackgroundObjects4= [];
gdjs.GameCode.GDBackgroundObjects5= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDGroundObjects5= [];
gdjs.GameCode.GDCeilingObjects1= [];
gdjs.GameCode.GDCeilingObjects2= [];
gdjs.GameCode.GDCeilingObjects3= [];
gdjs.GameCode.GDCeilingObjects4= [];
gdjs.GameCode.GDCeilingObjects5= [];
gdjs.GameCode.GDBlackRectObjects1= [];
gdjs.GameCode.GDBlackRectObjects2= [];
gdjs.GameCode.GDBlackRectObjects3= [];
gdjs.GameCode.GDBlackRectObjects4= [];
gdjs.GameCode.GDBlackRectObjects5= [];
gdjs.GameCode.GDGameOverObjects1= [];
gdjs.GameCode.GDGameOverObjects2= [];
gdjs.GameCode.GDGameOverObjects3= [];
gdjs.GameCode.GDGameOverObjects4= [];
gdjs.GameCode.GDGameOverObjects5= [];
gdjs.GameCode.GDRocketObjects1= [];
gdjs.GameCode.GDRocketObjects2= [];
gdjs.GameCode.GDRocketObjects3= [];
gdjs.GameCode.GDRocketObjects4= [];
gdjs.GameCode.GDRocketObjects5= [];
gdjs.GameCode.GDBottomPillar2Objects1= [];
gdjs.GameCode.GDBottomPillar2Objects2= [];
gdjs.GameCode.GDBottomPillar2Objects3= [];
gdjs.GameCode.GDBottomPillar2Objects4= [];
gdjs.GameCode.GDBottomPillar2Objects5= [];
gdjs.GameCode.GDInfos_9595BottomObjects1= [];
gdjs.GameCode.GDInfos_9595BottomObjects2= [];
gdjs.GameCode.GDInfos_9595BottomObjects3= [];
gdjs.GameCode.GDInfos_9595BottomObjects4= [];
gdjs.GameCode.GDInfos_9595BottomObjects5= [];
gdjs.GameCode.GDRESTARObjects1= [];
gdjs.GameCode.GDRESTARObjects2= [];
gdjs.GameCode.GDRESTARObjects3= [];
gdjs.GameCode.GDRESTARObjects4= [];
gdjs.GameCode.GDRESTARObjects5= [];
gdjs.GameCode.GDMessageGoodObjects1= [];
gdjs.GameCode.GDMessageGoodObjects2= [];
gdjs.GameCode.GDMessageGoodObjects3= [];
gdjs.GameCode.GDMessageGoodObjects4= [];
gdjs.GameCode.GDMessageGoodObjects5= [];
gdjs.GameCode.GDMessageBadObjects1= [];
gdjs.GameCode.GDMessageBadObjects2= [];
gdjs.GameCode.GDMessageBadObjects3= [];
gdjs.GameCode.GDMessageBadObjects4= [];
gdjs.GameCode.GDMessageBadObjects5= [];
gdjs.GameCode.GDInfos_9595Bottom2Objects1= [];
gdjs.GameCode.GDInfos_9595Bottom2Objects2= [];
gdjs.GameCode.GDInfos_9595Bottom2Objects3= [];
gdjs.GameCode.GDInfos_9595Bottom2Objects4= [];
gdjs.GameCode.GDInfos_9595Bottom2Objects5= [];
gdjs.GameCode.GDredmarkObjects1= [];
gdjs.GameCode.GDredmarkObjects2= [];
gdjs.GameCode.GDredmarkObjects3= [];
gdjs.GameCode.GDredmarkObjects4= [];
gdjs.GameCode.GDredmarkObjects5= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("BlackRect"), gdjs.GameCode.GDBlackRectObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects1);
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects1[i].activateBehavior("PlatformerObject", false);
}
}
{gdjs.evtTools.camera.showLayer(runtimeScene, "Transition");
}
{for(var i = 0, len = gdjs.GameCode.GDBlackRectObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBlackRectObjects1[i].getBehavior("Tween").addObjectOpacityTween2("FadeIn", 0, "linear", 0.25, true);
}
}
}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11017692);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.GameCode.GDInstructionsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("GamePlaying");
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects1[i].activateBehavior("EllipseMovement", false);
}
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects1[i].activateBehavior("PlatformerObject", true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDInstructionsObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDInstructionsObjects1[i].hide();
}
}
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "NotStarted");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ceiling"), gdjs.GameCode.GDCeilingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setXOffset(gdjs.GameCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCeilingObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDCeilingObjects1[i].setXOffset(gdjs.GameCode.GDCeilingObjects1[i].getXOffset() - (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
}

}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


gdjs.GameCode.eventsList3(runtimeScene);
}


};gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "NotStarted");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{isConditionTrue_1 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "GamePlaying");
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects3);
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects3[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 50, runtimeScene);
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRocketObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDRocketObjects3[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRocketObjects3[k] = gdjs.GameCode.GDRocketObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDRocketObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRocketObjects3 */
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects3[i].rotateTowardAngle(90, 150, runtimeScene);
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_wing.wav", false, 70, gdjs.randomFloatInRange(1.1, 1.3));
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects2[i].setAngle(320);
}
}
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects3Objects = Hashtable.newFrom({"TopPillar": gdjs.GameCode.GDTopPillarObjects3});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillar2Objects3Objects = Hashtable.newFrom({"BottomPillar2": gdjs.GameCode.GDBottomPillar2Objects3});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "pipe_spawn") > 3.2;
if (isConditionTrue_0) {
gdjs.GameCode.GDBottomPillar2Objects3.length = 0;

gdjs.GameCode.GDTopPillarObjects3.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects3Objects, 421, gdjs.randomInRange(-(120), -(10)), "");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottomPillar2Objects3Objects, 421, (( gdjs.GameCode.GDTopPillarObjects3.length === 0 ) ? 0 :gdjs.GameCode.GDTopPillarObjects3[0].getPointY("")) + 411, "");
}
{for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects3[i].setZOrder(1);
}
for(var i = 0, len = gdjs.GameCode.GDBottomPillar2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillar2Objects3[i].setZOrder(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDBottomPillar2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillar2Objects3[i].getBehavior("Animation").setAnimationIndex(gdjs.random(1));
}
}
{for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects3[i].getBehavior("Animation").setAnimationIndex(gdjs.random(1));
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("BottomPillar2"), gdjs.GameCode.GDBottomPillar2Objects2);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects2);
{for(var i = 0, len = gdjs.GameCode.GDTopPillarObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTopPillarObjects2[i].addForce(-(100), 0, 0);
}
for(var i = 0, len = gdjs.GameCode.GDBottomPillar2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDBottomPillar2Objects2[i].addForce(-(100), 0, 0);
}
}
}

}


};gdjs.GameCode.asyncCallback11039156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects3);

{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].setOutlineThickness(gdjs.GameCode.GDCurrentScoreObjects3[i].getOutlineThickness() - (5));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].setY(gdjs.GameCode.GDCurrentScoreObjects3[i].getY() + (5));
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDCurrentScoreObjects2) asyncObjectsList.addObject("CurrentScore", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.GameCode.asyncCallback11039156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList9 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.GameCode.GDCurrentScoreObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].setOutlineThickness(gdjs.GameCode.GDCurrentScoreObjects2[i].getOutlineThickness() + (5));
}
}
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].setY(gdjs.GameCode.GDCurrentScoreObjects2[i].getY() - (5));
}
}

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomPillar2"), gdjs.GameCode.GDBottomPillar2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects2);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTopPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTopPillarObjects2[i].getX() < (( gdjs.GameCode.GDRocketObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects2[0].getPointX("Centre")) - 40 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTopPillarObjects2[k] = gdjs.GameCode.GDTopPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTopPillarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottomPillar2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottomPillar2Objects2[i].getX() < (( gdjs.GameCode.GDRocketObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects2[0].getPointX("Centre")) - 40 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottomPillar2Objects2[k] = gdjs.GameCode.GDBottomPillar2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottomPillar2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTopPillarObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTopPillarObjects2[i].getX() > (( gdjs.GameCode.GDRocketObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects2[0].getPointX("Centre")) - 80 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTopPillarObjects2[k] = gdjs.GameCode.GDTopPillarObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTopPillarObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottomPillar2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottomPillar2Objects2[i].getX() > (( gdjs.GameCode.GDRocketObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects2[0].getPointX("Centre")) - 80 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottomPillar2Objects2[k] = gdjs.GameCode.GDBottomPillar2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottomPillar2Objects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11035044);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDBottomPillar2Objects2 */
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Infos_Bottom"), gdjs.GameCode.GDInfos_9595BottomObjects2);
gdjs.copyArray(runtimeScene.getObjects("Infos_Bottom2"), gdjs.GameCode.GDInfos_9595Bottom2Objects2);
/* Reuse gdjs.GameCode.GDRocketObjects2 */
/* Reuse gdjs.GameCode.GDTopPillarObjects2 */
{runtimeScene.getScene().getVariables().getFromIndex(1).add(1);
}
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects2[i].getBehavior("Text").setText(runtimeScene.getScene().getVariables().getFromIndex(1).getAsString());
}
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_point.wav", false, 100, 1);
}
{for(var i = 0, len = gdjs.GameCode.GDInfos_9595BottomObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfos_9595BottomObjects2[i].getBehavior("Text").setText("Cnter" + gdjs.evtTools.common.toString((( gdjs.GameCode.GDBottomPillar2Objects2.length === 0 ) ? (( gdjs.GameCode.GDTopPillarObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDTopPillarObjects2[0].getPointX("")) :gdjs.GameCode.GDBottomPillar2Objects2[0].getPointX(""))));
}
}
{for(var i = 0, len = gdjs.GameCode.GDInfos_9595Bottom2Objects2.length ;i < len;++i) {
    gdjs.GameCode.GDInfos_9595Bottom2Objects2[i].getBehavior("Text").setText("Rockts" + gdjs.evtTools.common.toString((( gdjs.GameCode.GDRocketObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDRocketObjects2[0].getPointX("'Centre"))));
}
}

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRocketObjects1Objects = Hashtable.newFrom({"Rocket": gdjs.GameCode.GDRocketObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDCeilingObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillar2Objects1Objects = Hashtable.newFrom({"TopPillar": gdjs.GameCode.GDTopPillarObjects1, "BottomPillar": gdjs.GameCode.GDBottomPillarObjects1, "Ceiling": gdjs.GameCode.GDCeilingObjects1, "Ground": gdjs.GameCode.GDGroundObjects1, "BottomPillar2": gdjs.GameCode.GDBottomPillar2Objects1});
gdjs.GameCode.eventsList11 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("BottomPillar"), gdjs.GameCode.GDBottomPillarObjects1);
gdjs.copyArray(runtimeScene.getObjects("BottomPillar2"), gdjs.GameCode.GDBottomPillar2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Ceiling"), gdjs.GameCode.GDCeilingObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Rocket"), gdjs.GameCode.GDRocketObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopPillar"), gdjs.GameCode.GDTopPillarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRocketObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTopPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillarObjects1ObjectsGDgdjs_9546GameCode_9546GDCeilingObjects1ObjectsGDgdjs_9546GameCode_9546GDGroundObjects1ObjectsGDgdjs_9546GameCode_9546GDBottomPillar2Objects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDRocketObjects1 */
{runtimeScene.getScene().getVariables().getFromIndex(0).setString("Gameover");
}
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\sfx_hit.wav", false, 100, 0.8);
}
{for(var i = 0, len = gdjs.GameCode.GDRocketObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDRocketObjects1[i].activateBehavior("PlatformerObject", false);
}
}
}

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11023228);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}
}

}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList10(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "GamePlaying");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects = Hashtable.newFrom({"Flash": gdjs.GameCode.GDFlashObjects2});
gdjs.GameCode.eventsList14 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() > runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber());
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
{gdjs.evtTools.storage.writeNumberInJSONFile("save", "high_score", runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber());
}
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene, asyncObjectsList) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("save", "high_score");
if (isConditionTrue_0) {
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "high_score", runtimeScene, runtimeScene.getScene().getVariables().getFromIndex(2));
}
}

}


{


let isConditionTrue_0 = false;
{
{/* Unknown instruction - skipped. */}
{/* Unknown instruction - skipped. */}
{/* Unknown instruction - skipped. */}
{/* Unknown instruction - skipped. */}

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.GameCode.asyncCallback11043436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("CurrentScore"), gdjs.GameCode.GDCurrentScoreObjects3);
gdjs.copyArray(asyncObjectsList.getObjects("Flash"), gdjs.GameCode.GDFlashObjects3);

{for(var i = 0, len = gdjs.GameCode.GDFlashObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects3[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDCurrentScoreObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDCurrentScoreObjects3[i].hide();
}
}
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Gameover", 0, 0, 0);
}

{ //Subevents
gdjs.GameCode.eventsList15(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList16 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDFlashObjects2) asyncObjectsList.addObject("Flash", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.1), (runtimeScene) => (gdjs.GameCode.asyncCallback11043436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.userFunc0x8b9d00 = function GDJSInlineCode(runtimeScene) {
"use strict";
runtimeScene.setBackgroundColor(100,100,240);

window.parent.postMessage(
    {type: 'GDEVELOP_EVENT', action: 'COMPLETED', gameId: 'game-1'},
    '*'
);
};
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


gdjs.GameCode.userFunc0x8b9d00(runtimeScene);

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11053596);
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Ganhou");
}

{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11042860);
}
if (isConditionTrue_0) {
gdjs.GameCode.GDFlashObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects, 0, 0, "GUI");
}
{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").Flash(0.1, null);
}
}

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() >= 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageBad"), gdjs.GameCode.GDMessageBadObjects2);
gdjs.copyArray(runtimeScene.getObjects("MessageGood"), gdjs.GameCode.GDMessageGoodObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMessageGoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMessageGoodObjects2[i].getBehavior("Opacity").setOpacity(255);
}
}
{for(var i = 0, len = gdjs.GameCode.GDMessageBadObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMessageBadObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}

{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(1).getAsNumber() < 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("MessageGood"), gdjs.GameCode.GDMessageGoodObjects2);
{for(var i = 0, len = gdjs.GameCode.GDMessageGoodObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDMessageGoodObjects2[i].getBehavior("Opacity").setOpacity(0);
}
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString("Perdeu");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11055340);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.showLayer(runtimeScene, "Gameover");
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("RESTAR"), gdjs.GameCode.GDRESTARObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDRESTARObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDRESTARObjects1[i].IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDRESTARObjects1[k] = gdjs.GameCode.GDRESTARObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDRESTARObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Juca", false);
}
}

}


};gdjs.GameCode.eventsList20 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsString() == "Gameover");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList19(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList13(runtimeScene);
}


{


gdjs.GameCode.eventsList20(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDTopPillarObjects1.length = 0;
gdjs.GameCode.GDTopPillarObjects2.length = 0;
gdjs.GameCode.GDTopPillarObjects3.length = 0;
gdjs.GameCode.GDTopPillarObjects4.length = 0;
gdjs.GameCode.GDTopPillarObjects5.length = 0;
gdjs.GameCode.GDBottomPillarObjects1.length = 0;
gdjs.GameCode.GDBottomPillarObjects2.length = 0;
gdjs.GameCode.GDBottomPillarObjects3.length = 0;
gdjs.GameCode.GDBottomPillarObjects4.length = 0;
gdjs.GameCode.GDBottomPillarObjects5.length = 0;
gdjs.GameCode.GDCurrentScoreObjects1.length = 0;
gdjs.GameCode.GDCurrentScoreObjects2.length = 0;
gdjs.GameCode.GDCurrentScoreObjects3.length = 0;
gdjs.GameCode.GDCurrentScoreObjects4.length = 0;
gdjs.GameCode.GDCurrentScoreObjects5.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDFlashObjects5.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDCeilingObjects1.length = 0;
gdjs.GameCode.GDCeilingObjects2.length = 0;
gdjs.GameCode.GDCeilingObjects3.length = 0;
gdjs.GameCode.GDCeilingObjects4.length = 0;
gdjs.GameCode.GDCeilingObjects5.length = 0;
gdjs.GameCode.GDBlackRectObjects1.length = 0;
gdjs.GameCode.GDBlackRectObjects2.length = 0;
gdjs.GameCode.GDBlackRectObjects3.length = 0;
gdjs.GameCode.GDBlackRectObjects4.length = 0;
gdjs.GameCode.GDBlackRectObjects5.length = 0;
gdjs.GameCode.GDGameOverObjects1.length = 0;
gdjs.GameCode.GDGameOverObjects2.length = 0;
gdjs.GameCode.GDGameOverObjects3.length = 0;
gdjs.GameCode.GDGameOverObjects4.length = 0;
gdjs.GameCode.GDGameOverObjects5.length = 0;
gdjs.GameCode.GDRocketObjects1.length = 0;
gdjs.GameCode.GDRocketObjects2.length = 0;
gdjs.GameCode.GDRocketObjects3.length = 0;
gdjs.GameCode.GDRocketObjects4.length = 0;
gdjs.GameCode.GDRocketObjects5.length = 0;
gdjs.GameCode.GDBottomPillar2Objects1.length = 0;
gdjs.GameCode.GDBottomPillar2Objects2.length = 0;
gdjs.GameCode.GDBottomPillar2Objects3.length = 0;
gdjs.GameCode.GDBottomPillar2Objects4.length = 0;
gdjs.GameCode.GDBottomPillar2Objects5.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects1.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects2.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects3.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects4.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects5.length = 0;
gdjs.GameCode.GDRESTARObjects1.length = 0;
gdjs.GameCode.GDRESTARObjects2.length = 0;
gdjs.GameCode.GDRESTARObjects3.length = 0;
gdjs.GameCode.GDRESTARObjects4.length = 0;
gdjs.GameCode.GDRESTARObjects5.length = 0;
gdjs.GameCode.GDMessageGoodObjects1.length = 0;
gdjs.GameCode.GDMessageGoodObjects2.length = 0;
gdjs.GameCode.GDMessageGoodObjects3.length = 0;
gdjs.GameCode.GDMessageGoodObjects4.length = 0;
gdjs.GameCode.GDMessageGoodObjects5.length = 0;
gdjs.GameCode.GDMessageBadObjects1.length = 0;
gdjs.GameCode.GDMessageBadObjects2.length = 0;
gdjs.GameCode.GDMessageBadObjects3.length = 0;
gdjs.GameCode.GDMessageBadObjects4.length = 0;
gdjs.GameCode.GDMessageBadObjects5.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects1.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects2.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects3.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects4.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects5.length = 0;
gdjs.GameCode.GDredmarkObjects1.length = 0;
gdjs.GameCode.GDredmarkObjects2.length = 0;
gdjs.GameCode.GDredmarkObjects3.length = 0;
gdjs.GameCode.GDredmarkObjects4.length = 0;
gdjs.GameCode.GDredmarkObjects5.length = 0;

gdjs.GameCode.eventsList21(runtimeScene);
gdjs.GameCode.GDTopPillarObjects1.length = 0;
gdjs.GameCode.GDTopPillarObjects2.length = 0;
gdjs.GameCode.GDTopPillarObjects3.length = 0;
gdjs.GameCode.GDTopPillarObjects4.length = 0;
gdjs.GameCode.GDTopPillarObjects5.length = 0;
gdjs.GameCode.GDBottomPillarObjects1.length = 0;
gdjs.GameCode.GDBottomPillarObjects2.length = 0;
gdjs.GameCode.GDBottomPillarObjects3.length = 0;
gdjs.GameCode.GDBottomPillarObjects4.length = 0;
gdjs.GameCode.GDBottomPillarObjects5.length = 0;
gdjs.GameCode.GDCurrentScoreObjects1.length = 0;
gdjs.GameCode.GDCurrentScoreObjects2.length = 0;
gdjs.GameCode.GDCurrentScoreObjects3.length = 0;
gdjs.GameCode.GDCurrentScoreObjects4.length = 0;
gdjs.GameCode.GDCurrentScoreObjects5.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDFlashObjects5.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects5.length = 0;
gdjs.GameCode.GDBackgroundObjects1.length = 0;
gdjs.GameCode.GDBackgroundObjects2.length = 0;
gdjs.GameCode.GDBackgroundObjects3.length = 0;
gdjs.GameCode.GDBackgroundObjects4.length = 0;
gdjs.GameCode.GDBackgroundObjects5.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDGroundObjects5.length = 0;
gdjs.GameCode.GDCeilingObjects1.length = 0;
gdjs.GameCode.GDCeilingObjects2.length = 0;
gdjs.GameCode.GDCeilingObjects3.length = 0;
gdjs.GameCode.GDCeilingObjects4.length = 0;
gdjs.GameCode.GDCeilingObjects5.length = 0;
gdjs.GameCode.GDBlackRectObjects1.length = 0;
gdjs.GameCode.GDBlackRectObjects2.length = 0;
gdjs.GameCode.GDBlackRectObjects3.length = 0;
gdjs.GameCode.GDBlackRectObjects4.length = 0;
gdjs.GameCode.GDBlackRectObjects5.length = 0;
gdjs.GameCode.GDGameOverObjects1.length = 0;
gdjs.GameCode.GDGameOverObjects2.length = 0;
gdjs.GameCode.GDGameOverObjects3.length = 0;
gdjs.GameCode.GDGameOverObjects4.length = 0;
gdjs.GameCode.GDGameOverObjects5.length = 0;
gdjs.GameCode.GDRocketObjects1.length = 0;
gdjs.GameCode.GDRocketObjects2.length = 0;
gdjs.GameCode.GDRocketObjects3.length = 0;
gdjs.GameCode.GDRocketObjects4.length = 0;
gdjs.GameCode.GDRocketObjects5.length = 0;
gdjs.GameCode.GDBottomPillar2Objects1.length = 0;
gdjs.GameCode.GDBottomPillar2Objects2.length = 0;
gdjs.GameCode.GDBottomPillar2Objects3.length = 0;
gdjs.GameCode.GDBottomPillar2Objects4.length = 0;
gdjs.GameCode.GDBottomPillar2Objects5.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects1.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects2.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects3.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects4.length = 0;
gdjs.GameCode.GDInfos_9595BottomObjects5.length = 0;
gdjs.GameCode.GDRESTARObjects1.length = 0;
gdjs.GameCode.GDRESTARObjects2.length = 0;
gdjs.GameCode.GDRESTARObjects3.length = 0;
gdjs.GameCode.GDRESTARObjects4.length = 0;
gdjs.GameCode.GDRESTARObjects5.length = 0;
gdjs.GameCode.GDMessageGoodObjects1.length = 0;
gdjs.GameCode.GDMessageGoodObjects2.length = 0;
gdjs.GameCode.GDMessageGoodObjects3.length = 0;
gdjs.GameCode.GDMessageGoodObjects4.length = 0;
gdjs.GameCode.GDMessageGoodObjects5.length = 0;
gdjs.GameCode.GDMessageBadObjects1.length = 0;
gdjs.GameCode.GDMessageBadObjects2.length = 0;
gdjs.GameCode.GDMessageBadObjects3.length = 0;
gdjs.GameCode.GDMessageBadObjects4.length = 0;
gdjs.GameCode.GDMessageBadObjects5.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects1.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects2.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects3.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects4.length = 0;
gdjs.GameCode.GDInfos_9595Bottom2Objects5.length = 0;
gdjs.GameCode.GDredmarkObjects1.length = 0;
gdjs.GameCode.GDredmarkObjects2.length = 0;
gdjs.GameCode.GDredmarkObjects3.length = 0;
gdjs.GameCode.GDredmarkObjects4.length = 0;
gdjs.GameCode.GDredmarkObjects5.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
