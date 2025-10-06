
gdjs.evtsExt__Player__PlayerBehavior = gdjs.evtsExt__Player__PlayerBehavior || {};

/**
 * Behavior generated from Player behavior
 */
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior = class PlayerBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Id = behaviorData.Id !== undefined ? behaviorData.Id : Number("1") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Id !== newBehaviorData.Id)
      this._behaviorData.Id = newBehaviorData.Id;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Id: this._behaviorData.Id,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Id !== undefined)
      this._behaviorData.Id = networkSyncData.props.Id;
  }

  // Properties:
  
  _getId() {
    return this._behaviorData.Id !== undefined ? this._behaviorData.Id : Number("1") || 0;
  }
  _setId(newValue) {
    this._behaviorData.Id = newValue;
  }
}

/**
 * Shared data generated from Player behavior
 */
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.SharedData = class PlayerBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Player_PlayerBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Player_PlayerBehaviorSharedData = new gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Player_PlayerBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetPowers(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Bonus"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[i].getVariableNumber(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[i].getVariables().get("Type")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[k] = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bonus"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[i].getVariableNumber(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[i].getVariables().get("Type")) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[k] = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length = k;
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
}

}


{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("NewBonusIndex", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bonus"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1);
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber((gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1[0].getVariables()).get("Bonus"))));
}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1[i].getVariables().get("Bonus").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Number")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[0].getVariables()).get("Type"))));
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1[i].getVariables().get("Bonus").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("X")).setNumber((( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[0].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1[i].getVariables().get("Bonus").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Y")).setNumber((( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[0].getY()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1[i].deleteFromScene(runtimeScene);
}
}
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonus = function(Bonus, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bonus": Bonus
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bonus": gdjs.objectsListsToArray(Bonus)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PickUpBonusContext.GDBonusObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546GiveBackBonusesContext_9546GDBonusObjects2Objects = Hashtable.newFrom({"Bonus": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects2});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1);

const repeatCount2 = (gdjs.RuntimeObject.getVariableChildCount(((gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1[0].getVariables()).get("Bonus")));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Bonus"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects2);
gdjs.copyArray(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1, gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2);


let isConditionTrue_0 = false;
if (true)
{
{gdjs.evtsExt__Player__CreateBonus.func(runtimeScene, gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546GiveBackBonusesContext_9546GDBonusObjects2Objects, (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2[0].getVariables()).get("Bonus").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("X"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2[0].getVariables()).get("Bonus").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Y"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2[0].getVariables()).get("Bonus").getChild(eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber()).getChild("Number"))), eventsFunctionContext);
}
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(1);
}
}
}

}


};gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetPowers(eventsFunctionContext);
}
}
}

}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("Iteration", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1[i].variableClearChildren(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1[i].getVariables().get("Bonus"));
}
}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonuses = function(Bonus, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bonus": Bonus
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bonus": gdjs.objectsListsToArray(Bonus)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.GiveBackBonusesContext.GDBonusObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{/* Unknown instruction - skipped. */}
{/* Unknown instruction - skipped. */}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowers = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.ResetPowersContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bomb"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDObjectObjects1Objects, gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDBombObjects1Objects, 59, true);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i].getVariableBoolean(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i].getVariables().get("IsOverlaping").getChild(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[k] = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i].variableRemoveChild(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i].getVariables().get("IsOverlaping"), ("" + eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bomb"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDObjectObjects1Objects, gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDBombObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i].getVariableBoolean(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i].getVariables().get("IsOverlaping").getChild(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()), true)) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[k] = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1 */
/* Reuse gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1[i].separateFromObjectsList(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546SeparateFromBombContext_9546GDBombObjects1Objects, false);
}
}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBomb = function(Bomb, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bomb": Bomb
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bomb": gdjs.objectsListsToArray(Bomb)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SeparateFromBombContext.GDBombObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects3= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects3= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546CanPutBombContext_9546GDBombObjects2Objects = Hashtable.newFrom({"Bomb": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Bomb"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("BombBehavior")).PlayerId(eventsFunctionContext) == eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2[k] = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(gdjs.evtTools.object.getPickedInstancesCount(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546CanPutBombContext_9546GDBombObjects2Objects));
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Bomb"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() < 0);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1[i].isCollidingWithPoint(Math.round((( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1[0].getX()) / 48) * 48 + 24, Math.round((( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1[0].getY()) / 48) * 48 + 24) ) {
        isConditionTrue_1 = true;
        gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1[k] = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1.length = k;
isConditionTrue_0 = !isConditionTrue_1;
}
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(0);
variables._declare("OwnedBombCount", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBomb = function(Bomb, BombBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bomb": Bomb
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bomb": gdjs.objectsListsToArray(Bomb)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "BombBehavior": BombBehavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects3.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.CanPutBombContext.GDBombObjects3.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546PutBombContext_9546GDBombObjects1Objects = Hashtable.newFrom({"Bomb": gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1});
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.mapOfGDgdjs_9546evtsExt_9595_9595Player_9595_9595PlayerBehavior_9546PlayerBehavior_9546prototype_9546PutBombContext_9546GDBombObjects1Objects, Math.round((( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1[0].getX()) / 48) * 48, Math.round((( gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1[0].getY()) / 48) * 48, "");
}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1[i].setZOrder((gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1[i].getY()) + 10);
}
}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("BombBehavior")).Initialize(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId(), 0, eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBomb = function(Bomb, BombBehavior, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bomb": Bomb
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bomb": gdjs.objectsListsToArray(Bomb)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "BombBehavior": BombBehavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.PutBombContext.GDBombObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDObjectObjects2= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Bomb"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects1);
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects1[i].setVariableBoolean(gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects1[i].getVariables().get("IsOverlaping").getChild(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId()), true);
}
}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBomb = function(Bomb, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Bomb": Bomb
},
  _objectArraysMap: {
"Object": thisObjectList
, "Bomb": gdjs.objectsListsToArray(Bomb)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.AllowToWalkOnBombContext.GDBombObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getId();}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.Id = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IdContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = 0;}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacity = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombCapacityContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects1);
{/* Unknown instruction - skipped. */}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetPowers(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacity = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombCapacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = 0;}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRange = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.InitialBombRangeContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects1);
{/* Unknown instruction - skipped. */}
{for(var i = 0, len = gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).ResetPowers(eventsFunctionContext);
}
}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRange = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetInitialBombRangeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
/* Unknown instruction - skipped. */if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDead = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.IsDeadContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !!eventsFunctionContext.getArgument("Value");
}
if (isConditionTrue_0) {
{/* Unknown instruction - skipped. */}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDead = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.SetIsDeadContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext = {};
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.GDObjectObjects1= [];
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.GDObjectObjects2= [];


gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.Function = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.FunctionContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Player::PlayerBehavior", gdjs.evtsExt__Player__PlayerBehavior.PlayerBehavior);
