
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle || {};

/**
 * Behavior generated from Top-down corner slider obstacle
 */
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle = class TopDownCornerSliderObstacle extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.SlidingCornerSize = behaviorData.SlidingCornerSize !== undefined ? behaviorData.SlidingCornerSize : Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.SlidingCornerSize !== newBehaviorData.SlidingCornerSize)
      this._behaviorData.SlidingCornerSize = newBehaviorData.SlidingCornerSize;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    SlidingCornerSize: this._behaviorData.SlidingCornerSize,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.SlidingCornerSize !== undefined)
      this._behaviorData.SlidingCornerSize = networkSyncData.props.SlidingCornerSize;
  }

  // Properties:
  
  _getSlidingCornerSize() {
    return this._behaviorData.SlidingCornerSize !== undefined ? this._behaviorData.SlidingCornerSize : Number("0") || 0;
  }
  _setSlidingCornerSize(newValue) {
    this._behaviorData.SlidingCornerSize = newValue;
  }
}

/**
 * Shared data generated from Top-down corner slider obstacle
 */
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.SharedData = class TopDownCornerSliderObstacleSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TopDownCornerSliding_TopDownCornerSliderObstacleSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TopDownCornerSliding_TopDownCornerSliderObstacleSharedData = new gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.SharedData(
      initialData
    );
  }
  return instanceContainer._TopDownCornerSliding_TopDownCornerSliderObstacleSharedData;
}

// Methods:
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext = {};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.userFunc0x969858 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

const obstacle = new gdjs.__topDownCornerSlidingExtension.Obstacle(runtimeScene, behavior)
behavior.__topDownCornerSlidingExtension = { obstacle };
obstacle.onCreated(runtimeScene, behavior);

};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__TopDownCornerSliding__DefineJavaScriptForTopDown.func(runtimeScene, eventsFunctionContext);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.userFunc0x969858(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreated = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownCornerSliding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownCornerSliding"),
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

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.GDObjectObjects1= [];


gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.userFunc0xcbbc38 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__topDownCornerSlidingExtension.obstacle.doStepPreEvents(runtimeScene);

};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.GDObjectObjects1;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.userFunc0xcbbc38(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownCornerSliding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownCornerSliding"),
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

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext = {};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.GDObjectObjects1= [];


gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.userFunc0xcbbc40 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__topDownCornerSlidingExtension.obstacle.onActivate(runtimeScene);

};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.GDObjectObjects1;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.userFunc0xcbbc40(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivate = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownCornerSliding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownCornerSliding"),
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

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onActivateContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext = {};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.GDObjectObjects1= [];


gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.userFunc0x12c0818 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__topDownCornerSlidingExtension.obstacle.onDeActivate(runtimeScene);

};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.GDObjectObjects1;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.userFunc0x12c0818(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivate = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownCornerSliding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownCornerSliding"),
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

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDeActivateContext.GDObjectObjects1.length = 0;


return;
}
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext = {};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.GDObjectObjects1= [];


gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.userFunc0x921c90 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

behavior.__topDownCornerSlidingExtension.obstacle.onDestroy(runtimeScene);

};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.GDObjectObjects1;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.userFunc0x921c90(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroy = function(parentEventsFunctionContext) {

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
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("TopDownCornerSliding"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("TopDownCornerSliding"),
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

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle.prototype.onDestroyContext.GDObjectObjects1.length = 0;


return;
}


gdjs.registerBehavior("TopDownCornerSliding::TopDownCornerSliderObstacle", gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSliderObstacle.TopDownCornerSliderObstacle);
