/*
 *
 * Intro.js
 * Introduction section.
 *
 * @author Collin Hover / http://collinhover.com/
 *
 */
(function (main) {
    
    var shared = main.shared = main.shared || {},
		assetPath = "js/kaiopua/sections/Intro.js",
		_Intro = {},
		_Model,
		_Player,
		_ObjectHelper;
    
    /*===================================================
    
    public properties
    
    =====================================================*/
    
	main.asset_register( assetPath, { 
		data: _Intro,
		requirements: [
			"js/kaiopua/core/Model.js",
			"js/kaiopua/core/Player.js",
			"js/kaiopua/utils/ObjectHelper.js",
            { path: shared.pathToAssets + "spawn_main.js", type: 'model' },
            { path: shared.pathToAssets + "hero.js", type: 'model' }
		],
		callbacksOnReqs: init_internal,
		wait: true
	} );
	
	/*===================================================
    
    internal init
    
    =====================================================*/
	
	function init_internal ( m, pl, oh, gSpawnMain, gHero ) {
		console.log('internal intro', _Intro);
		
		// assets
		
		_Model = m;
		_Player = pl;
		_ObjectHelper = oh;
		
		// property
		
		_Intro.show = show;
		_Intro.hide = hide;
		_Intro.remove = remove;
		_Intro.update = update;
		
		// player
		
		var spawnMain =  new _Model.Instance( {
			geometry: gSpawnMain,
			center: true
		} );
		shared.spawns.main.copy( spawnMain.position );
		
		shared.player = new _Player.Instance( {
			geometry: gHero,
			material: new THREE.MeshFaceMaterial(),
			options: {
				animation: {
					names: {
						idleAlt: 'idle_alt'
					},
					durations: {
						idle: 600,
						idleAlt: 1500,
						jump: 600,
						jumpStart: 175,
						jumpEnd: 300
					}
				}
			}
		} );
		shared.player.controllable = true;
		
	}
    
    /*===================================================
    
    section functions
    
    =====================================================*/
    
    function show () {
		
		shared.sceneBG.add( shared.skybox );
		
		shared.world.show();
		
		shared.player.respawn( shared.scene, shared.spawns.main );
		
		_ObjectHelper.revert_change( shared.cameraControls.options, true );
		shared.cameraControls.target = shared.player;
		shared.cameraControls.enabled = true;
		shared.cameraControls.controllable = false;
		
		shared.signals.onGameUpdated.add( update );
        
    }
	
	function hide () {
        
        shared.signals.onGameUpdated.remove( update );
		
    }
    
    function remove () {
		
		shared.scene.remove( shared.player );
		
		shared.world.hide();
		
		shared.sceneBG.remove( shared.skybox );
        
    }
    
    function update () {
		
    }
    
} ( KAIOPUA ) );