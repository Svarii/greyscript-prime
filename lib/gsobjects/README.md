# System Object

<img src="https://github.com/user-attachments/assets/27f290d4-4544-4912-bfc5-74d68102cd41" align="left">

![image](https://github.com/user-attachments/assets/be2cf4f9-2b85-42b9-a527-379c5ea6cefa)

```greyscript
terminal = get_system_object
print typeof(terminal)  //Outputs: SystemObject      
print terminal.computer.get_name  //Outputs: The name of the computer       
print terminal.shell.launch("ls")  //Outputs: launches ls
```

---

# Port Memory Object
<img src="https://github.com/user-attachments/assets/c83516d7-c441-4ff8-ac05-6420022a51d8" align="left">

```greyscript
portScan = get_memory_portscan
print typeof(portScan)  //Outputs: PortMemory      
```

![image](https://github.com/user-attachments/assets/84f36c7e-f435-4713-9aec-151e80f58c45)




# Local Environment Object

<img src="https://github.com/user-attachments/assets/8db4f6b6-7563-4821-acc5-0e26914aefba" align="left">

```greyscript
iScan = new idSelf
print typeof(iScan)  //Outputs: idSelf
	  
print iScan.name  //Outputs: The name of the computer
print iScan.hasInternet  //Outputs: boolean 1 or 0
```

![image](https://github.com/user-attachments/assets/2c127c89-388b-4ba9-ba63-af96366af63a)





