gdjs.GameCode = {};
gdjs.GameCode.localVariables = [];
gdjs.GameCode.GDNext2Objects1_2final = [];

gdjs.GameCode.GDNextObjects1_2final = [];

gdjs.GameCode.GDanswerrightObjects2_1final = [];

gdjs.GameCode.GDanswerwrong2Objects2_1final = [];

gdjs.GameCode.GDanswerwrong3Objects2_1final = [];

gdjs.GameCode.GDanswerwrongObjects2_1final = [];

gdjs.GameCode.GDReadyObjects1= [];
gdjs.GameCode.GDReadyObjects2= [];
gdjs.GameCode.GDReadyObjects3= [];
gdjs.GameCode.GDReadyObjects4= [];
gdjs.GameCode.GDQ1Objects1= [];
gdjs.GameCode.GDQ1Objects2= [];
gdjs.GameCode.GDQ1Objects3= [];
gdjs.GameCode.GDQ1Objects4= [];
gdjs.GameCode.GDanswerrightObjects1= [];
gdjs.GameCode.GDanswerrightObjects2= [];
gdjs.GameCode.GDanswerrightObjects3= [];
gdjs.GameCode.GDanswerrightObjects4= [];
gdjs.GameCode.GDanswerwrongObjects1= [];
gdjs.GameCode.GDanswerwrongObjects2= [];
gdjs.GameCode.GDanswerwrongObjects3= [];
gdjs.GameCode.GDanswerwrongObjects4= [];
gdjs.GameCode.GDmouseObjects1= [];
gdjs.GameCode.GDmouseObjects2= [];
gdjs.GameCode.GDmouseObjects3= [];
gdjs.GameCode.GDmouseObjects4= [];
gdjs.GameCode.GDanswerwrong2Objects1= [];
gdjs.GameCode.GDanswerwrong2Objects2= [];
gdjs.GameCode.GDanswerwrong2Objects3= [];
gdjs.GameCode.GDanswerwrong2Objects4= [];
gdjs.GameCode.GDanswerwrong3Objects1= [];
gdjs.GameCode.GDanswerwrong3Objects2= [];
gdjs.GameCode.GDanswerwrong3Objects3= [];
gdjs.GameCode.GDanswerwrong3Objects4= [];
gdjs.GameCode.GDScore2Objects1= [];
gdjs.GameCode.GDScore2Objects2= [];
gdjs.GameCode.GDScore2Objects3= [];
gdjs.GameCode.GDScore2Objects4= [];
gdjs.GameCode.GDNextObjects1= [];
gdjs.GameCode.GDNextObjects2= [];
gdjs.GameCode.GDNextObjects3= [];
gdjs.GameCode.GDNextObjects4= [];
gdjs.GameCode.GDQ2Objects1= [];
gdjs.GameCode.GDQ2Objects2= [];
gdjs.GameCode.GDQ2Objects3= [];
gdjs.GameCode.GDQ2Objects4= [];
gdjs.GameCode.GDNext2Objects1= [];
gdjs.GameCode.GDNext2Objects2= [];
gdjs.GameCode.GDNext2Objects3= [];
gdjs.GameCode.GDNext2Objects4= [];
gdjs.GameCode.GDQuestion2Objects1= [];
gdjs.GameCode.GDQuestion2Objects2= [];
gdjs.GameCode.GDQuestion2Objects3= [];
gdjs.GameCode.GDQuestion2Objects4= [];
gdjs.GameCode.GDQ3Objects1= [];
gdjs.GameCode.GDQ3Objects2= [];
gdjs.GameCode.GDQ3Objects3= [];
gdjs.GameCode.GDQ3Objects4= [];
gdjs.GameCode.GDQ4Objects1= [];
gdjs.GameCode.GDQ4Objects2= [];
gdjs.GameCode.GDQ4Objects3= [];
gdjs.GameCode.GDQ4Objects4= [];
gdjs.GameCode.GDQ5Objects1= [];
gdjs.GameCode.GDQ5Objects2= [];
gdjs.GameCode.GDQ5Objects3= [];
gdjs.GameCode.GDQ5Objects4= [];


gdjs.GameCode.asyncCallback10168500 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Right", false, 80, 1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback10168500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback10169652 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
{gdjs.evtTools.sound.playSound(runtimeScene, "Wrong", false, 80, 1);
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback10169652(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Ready"), gdjs.GameCode.GDReadyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDReadyObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDReadyObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDReadyObjects1[k] = gdjs.GameCode.GDReadyObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDReadyObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects = Hashtable.newFrom({"mouse": gdjs.GameCode.GDmouseObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects = Hashtable.newFrom({"Next": gdjs.GameCode.GDNextObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects = Hashtable.newFrom({"Next2": gdjs.GameCode.GDNext2Objects4});
gdjs.GameCode.asyncCallback12390436 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.GameCode.GDNextObjects4.length = 0;

gdjs.GameCode.GDNext2Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects, 1049, 342, "Respostas");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects, 1024, 352, "");
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setHeight(64);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setWidth(142);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Opacity").setOpacity(10);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDNextObjects4[i].activateBehavior("ButtonFSM", true);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList4 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback12390436(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback12387076 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Q1"), gdjs.GameCode.GDQ1Objects3);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.GameCode.GDScore2Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects3);

{for(var i = 0, len = gdjs.GameCode.GDQ1Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDQ1Objects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].setColor("184;57;57");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].setColor("25;224;36");
}
}
{for(var i = 0, len = gdjs.GameCode.GDScore2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDScore2Objects3[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1));
}
}

{ //Subevents
gdjs.GameCode.eventsList4(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDanswerrightObjects1) asyncObjectsList.addObject("answerright", obj);
for (const obj of gdjs.GameCode.GDanswerwrongObjects1) asyncObjectsList.addObject("answerwrong", obj);
for (const obj of gdjs.GameCode.GDanswerwrong2Objects1) asyncObjectsList.addObject("answerwrong2", obj);
for (const obj of gdjs.GameCode.GDanswerwrong3Objects1) asyncObjectsList.addObject("answerwrong3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback12387076(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerrightObjects2[k] = gdjs.GameCode.GDanswerrightObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12389388);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDanswerrightObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrongObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong2Objects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong3Objects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerrightObjects3[k] = gdjs.GameCode.GDanswerrightObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerrightObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerrightObjects2_1final.indexOf(gdjs.GameCode.GDanswerrightObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerrightObjects2_1final.push(gdjs.GameCode.GDanswerrightObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrongObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrongObjects3[k] = gdjs.GameCode.GDanswerwrongObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrongObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong2Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong2Objects3[k] = gdjs.GameCode.GDanswerwrong2Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong3Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong3Objects3[k] = gdjs.GameCode.GDanswerwrong3Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong3Objects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrongObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrongObjects2_1final.indexOf(gdjs.GameCode.GDanswerwrongObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrongObjects2_1final.push(gdjs.GameCode.GDanswerwrongObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong2Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong2Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong2Objects2_1final.push(gdjs.GameCode.GDanswerwrong2Objects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong3Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong3Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong3Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong3Objects2_1final.push(gdjs.GameCode.GDanswerwrong3Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects2_1final, gdjs.GameCode.GDanswerrightObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects2_1final, gdjs.GameCode.GDanswerwrongObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects2_1final, gdjs.GameCode.GDanswerwrong2Objects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects2_1final, gdjs.GameCode.GDanswerwrong3Objects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12391620);
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDmouseObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Respostas");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12390900);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDNextObjects1.length = 0;

gdjs.GameCode.GDNext2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.GameCode.GDNextObjects1_2final.length = 0;
gdjs.GameCode.GDNext2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.GameCode.GDNextObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNextObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNextObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNextObjects2[k] = gdjs.GameCode.GDNextObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNextObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNextObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNextObjects1_2final.indexOf(gdjs.GameCode.GDNextObjects2[j]) === -1 )
            gdjs.GameCode.GDNextObjects1_2final.push(gdjs.GameCode.GDNextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next2"), gdjs.GameCode.GDNext2Objects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNext2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNext2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNext2Objects2[k] = gdjs.GameCode.GDNext2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNext2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNext2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNext2Objects1_2final.indexOf(gdjs.GameCode.GDNext2Objects2[j]) === -1 )
            gdjs.GameCode.GDNext2Objects1_2final.push(gdjs.GameCode.GDNext2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDNextObjects1_2final, gdjs.GameCode.GDNextObjects1);
gdjs.copyArray(gdjs.GameCode.GDNext2Objects1_2final, gdjs.GameCode.GDNext2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 2);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects1[i].getBehavior("Opacity").setOpacity(20);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects1[i].getBehavior("Opacity").setOpacity(20);
}
}

{ //Subevents
gdjs.GameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects = Hashtable.newFrom({"mouse": gdjs.GameCode.GDmouseObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects = Hashtable.newFrom({"Next": gdjs.GameCode.GDNextObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects = Hashtable.newFrom({"Next2": gdjs.GameCode.GDNext2Objects4});
gdjs.GameCode.asyncCallback11242468 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.GameCode.GDNextObjects4.length = 0;

gdjs.GameCode.GDNext2Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects, 1049, 342, "Respostas");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects, 1024, 352, "");
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setHeight(64);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setWidth(142);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Opacity").setOpacity(10);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDNextObjects4[i].activateBehavior("ButtonFSM", true);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList8 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback11242468(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback11239380 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Q2"), gdjs.GameCode.GDQ2Objects3);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.GameCode.GDScore2Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects3);

{for(var i = 0, len = gdjs.GameCode.GDQ2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDQ2Objects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].setColor("184;57;57");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].setColor("25;224;36");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScore2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDScore2Objects3[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1));
}
}

{ //Subevents
gdjs.GameCode.eventsList8(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDanswerrightObjects1) asyncObjectsList.addObject("answerright", obj);
for (const obj of gdjs.GameCode.GDanswerwrongObjects1) asyncObjectsList.addObject("answerwrong", obj);
for (const obj of gdjs.GameCode.GDanswerwrong2Objects1) asyncObjectsList.addObject("answerwrong2", obj);
for (const obj of gdjs.GameCode.GDanswerwrong3Objects1) asyncObjectsList.addObject("answerwrong3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback11239380(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerrightObjects2[k] = gdjs.GameCode.GDanswerrightObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11418060);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDanswerrightObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrongObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong2Objects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong3Objects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerrightObjects3[k] = gdjs.GameCode.GDanswerrightObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerrightObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerrightObjects2_1final.indexOf(gdjs.GameCode.GDanswerrightObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerrightObjects2_1final.push(gdjs.GameCode.GDanswerrightObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrongObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrongObjects3[k] = gdjs.GameCode.GDanswerwrongObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrongObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong2Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong2Objects3[k] = gdjs.GameCode.GDanswerwrong2Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong3Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong3Objects3[k] = gdjs.GameCode.GDanswerwrong3Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong3Objects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrongObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrongObjects2_1final.indexOf(gdjs.GameCode.GDanswerwrongObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrongObjects2_1final.push(gdjs.GameCode.GDanswerwrongObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong2Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong2Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong2Objects2_1final.push(gdjs.GameCode.GDanswerwrong2Objects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong3Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong3Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong3Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong3Objects2_1final.push(gdjs.GameCode.GDanswerwrong3Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects2_1final, gdjs.GameCode.GDanswerrightObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects2_1final, gdjs.GameCode.GDanswerwrongObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects2_1final, gdjs.GameCode.GDanswerwrong2Objects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects2_1final, gdjs.GameCode.GDanswerwrong3Objects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11420940);
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDmouseObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Respostas");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11239172);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDNextObjects1.length = 0;

gdjs.GameCode.GDNext2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.GameCode.GDNextObjects1_2final.length = 0;
gdjs.GameCode.GDNext2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.GameCode.GDNextObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNextObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNextObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNextObjects2[k] = gdjs.GameCode.GDNextObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNextObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNextObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNextObjects1_2final.indexOf(gdjs.GameCode.GDNextObjects2[j]) === -1 )
            gdjs.GameCode.GDNextObjects1_2final.push(gdjs.GameCode.GDNextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next2"), gdjs.GameCode.GDNext2Objects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNext2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNext2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNext2Objects2[k] = gdjs.GameCode.GDNext2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNext2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNext2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNext2Objects1_2final.indexOf(gdjs.GameCode.GDNext2Objects2[j]) === -1 )
            gdjs.GameCode.GDNext2Objects1_2final.push(gdjs.GameCode.GDNext2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDNextObjects1_2final, gdjs.GameCode.GDNextObjects1);
gdjs.copyArray(gdjs.GameCode.GDNext2Objects1_2final, gdjs.GameCode.GDNext2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 3);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects1[i].getBehavior("Opacity").setOpacity(20);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects1[i].getBehavior("Opacity").setOpacity(20);
}
}

{ //Subevents
gdjs.GameCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects = Hashtable.newFrom({"mouse": gdjs.GameCode.GDmouseObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects = Hashtable.newFrom({"Next": gdjs.GameCode.GDNextObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects = Hashtable.newFrom({"Next2": gdjs.GameCode.GDNext2Objects4});
gdjs.GameCode.asyncCallback12787892 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.GameCode.GDNextObjects4.length = 0;

gdjs.GameCode.GDNext2Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects, 1049, 342, "Respostas");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects, 1024, 352, "");
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setHeight(64);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setWidth(142);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Opacity").setOpacity(10);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDNextObjects4[i].activateBehavior("ButtonFSM", true);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList12 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback12787892(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback12786252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Q3"), gdjs.GameCode.GDQ3Objects3);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.GameCode.GDScore2Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects3);

{for(var i = 0, len = gdjs.GameCode.GDQ3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDQ3Objects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].setColor("184;57;57");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].setColor("25;224;36");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScore2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDScore2Objects3[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1));
}
}

{ //Subevents
gdjs.GameCode.eventsList12(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDanswerrightObjects1) asyncObjectsList.addObject("answerright", obj);
for (const obj of gdjs.GameCode.GDanswerwrongObjects1) asyncObjectsList.addObject("answerwrong", obj);
for (const obj of gdjs.GameCode.GDanswerwrong2Objects1) asyncObjectsList.addObject("answerwrong2", obj);
for (const obj of gdjs.GameCode.GDanswerwrong3Objects1) asyncObjectsList.addObject("answerwrong3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback12786252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerrightObjects2[k] = gdjs.GameCode.GDanswerrightObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12782004);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDanswerrightObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrongObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong2Objects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong3Objects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerrightObjects3[k] = gdjs.GameCode.GDanswerrightObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerrightObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerrightObjects2_1final.indexOf(gdjs.GameCode.GDanswerrightObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerrightObjects2_1final.push(gdjs.GameCode.GDanswerrightObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrongObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrongObjects3[k] = gdjs.GameCode.GDanswerwrongObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrongObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong2Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong2Objects3[k] = gdjs.GameCode.GDanswerwrong2Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong3Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong3Objects3[k] = gdjs.GameCode.GDanswerwrong3Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong3Objects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrongObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrongObjects2_1final.indexOf(gdjs.GameCode.GDanswerwrongObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrongObjects2_1final.push(gdjs.GameCode.GDanswerwrongObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong2Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong2Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong2Objects2_1final.push(gdjs.GameCode.GDanswerwrong2Objects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong3Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong3Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong3Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong3Objects2_1final.push(gdjs.GameCode.GDanswerwrong3Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects2_1final, gdjs.GameCode.GDanswerrightObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects2_1final, gdjs.GameCode.GDanswerwrongObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects2_1final, gdjs.GameCode.GDanswerwrong2Objects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects2_1final, gdjs.GameCode.GDanswerwrong3Objects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12784716);
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDmouseObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Respostas");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12786044);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDNextObjects1.length = 0;

gdjs.GameCode.GDNext2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.GameCode.GDNextObjects1_2final.length = 0;
gdjs.GameCode.GDNext2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.GameCode.GDNextObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNextObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNextObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNextObjects2[k] = gdjs.GameCode.GDNextObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNextObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNextObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNextObjects1_2final.indexOf(gdjs.GameCode.GDNextObjects2[j]) === -1 )
            gdjs.GameCode.GDNextObjects1_2final.push(gdjs.GameCode.GDNextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next2"), gdjs.GameCode.GDNext2Objects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNext2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNext2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNext2Objects2[k] = gdjs.GameCode.GDNext2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNext2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNext2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNext2Objects1_2final.indexOf(gdjs.GameCode.GDNext2Objects2[j]) === -1 )
            gdjs.GameCode.GDNext2Objects1_2final.push(gdjs.GameCode.GDNext2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDNextObjects1_2final, gdjs.GameCode.GDNextObjects1);
gdjs.copyArray(gdjs.GameCode.GDNext2Objects1_2final, gdjs.GameCode.GDNext2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.GameCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 4);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects1[i].getBehavior("Opacity").setOpacity(20);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects1[i].getBehavior("Opacity").setOpacity(20);
}
}

{ //Subevents
gdjs.GameCode.eventsList14(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects = Hashtable.newFrom({"mouse": gdjs.GameCode.GDmouseObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects = Hashtable.newFrom({"Next": gdjs.GameCode.GDNextObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects = Hashtable.newFrom({"Next2": gdjs.GameCode.GDNext2Objects4});
gdjs.GameCode.asyncCallback16411276 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.GameCode.GDNextObjects4.length = 0;

gdjs.GameCode.GDNext2Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects, 1049, 342, "Respostas");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects, 1024, 352, "");
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setHeight(64);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setWidth(142);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Opacity").setOpacity(10);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDNextObjects4[i].activateBehavior("ButtonFSM", true);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList16 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback16411276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback11195020 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Q4"), gdjs.GameCode.GDQ4Objects3);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.GameCode.GDScore2Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects3);

{for(var i = 0, len = gdjs.GameCode.GDQ4Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDQ4Objects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].setColor("184;57;57");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].setColor("25;224;36");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScore2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDScore2Objects3[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1));
}
}

{ //Subevents
gdjs.GameCode.eventsList16(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList17 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDanswerrightObjects1) asyncObjectsList.addObject("answerright", obj);
for (const obj of gdjs.GameCode.GDanswerwrongObjects1) asyncObjectsList.addObject("answerwrong", obj);
for (const obj of gdjs.GameCode.GDanswerwrong2Objects1) asyncObjectsList.addObject("answerwrong2", obj);
for (const obj of gdjs.GameCode.GDanswerwrong3Objects1) asyncObjectsList.addObject("answerwrong3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback11195020(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerrightObjects2[k] = gdjs.GameCode.GDanswerrightObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11201180);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDanswerrightObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrongObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong2Objects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong3Objects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerrightObjects3[k] = gdjs.GameCode.GDanswerrightObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerrightObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerrightObjects2_1final.indexOf(gdjs.GameCode.GDanswerrightObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerrightObjects2_1final.push(gdjs.GameCode.GDanswerrightObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrongObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrongObjects3[k] = gdjs.GameCode.GDanswerwrongObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrongObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong2Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong2Objects3[k] = gdjs.GameCode.GDanswerwrong2Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong3Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong3Objects3[k] = gdjs.GameCode.GDanswerwrong3Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong3Objects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrongObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrongObjects2_1final.indexOf(gdjs.GameCode.GDanswerwrongObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrongObjects2_1final.push(gdjs.GameCode.GDanswerwrongObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong2Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong2Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong2Objects2_1final.push(gdjs.GameCode.GDanswerwrong2Objects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong3Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong3Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong3Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong3Objects2_1final.push(gdjs.GameCode.GDanswerwrong3Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects2_1final, gdjs.GameCode.GDanswerrightObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects2_1final, gdjs.GameCode.GDanswerwrongObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects2_1final, gdjs.GameCode.GDanswerwrong2Objects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects2_1final, gdjs.GameCode.GDanswerwrong3Objects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11196628);
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDmouseObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Respostas");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11200804);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList17(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDNextObjects1.length = 0;

gdjs.GameCode.GDNext2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.GameCode.GDNextObjects1_2final.length = 0;
gdjs.GameCode.GDNext2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.GameCode.GDNextObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNextObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNextObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNextObjects2[k] = gdjs.GameCode.GDNextObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNextObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNextObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNextObjects1_2final.indexOf(gdjs.GameCode.GDNextObjects2[j]) === -1 )
            gdjs.GameCode.GDNextObjects1_2final.push(gdjs.GameCode.GDNextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next2"), gdjs.GameCode.GDNext2Objects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNext2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNext2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNext2Objects2[k] = gdjs.GameCode.GDNext2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNext2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNext2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNext2Objects1_2final.indexOf(gdjs.GameCode.GDNext2Objects2[j]) === -1 )
            gdjs.GameCode.GDNext2Objects1_2final.push(gdjs.GameCode.GDNext2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDNextObjects1_2final, gdjs.GameCode.GDNextObjects1);
gdjs.copyArray(gdjs.GameCode.GDNext2Objects1_2final, gdjs.GameCode.GDNext2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 5);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.GameCode.eventsList19 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 5);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects1[i].getBehavior("Opacity").setOpacity(20);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects1[i].getBehavior("Opacity").setOpacity(20);
}
}

{ //Subevents
gdjs.GameCode.eventsList18(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects = Hashtable.newFrom({"mouse": gdjs.GameCode.GDmouseObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects = Hashtable.newFrom({"Next": gdjs.GameCode.GDNextObjects4});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects = Hashtable.newFrom({"Next2": gdjs.GameCode.GDNext2Objects4});
gdjs.GameCode.asyncCallback9969740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.GameCode.GDNextObjects4.length = 0;

gdjs.GameCode.GDNext2Objects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNextObjects4Objects, 1049, 342, "Respostas");
}
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNext2Objects4Objects, 1024, 352, "");
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setHeight(64);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Resizable").setWidth(142);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].getBehavior("Opacity").setOpacity(10);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].setZOrder(30);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects4.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects4[i].activateBehavior("ButtonFSM", true);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNextObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDNextObjects4[i].activateBehavior("ButtonFSM", true);
}
}
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList20 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback9969740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.asyncCallback9966740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.GameCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Q5"), gdjs.GameCode.GDQ5Objects3);
gdjs.copyArray(runtimeScene.getObjects("Score2"), gdjs.GameCode.GDScore2Objects3);
gdjs.copyArray(asyncObjectsList.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(asyncObjectsList.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects3);

{for(var i = 0, len = gdjs.GameCode.GDQ5Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDQ5Objects3[i].getBehavior("Animation").setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].setColor("184;57;57");
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].setColor("184;57;57");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("Opacity").setOpacity(100);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].setColor("25;224;36");
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.GameCode.GDScore2Objects3.length ;i < len;++i) {
    gdjs.GameCode.GDScore2Objects3[i].getBehavior("Text").setText("Score: " + runtimeScene.getGame().getVariables().getFromIndex(1).getAsString() + "/" + gdjs.evtTools.common.toString(runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() - 1));
}
}

{ //Subevents
gdjs.GameCode.eventsList20(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.GameCode.localVariables.length = 0;
}
gdjs.GameCode.eventsList21 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.GameCode.localVariables);
for (const obj of gdjs.GameCode.GDanswerrightObjects1) asyncObjectsList.addObject("answerright", obj);
for (const obj of gdjs.GameCode.GDanswerwrongObjects1) asyncObjectsList.addObject("answerwrong", obj);
for (const obj of gdjs.GameCode.GDanswerwrong2Objects1) asyncObjectsList.addObject("answerwrong2", obj);
for (const obj of gdjs.GameCode.GDanswerwrong3Objects1) asyncObjectsList.addObject("answerwrong3", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.GameCode.asyncCallback9966740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.GameCode.eventsList22 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerrightObjects2[k] = gdjs.GameCode.GDanswerrightObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(11195260);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}
}

}


{

gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects2);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.GameCode.GDanswerrightObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrongObjects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong2Objects2_1final.length = 0;
gdjs.GameCode.GDanswerwrong3Objects2_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects1, gdjs.GameCode.GDanswerrightObjects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerrightObjects3[k] = gdjs.GameCode.GDanswerrightObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerrightObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerrightObjects2_1final.indexOf(gdjs.GameCode.GDanswerrightObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerrightObjects2_1final.push(gdjs.GameCode.GDanswerrightObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects1, gdjs.GameCode.GDanswerwrongObjects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects1, gdjs.GameCode.GDanswerwrong2Objects3);

gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects1, gdjs.GameCode.GDanswerwrong3Objects3);

for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrongObjects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrongObjects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrongObjects3[k] = gdjs.GameCode.GDanswerwrongObjects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrongObjects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong2Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong2Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong2Objects3[k] = gdjs.GameCode.GDanswerwrong2Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong2Objects3.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong3Objects3.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong3Objects3[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.GameCode.GDanswerwrong3Objects3[k] = gdjs.GameCode.GDanswerwrong3Objects3[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong3Objects3.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrongObjects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrongObjects2_1final.indexOf(gdjs.GameCode.GDanswerwrongObjects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrongObjects2_1final.push(gdjs.GameCode.GDanswerwrongObjects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong2Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong2Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong2Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong2Objects2_1final.push(gdjs.GameCode.GDanswerwrong2Objects3[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDanswerwrong3Objects3.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDanswerwrong3Objects2_1final.indexOf(gdjs.GameCode.GDanswerwrong3Objects3[j]) === -1 )
            gdjs.GameCode.GDanswerwrong3Objects2_1final.push(gdjs.GameCode.GDanswerwrong3Objects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDanswerrightObjects2_1final, gdjs.GameCode.GDanswerrightObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrongObjects2_1final, gdjs.GameCode.GDanswerwrongObjects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong2Objects2_1final, gdjs.GameCode.GDanswerwrong2Objects2);
gdjs.copyArray(gdjs.GameCode.GDanswerwrong3Objects2_1final, gdjs.GameCode.GDanswerwrong3Objects2);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9965476);
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDmouseObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDmouseObjects2Objects, gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), "Respostas");
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9966532);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList21(runtimeScene);} //End of subevents
}

}


{

gdjs.GameCode.GDNextObjects1.length = 0;

gdjs.GameCode.GDNext2Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{gdjs.GameCode.GDNextObjects1_2final.length = 0;
gdjs.GameCode.GDNext2Objects1_2final.length = 0;
let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.GameCode.GDNextObjects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNextObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNextObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNextObjects2[k] = gdjs.GameCode.GDNextObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNextObjects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNextObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNextObjects1_2final.indexOf(gdjs.GameCode.GDNextObjects2[j]) === -1 )
            gdjs.GameCode.GDNextObjects1_2final.push(gdjs.GameCode.GDNextObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Next2"), gdjs.GameCode.GDNext2Objects2);
for (var i = 0, k = 0, l = gdjs.GameCode.GDNext2Objects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDNext2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_2 = true;
        gdjs.GameCode.GDNext2Objects2[k] = gdjs.GameCode.GDNext2Objects2[i];
        ++k;
    }
}
gdjs.GameCode.GDNext2Objects2.length = k;
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDNext2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDNext2Objects1_2final.indexOf(gdjs.GameCode.GDNext2Objects2[j]) === -1 )
            gdjs.GameCode.GDNext2Objects1_2final.push(gdjs.GameCode.GDNext2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDNextObjects1_2final, gdjs.GameCode.GDNextObjects1);
gdjs.copyArray(gdjs.GameCode.GDNext2Objects1_2final, gdjs.GameCode.GDNext2Objects1);
}
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 6);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).add(1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Juca", false);
}
}

}


};gdjs.GameCode.eventsList23 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getAsNumber() == 6);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects1);
{for(var i = 0, len = gdjs.GameCode.GDanswerrightObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerrightObjects1[i].getBehavior("Opacity").setOpacity(20);
}
}
{for(var i = 0, len = gdjs.GameCode.GDanswerwrongObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrongObjects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong2Objects1[i].getBehavior("Opacity").setOpacity(20);
}
for(var i = 0, len = gdjs.GameCode.GDanswerwrong3Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDanswerwrong3Objects1[i].getBehavior("Opacity").setOpacity(20);
}
}

{ //Subevents
gdjs.GameCode.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.GameCode.eventsList24 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Next"), gdjs.GameCode.GDNextObjects1);
gdjs.copyArray(runtimeScene.getObjects("Next2"), gdjs.GameCode.GDNext2Objects1);
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsString(), 0, 0, 0);
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}
{for(var i = 0, len = gdjs.GameCode.GDNextObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDNextObjects1[i].deleteFromScene(runtimeScene);
}
}
{for(var i = 0, len = gdjs.GameCode.GDNext2Objects1.length ;i < len;++i) {
    gdjs.GameCode.GDNext2Objects1[i].deleteFromScene(runtimeScene);
}
}
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber());
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answerright"), gdjs.GameCode.GDanswerrightObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerrightObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerrightObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerrightObjects1[k] = gdjs.GameCode.GDanswerrightObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerrightObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("answerwrong"), gdjs.GameCode.GDanswerwrongObjects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong2"), gdjs.GameCode.GDanswerwrong2Objects1);
gdjs.copyArray(runtimeScene.getObjects("answerwrong3"), gdjs.GameCode.GDanswerwrong3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrongObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrongObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerwrongObjects1[k] = gdjs.GameCode.GDanswerwrongObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrongObjects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong2Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong2Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerwrong2Objects1[k] = gdjs.GameCode.GDanswerwrong2Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong2Objects1.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDanswerwrong3Objects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDanswerwrong3Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDanswerwrong3Objects1[k] = gdjs.GameCode.GDanswerwrong3Objects1[i];
        ++k;
    }
}
gdjs.GameCode.GDanswerwrong3Objects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList7(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList15(runtimeScene);
}


{


gdjs.GameCode.eventsList19(runtimeScene);
}


{


gdjs.GameCode.eventsList23(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDReadyObjects1.length = 0;
gdjs.GameCode.GDReadyObjects2.length = 0;
gdjs.GameCode.GDReadyObjects3.length = 0;
gdjs.GameCode.GDReadyObjects4.length = 0;
gdjs.GameCode.GDQ1Objects1.length = 0;
gdjs.GameCode.GDQ1Objects2.length = 0;
gdjs.GameCode.GDQ1Objects3.length = 0;
gdjs.GameCode.GDQ1Objects4.length = 0;
gdjs.GameCode.GDanswerrightObjects1.length = 0;
gdjs.GameCode.GDanswerrightObjects2.length = 0;
gdjs.GameCode.GDanswerrightObjects3.length = 0;
gdjs.GameCode.GDanswerrightObjects4.length = 0;
gdjs.GameCode.GDanswerwrongObjects1.length = 0;
gdjs.GameCode.GDanswerwrongObjects2.length = 0;
gdjs.GameCode.GDanswerwrongObjects3.length = 0;
gdjs.GameCode.GDanswerwrongObjects4.length = 0;
gdjs.GameCode.GDmouseObjects1.length = 0;
gdjs.GameCode.GDmouseObjects2.length = 0;
gdjs.GameCode.GDmouseObjects3.length = 0;
gdjs.GameCode.GDmouseObjects4.length = 0;
gdjs.GameCode.GDanswerwrong2Objects1.length = 0;
gdjs.GameCode.GDanswerwrong2Objects2.length = 0;
gdjs.GameCode.GDanswerwrong2Objects3.length = 0;
gdjs.GameCode.GDanswerwrong2Objects4.length = 0;
gdjs.GameCode.GDanswerwrong3Objects1.length = 0;
gdjs.GameCode.GDanswerwrong3Objects2.length = 0;
gdjs.GameCode.GDanswerwrong3Objects3.length = 0;
gdjs.GameCode.GDanswerwrong3Objects4.length = 0;
gdjs.GameCode.GDScore2Objects1.length = 0;
gdjs.GameCode.GDScore2Objects2.length = 0;
gdjs.GameCode.GDScore2Objects3.length = 0;
gdjs.GameCode.GDScore2Objects4.length = 0;
gdjs.GameCode.GDNextObjects1.length = 0;
gdjs.GameCode.GDNextObjects2.length = 0;
gdjs.GameCode.GDNextObjects3.length = 0;
gdjs.GameCode.GDNextObjects4.length = 0;
gdjs.GameCode.GDQ2Objects1.length = 0;
gdjs.GameCode.GDQ2Objects2.length = 0;
gdjs.GameCode.GDQ2Objects3.length = 0;
gdjs.GameCode.GDQ2Objects4.length = 0;
gdjs.GameCode.GDNext2Objects1.length = 0;
gdjs.GameCode.GDNext2Objects2.length = 0;
gdjs.GameCode.GDNext2Objects3.length = 0;
gdjs.GameCode.GDNext2Objects4.length = 0;
gdjs.GameCode.GDQuestion2Objects1.length = 0;
gdjs.GameCode.GDQuestion2Objects2.length = 0;
gdjs.GameCode.GDQuestion2Objects3.length = 0;
gdjs.GameCode.GDQuestion2Objects4.length = 0;
gdjs.GameCode.GDQ3Objects1.length = 0;
gdjs.GameCode.GDQ3Objects2.length = 0;
gdjs.GameCode.GDQ3Objects3.length = 0;
gdjs.GameCode.GDQ3Objects4.length = 0;
gdjs.GameCode.GDQ4Objects1.length = 0;
gdjs.GameCode.GDQ4Objects2.length = 0;
gdjs.GameCode.GDQ4Objects3.length = 0;
gdjs.GameCode.GDQ4Objects4.length = 0;
gdjs.GameCode.GDQ5Objects1.length = 0;
gdjs.GameCode.GDQ5Objects2.length = 0;
gdjs.GameCode.GDQ5Objects3.length = 0;
gdjs.GameCode.GDQ5Objects4.length = 0;

gdjs.GameCode.eventsList24(runtimeScene);
gdjs.GameCode.GDReadyObjects1.length = 0;
gdjs.GameCode.GDReadyObjects2.length = 0;
gdjs.GameCode.GDReadyObjects3.length = 0;
gdjs.GameCode.GDReadyObjects4.length = 0;
gdjs.GameCode.GDQ1Objects1.length = 0;
gdjs.GameCode.GDQ1Objects2.length = 0;
gdjs.GameCode.GDQ1Objects3.length = 0;
gdjs.GameCode.GDQ1Objects4.length = 0;
gdjs.GameCode.GDanswerrightObjects1.length = 0;
gdjs.GameCode.GDanswerrightObjects2.length = 0;
gdjs.GameCode.GDanswerrightObjects3.length = 0;
gdjs.GameCode.GDanswerrightObjects4.length = 0;
gdjs.GameCode.GDanswerwrongObjects1.length = 0;
gdjs.GameCode.GDanswerwrongObjects2.length = 0;
gdjs.GameCode.GDanswerwrongObjects3.length = 0;
gdjs.GameCode.GDanswerwrongObjects4.length = 0;
gdjs.GameCode.GDmouseObjects1.length = 0;
gdjs.GameCode.GDmouseObjects2.length = 0;
gdjs.GameCode.GDmouseObjects3.length = 0;
gdjs.GameCode.GDmouseObjects4.length = 0;
gdjs.GameCode.GDanswerwrong2Objects1.length = 0;
gdjs.GameCode.GDanswerwrong2Objects2.length = 0;
gdjs.GameCode.GDanswerwrong2Objects3.length = 0;
gdjs.GameCode.GDanswerwrong2Objects4.length = 0;
gdjs.GameCode.GDanswerwrong3Objects1.length = 0;
gdjs.GameCode.GDanswerwrong3Objects2.length = 0;
gdjs.GameCode.GDanswerwrong3Objects3.length = 0;
gdjs.GameCode.GDanswerwrong3Objects4.length = 0;
gdjs.GameCode.GDScore2Objects1.length = 0;
gdjs.GameCode.GDScore2Objects2.length = 0;
gdjs.GameCode.GDScore2Objects3.length = 0;
gdjs.GameCode.GDScore2Objects4.length = 0;
gdjs.GameCode.GDNextObjects1.length = 0;
gdjs.GameCode.GDNextObjects2.length = 0;
gdjs.GameCode.GDNextObjects3.length = 0;
gdjs.GameCode.GDNextObjects4.length = 0;
gdjs.GameCode.GDQ2Objects1.length = 0;
gdjs.GameCode.GDQ2Objects2.length = 0;
gdjs.GameCode.GDQ2Objects3.length = 0;
gdjs.GameCode.GDQ2Objects4.length = 0;
gdjs.GameCode.GDNext2Objects1.length = 0;
gdjs.GameCode.GDNext2Objects2.length = 0;
gdjs.GameCode.GDNext2Objects3.length = 0;
gdjs.GameCode.GDNext2Objects4.length = 0;
gdjs.GameCode.GDQuestion2Objects1.length = 0;
gdjs.GameCode.GDQuestion2Objects2.length = 0;
gdjs.GameCode.GDQuestion2Objects3.length = 0;
gdjs.GameCode.GDQuestion2Objects4.length = 0;
gdjs.GameCode.GDQ3Objects1.length = 0;
gdjs.GameCode.GDQ3Objects2.length = 0;
gdjs.GameCode.GDQ3Objects3.length = 0;
gdjs.GameCode.GDQ3Objects4.length = 0;
gdjs.GameCode.GDQ4Objects1.length = 0;
gdjs.GameCode.GDQ4Objects2.length = 0;
gdjs.GameCode.GDQ4Objects3.length = 0;
gdjs.GameCode.GDQ4Objects4.length = 0;
gdjs.GameCode.GDQ5Objects1.length = 0;
gdjs.GameCode.GDQ5Objects2.length = 0;
gdjs.GameCode.GDQ5Objects3.length = 0;
gdjs.GameCode.GDQ5Objects4.length = 0;


return;

}

gdjs['GameCode'] = gdjs.GameCode;
