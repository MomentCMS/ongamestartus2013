THREE.RenderPass=function(a,c,b,e,d){this.scene=a;this.camera=c;this.overrideMaterial=b;this.clearColor=e;this.clearAlpha=d!==void 0?d:1;this.oldClearColor=new THREE.Color;this.oldClearAlpha=1;this.clear=this.enabled=!0;this.needsSwap=!1};
THREE.RenderPass.prototype={render:function(a,c,b){this.scene.overrideMaterial=this.overrideMaterial;if(this.clearColor)this.oldClearColor.copy(a.getClearColor()),this.oldClearAlpha=a.getClearAlpha(),a.setClearColor(this.clearColor,this.clearAlpha);a.render(this.scene,this.camera,b,this.clear);this.clearColor&&a.setClearColor(this.oldClearColor,this.oldClearAlpha);this.scene.overrideMaterial=null}};
