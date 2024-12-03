// @startuml
// package Computer {
// object FileSystem
// }
// package BinPkg {
// map BinMap {
// binB *-> Computer.FileSystem
// }
// }
// package UsrPkg {
// map UsrBinMap {
// usrBinB *-> Computer.FileSystem
// }
// map UsrLibMap {
// usrLibL *-> Computer.FileSystem
// }
// map UsrShareMap {
// usrShareS =>
// }
// }
// package EtcPkg {
// map ConfigMap {
// etcConfigC =>
// }
// }
// package VarPkg {
// map LogMap {
// varLogL =>
// }
// map TmpMap {
// varTmpT =>
// }
// map VarLibMap {
// varLibL *-> Computer.FileSystem
// }
// }
// package HomePkg {
// map User1Map {
// homeUser1U1 =>
// }
// map User2Map {
// homeUser2U2 =>
// }
// }
// package TmpPkg {
// map SessionMap {
// tmpSessionS =>
// }
// }
// package DevPkg {
// map DevicesMap {
// devDevicesD =>
// }
// }
// package ProcPkg {
// map InfoMap {
// procInfoI =>
// }
// }
// package SysPkg {
// map KernelMap {
// sysKernelK =>
// }
// }
// package LibPkg {
// map ModulesMap {
// libModulesM =>
// }
// }
// Computer.FileSystem *-> BinPkg.BinMap
// Computer.FileSystem *-> UsrPkg.UsrBinMap
// Computer.FileSystem *-> UsrPkg.UsrLibMap
// Computer.FileSystem *-> UsrPkg.UsrShareMap
// Computer.FileSystem *-> EtcPkg.ConfigMap
// Computer.FileSystem *-> VarPkg.LogMap
// Computer.FileSystem *-> VarPkg.TmpMap
// Computer.FileSystem *-> VarPkg.VarLibMap
// Computer.FileSystem *-> HomePkg.User1Map
// Computer.FileSystem *-> HomePkg.User2Map
// Computer.FileSystem *-> TmpPkg.SessionMap
// Computer.FileSystem *-> DevPkg.DevicesMap
// Computer.FileSystem *-> ProcPkg.InfoMap
// Computer.FileSystem *-> SysPkg.KernelMap
// Computer.FileSystem *-> LibPkg.ModulesMap
// @enduml
