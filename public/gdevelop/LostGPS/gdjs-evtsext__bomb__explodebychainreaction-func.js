
if (typeof gdjs.evtsExt__Bomb__ExplodeByChainReaction !== "undefined") {
  gdjs.evtsExt__Bomb__ExplodeByChainReaction.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Bomb__ExplodeByChainReaction = {};
gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachIndex4 = 0;

gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachObjects4 = [];

gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachTemporary4 = null;

gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachTotalCount4 = 0;

gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects1= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects2= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects3= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects1= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects2= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects3= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects4= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects1= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects2= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects3= [];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects4= [];


gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDExplosionObjects4Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects4});
gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDBombObjects4Objects = Hashtable.newFrom({"Bomb": gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4});
gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDExplosionObjects4Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects4});
gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDExplosionObjects4Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects4});
gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDObstacleObjects4Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects4});
gdjs.evtsExt__Bomb__ExplodeByChainReaction.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Bomb__ExplodeByChainReaction.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bomb"), gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects3);

for (gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachIndex4 = 0;gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachIndex4 < gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects3.length;++gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachIndex4) {
gdjs.copyArray(eventsFunctionContext.getObjects("Explosion"), gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects4);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects4);
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.length = 0;


gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachTemporary4 = gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects3[gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachIndex4];
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.push(gdjs.evtsExt__Bomb__ExplodeByChainReaction.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDExplosionObjects4Objects, gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDBombObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.length;i<l;++i) {
    if ( gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4[i].getVariableBoolean(gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4[i].getVariables().get("IsDeleted"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4[k] = gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4[i];
        ++k;
    }
}
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.pickAllObjects(eventsFunctionContext, gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDExplosionObjects4Objects);
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4[i].setVariableBoolean(gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4[i].getVariables().get("IsDeleted"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4[i].getBehavior(eventsFunctionContext.getBehaviorName("BombBehavior")).Explode(gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDExplosionObjects4Objects, eventsFunctionContext.getBehaviorName("ExplosionBehavior"), gdjs.evtsExt__Bomb__ExplodeByChainReaction.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595ExplodeByChainReaction_9546GDObstacleObjects4Objects, eventsFunctionContext);
}
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).setBoolean(true);
}
}
}

}


};gdjs.evtsExt__Bomb__ExplodeByChainReaction.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.localVariables[0].getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setBoolean(false);
}

{ //Subevents: 
gdjs.evtsExt__Bomb__ExplodeByChainReaction.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.evtsExt__Bomb__ExplodeByChainReaction.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setBoolean(true);
variables._declare("HasNewBombExploded", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__Bomb__ExplodeByChainReaction.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Bomb__ExplodeByChainReaction.func = function(runtimeScene, Bomb, BombBehavior, Explosion, ExplosionBehavior, Obstacle, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Bomb": Bomb
, "Explosion": Explosion
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Bomb": gdjs.objectsListsToArray(Bomb)
, "Explosion": gdjs.objectsListsToArray(Explosion)
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"BombBehavior": BombBehavior
, "ExplosionBehavior": ExplosionBehavior
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Bomb"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Bomb"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects2.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects3.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects2.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects3.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects4.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects2.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects3.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects4.length = 0;

gdjs.evtsExt__Bomb__ExplodeByChainReaction.eventsList3(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects2.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects3.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDBombObjects4.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects2.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects3.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDExplosionObjects4.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects2.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects3.length = 0;
gdjs.evtsExt__Bomb__ExplodeByChainReaction.GDObstacleObjects4.length = 0;


return;
}

gdjs.evtsExt__Bomb__ExplodeByChainReaction.registeredGdjsCallbacks = [];