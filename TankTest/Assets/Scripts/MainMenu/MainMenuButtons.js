﻿import UnityEngine.SceneManagement;
import UnityEngine.Debug;
function LoadDesertScene()
 {
     Application.LoadLevel(1);
 }
 function LoadCityScene()
 {
     Application.LoadLevel(2);
 }
 function LoadLeague()
 {
 	Application.LoadLevel(3);
 }
function QuitGame() {
     EditorApplication.isPlaying = false;

	Application.Quit();
}