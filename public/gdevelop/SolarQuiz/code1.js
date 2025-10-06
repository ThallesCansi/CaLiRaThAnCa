gdjs.TutorialCode = {};
gdjs.TutorialCode.localVariables = [];
gdjs.TutorialCode.GDNewSprite2Objects1_1final = [];

gdjs.TutorialCode.GDNewSprite3Objects1_1final = [];

gdjs.TutorialCode.GDNewSpriteObjects1_1final = [];

gdjs.TutorialCode.GDNewSpriteObjects1= [];
gdjs.TutorialCode.GDNewSpriteObjects2= [];
gdjs.TutorialCode.GDNewSprite2Objects1= [];
gdjs.TutorialCode.GDNewSprite2Objects2= [];
gdjs.TutorialCode.GDNewSprite3Objects1= [];
gdjs.TutorialCode.GDNewSprite3Objects2= [];


gdjs.TutorialCode.eventsList0 = function(runtimeScene) {

{

gdjs.TutorialCode.GDNewSpriteObjects1.length = 0;

gdjs.TutorialCode.GDNewSprite2Objects1.length = 0;

gdjs.TutorialCode.GDNewSprite3Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.TutorialCode.GDNewSpriteObjects1_1final.length = 0;
gdjs.TutorialCode.GDNewSprite2Objects1_1final.length = 0;
gdjs.TutorialCode.GDNewSprite3Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.TutorialCode.GDNewSpriteObjects2);
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNewSpriteObjects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNewSpriteObjects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.TutorialCode.GDNewSpriteObjects2[k] = gdjs.TutorialCode.GDNewSpriteObjects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNewSpriteObjects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TutorialCode.GDNewSpriteObjects2.length; j < jLen ; ++j) {
        if ( gdjs.TutorialCode.GDNewSpriteObjects1_1final.indexOf(gdjs.TutorialCode.GDNewSpriteObjects2[j]) === -1 )
            gdjs.TutorialCode.GDNewSpriteObjects1_1final.push(gdjs.TutorialCode.GDNewSpriteObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.TutorialCode.GDNewSprite3Objects2);
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNewSprite3Objects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNewSprite3Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.TutorialCode.GDNewSprite3Objects2[k] = gdjs.TutorialCode.GDNewSprite3Objects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNewSprite3Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TutorialCode.GDNewSprite3Objects2.length; j < jLen ; ++j) {
        if ( gdjs.TutorialCode.GDNewSprite3Objects1_1final.indexOf(gdjs.TutorialCode.GDNewSprite3Objects2[j]) === -1 )
            gdjs.TutorialCode.GDNewSprite3Objects1_1final.push(gdjs.TutorialCode.GDNewSprite3Objects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("NewSprite2"), gdjs.TutorialCode.GDNewSprite2Objects2);
for (var i = 0, k = 0, l = gdjs.TutorialCode.GDNewSprite2Objects2.length;i<l;++i) {
    if ( gdjs.TutorialCode.GDNewSprite2Objects2[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_1 = true;
        gdjs.TutorialCode.GDNewSprite2Objects2[k] = gdjs.TutorialCode.GDNewSprite2Objects2[i];
        ++k;
    }
}
gdjs.TutorialCode.GDNewSprite2Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.TutorialCode.GDNewSprite2Objects2.length; j < jLen ; ++j) {
        if ( gdjs.TutorialCode.GDNewSprite2Objects1_1final.indexOf(gdjs.TutorialCode.GDNewSprite2Objects2[j]) === -1 )
            gdjs.TutorialCode.GDNewSprite2Objects1_1final.push(gdjs.TutorialCode.GDNewSprite2Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.TutorialCode.GDNewSpriteObjects1_1final, gdjs.TutorialCode.GDNewSpriteObjects1);
gdjs.copyArray(gdjs.TutorialCode.GDNewSprite2Objects1_1final, gdjs.TutorialCode.GDNewSprite2Objects1);
gdjs.copyArray(gdjs.TutorialCode.GDNewSprite3Objects1_1final, gdjs.TutorialCode.GDNewSprite3Objects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Right", false, 80, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};

gdjs.TutorialCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.TutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.TutorialCode.GDNewSprite2Objects1.length = 0;
gdjs.TutorialCode.GDNewSprite2Objects2.length = 0;
gdjs.TutorialCode.GDNewSprite3Objects1.length = 0;
gdjs.TutorialCode.GDNewSprite3Objects2.length = 0;

gdjs.TutorialCode.eventsList0(runtimeScene);
gdjs.TutorialCode.GDNewSpriteObjects1.length = 0;
gdjs.TutorialCode.GDNewSpriteObjects2.length = 0;
gdjs.TutorialCode.GDNewSprite2Objects1.length = 0;
gdjs.TutorialCode.GDNewSprite2Objects2.length = 0;
gdjs.TutorialCode.GDNewSprite3Objects1.length = 0;
gdjs.TutorialCode.GDNewSprite3Objects2.length = 0;


return;

}

gdjs['TutorialCode'] = gdjs.TutorialCode;
