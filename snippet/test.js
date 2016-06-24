'use strict';
var SkinnedMesh = function($__super) {
  function SkinnedMesh(geometry, materials) {
    $traceurRuntime.superConstructor(SkinnedMesh).call(this, geometry, materials);
    this.idMatrix = SkinnedMesh.defaultMatrix();
    this.bones = [];
    this.boneMatrices = [];
  }
  return ($traceurRuntime.createClass)(SkinnedMesh, {update: function(camera) {
      $traceurRuntime.superGet(this, SkinnedMesh.prototype, "update").call(this);
    }}, {defaultMatrix: function() {
      return new THREE.Matrix4();
    }}, $__super);
}(THREE.Mesh);
