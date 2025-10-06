gdjs.SelectionCode = {};
gdjs.SelectionCode.localVariables = [];
gdjs.SelectionCode.GDLevel1Objects1= [];
gdjs.SelectionCode.GDLevel1Objects2= [];
gdjs.SelectionCode.GDEmptyLevelObjects1= [];
gdjs.SelectionCode.GDEmptyLevelObjects2= [];
gdjs.SelectionCode.GDTitleObjects1= [];
gdjs.SelectionCode.GDTitleObjects2= [];
gdjs.SelectionCode.GDBubbleObjects1= [];
gdjs.SelectionCode.GDBubbleObjects2= [];
gdjs.SelectionCode.GDArrowObjects1= [];
gdjs.SelectionCode.GDArrowObjects2= [];
gdjs.SelectionCode.GDControlsObjects1= [];
gdjs.SelectionCode.GDControlsObjects2= [];
gdjs.SelectionCode.GDNarradorObjects1= [];
gdjs.SelectionCode.GDNarradorObjects2= [];
gdjs.SelectionCode.GDNewSpriteObjects1= [];
gdjs.SelectionCode.GDNewSpriteObjects2= [];
gdjs.SelectionCode.GDLevel2Objects1= [];
gdjs.SelectionCode.GDLevel2Objects2= [];
gdjs.SelectionCode.GDNewSprite2Objects1= [];
gdjs.SelectionCode.GDNewSprite2Objects2= [];
gdjs.SelectionCode.GDcitymapObjects1= [];
gdjs.SelectionCode.GDcitymapObjects2= [];
gdjs.SelectionCode.GDfarmmapObjects1= [];
gdjs.SelectionCode.GDfarmmapObjects2= [];
gdjs.SelectionCode.GDCarRedObjects1= [];
gdjs.SelectionCode.GDCarRedObjects2= [];
gdjs.SelectionCode.GDCarBlueObjects1= [];
gdjs.SelectionCode.GDCarBlueObjects2= [];
gdjs.SelectionCode.GDJucaObjects1= [];
gdjs.SelectionCode.GDJucaObjects2= [];


gdjs.SelectionCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Level1"), gdjs.SelectionCode.GDLevel1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.SelectionCode.GDLevel1Objects1.length;i<l;++i) {
    if ( gdjs.SelectionCode.GDLevel1Objects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.SelectionCode.GDLevel1Objects1[k] = gdjs.SelectionCode.GDLevel1Objects1[i];
        ++k;
    }
}
gdjs.SelectionCode.GDLevel1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.SelectionCode.GDLevel1Objects1 */
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.SelectionCode.GDTitleObjects1);
{for(var i = 0, len = gdjs.SelectionCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.SelectionCode.GDTitleObjects1[i].getBehavior("Text").setText(((gdjs.SelectionCode.GDLevel1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SelectionCode.GDLevel1Objects1[0].getVariables()).get("Name").getAsString());
}
}
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(((gdjs.SelectionCode.GDLevel1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SelectionCode.GDLevel1Objects1[0].getVariables()).get("BombCapacity").getAsNumber());
}
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(((gdjs.SelectionCode.GDLevel1Objects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.SelectionCode.GDLevel1Objects1[0].getVariables()).get("BombRange").getAsNumber());
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}
}

}


};gdjs.SelectionCode.eventsList1 = function(runtimeScene) {

{


gdjs.SelectionCode.eventsList0(runtimeScene);
}


{



}


};

gdjs.SelectionCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SelectionCode.GDLevel1Objects1.length = 0;
gdjs.SelectionCode.GDLevel1Objects2.length = 0;
gdjs.SelectionCode.GDEmptyLevelObjects1.length = 0;
gdjs.SelectionCode.GDEmptyLevelObjects2.length = 0;
gdjs.SelectionCode.GDTitleObjects1.length = 0;
gdjs.SelectionCode.GDTitleObjects2.length = 0;
gdjs.SelectionCode.GDBubbleObjects1.length = 0;
gdjs.SelectionCode.GDBubbleObjects2.length = 0;
gdjs.SelectionCode.GDArrowObjects1.length = 0;
gdjs.SelectionCode.GDArrowObjects2.length = 0;
gdjs.SelectionCode.GDControlsObjects1.length = 0;
gdjs.SelectionCode.GDControlsObjects2.length = 0;
gdjs.SelectionCode.GDNarradorObjects1.length = 0;
gdjs.SelectionCode.GDNarradorObjects2.length = 0;
gdjs.SelectionCode.GDNewSpriteObjects1.length = 0;
gdjs.SelectionCode.GDNewSpriteObjects2.length = 0;
gdjs.SelectionCode.GDLevel2Objects1.length = 0;
gdjs.SelectionCode.GDLevel2Objects2.length = 0;
gdjs.SelectionCode.GDNewSprite2Objects1.length = 0;
gdjs.SelectionCode.GDNewSprite2Objects2.length = 0;
gdjs.SelectionCode.GDcitymapObjects1.length = 0;
gdjs.SelectionCode.GDcitymapObjects2.length = 0;
gdjs.SelectionCode.GDfarmmapObjects1.length = 0;
gdjs.SelectionCode.GDfarmmapObjects2.length = 0;
gdjs.SelectionCode.GDCarRedObjects1.length = 0;
gdjs.SelectionCode.GDCarRedObjects2.length = 0;
gdjs.SelectionCode.GDCarBlueObjects1.length = 0;
gdjs.SelectionCode.GDCarBlueObjects2.length = 0;
gdjs.SelectionCode.GDJucaObjects1.length = 0;
gdjs.SelectionCode.GDJucaObjects2.length = 0;

gdjs.SelectionCode.eventsList1(runtimeScene);
gdjs.SelectionCode.GDLevel1Objects1.length = 0;
gdjs.SelectionCode.GDLevel1Objects2.length = 0;
gdjs.SelectionCode.GDEmptyLevelObjects1.length = 0;
gdjs.SelectionCode.GDEmptyLevelObjects2.length = 0;
gdjs.SelectionCode.GDTitleObjects1.length = 0;
gdjs.SelectionCode.GDTitleObjects2.length = 0;
gdjs.SelectionCode.GDBubbleObjects1.length = 0;
gdjs.SelectionCode.GDBubbleObjects2.length = 0;
gdjs.SelectionCode.GDArrowObjects1.length = 0;
gdjs.SelectionCode.GDArrowObjects2.length = 0;
gdjs.SelectionCode.GDControlsObjects1.length = 0;
gdjs.SelectionCode.GDControlsObjects2.length = 0;
gdjs.SelectionCode.GDNarradorObjects1.length = 0;
gdjs.SelectionCode.GDNarradorObjects2.length = 0;
gdjs.SelectionCode.GDNewSpriteObjects1.length = 0;
gdjs.SelectionCode.GDNewSpriteObjects2.length = 0;
gdjs.SelectionCode.GDLevel2Objects1.length = 0;
gdjs.SelectionCode.GDLevel2Objects2.length = 0;
gdjs.SelectionCode.GDNewSprite2Objects1.length = 0;
gdjs.SelectionCode.GDNewSprite2Objects2.length = 0;
gdjs.SelectionCode.GDcitymapObjects1.length = 0;
gdjs.SelectionCode.GDcitymapObjects2.length = 0;
gdjs.SelectionCode.GDfarmmapObjects1.length = 0;
gdjs.SelectionCode.GDfarmmapObjects2.length = 0;
gdjs.SelectionCode.GDCarRedObjects1.length = 0;
gdjs.SelectionCode.GDCarRedObjects2.length = 0;
gdjs.SelectionCode.GDCarBlueObjects1.length = 0;
gdjs.SelectionCode.GDCarBlueObjects2.length = 0;
gdjs.SelectionCode.GDJucaObjects1.length = 0;
gdjs.SelectionCode.GDJucaObjects2.length = 0;


return;

}

gdjs['SelectionCode'] = gdjs.SelectionCode;
