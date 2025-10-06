
if (typeof gdjs.evtsExt__Player__CreateBonus !== "undefined") {
  gdjs.evtsExt__Player__CreateBonus.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Player__CreateBonus = {};
gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1= [];
gdjs.evtsExt__Player__CreateBonus.GDBonusObjects2= [];


gdjs.evtsExt__Player__CreateBonus.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595CreateBonus_9546GDBonusObjects1Objects = Hashtable.newFrom({"Bonus": gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1});
gdjs.evtsExt__Player__CreateBonus.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Player__CreateBonus.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595CreateBonus_9546GDBonusObjects1Objects, eventsFunctionContext.getArgument("PositionX"), eventsFunctionContext.getArgument("PositionY"), "");
}
{for(var i = 0, len = gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1[i].setZOrder((gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1[i].getPointY("")) + 10);
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setHeight(48);
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setWidth(48);
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName(("" + eventsFunctionContext.getArgument("Type")));
}
}
}

}


};

gdjs.evtsExt__Player__CreateBonus.func = function(runtimeScene, Bonus, PositionX, PositionY, Type, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
"Bonus": Bonus
},
  _objectArraysMap: {
"Bonus": gdjs.objectsListsToArray(Bonus)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Player"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Player"),
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
if (argName === "PositionX") return PositionX;
if (argName === "PositionY") return PositionY;
if (argName === "Type") return Type;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1.length = 0;
gdjs.evtsExt__Player__CreateBonus.GDBonusObjects2.length = 0;

gdjs.evtsExt__Player__CreateBonus.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__CreateBonus.GDBonusObjects1.length = 0;
gdjs.evtsExt__Player__CreateBonus.GDBonusObjects2.length = 0;


return;
}

gdjs.evtsExt__Player__CreateBonus.registeredGdjsCallbacks = [];