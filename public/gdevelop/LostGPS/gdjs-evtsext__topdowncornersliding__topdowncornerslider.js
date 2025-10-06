
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider || {};

/**
 * Behavior generated from Top-down corner slider
 */
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider = class TopDownCornerSlider extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.TopDownMovement = behaviorData.TopDownMovement !== undefined ? behaviorData.TopDownMovement : "";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.TopDownMovement !== newBehaviorData.TopDownMovement)
      this._behaviorData.TopDownMovement = newBehaviorData.TopDownMovement;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    TopDownMovement: this._behaviorData.TopDownMovement,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.TopDownMovement !== undefined)
      this._behaviorData.TopDownMovement = networkSyncData.props.TopDownMovement;
  }

  // Properties:
  
  _getTopDownMovement() {
    return this._behaviorData.TopDownMovement !== undefined ? this._behaviorData.TopDownMovement : "";
  }
  _setTopDownMovement(newValue) {
    this._behaviorData.TopDownMovement = newValue;
  }
}

/**
 * Shared data generated from Top-down corner slider
 */
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.SharedData = class TopDownCornerSliderSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._TopDownCornerSliding_TopDownCornerSliderSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._TopDownCornerSliding_TopDownCornerSliderSharedData = new gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.SharedData(
      initialData
    );
  }
  return instanceContainer._TopDownCornerSliding_TopDownCornerSliderSharedData;
}

// Methods:
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext = {};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects2= [];


gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.userFunc0xa438b8 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";

const object = objects[0];
const behaviorName = eventsFunctionContext.getBehaviorName("Behavior");
const behavior = object.getBehavior(behaviorName);

/** @type {gdjs.TopDownMovementRuntimeBehavior} */
const topDownBehavior = object.getBehavior(behavior._getTopDownMovement());

behavior.__topDownCornerSlidingExtension = {
    cornerSlider: new gdjs.__topDownCornerSlidingExtension.CornerSlider(runtimeScene, behavior, topDownBehavior)
};

};
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtsExt__TopDownCornerSliding__DefineJavaScriptForTopDown.func(runtimeScene, eventsFunctionContext);
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects1);

const objects = gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects1;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.userFunc0xa438b8(runtimeScene, objects, eventsFunctionContext);

}


};

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreated = function(parentEventsFunctionContext) {

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
, "TopDownMovement": this._getTopDownMovement()
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

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.onCreatedContext.GDObjectObjects2.length = 0;


return;
}

gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider.prototype.doStepPreEvents = function() {
  this._onceTriggers.startNewFrame();
};


gdjs.registerBehavior("TopDownCornerSliding::TopDownCornerSlider", gdjs.evtsExt__TopDownCornerSliding__TopDownCornerSlider.TopDownCornerSlider);
