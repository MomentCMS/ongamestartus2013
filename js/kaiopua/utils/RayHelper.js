(function(t){function w(b,e){var d,a=B,c=C,f=D;f.origin.copy(b.origin);f.direction.copy(b.direction);f.near=b.near;f.far=b.far;f.precision=b.precision;if(e instanceof THREE.Mesh)d=e.matrixWorld,a.extractPosition(d),a.extractRotation(d),c.getInverse(a),c.multiplyVector3(f.origin),c.rotateAxis(f.direction);return f}function $(b,e){return b.distance-e.distance}function E(b){if(!(b instanceof q.Collider))if(b instanceof q.Instance)return b.collider;else if(b.rigidBody instanceof q.Instance)return b.rigidBody.collider;
else if(b.object&&b.object.rigidBody instanceof q.Instance)return b.object.rigidBody.collider;return b}function aa(b){var e,d,a,c,f,h,g=F,m=G,j,i=H,l,k,p,n;e=I;d=J;var o,q,r,u=[],s,v,b=b||{};j=t.is_array(b.offsets)&&b.offsets.length>0?b.offsets:[i];k=t.to_array(b.objects).slice(0);n=t.to_array(b.colliders).slice(0);o=t.to_array(b.octrees);q=b.hierarchySearch;r=b.hierarchyIntersect;a=b.camera;c=b.pointer;i=b.ignore;typeof c!=="undefined"&&typeof a!=="undefined"?(e.x=c.x/K.screenWidth*2-1,e.y=-(c.y/
K.screenHeight)*2+1,e.z=0.5,d.unprojectVector(e,a),m.copy(a.position),g.direction.copy(e.subSelf(a.position))):(m.copy(b.origin||b.ray.origin),g.direction.copy(b.direction||b.ray.direction));g.direction.normalize();g.far=t.is_number(b.far)&&b.far>0?b.far:Number.MAX_VALUE;for(e=0,d=j.length;e<d;e++){a=j[e];g.origin.copy(m).addSelf(a);l=k.slice(0);if(l.length>0){if(q!==!1)if(r===!0)l=x.extract_children_from_objects(l,l);else for(a=0,c=l.length;a<c;a++){p=l[a];f=x.extract_children_from_objects(p);s=
L(g,f);for(f=0,h=s.length;f<h;f++)s[f].ancestor=p;u=u.concat(s)}u=u.concat(L(g,l))}l=n.slice(0);for(a=0,c=o.length;a<c;a++)l=l.concat(o[a].search(g.origin,g.far,!0,g.direction));l.length>0&&(u=u.concat(ba(g,l)))}u.sort($);if(b.allIntersections===!0)return u;else{if(t.is_array(i))for(e=0,d=u.length;e<d;e++){if(g=u[e],m=g.object||g.mesh,t.index_of_value(i,m)===-1){v=g;break}}else v=u[0];b.objectOnly===!0&&v&&(v=r!==!0&&v.ancestor?v.ancestor:v.object);return v}}function L(b,e){var d,a,c=[],f;for(d=0,
a=e.length;d<a;d++)f=e[d],f=y(b,f),f.distance<Number.MAX_VALUE&&c.push(f);return c}function ba(b,e){var d,a,c=[],f;for(d=0,a=e.length;d<a;d++)f=ca(b,e[d]),f.distance<Number.MAX_VALUE&&c.push(f);return c}function ca(b,e){var d,a=E(e);if(a instanceof q.PlaneCollider){var c=b.direction.dot(a.normal),f=a.point.dot(a.normal);d={object:a.rigidBody.object,distance:Number.MAX_VALUE,normal:new THREE.Vector3,point:new THREE.Vector3};if(c<0&&(c=(f-b.origin.dot(a.normal))/c,c>0))d.distance=c,d.normal.copy(a.normal),
d.point.copy(b.direction).multiplyScalar(d.distance).addSelf(b.origin);return d}else if(a instanceof q.SphereCollider){d=M.sub(a.center,b.origin);var h=d.lengthSq(),c={object:a.rigidBody.object,distance:Number.MAX_VALUE,normal:new THREE.Vector3,point:new THREE.Vector3};if(h<a.radiusSq)c.distance=-1;else if(f=d.dot(b.direction.clone()),!(f<=0)&&(a=a.radiusSq-(h-f*f),a>=0&&(a=Math.abs(f)-Math.sqrt(a),a<=b.far)))c.distance=a,c.normal.copy(d).multiplyScalar(-1).normalize(),c.point.copy(b.direction).multiplyScalar(c.distance).addSelf(b.origin);
return c}else return a instanceof q.BoxCollider?N(b,a):a instanceof q.MeshCollider?(d=N(b,a.box),d.distance<Number.MAX_VALUE&&(d=y(b,e,a)),d):y(b,e,a)}function N(b,e){var d=e.rigidBody.object,a=w(b,d),c=O.copy(e.min),f=P.copy(e.max),h=a.origin,g=a.direction,m=a.far,j,i,l,k=0,p=0,n=0;l=i=j=0;var o=!0,a={object:d,distance:Number.MAX_VALUE,normal:new THREE.Vector3,point:new THREE.Vector3};if(typeof d!=="undefined")d=d.scale,c.multiplySelf(d),f.multiplySelf(d);if(h.x<c.x){k=c.x-h.x;k/=g.x;if(k>m)return a;
o=!1;j=-1}else if(h.x>f.x){k=f.x-h.x;k/=g.x;if(k>m)return a;o=!1;j=1}if(h.y<c.y){p=c.y-h.y;p/=g.y;if(p>m)return a;o=!1;i=-1}else if(h.y>f.y){p=f.y-h.y;p/=g.y;if(p>m)return a;o=!1;i=1}if(h.z<c.z){n=c.z-h.z;n/=g.z;if(n>m)return a;o=!1;l=-1}else if(h.z>f.z){n=f.z-h.z;n/=g.z;if(n>m)return a;o=!1;l=1}d=0;p>k&&(d=1,k=p);n>k&&(d=2,k=n);if(o)return a.distance=-1,a.point.sub(f,c),a;if(d===0){i=h.y+g.y*k;if(i<c.y||i>f.y)return a;l=h.z+g.z*k;if(l<c.z||l>f.z)return a;a.normal.set(j,0,0);a.point.set(h.x+g.x*k,
i,l)}else if(d===1){j=h.x+g.x*k;if(j<c.x||j>f.x)return a;l=h.z+g.z*k;if(l<c.z||l>f.z)return a;a.normal.set(0,i,0);a.point.set(j,h.y+g.y*k,l)}else if(d===2){j=h.x+g.x*k;if(j<c.x||j>f.x)return a;i=h.y+g.y*k;if(i<c.y||i>f.y)return a;a.normal.set(0,0,l);a.point.set(j,i,h.z+g.z*k)}a.distance=k;return a}function y(b,e,d){var a,c,f,h,g,m,j,i,l,k,p,n,o=Number.MAX_VALUE,s,r={distance:Number.MAX_VALUE,normal:new THREE.Vector3,point:new THREE.Vector3};if(d instanceof q.Collider)m=d.rigidBody;m instanceof q.Instance?
(d=m.object,j=m.geometry):(d=e.object||e,j=d.geometry);r.object=d;typeof e.faces!=="undefined"&&(i=t.to_array(e.faces));if(typeof i==="undefined"||i.length===0){i=d.matrixWorld instanceof THREE.Matrix4?d.matrixWorld.getMaxScaleOnAxis():1;i*=j.boundingSphere.radius;m=b.origin;c=b.direction;e=d.matrixWorld.getPosition();a=Q.sub(e,m).dot(c);m=R.add(m,S.copy(c).multiplyScalar(a));c=T.distance_between(m,e);if(c>i)return r;i=j.faces}e=j.vertices;m=d.material instanceof THREE.MeshFaceMaterial;j=m===!0?j.materials:
null;p=w(b,d);for(b=0,a=i.length;b<a;b++){k=i[b];c=m===!0?j[k.materialIndex]:d.material;if(typeof c!=="undefined")l=c.side;c=e[k.a];f=e[k.b];h=e[k.c];k instanceof THREE.Face4?(g=e[k.d],n=z(p,c,f,g,o,l),c=n.distance,c<o&&(o=c,s=k,r.normal.copy(n.normal),r.point.copy(n.point)),n=z(p,f,h,g,o,l)):n=z(p,c,f,h,o,l,k.normal);c=n.distance;c<o&&(o=c,s=k,r.normal.copy(n.normal),r.point.copy(n.point))}r.distance=o;r.face=s;r.normal.normalize();return r}function z(b,e,d,a,c,f,h){var g=U,m=V,j=b.origin,i=b.direction;
typeof h==="undefined"?(g.sub(d,e),m.sub(a,d),h=A.cross(g,m)):h=A.copy(h);f===THREE.BackSide&&h.multiplyScalar(-1);g=i.dot(h);if(!(g<0))if(f===THREE.DoubleSide)h.multiplyScalar(-1),g*=-1;else return{distance:Number.MAX_VALUE};f=h.dot(e);m=j.dot(h);f-=m;if(f>0||f<g*b.far||f<g*c)return{distance:Number.MAX_VALUE};f/=g;b=W.copy(i).multiplyScalar(f).addSelf(j);a=X.sub(a,e);c=Y.sub(d,e);i=Z.sub(b,e);e=a.dot(a);d=a.dot(c);a=a.dot(i);j=c.dot(c);c=c.dot(i);i=1/(e*j-d*d);j=(j*a-d*c)*i;j<-0.01||j>1.01?e=!0:
(e=(e*c-d*a)*i,e=e<-0.01||e>1.01||j+e>1.01);return e?{distance:Number.MAX_VALUE}:{distance:f,point:b,normal:h}}var K=t.shared=t.shared||{},s={},q,T,x,F,D,J,B,C,O,P,G,H,I,Q,R,S,X,Y,Z,M,U,V,A,W;t.asset_register("js/kaiopua/utils/RayHelper.js",{data:s,requirements:["js/kaiopua/physics/RigidBody.js","js/kaiopua/utils/MathHelper.js","js/kaiopua/utils/VectorHelper.js","js/kaiopua/utils/SceneHelper.js"],callbacksOnReqs:function(b,e,d,a){q=b;T=d;x=a;F=new THREE.Ray;D=new THREE.Ray;J=new THREE.Projector;B=
new THREE.Matrix4;C=new THREE.Matrix4;O=new THREE.Vector3;P=new THREE.Vector3;G=new THREE.Vector3;H=new THREE.Vector3;I=new THREE.Vector3;Q=new THREE.Vector3;R=new THREE.Vector3;S=new THREE.Vector3;X=new THREE.Vector3;Y=new THREE.Vector3;Z=new THREE.Vector3;M=new THREE.Vector3;U=new THREE.Vector3;V=new THREE.Vector3;A=new THREE.Vector3;W=new THREE.Vector3;s.extract_collider=E;s.localize_ray=w;s.raycast=aa},wait:!0})})(KAIOPUA);
