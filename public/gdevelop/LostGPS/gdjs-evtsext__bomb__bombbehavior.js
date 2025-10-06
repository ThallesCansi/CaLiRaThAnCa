
gdjs.evtsExt__Bomb__BombBehavior = gdjs.evtsExt__Bomb__BombBehavior || {};

/**
 * Behavior generated from 
 */
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior = class BombBehavior extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Delay = behaviorData.Delay !== undefined ? behaviorData.Delay : Number("3") || 0;
    this._behaviorData.PlayerId = Number("0") || 0;
    this._behaviorData.ExplosionRange = Number("2") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Delay !== newBehaviorData.Delay)
      this._behaviorData.Delay = newBehaviorData.Delay;
    if (oldBehaviorData.PlayerId !== newBehaviorData.PlayerId)
      this._behaviorData.PlayerId = newBehaviorData.PlayerId;
    if (oldBehaviorData.ExplosionRange !== newBehaviorData.ExplosionRange)
      this._behaviorData.ExplosionRange = newBehaviorData.ExplosionRange;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Delay: this._behaviorData.Delay,
    PlayerId: this._behaviorData.PlayerId,
    ExplosionRange: this._behaviorData.ExplosionRange,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Delay !== undefined)
      this._behaviorData.Delay = networkSyncData.props.Delay;
    if (networkSyncData.props.PlayerId !== undefined)
      this._behaviorData.PlayerId = networkSyncData.props.PlayerId;
    if (networkSyncData.props.ExplosionRange !== undefined)
      this._behaviorData.ExplosionRange = networkSyncData.props.ExplosionRange;
  }

  // Properties:
  
  _getDelay() {
    return this._behaviorData.Delay !== undefined ? this._behaviorData.Delay : Number("3") || 0;
  }
  _setDelay(newValue) {
    this._behaviorData.Delay = newValue;
  }
  _getPlayerId() {
    return this._behaviorData.PlayerId !== undefined ? this._behaviorData.PlayerId : Number("0") || 0;
  }
  _setPlayerId(newValue) {
    this._behaviorData.PlayerId = newValue;
  }
  _getExplosionRange() {
    return this._behaviorData.ExplosionRange !== undefined ? this._behaviorData.ExplosionRange : Number("2") || 0;
  }
  _setExplosionRange(newValue) {
    this._behaviorData.ExplosionRange = newValue;
  }
}

/**
 * Shared data generated from 
 */
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.SharedData = class BombBehaviorSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Bomb_BombBehaviorSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Bomb_BombBehaviorSharedData = new gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.SharedData(
      initialData
    );
  }
  return instanceContainer._Bomb_BombBehaviorSharedData;
}

// Methods:
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext = {};
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects1[i].resetTimer("Detonator");
}
}
}

}


};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreated = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext = {};
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPlayerId(eventsFunctionContext.getArgument("PlayerId"));
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setExplosionRange(eventsFunctionContext.getArgument("Range"));
}
}
}

}


};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.Initialize = function(PlayerId, Range, parentEventsFunctionContext) {

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
if (argName === "Range") return Range;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.InitializeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext = {};
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1[i].getTimerElapsedTimeInSecondsOrNaN("Detonator") >= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDelay() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1[k] = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplode = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.IsReadyToExplodeContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext = {};
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects2= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects2= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects2= [];


gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects, (( gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1[0].getX()), (( gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1[0].getY()), "");
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1[i].setZOrder((gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1[i].getPointY("")) + 12);
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("ExplosionBehavior")).Inizialize(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlayerId(), 0, 0, eventsFunctionContext);
}
}
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Explosion"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateExplosionArm(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects, eventsFunctionContext.getBehaviorName("ExplosionBehavior"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects, 0, 1, 0, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateExplosionArm(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects, eventsFunctionContext.getBehaviorName("ExplosionBehavior"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects, 180, -(1), 0, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateExplosionArm(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects, eventsFunctionContext.getBehaviorName("ExplosionBehavior"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects, 90, 0, 1, eventsFunctionContext);
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior")).CreateExplosionArm(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDExplosionObjects1Objects, eventsFunctionContext.getBehaviorName("ExplosionBehavior"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546ExplodeContext_9546GDObstacleObjects1Objects, -(90), 0, -(1), eventsFunctionContext);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}
}

}


};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.Explode = function(Explosion, ExplosionBehavior, Obstacle, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Explosion": Explosion
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Explosion": gdjs.objectsListsToArray(Explosion)
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects2.length = 0;

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDExplosionObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.ExplodeContext.GDObstacleObjects2.length = 0;


return;
}
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext = {};
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects3= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects4= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects4= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects2= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects3= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects4= [];


gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546CreateExplosionArmContext_9546GDExplosionObjects2Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546CreateExplosionArmContext_9546GDExplosionObjects3Objects = Hashtable.newFrom({"Explosion": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546CreateExplosionArmContext_9546GDObstacleObjects3Objects = Hashtable.newFrom({"Obstacle": gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects3});
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() < eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExplosionRange());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2, gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3);

{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("ExplosionArm");
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3[i].setZOrder((gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3[i].getPointY("")) + 11);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() == eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExplosionRange());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2, gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3);

{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationName("ExplosionFinger");
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3[i].setZOrder((gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3[i].getPointY("")) + 10);
}
}
}

}


{



}


{

gdjs.copyArray(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2, gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3);

gdjs.copyArray(eventsFunctionContext.getObjects("Obstacle"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546CreateExplosionArmContext_9546GDExplosionObjects3Objects, gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546CreateExplosionArmContext_9546GDObstacleObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{eventsFunctionContext.localVariables[0].getFromIndex(0).setNumber(666);
}
}

}


{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.localVariables[0].getFromIndex(0).add(1);
}
}

}


};gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2.length = 0;

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber() <= eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getExplosionRange());
}
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{gdjs.evtTools.object.createObjectOnScene(eventsFunctionContext, gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.mapOfGDgdjs_9546evtsExt_9595_9595Bomb_9595_9595BombBehavior_9546BombBehavior_9546prototype_9546CreateExplosionArmContext_9546GDExplosionObjects2Objects, (( gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2[0].getX()) + eventsFunctionContext.getArgument("ExplosionDirectionX") * 48 * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), (( gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2[0].getY()) + eventsFunctionContext.getArgument("ExplosionDirectionY") * 48 * eventsFunctionContext.localVariables[0].getFromIndex(0).getAsNumber(), "");
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2[i].setAngle(eventsFunctionContext.getArgument("ExplosionDirection"));
}
}
{for(var i = 0, len = gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("ExplosionBehavior")).Inizialize(eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlayerId(), eventsFunctionContext.getArgument("ExplosionDirectionX"), eventsFunctionContext.getArgument("ExplosionDirectionY"), eventsFunctionContext);
}
}

{ //Subevents: 
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


};gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setNumber(1);
variables._declare("Iteration", variable);
}
eventsFunctionContext.localVariables.push(variables);
}
let isConditionTrue_0 = false;
{

{ //Subevents
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}
eventsFunctionContext.localVariables.pop();

}


};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArm = function(Explosion, ExplosionBehavior, Obstacle, ExplosionDirection, ExplosionDirectionX, ExplosionDirectionY, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
let scopeInstanceContainer = null;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "Explosion": Explosion
, "Obstacle": Obstacle
},
  _objectArraysMap: {
"Object": thisObjectList
, "Explosion": gdjs.objectsListsToArray(Explosion)
, "Obstacle": gdjs.objectsListsToArray(Obstacle)
},
  _behaviorNamesMap: {
"Behavior": Behavior
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
if (argName === "ExplosionDirection") return ExplosionDirection;
if (argName === "ExplosionDirectionX") return ExplosionDirectionX;
if (argName === "ExplosionDirectionY") return ExplosionDirectionY;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects4.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects3.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects4.length = 0;

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects3.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDExplosionObjects4.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects2.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects3.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.CreateExplosionArmContext.GDObstacleObjects4.length = 0;


return;
}
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext = {};
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.GDObjectObjects1= [];
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.GDObjectObjects2= [];


gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{eventsFunctionContext.returnValue = eventsFunctionContext.getObjects("Object")[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPlayerId();}
}

}


};

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerId = function(parentEventsFunctionContext) {

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

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.PlayerIdContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}

gdjs.evtsExt__Bomb__BombBehavior.BombBehavior.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("Bomb::BombBehavior", gdjs.evtsExt__Bomb__BombBehavior.BombBehavior);
