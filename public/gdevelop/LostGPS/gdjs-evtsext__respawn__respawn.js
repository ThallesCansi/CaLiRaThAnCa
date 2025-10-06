
gdjs.evtsExt__Respawn__Respawn = gdjs.evtsExt__Respawn__Respawn || {};

/**
 * Behavior generated from Respawn
 */
gdjs.evtsExt__Respawn__Respawn.Respawn = class Respawn extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Respawn__Respawn.Respawn.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.InvincibilityTime = behaviorData.InvincibilityTime !== undefined ? behaviorData.InvincibilityTime : Number("5") || 0;
    this._behaviorData.OriginX = Number("0") || 0;
    this._behaviorData.OriginY = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.InvincibilityTime !== newBehaviorData.InvincibilityTime)
      this._behaviorData.InvincibilityTime = newBehaviorData.InvincibilityTime;
    if (oldBehaviorData.OriginX !== newBehaviorData.OriginX)
      this._behaviorData.OriginX = newBehaviorData.OriginX;
    if (oldBehaviorData.OriginY !== newBehaviorData.OriginY)
      this._behaviorData.OriginY = newBehaviorData.OriginY;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    InvincibilityTime: this._behaviorData.InvincibilityTime,
    OriginX: this._behaviorData.OriginX,
    OriginY: this._behaviorData.OriginY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.InvincibilityTime !== undefined)
      this._behaviorData.InvincibilityTime = networkSyncData.props.InvincibilityTime;
    if (networkSyncData.props.OriginX !== undefined)
      this._behaviorData.OriginX = networkSyncData.props.OriginX;
    if (networkSyncData.props.OriginY !== undefined)
      this._behaviorData.OriginY = networkSyncData.props.OriginY;
  }

  // Properties:
  
  _getInvincibilityTime() {
    return this._behaviorData.InvincibilityTime !== undefined ? this._behaviorData.InvincibilityTime : Number("5") || 0;
  }
  _setInvincibilityTime(newValue) {
    this._behaviorData.InvincibilityTime = newValue;
  }
  _getOriginX() {
    return this._behaviorData.OriginX !== undefined ? this._behaviorData.OriginX : Number("0") || 0;
  }
  _setOriginX(newValue) {
    this._behaviorData.OriginX = newValue;
  }
  _getOriginY() {
    return this._behaviorData.OriginY !== undefined ? this._behaviorData.OriginY : Number("0") || 0;
  }
  _setOriginY(newValue) {
    this._behaviorData.OriginY = newValue;
  }
}

/**
 * Shared data generated from Respawn
 */
gdjs.evtsExt__Respawn__Respawn.Respawn.SharedData = class RespawnSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Respawn__Respawn.Respawn.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Respawn_RespawnSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Respawn_RespawnSharedData = new gdjs.evtsExt__Respawn__Respawn.Respawn.SharedData(
      initialData
    );
  }
  return instanceContainer._Respawn_RespawnSharedData;
}

// Methods:
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginX((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginY((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1[i].getY()));
}
}
}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreated = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Respawn"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Respawn"),
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

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects2= [];


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1[i].setPosition(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginX(),eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getOriginY());
}
}
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1[i].resetTimer("Invincible");
}
}
}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.Respawn = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Respawn"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Respawn"),
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

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.RespawnContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects2= [];


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Invincible") >= 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1[k] = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincible = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Respawn"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Respawn"),
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

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.IsInvincibleContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Invincible") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getInvincibilityTime() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1[i].removeTimer("Invincible");
}
}
}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Respawn"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Respawn"),
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

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginX((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getX()));
}
}
{for(var i = 0, len = gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setOriginY((gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1[i].getY()));
}
}
}

}


};

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Respawn"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Respawn"),
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

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Respawn__Respawn.Respawn.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Respawn::Respawn", gdjs.evtsExt__Respawn__Respawn.Respawn);
