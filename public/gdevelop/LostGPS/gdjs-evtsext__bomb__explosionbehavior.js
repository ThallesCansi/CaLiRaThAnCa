
gdjs.evtsExt__Bomb__ExplosionBehavior = gdjs.evtsExt__Bomb__ExplosionBehavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior = class ExplosionBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.PlayerId = Number("0") || 0;
    this._behaviorData.DirectionX = Number("0") || 0;
    this._behaviorData.DirectionY = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.PlayerId !== newBehaviorData.PlayerId)
      this._behaviorData.PlayerId = newBehaviorData.PlayerId;
    if (oldBehaviorData.DirectionX !== newBehaviorData.DirectionX)
      this._behaviorData.DirectionX = newBehaviorData.DirectionX;
    if (oldBehaviorData.DirectionY !== newBehaviorData.DirectionY)
      this._behaviorData.DirectionY = newBehaviorData.DirectionY;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    PlayerId: this._behaviorData.PlayerId,
    DirectionX: this._behaviorData.DirectionX,
    DirectionY: this._behaviorData.DirectionY,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.PlayerId !== undefined)
      this._behaviorData.PlayerId = networkSyncData.props.PlayerId;
    if (networkSyncData.props.DirectionX !== undefined)
      this._behaviorData.DirectionX = networkSyncData.props.DirectionX;
    if (networkSyncData.props.DirectionY !== undefined)
      this._behaviorData.DirectionY = networkSyncData.props.DirectionY;
  }

  // Properties:
  
  _getPlayerId() {
    return this._behaviorData.PlayerId !== undefined ? this._behaviorData.PlayerId : Number("0") || 0;
  }
  _setPlayerId(newValue) {
    this._behaviorData.PlayerId = newValue;
  }
  _getDirectionX() {
    return this._behaviorData.DirectionX !== undefined ? this._behaviorData.DirectionX : Number("0") || 0;
  }
  _setDirectionX(newValue) {
    this._behaviorData.DirectionX = newValue;
  }
  _getDirectionY() {
    return this._behaviorData.DirectionY !== undefined ? this._behaviorData.DirectionY : Number("0") || 0;
  }
  _setDirectionY(newValue) {
    this._behaviorData.DirectionY = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.SharedData = class ExplosionBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Bomb_ExplosionBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Bomb_ExplosionBehaviorSharedData = new gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Bomb_ExplosionBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("LifeTime");
}
}
}

}


};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext = {};
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPlayerId(eventsFunctionContext.getArgument("PlayerId"));
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionX(eventsFunctionContext.getArgument("DirectionX"));
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDirectionY(eventsFunctionContext.getArgument("DirectionY"));
}
}
}

}


};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.Inizialize = function(PlayerId, DirectionX, DirectionY, parentEventsFunctionContext) {

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
if (argName === "PlayerId") return PlayerId;
if (argName === "DirectionX") return DirectionX;
if (argName === "DirectionY") return DirectionY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.InizializeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("LifeTime") > 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext = {};
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("LifeTime") > 0) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1[k] = gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreated = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.HasJustBeenCreatedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext = {};
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlayerId();}
}

}


};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerId = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.PlayerIdContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext = {};
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionX();}
}

}


};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionX = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionXContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext = {};
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDirectionY();}
}

}


};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionY = function(parentEventsFunctionContext) {

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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior.prototype.DirectionYContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}


gdjs.registerBehavior("Bomb::ExplosionBehavior", gdjs.evtsExt__Bomb__ExplosionBehavior.ExplosionBehavior);
