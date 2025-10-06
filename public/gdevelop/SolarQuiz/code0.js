gdjs.MenuCode = {};
gdjs.MenuCode.localVariables = [];
gdjs.MenuCode.GDNewSpriteObjects1= [];
gdjs.MenuCode.GDNewSpriteObjects2= [];
gdjs.MenuCode.GDNewTiledSpriteObjects1= [];
gdjs.MenuCode.GDNewTiledSpriteObjects2= [];


gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDNewTiledSpriteObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDNewTiledSpriteObjects1[i].getBehavior("Opacity").setOpacity(0);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewTiledSprite"), gdjs.MenuCode.GDNewTiledSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDNewTiledSpriteObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDNewTiledSpriteObjects1[i].getBehavior("ButtonFSM").IsClicked(null) ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDNewTiledSpriteObjects1[k] = gdjs.MenuCode.GDNewTiledSpriteObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Right", false, 80, 1);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tutorial", false);
}
}

}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;

gdjs.MenuCode.eventsList0(runtimeScene);
gdjs.MenuCode.GDNewSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewSpriteObjects2.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.MenuCode.GDNewTiledSpriteObjects2.length = 0;


return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
